#!/usr/bin/env node
// Gera as páginas de cada idioma a partir de _templates/ e dos dados de site.js.
// Uso: node tools/build-pages.js   (sem dependências)

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

// Se o site ganhar domínio próprio, basta mudar aqui e voltar a gerar.
const SITE_URL = "https://malmequerintimo.pt/";

const LANGUAGES = [
  { code: "pt", dir: "", htmlLang: "pt-PT", locale: "pt_PT", base: "" },
  { code: "es", dir: "es/", htmlLang: "es", locale: "es_ES", base: "../" },
  { code: "en", dir: "en/", htmlLang: "en", locale: "en_GB", base: "../" }
];

const PAGES = [
  { template: "index.html", slug: "", titleKey: "pageTitleHome", descKey: "pageDescHome", organization: true },
  { template: "catalogo.html", slug: "catalogo.html", titleKey: "pageTitleCatalog", descKey: "pageDescCatalog" }
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// Corre site.js com um documento mínimo, para usar os mesmos dados e cartões do browser.
function loadSite() {
  const dataset = { lang: "pt" };
  const body = { dataset: { base: "" } };
  const context = vm.createContext({
    window: {},
    navigator: { languages: [] },
    document: { addEventListener() {}, documentElement: { dataset }, body }
  });
  vm.runInContext(fs.readFileSync(path.join(ROOT, "site.js"), "utf8"), context);
  return {
    run: (code) => vm.runInContext(code, context),
    useLanguage(language) {
      dataset.lang = language.code;
      body.dataset.base = language.base;
    }
  };
}

function pageUrl(language, page) {
  return `${SITE_URL}${language.dir}${page.slug}`;
}

function buildHead(language, page, text) {
  const title = escapeHtml(text[page.titleKey]);
  const description = escapeHtml(text[page.descKey]);
  const lines = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<link rel="canonical" href="${pageUrl(language, page)}">`,
    ...LANGUAGES.map((entry) => `<link rel="alternate" hreflang="${entry.code}" href="${pageUrl(entry, page)}">`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl(LANGUAGES[2], page)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Malmequer bem me quer">`,
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:url" content="${pageUrl(language, page)}">`,
    `<meta property="og:image" content="${SITE_URL}mmqbmq.png">`,
    `<meta property="og:locale" content="${language.locale}">`,
    ...LANGUAGES.filter((entry) => entry !== language).map((entry) => `<meta property="og:locale:alternate" content="${entry.locale}">`),
    `<meta name="twitter:card" content="summary">`
  ];

  if (page.organization) {
    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Malmequer bem me quer",
      url: SITE_URL,
      logo: `${SITE_URL}mmqbmq.png`,
      telephone: "+351935521564",
      address: { "@type": "PostalAddress", addressLocality: "Guimarães", addressCountry: "PT" }
    };
    lines.push(`<script type="application/ld+json">${JSON.stringify(organization)}</script>`);
  }

  return lines.join("\n  ");
}

// Links para a mesma página noutro idioma, relativos à pasta da página atual.
function buildLanguageLinks(language, page) {
  return LANGUAGES.map((entry) => {
    const href = `${language.base}${entry.dir}${page.slug}` || "./";
    const isCurrent = entry === language;
    return `<a class="lang-btn${isCurrent ? " is-active" : ""}" href="${href}" hreflang="${entry.code}" lang="${entry.code}" data-lang-link="${entry.code}"${isCurrent ? ' aria-current="true"' : ""}>${entry.code.toUpperCase()}</a>`;
  }).join("\n          ");
}

// Preenche as etiquetas marcadas com data-i18n e tira as marcas do resultado final.
function applyText(html, text, whatsappUrl) {
  const lookup = (key) => {
    if (!(key in text)) {
      throw new Error(`Texto em falta em SITE_TEXT: ${key}`);
    }
    return escapeHtml(text[key]);
  };
  const setAttribute = (tag, name, value) => {
    const pattern = new RegExp(`\\s${name}="[^"]*"`);
    return pattern.test(tag) ? tag.replace(pattern, ` ${name}="${value}"`) : tag.replace(/\s*>$/, ` ${name}="${value}">`);
  };

  return html
    .replace(/<([a-zA-Z][^>]*)\sdata-i18n="([^"]+)"([^>]*)>[^<]*</g, (_, before, key, after) => `<${before}${after}>${lookup(key)}<`)
    .replace(/<[a-zA-Z][^>]*\sdata-(?:i18n-alt|i18n-aria|i18n-placeholder|whatsapp-context)="[^"]*"[^>]*>/g, (tag) => {
      let result = tag;
      const attributes = { "i18n-alt": "alt", "i18n-aria": "aria-label", "i18n-placeholder": "placeholder" };
      for (const [source, target] of Object.entries(attributes)) {
        const match = result.match(new RegExp(`\\sdata-${source}="([^"]+)"`));
        if (match) {
          result = setAttribute(result.replace(match[0], ""), target, lookup(match[1]));
        }
      }
      const context = result.match(/\sdata-whatsapp-context="([^"]+)"/);
      if (context) {
        result = setAttribute(result.replace(context[0], ""), "href", escapeHtml(whatsappUrl(context[1])));
      }
      return result.replace(/\s*js-whatsapp-generic/, "");
    });
}

// Os modelos têm blocos <!--ready--> (catálogo publicado) e <!--building--> (catálogo em construção).
function pickBlocks(html, catalogReady) {
  const [keep, drop] = catalogReady ? ["ready", "building"] : ["building", "ready"];
  return html
    .replace(new RegExp(`[ \\t]*<!--${drop}-->[\\s\\S]*?<!--/${drop}-->\\n?`, "g"), "")
    .replace(new RegExp(`[ \\t]*<!--/?${keep}-->\\n?`, "g"), "");
}

function fill(html, id, content) {
  const pattern = new RegExp(`(id="${id}"[^>]*>)[^<]*`);
  if (!pattern.test(html)) {
    throw new Error(`Elemento em falta no modelo: ${id}`);
  }
  return html.replace(pattern, (_, open) => `${open}${content}`);
}

function buildPage(site, language, page) {
  site.useLanguage(language);
  const code = JSON.stringify(language.code);
  const text = site.run(`SITE_TEXT[${code}]`);
  const catalogReady = site.run("CATALOG_READY");
  const catalogMessage = catalogReady ? "catalogWhatsappMessage" : "catalogBuildingWhatsappMessage";
  const whatsappUrl = (context) => site.run(`buildWhatsappUrl(SITE_TEXT[${code}][${JSON.stringify(context === "catalog" ? catalogMessage : "genericWhatsappMessage")}])`);

  let html = fs.readFileSync(path.join(ROOT, "_templates", page.template), "utf8").replace(/\r\n/g, "\n");
  html = pickBlocks(html, catalogReady)
    .replaceAll("{{htmlLang}}", language.htmlLang)
    .replaceAll("{{lang}}", language.code)
    .replaceAll("{{base}}", language.base)
    .replace("{{head}}", () => buildHead(language, page, text))
    .replace("{{langLinks}}", () => buildLanguageLinks(language, page));
  html = applyText(html, text, whatsappUrl);

  if (page.template === "index.html") {
    html = fill(html, "home-collections", site.run(`buildHomeCollections(${code})`));
    if (catalogReady) {
      html = fill(html, "home-preview", site.run(`buildHomePreview(${code})`));
    }
  } else if (!catalogReady) {
    html = fill(html, "catalog-lines", site.run(`buildHomeCollections(${code})`));
  } else {
    html = fill(html, "category-filters", site.run(`buildCatalogFilters(${code}, "all")`));
    html = fill(html, "catalog-grid", site.run(`PRODUCTS.map((product) => buildProductCard(product, ${code})).join("")`));
    html = fill(html, "catalog-results-count", site.run(`formatReferenceCount(PRODUCTS.length, ${code})`));
  }

  if (html.includes("{{") || /data-i18n/.test(html)) {
    throw new Error(`Marcas por substituir em ${language.dir}${page.template}`);
  }
  return html;
}

function buildSitemap() {
  const urls = PAGES.flatMap((page) =>
    LANGUAGES.map((language) => {
      const alternates = [
        ...LANGUAGES.map((entry) => `    <xhtml:link rel="alternate" hreflang="${entry.code}" href="${pageUrl(entry, page)}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(LANGUAGES[2], page)}"/>`
      ].join("\n");
      return `  <url>\n    <loc>${pageUrl(language, page)}</loc>\n${alternates}\n  </url>`;
    })
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
}

function write(relativePath, content) {
  const target = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
  console.log(`  ${relativePath}`);
}

const site = loadSite();
console.log("Gerado:");
for (const language of LANGUAGES) {
  for (const page of PAGES) {
    write(`${language.dir}${page.template}`, buildPage(site, language, page));
  }
}
write("sitemap.xml", buildSitemap());
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`);
