const WHATSAPP_NUMBER = "351935521564";
const SITE_LANGUAGES = ["pt", "es", "en"];
const HTML_LANG = { pt: "pt-PT", es: "es", en: "en" };

const SITE_TEXT = {
  pt: {
    pageTitleHome: "Malmequer bem me quer | Roupa interior feminina fabricada em Portugal para revenda",
    pageTitleCatalog: "Catálogo | Malmequer bem me quer",
    pageDescHome: "Fabricante portuguesa de roupa interior feminina com confeção própria. Catálogo para lojas e revendedores, com condições de revenda diretas por WhatsApp.",
    pageDescCatalog: "Catálogo da Malmequer bem me quer para lojas e revendedores: roupa interior feminina fabricada em Portugal. Filtre por linha e peça condições de revenda.",
    skipContent: "Saltar para o conteúdo",
    languageLabel: "Seletor de idioma",
    navLabel: "Principal",
    navCatalog: "Catálogo",
    navOrder: "Como encomendar",
    navCompany: "A empresa",
    menuLabel: "Abrir menu",
    logoAlt: "Logótipo da Malmequer bem me quer",
    heroKicker: "Fabricado em Portugal",
    homeHeroTitle: "Roupa interior feminina, direta da confeção.",
    homeHeroDesc: "Produzimos na nossa própria confeção para lojas e revendedores. Veja o catálogo e peça as condições de revenda diretamente a quem fabrica.",
    ctaCatalog: "Ver catálogo",
    ctaWhatsApp: "Pedir condições",
    fact1Label: "Origem",
    fact1Value: "Fabricado em Portugal",
    fact2Label: "Produção",
    fact2Value: "Confeção própria",
    fact3Label: "Envios",
    fact3Value: "Portugal e Espanha. Outros países sob consulta",
    fact4Label: "Atendimento",
    wallAlt1: "Modelo branco com renda lateral, em manequim",
    wallAlt2: "Modelo branco de cintura alta, em manequim",
    wallAlt3: "Modelo cor de pele de cintura alta, em manequim",
    wallAlt4: "Modelo preto com pequeno estampado floral, em manequim",
    benefitsTitle: "Trate diretamente com quem produz.",
    benefit1Title: "Sem intermediários",
    benefit1Desc: "Condições, tamanhos e disponibilidade são tratados diretamente com a confeção.",
    benefit2Title: "Produção portuguesa",
    benefit2Desc: "Todas as peças são confecionadas em Portugal, na nossa própria confeção.",
    benefit3Title: "Quatro linhas que se completam",
    benefit3Desc: "Essenciais, renda, maxi e estampadas, para compor a oferta da sua loja ou da sua rede.",
    collectionsTitle: "Linhas de produto",
    previewTitle: "Do catálogo",
    previewAll: "Ver todas as referências",
    processTitle: "Como encomendar",
    process1Title: "Escolha as referências",
    process1Desc: "Consulte o catálogo e anote os modelos que interessam à sua loja.",
    process2Title: "Peça as condições",
    process2Desc: "Envie as referências e o país de destino por WhatsApp. Indicamos condições, tamanhos e prazos.",
    process3Title: "Receba a encomenda",
    process3Desc: "Confirmamos quantidades e envio, com acompanhamento direto da confeção.",
    aboutTitle: "A empresa",
    aboutBody1: "A Malmequer bem me quer é uma marca portuguesa de roupa interior feminina, com confeção própria. Todas as peças são produzidas em Portugal.",
    aboutBody2: "Trabalhamos com lojas e revendedores. As condições são definidas caso a caso, conforme o perfil e o volume de cada cliente.",
    aboutNote: "O nome vem do jogo das pétalas do malmequer: bem me quer, mal me quer.",
    aboutAlt: "Modelo cinza com pequeno estampado floral, em manequim",
    faqTitle: "Perguntas frequentes",
    faq1Q: "Qual é a quantidade mínima de encomenda?",
    faq1A: "As condições de revenda e as quantidades mínimas são definidas caso a caso, conforme o perfil da loja. Fale connosco no WhatsApp para receber uma proposta.",
    faq2Q: "Que tamanhos estão disponíveis?",
    faq2A: "A disponibilidade por modelo e tamanho é confirmada no atendimento. Indique as referências que lhe interessam.",
    faq3Q: "Quanto tempo demora a entrega?",
    faq3A: "O prazo depende do destino e da quantidade, e é confirmado no momento da encomenda.",
    faq4Q: "Como funciona o pagamento?",
    faq4A: "As condições de pagamento são combinadas diretamente connosco no fecho da encomenda.",
    faq5Q: "Enviam para fora de Portugal e Espanha?",
    faq5A: "Outros países são analisados sob consulta. Indique-nos o destino e confirmamos as opções de envio.",
    contactTitle: "Peça as condições de revenda.",
    contactDesc: "Indique os modelos que lhe interessam e o país da sua loja. Respondemos em português, espanhol e inglês.",
    contactShipping: "Envios: Portugal e Espanha. Outros países sob consulta",
    contactPrimary: "Falar no WhatsApp",
    footerNote: "Roupa interior feminina fabricada em Portugal",
    noScript: "Ative o JavaScript para ver o catálogo completo e os filtros desta página.",
    catalogTitle: "Catálogo",
    catalogLead: "Filtre por linha ou pesquise por referência. Cada modelo tem um atalho para pedir as condições de revenda por WhatsApp.",
    catalogSearchLabel: "Pesquisar",
    catalogSearchPlaceholder: "Nome ou referência (ex.: MMQ-04)",
    catalogFilterLabel: "Linha",
    catalogResetFilters: "Limpar filtros",
    catalogEmptyTitle: "Nenhum modelo encontrado",
    catalogEmptyDesc: "Tente outro termo ou limpe os filtros para voltar a ver o catálogo completo.",
    catalogRequestButton: "Pedir condições",
    catalogAvailability: "Tamanhos, composição e condições sob consulta",
    catalogAllFilter: "Todas",
    referenceSingular: "referência",
    referencePlural: "referências",
    genericWhatsappMessage: "Olá! Tenho interesse em revender a Malmequer bem me quer. Podem enviar-me as condições de revenda?",
    catalogWhatsappMessage: "Olá! Estou a ver o catálogo da Malmequer bem me quer e gostava de receber as condições de revenda para alguns modelos.",
    productWhatsappMessage: "Olá! Tenho uma loja e gostava de receber as condições de revenda para o modelo {name} ({id})."
  },
  es: {
    pageTitleHome: "Malmequer bem me quer | Ropa interior femenina fabricada en Portugal para reventa",
    pageTitleCatalog: "Catálogo | Malmequer bem me quer",
    pageDescHome: "Fabricante portuguesa de ropa interior femenina con confección propia. Catálogo para tiendas y distribuidores, con condiciones de reventa directas por WhatsApp.",
    pageDescCatalog: "Catálogo de Malmequer bem me quer para tiendas y distribuidores: ropa interior femenina fabricada en Portugal. Filtre por línea y pida condiciones de reventa.",
    skipContent: "Saltar al contenido",
    languageLabel: "Selector de idioma",
    navLabel: "Principal",
    navCatalog: "Catálogo",
    navOrder: "Cómo hacer un pedido",
    navCompany: "La empresa",
    menuLabel: "Abrir menú",
    logoAlt: "Logotipo de Malmequer bem me quer",
    heroKicker: "Fabricado en Portugal",
    homeHeroTitle: "Ropa interior femenina, directa de fábrica.",
    homeHeroDesc: "Producimos en nuestra propia confección para tiendas y distribuidores. Consulte el catálogo y pida las condiciones de reventa directamente a quien fabrica.",
    ctaCatalog: "Ver catálogo",
    ctaWhatsApp: "Pedir condiciones",
    fact1Label: "Origen",
    fact1Value: "Fabricado en Portugal",
    fact2Label: "Producción",
    fact2Value: "Confección propia",
    fact3Label: "Envíos",
    fact3Value: "Portugal y España. Otros países bajo consulta",
    fact4Label: "Atención",
    wallAlt1: "Modelo blanco con encaje lateral, en maniquí",
    wallAlt2: "Modelo blanco de talle alto, en maniquí",
    wallAlt3: "Modelo color carne de talle alto, en maniquí",
    wallAlt4: "Modelo negro con pequeño estampado floral, en maniquí",
    benefitsTitle: "Trate directamente con quien produce.",
    benefit1Title: "Sin intermediarios",
    benefit1Desc: "Condiciones, tallas y disponibilidad se tratan directamente con la confección.",
    benefit2Title: "Producción portuguesa",
    benefit2Desc: "Todas las piezas se confeccionan en Portugal, en nuestra propia confección.",
    benefit3Title: "Cuatro líneas que se complementan",
    benefit3Desc: "Esenciales, encaje, maxi y estampadas, para completar la oferta de su tienda o de su red.",
    collectionsTitle: "Líneas de producto",
    previewTitle: "Del catálogo",
    previewAll: "Ver todas las referencias",
    processTitle: "Cómo hacer un pedido",
    process1Title: "Elija las referencias",
    process1Desc: "Consulte el catálogo y anote los modelos que interesan a su tienda.",
    process2Title: "Pida las condiciones",
    process2Desc: "Envíe las referencias y el país de destino por WhatsApp. Le indicamos condiciones, tallas y plazos.",
    process3Title: "Reciba el pedido",
    process3Desc: "Confirmamos cantidades y envío, con seguimiento directo de la confección.",
    aboutTitle: "La empresa",
    aboutBody1: "Malmequer bem me quer es una marca portuguesa de ropa interior femenina, con confección propia. Todas las piezas se producen en Portugal.",
    aboutBody2: "Trabajamos con tiendas y distribuidores. Las condiciones se definen caso por caso, según el perfil y el volumen de cada cliente.",
    aboutNote: "El nombre viene del juego portugués de deshojar la margarita: me quiere, no me quiere.",
    aboutAlt: "Modelo gris con pequeño estampado floral, en maniquí",
    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿Cuál es el pedido mínimo?",
    faq1A: "Las condiciones de reventa y los pedidos mínimos se definen caso por caso, según el perfil de la tienda. Escríbanos por WhatsApp para recibir una propuesta.",
    faq2Q: "¿Qué tallas hay disponibles?",
    faq2A: "La disponibilidad por modelo y talla se confirma en la atención. Indíquenos las referencias que le interesan.",
    faq3Q: "¿Cuánto tarda la entrega?",
    faq3A: "El plazo depende del destino y de la cantidad, y se confirma en el momento del pedido.",
    faq4Q: "¿Cómo funciona el pago?",
    faq4A: "Las condiciones de pago se acuerdan directamente con nosotros al cerrar el pedido.",
    faq5Q: "¿Envían fuera de Portugal y España?",
    faq5A: "Otros países se estudian bajo consulta. Indíquenos el destino y le confirmamos las opciones de envío.",
    contactTitle: "Pida las condiciones de reventa.",
    contactDesc: "Indique los modelos que le interesan y el país de su tienda. Respondemos en portugués, español e inglés.",
    contactShipping: "Envíos: Portugal y España. Otros países bajo consulta",
    contactPrimary: "Hablar por WhatsApp",
    footerNote: "Ropa interior femenina fabricada en Portugal",
    noScript: "Active JavaScript para ver el catálogo completo y los filtros de esta página.",
    catalogTitle: "Catálogo",
    catalogLead: "Filtre por línea o busque por referencia. Cada modelo tiene un acceso directo para pedir las condiciones de reventa por WhatsApp.",
    catalogSearchLabel: "Buscar",
    catalogSearchPlaceholder: "Nombre o referencia (ej.: MMQ-04)",
    catalogFilterLabel: "Línea",
    catalogResetFilters: "Borrar filtros",
    catalogEmptyTitle: "No se ha encontrado ningún modelo",
    catalogEmptyDesc: "Pruebe otro término o borre los filtros para volver a ver el catálogo completo.",
    catalogRequestButton: "Pedir condiciones",
    catalogAvailability: "Tallas, composición y condiciones bajo consulta",
    catalogAllFilter: "Todas",
    referenceSingular: "referencia",
    referencePlural: "referencias",
    genericWhatsappMessage: "¡Hola! Me interesa revender Malmequer bem me quer. ¿Pueden enviarme las condiciones de reventa?",
    catalogWhatsappMessage: "¡Hola! Estoy viendo el catálogo de Malmequer bem me quer y me gustaría recibir las condiciones de reventa de algunos modelos.",
    productWhatsappMessage: "¡Hola! Tengo una tienda y me gustaría recibir las condiciones de reventa del modelo {name} ({id})."
  },
  en: {
    pageTitleHome: "Malmequer bem me quer | Women's underwear made in Portugal, for resale",
    pageTitleCatalog: "Catalogue | Malmequer bem me quer",
    pageDescHome: "Portuguese manufacturer of women's underwear with its own production. Catalogue for shops and resellers, with resale terms directly over WhatsApp.",
    pageDescCatalog: "Malmequer bem me quer catalogue for shops and resellers: women's underwear made in Portugal. Filter by line and ask for resale terms.",
    skipContent: "Skip to content",
    languageLabel: "Language selector",
    navLabel: "Main",
    navCatalog: "Catalogue",
    navOrder: "How to order",
    navCompany: "The company",
    menuLabel: "Open menu",
    logoAlt: "Malmequer bem me quer logo",
    heroKicker: "Made in Portugal",
    homeHeroTitle: "Women's underwear, direct from the maker.",
    homeHeroDesc: "We manufacture in our own facility for shops and resellers. Browse the catalogue and ask for resale terms directly from the people who make it.",
    ctaCatalog: "View catalogue",
    ctaWhatsApp: "Ask for terms",
    fact1Label: "Origin",
    fact1Value: "Made in Portugal",
    fact2Label: "Production",
    fact2Value: "Our own facility",
    fact3Label: "Shipping",
    fact3Value: "Portugal and Spain. Other countries on request",
    fact4Label: "Service",
    wallAlt1: "White style with side lace, on a mannequin",
    wallAlt2: "White high-waisted style, on a mannequin",
    wallAlt3: "Nude high-waisted style, on a mannequin",
    wallAlt4: "Black style with a small floral print, on a mannequin",
    benefitsTitle: "Deal directly with the maker.",
    benefit1Title: "No middlemen",
    benefit1Desc: "Terms, sizes and availability are handled directly with the production team.",
    benefit2Title: "Portuguese production",
    benefit2Desc: "Every piece is sewn in Portugal, in our own facility.",
    benefit3Title: "Four lines that work together",
    benefit3Desc: "Essentials, lace, maxi and prints, to build the range for your shop or your chain.",
    collectionsTitle: "Product lines",
    previewTitle: "From the catalogue",
    previewAll: "See all references",
    processTitle: "How to order",
    process1Title: "Choose your references",
    process1Desc: "Browse the catalogue and note the styles that suit your shop.",
    process2Title: "Ask for terms",
    process2Desc: "Send the references and destination country over WhatsApp. We will give you terms, sizes and lead times.",
    process3Title: "Receive your order",
    process3Desc: "We confirm quantities and shipping, with direct follow-up from production.",
    aboutTitle: "The company",
    aboutBody1: "Malmequer bem me quer is a Portuguese women's underwear brand with its own production. Every piece is made in Portugal.",
    aboutBody2: "We work with shops and resellers. Terms are set case by case, according to each customer's profile and volume.",
    aboutNote: "The name comes from the Portuguese daisy game: loves me, loves me not.",
    aboutAlt: "Grey style with a small floral print, on a mannequin",
    faqTitle: "Frequently asked questions",
    faq1Q: "What is the minimum order?",
    faq1A: "Resale terms and minimum orders are set case by case, according to the shop's profile. Message us on WhatsApp for a proposal.",
    faq2Q: "Which sizes are available?",
    faq2A: "Availability by style and size is confirmed when you contact us. Tell us which references interest you.",
    faq3Q: "How long does delivery take?",
    faq3A: "Lead time depends on destination and quantity, and is confirmed when you order.",
    faq4Q: "How does payment work?",
    faq4A: "Payment terms are agreed directly with us when the order is finalised.",
    faq5Q: "Do you ship outside Portugal and Spain?",
    faq5A: "Other countries are considered on request. Tell us the destination and we will confirm the shipping options.",
    contactTitle: "Ask for our resale terms.",
    contactDesc: "Tell us which styles interest you and where your shop is. We reply in Portuguese, Spanish and English.",
    contactShipping: "Shipping: Portugal and Spain. Other countries on request",
    contactPrimary: "Message us on WhatsApp",
    footerNote: "Women's underwear made in Portugal",
    noScript: "Turn on JavaScript to see the full catalogue and the filters on this page.",
    catalogTitle: "Catalogue",
    catalogLead: "Filter by line or search by reference. Each style has a shortcut to ask for resale terms over WhatsApp.",
    catalogSearchLabel: "Search",
    catalogSearchPlaceholder: "Name or reference (e.g. MMQ-04)",
    catalogFilterLabel: "Line",
    catalogResetFilters: "Clear filters",
    catalogEmptyTitle: "No styles found",
    catalogEmptyDesc: "Try another term or clear the filters to see the full catalogue again.",
    catalogRequestButton: "Ask for terms",
    catalogAvailability: "Sizes, composition and terms on request",
    catalogAllFilter: "All",
    referenceSingular: "reference",
    referencePlural: "references",
    genericWhatsappMessage: "Hello! I am interested in reselling Malmequer bem me quer. Could you send me your resale terms?",
    catalogWhatsappMessage: "Hello! I am looking at the Malmequer bem me quer catalogue and would like to receive resale terms for some styles.",
    productWhatsappMessage: "Hello! I have a shop and would like to receive resale terms for the style {name} ({id})."
  }
};

const CATEGORY_META = {
  essentials: {
    image: "catalogo/25/tratadas/mmq-01.jpg",
    pt: { name: "Essenciais", description: "Modelos lisos e simples, para a base da oferta." },
    es: { name: "Esenciales", description: "Modelos lisos y sencillos, para la base de la oferta." },
    en: { name: "Essentials", description: "Plain, simple styles to anchor your range." }
  },
  lace: {
    image: "catalogo/25/tratadas/mmq-09.jpg",
    pt: { name: "Renda", description: "Modelos com renda e acabamentos mais trabalhados." },
    es: { name: "Encaje", description: "Modelos con encaje y acabados más elaborados." },
    en: { name: "Lace", description: "Styles with lace and more detailed finishes." }
  },
  maxi: {
    image: "catalogo/25/tratadas/mmq-04.jpg",
    pt: { name: "Maxi", description: "Cintura alta e maior cobertura." },
    es: { name: "Maxi", description: "Talle alto y mayor cobertura." },
    en: { name: "Maxi", description: "High waist and fuller coverage." }
  },
  prints: {
    image: "catalogo/25/tratadas/mmq-06.jpg",
    pt: { name: "Estampadas", description: "Pequenos estampados florais sobre fundos neutros." },
    es: { name: "Estampadas", description: "Pequeños estampados florales sobre fondos neutros." },
    en: { name: "Prints", description: "Small floral prints on neutral grounds." }
  }
};

const PRODUCTS = [
  {
    id: "MMQ-01",
    category: "essentials",
    featured: true,
    image: "catalogo/25/tratadas/mmq-01.jpg",
    pt: { name: "Malmequer Básica", desc: "Modelo liso em bege, com cós elástico da marca." },
    es: { name: "Malmequer Básica", desc: "Modelo liso en beige, con cinturilla elástica de la marca." },
    en: { name: "Malmequer Básica", desc: "Plain style in beige, with a branded elastic waistband." }
  },
  {
    id: "MMQ-02",
    category: "lace",
    featured: false,
    image: "catalogo/25/tratadas/mmq-02.jpg",
    pt: { name: "Clássica Renda", desc: "Modelo branco, com cós elástico da marca." },
    es: { name: "Clásica Encaje", desc: "Modelo blanco, con cinturilla elástica de la marca." },
    en: { name: "Classic Lace", desc: "White style, with a branded elastic waistband." }
  },
  {
    id: "MMQ-03",
    category: "essentials",
    featured: false,
    image: "catalogo/25/tratadas/mmq-03.jpg",
    pt: { name: "Algodão Canelado", desc: "Modelo em tom marfim, com cós elástico da marca." },
    es: { name: "Algodón Canalé", desc: "Modelo en tono marfil, con cinturilla elástica de la marca." },
    en: { name: "Ribbed Cotton", desc: "Ivory style, with a branded elastic waistband." }
  },
  {
    id: "MMQ-04",
    category: "maxi",
    featured: true,
    image: "catalogo/25/tratadas/mmq-04.jpg",
    pt: { name: "Malmequer Maxi", desc: "Modelo maxi em tom cru, com textura às riscas." },
    es: { name: "Malmequer Maxi", desc: "Modelo maxi en tono crudo, con textura de rayas." },
    en: { name: "Malmequer Maxi", desc: "Maxi style in ecru, with a striped texture." }
  },
  {
    id: "MMQ-05",
    category: "lace",
    featured: false,
    image: "catalogo/25/tratadas/mmq-05.jpg",
    pt: { name: "Maxi com Renda", desc: "Modelo branco, com cós de pontos pretos." },
    es: { name: "Maxi con Encaje", desc: "Modelo blanco, con cinturilla de lunares negros." },
    en: { name: "Maxi with Lace", desc: "White style, with a black dotted waistband." }
  },
  {
    id: "MMQ-06",
    category: "prints",
    featured: true,
    image: "catalogo/25/tratadas/mmq-06.jpg",
    pt: { name: "Floral Cinza", desc: "Cinza com pequeno estampado floral e debruns a condizer." },
    es: { name: "Floral Gris", desc: "Gris con pequeño estampado floral y ribetes a juego." },
    en: { name: "Grey Floral", desc: "Grey with a small floral print and matching trims." }
  },
  {
    id: "MMQ-07",
    category: "prints",
    featured: false,
    image: "catalogo/25/tratadas/mmq-07.jpg",
    pt: { name: "Floral Preta", desc: "Preto com pequeno estampado floral e debruns a condizer." },
    es: { name: "Floral Negra", desc: "Negro con pequeño estampado floral y ribetes a juego." },
    en: { name: "Black Floral", desc: "Black with a small floral print and matching trims." }
  },
  {
    id: "MMQ-08",
    category: "maxi",
    featured: false,
    image: "catalogo/25/tratadas/mmq-08.jpg",
    pt: { name: "Maxi Corações", desc: "Modelo maxi branco, com relevo de corações na malha." },
    es: { name: "Maxi Corazones", desc: "Modelo maxi blanco, con relieve de corazones en el tejido." },
    en: { name: "Maxi Hearts", desc: "White maxi style, with a raised heart pattern in the knit." }
  },
  {
    id: "MMQ-09",
    category: "lace",
    featured: true,
    image: "catalogo/25/tratadas/mmq-09.jpg",
    pt: { name: "Renda Romântica", desc: "Modelo branco, com renda lateral." },
    es: { name: "Encaje Romántico", desc: "Modelo blanco, con encaje lateral." },
    en: { name: "Romantic Lace", desc: "White style, with side lace." }
  },
  {
    id: "MMQ-10",
    category: "maxi",
    featured: false,
    image: "catalogo/25/tratadas/mmq-10.jpg",
    pt: { name: "Maxi Comfort", desc: "Tom cru com pequeno estampado floral e cós elástico." },
    es: { name: "Maxi Comfort", desc: "Tono crudo con pequeño estampado floral y cinturilla elástica." },
    en: { name: "Maxi Comfort", desc: "Ecru with a small floral print and an elastic waistband." }
  }
];

const state = {
  lang: getInitialLanguage(),
  category: "all",
  search: ""
};

document.addEventListener("DOMContentLoaded", () => {
  setupYear();
  setupMenu();
  setupLanguageButtons();
  initializeCatalogState();
  refreshPage();
  setupCatalogControls();
});

function getInitialLanguage() {
  const fromUrl = new URL(window.location.href).searchParams.get("lang");
  if (SITE_LANGUAGES.includes(fromUrl)) {
    return fromUrl;
  }

  try {
    const stored = window.localStorage.getItem("mbmq-lang");
    if (SITE_LANGUAGES.includes(stored)) {
      return stored;
    }
  } catch (error) {
    // Ignore localStorage issues and keep the default language.
  }

  return detectBrowserLanguage();
}

// Quem chega de Espanha vê espanhol; fora da Península, inglês.
function detectBrowserLanguage() {
  const preferred = navigator.languages || [navigator.language || ""];

  for (const entry of preferred) {
    const code = String(entry).slice(0, 2).toLowerCase();
    if (code === "pt") return "pt";
    if (["es", "ca", "gl", "eu"].includes(code)) return "es";
    if (code === "en") return "en";
  }

  return "en";
}

function getCurrentPage() {
  return document.body.dataset.page || "home";
}

function setupYear() {
  const yearNode = document.getElementById("current-year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function setupMenu() {
  const menuButton = document.getElementById("menu-toggle");
  const navPanel = document.getElementById("nav-panel");

  if (!menuButton || !navPanel) {
    return;
  }

  const closeMenu = () => {
    navPanel.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navPanel.querySelectorAll("a, button").forEach((node) => {
    node.addEventListener("click", () => {
      if (window.innerWidth <= 860) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      navPanel.classList.contains("is-open") &&
      !navPanel.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

function setupLanguageButtons() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang;
      if (!nextLanguage || nextLanguage === state.lang) {
        return;
      }

      state.lang = nextLanguage;
      updateLanguageInUrl();
      try {
        window.localStorage.setItem("mbmq-lang", nextLanguage);
      } catch (error) {
        // Ignore localStorage issues and continue.
      }

      refreshPage();
    });
  });
}

function updateLanguageInUrl() {
  const url = new URL(window.location.href);
  if (url.searchParams.has("lang")) {
    url.searchParams.set("lang", state.lang);
    window.history.replaceState({}, "", url);
  }
}

function initializeCatalogState() {
  if (getCurrentPage() !== "catalog") {
    return;
  }

  const url = new URL(window.location.href);
  const category = url.searchParams.get("categoria");
  const search = url.searchParams.get("busca") || url.searchParams.get("search") || "";

  state.category = CATEGORY_META[category] ? category : "all";
  state.search = search;
}

function setupCatalogControls() {
  if (getCurrentPage() !== "catalog") {
    return;
  }

  const searchInput = document.getElementById("product-search");
  const resetButton = document.getElementById("reset-filters");
  const emptyResetButton = document.getElementById("empty-reset");

  if (searchInput) {
    searchInput.value = state.search;
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value;
      updateCatalogUrl();
      renderCatalogProducts();
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      clearCatalogFilters();
    });
  }

  if (emptyResetButton) {
    emptyResetButton.addEventListener("click", () => {
      clearCatalogFilters();
    });
  }
}

function clearCatalogFilters() {
  const searchInput = document.getElementById("product-search");

  state.category = "all";
  state.search = "";

  if (searchInput) {
    searchInput.value = "";
  }

  updateCatalogUrl();
  renderCatalogFilters();
  renderCatalogProducts();
}

function refreshPage() {
  applyTextContent();
  updateGenericWhatsappLinks();
  updateLanguageButtons();

  if (getCurrentPage() === "home") {
    renderHomeCollections();
    renderHomePreview();
  }

  if (getCurrentPage() === "catalog") {
    renderCatalogFilters();
    renderCatalogProducts();
  }
}

function applyTextContent() {
  const content = SITE_TEXT[state.lang];
  const page = getCurrentPage();

  document.documentElement.lang = HTML_LANG[state.lang];
  document.title = page === "catalog" ? content.pageTitleCatalog : content.pageTitleHome;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", page === "catalog" ? content.pageDescCatalog : content.pageDescHome);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (content[key]) {
      node.textContent = content[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (content[key]) {
      node.setAttribute("placeholder", content[key]);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.dataset.i18nAlt;
    if (content[key]) {
      node.setAttribute("alt", content[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    if (content[key]) {
      node.setAttribute("aria-label", content[key]);
    }
  });
}

function updateLanguageButtons() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}


function updateGenericWhatsappLinks() {
  document.querySelectorAll(".js-whatsapp-generic").forEach((link) => {
    const messageKey = link.dataset.whatsappContext === "catalog"
      ? "catalogWhatsappMessage"
      : "genericWhatsappMessage";

    link.setAttribute("href", buildWhatsappUrl(SITE_TEXT[state.lang][messageKey]));
  });
}

function renderHomeCollections() {
  const container = document.getElementById("home-collections");
  if (!container) {
    return;
  }

  container.innerHTML = Object.entries(CATEGORY_META)
    .map(([key, category]) => {
      const translated = category[state.lang];
      const total = PRODUCTS.filter((product) => product.category === key).length;

      return `
        <a class="line-row" href="catalogo.html?categoria=${encodeURIComponent(key)}">
          <img src="${escapeHtml(category.image)}" alt="" width="112" height="112" loading="lazy" decoding="async">
          <h3>${escapeHtml(translated.name)}</h3>
          <p>${escapeHtml(translated.description)}</p>
          <span class="line-count">${escapeHtml(formatReferenceCount(total, state.lang))}</span>
        </a>
      `;
    })
    .join("");
}

function renderHomePreview() {
  const container = document.getElementById("home-preview");
  if (!container) {
    return;
  }

  const featuredProducts = PRODUCTS.filter((product) => product.featured);

  container.innerHTML = featuredProducts
    .map((product) => buildProductCard(product, state.lang))
    .join("");
}

function renderCatalogFilters() {
  const container = document.getElementById("category-filters");
  if (!container) {
    return;
  }

  const entries = [
    {
      key: "all",
      label: SITE_TEXT[state.lang].catalogAllFilter,
      count: PRODUCTS.length
    },
    ...Object.entries(CATEGORY_META).map(([key, category]) => ({
      key,
      label: category[state.lang].name,
      count: PRODUCTS.filter((product) => product.category === key).length
    }))
  ];

  container.innerHTML = entries
    .map((entry) => {
      const isActive = entry.key === state.category;
      return `
        <button class="filter-chip${isActive ? " is-active" : ""}" type="button" data-filter="${escapeHtml(entry.key)}" aria-pressed="${isActive}">
          ${escapeHtml(entry.label)} (${entry.count})
        </button>
      `;
    })
    .join("");

  container.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextCategory = button.dataset.filter || "all";
      state.category = nextCategory;
      updateCatalogUrl();
      renderCatalogFilters();
      renderCatalogProducts();
    });
  });
}

function renderCatalogProducts() {
  const grid = document.getElementById("catalog-grid");
  const emptyState = document.getElementById("catalog-empty");
  const resultsNode = document.getElementById("catalog-results-count");
  const resetButton = document.getElementById("reset-filters");

  if (!grid || !emptyState || !resultsNode) {
    return;
  }

  const filteredProducts = getFilteredProducts();
  const total = filteredProducts.length;
  resultsNode.textContent = formatReferenceCount(total, state.lang);
  grid.innerHTML = filteredProducts
    .map((product) => buildProductCard(product, state.lang))
    .join("");

  grid.hidden = total === 0;
  emptyState.hidden = total !== 0;

  if (resetButton) {
    const hasFilters = state.category !== "all" || state.search.trim() !== "";
    resetButton.disabled = !hasFilters;
    resetButton.setAttribute("aria-disabled", String(!hasFilters));
  }
}

function getFilteredProducts() {
  const normalizedSearch = normalizeText(state.search);

  return PRODUCTS.filter((product) => {
    if (state.category !== "all" && product.category !== state.category) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    const translated = product[state.lang];
    const categoryName = CATEGORY_META[product.category][state.lang].name;
    const searchable = [
      product.id,
      translated.name,
      translated.desc,
      categoryName
    ]
      .join(" ")
      .toLowerCase();

    return normalizeText(searchable).includes(normalizedSearch);
  });
}

function buildProductCard(product, lang) {
  const translated = product[lang];
  const category = CATEGORY_META[product.category][lang];

  return `
    <article class="product-card">
      <div class="product-meta">
        <span class="product-code">${escapeHtml(product.id)}</span>
        <span>${escapeHtml(category.name)}</span>
      </div>
      <div class="product-media">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(`${translated.name}: ${translated.desc}`)}" width="800" height="800" loading="lazy" decoding="async">
      </div>
      <h3 class="product-title">${escapeHtml(translated.name)}</h3>
      <p class="product-desc">${escapeHtml(translated.desc)}</p>
      <a class="product-request" href="${buildWhatsappUrl(buildProductMessage(product, lang))}" target="_blank" rel="noopener">${escapeHtml(SITE_TEXT[lang].catalogRequestButton)}</a>
    </article>
  `;
}

function buildProductMessage(product, lang) {
  return SITE_TEXT[lang].productWhatsappMessage
    .replace("{name}", product[lang].name)
    .replace("{id}", product.id);
}

function buildWhatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatReferenceCount(total, lang) {
  const noun = total === 1 ? SITE_TEXT[lang].referenceSingular : SITE_TEXT[lang].referencePlural;
  return `${total} ${noun}`;
}

function updateCatalogUrl() {
  if (getCurrentPage() !== "catalog") {
    return;
  }

  const url = new URL(window.location.href);

  if (state.category !== "all") {
    url.searchParams.set("categoria", state.category);
  } else {
    url.searchParams.delete("categoria");
  }

  if (state.search.trim()) {
    url.searchParams.set("busca", state.search.trim());
  } else {
    url.searchParams.delete("busca");
  }

  window.history.replaceState({}, "", url);
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
