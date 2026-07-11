# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este projeto

Site-portfólio da **"Malmequer bem me quer"** (marca portuguesa de moda íntima feminina — "senhora íntimo"), feito para um cliente. O objetivo é mostrar a **lojas e revendedores em Portugal e Espanha** o que a marca faz e encaminhar pedidos de revenda para o WhatsApp. **Não é uma loja online** — não há carrinho, preços nem checkout; o canal de venda é exclusivamente o WhatsApp (+351 935 521 564).

Site estático puro (HTML + CSS + JS vanilla), sem build, sem dependências, sem framework. Publicação presumida em GitHub Pages (`https://thecreative1.github.io/MalmequerBemmequer/`).

## Regras invioláveis (não alterar sem autorização do dono do projeto)

1. **O nome da marca nunca se traduz.** Em espanhol fica igualmente "Malmequer bem me quer" — nunca "Malmequer bien me Quiere" (erro antigo já corrigido). O mesmo vale para nomes de modelos (ex.: "Malmequer Básica").
2. **O logotipo (`mmqbmq.png`) mantém-se sempre** — é a margarida sobre fundo rosa. Não substituir, recriar nem "melhorar".
3. **Não inventar factos comerciais.** Não existem (ainda) dados confirmados sobre: quantidades mínimas, preços, prazos concretos, morada, e-mail, redes sociais. Onde falta informação, o texto diz "sob consulta" e aponta para o WhatsApp. Se uma alteração precisar destes dados, perguntar ao utilizador — nunca preencher com valores plausíveis.
4. **O tom é B2B** — o texto fala com lojistas ("a sua loja", "condições de revenda"), não com consumidoras finais. Manter em qualquer texto novo, nos dois idiomas.
5. **Todo o conteúdo visível existe em PT e ES.** Qualquer texto novo tem de ser adicionado nas duas línguas em `SITE_TEXT` (ver arquitetura abaixo). Nunca deixar um idioma desatualizado.
6. **O dono do projeto quer ser consultado antes de mudanças de direção** (visual, estrutura, público-alvo). Ajustes pontuais dentro da direção atual não precisam de pergunta; redesenhos e novas secções sim.

## Comandos

Não há build, lint nem testes. Para pré-visualizar localmente:

```
python -m http.server 8123
```

(ou usar a configuração `static-site` em `.claude/launch.json`). Abrir `http://localhost:8123`. Atenção: o browser faz cache agressiva de `styles.css`/`site.js` com este servidor — usar hard-reload ou query-string (`?v=...`) ao verificar alterações.

Deploy = commit + push para `main` (GitHub Pages serve a raiz do repositório).

## Arquitetura

Três ficheiros fazem tudo; as duas páginas partilham o mesmo `site.js` e `styles.css`.

- **`index.html`** (`<body data-page="home">`) — página de apresentação: hero, faixa marquee, vantagens B2B, coleções, destaques, processo de encomenda, "A marca", FAQ, contactos.
- **`catalogo.html`** (`<body data-page="catalog">`) — portefólio completo com pesquisa e filtros por coleção (estado refletido nos parâmetros de URL `categoria` e `busca`).
- **`site.js`** — todos os dados e lógica:
  - `SITE_TEXT` — **todas as strings do site**, em `pt` e `es`. O HTML tem textos PT estáticos como fallback, marcados com `data-i18n="chave"` (e variantes `data-i18n-placeholder`, `data-i18n-aria`); `applyTextContent()` substitui-os conforme o idioma ativo (persistido em `localStorage` como `mbmq-lang`). **Ao editar um texto, mudar sempre 3 sítios**: `SITE_TEXT.pt`, `SITE_TEXT.es` e o fallback estático no HTML.
  - `CATEGORY_META` — as 4 coleções (`essentials`, `lace`, `maxi`, `prints`) com nome/descrição por idioma e imagem de capa.
  - `PRODUCTS` — os modelos do catálogo. Cada produto tem `id` (formato `MMQ-NN`), `category` (chave de `CATEGORY_META`), `featured` (aparece nos destaques da home), `image` e traduções `pt`/`es` (`name`, `desc`, `highlights[]`). **Para adicionar um produto**: colocar a foto em `catalogo/25/`, acrescentar uma entrada aqui — as grelhas, filtros e contagens atualizam-se sozinhas.
  - Links de WhatsApp: gerados por `buildWhatsappUrl()`. Os genéricos (classe `js-whatsapp-generic` + `data-whatsapp-context`) recebem mensagens de `SITE_TEXT`; os de produto usam `buildProductMessage()` — todas as mensagens são de **pedido de condições de revenda**, manter esse enquadramento.
- **`styles.css`** — design system completo em variáveis CSS no `:root`.

## Design system ("margarida groovy")

A identidade visual do site **deriva do logotipo** — rosa-chiclete, amarelo-sol e branco. Não introduzir cores fora da paleta nem tipografias novas:

- Cores: fundo `--bg #fadcea`, amarelo `--sun #ffde21`, CTA `--brand #c42d6f`, texto `--ink #55203c` / `--brand-deep #8f1d4e`. Botão WhatsApp flutuante é verde (`#1eaa53`) por convenção da plataforma.
- Fontes (Google Fonts): **Fraunces** (títulos, `--font-display`) + **Karla** (texto, `--font-body`).
- Convenções decorativas: flor "✿" como marcador (eyebrows, bullets, acordeão FAQ), imagens em forma de arco (`--radius-arch`), cartões com leve rotação, margaridas SVG inline, faixa marquee amarela com "bem-me-quer / mal-me-quer / me quiere / no me quiere" (funciona nos dois idiomas — não acrescentar texto que só faça sentido num deles).
- Acessibilidade já implementada e a preservar: skip-link, `aria-expanded`/`aria-pressed`, `prefers-reduced-motion` desativa todas as animações, fallbacks para JS desligado (`<noscript>`, FAQ em `<details>` nativo).

## Armadilhas conhecidas

- `catalogo/25/` é a pasta de fotos do catálogo (coleção de 2025); `img/` tem as fotos editoriais (hero `02.jpeg`, "A marca" `ref-150.jpg`).
- As imagens em `img/` são pesadas (1–2 MB) — compressão está identificada como melhoria pendente; não adicionar imagens novas sem otimizar.
- Os metadados Open Graph nos dois HTML usam URLs absolutos do GitHub Pages — se o site ganhar domínio próprio, atualizar `og:url` e `og:image` em ambas as páginas.
- O menu móvel (`.nav-panel`) é `position: absolute` dentro de uma grid — precisa do `justify-self: stretch` no breakpoint ≤860px para não encolher (bug já corrigido; não remover).
