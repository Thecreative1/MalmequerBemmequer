# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este projeto

Site-portfólio da **"Malmequer bem me quer"** (marca portuguesa de moda íntima feminina — "senhora íntimo"), feito para um cliente. A marca é de um fabricante com **confeção própria em Portugal** (confirmado pelo dono do projeto). O objetivo é mostrar a **lojas e revendedores**, com Espanha como mercado prioritário, o que a marca faz e encaminhar pedidos de revenda para o WhatsApp. Envios: Portugal e Espanha; outros países sob consulta. **Não é uma loja online** — não há carrinho, preços nem checkout; o canal de venda é exclusivamente o WhatsApp (+351 935 521 564).

Site estático puro (HTML + CSS + JS vanilla), sem build, sem dependências, sem framework. Publicação presumida em GitHub Pages (`https://thecreative1.github.io/MalmequerBemmequer/`).

## Regras invioláveis (não alterar sem autorização do dono do projeto)

1. **O nome da marca nunca se traduz.** Em espanhol e inglês fica igualmente "Malmequer bem me quer" — nunca "Malmequer bien me Quiere" (erro antigo já corrigido). O mesmo vale para nomes de modelos (ex.: "Malmequer Básica").
2. **O logotipo (`mmqbmq.png`) mantém-se sempre** — é a margarida sobre fundo rosa. Não substituir, recriar nem "melhorar".
3. **Não inventar factos comerciais.** Não existem (ainda) dados confirmados sobre: quantidades mínimas, preços, prazos concretos, morada, e-mail, redes sociais. Onde falta informação, o texto diz "sob consulta" e aponta para o WhatsApp. Se uma alteração precisar destes dados, perguntar ao utilizador — nunca preencher com valores plausíveis.
4. **O tom é B2B** — o texto fala com lojistas ("a sua loja", "condições de revenda"), não com consumidoras finais. Manter em qualquer texto novo, nos três idiomas.
5. **Todo o conteúdo visível existe em PT, ES e EN.** Qualquer texto novo tem de ser adicionado nas três línguas em `SITE_TEXT` (ver arquitetura abaixo). Nunca deixar um idioma desatualizado.
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

- **`index.html`** (`<body data-page="home">`) — página de apresentação: topo rosa com o logótipo, ficha da empresa, peças vestidas, vantagens B2B, linhas de produto, destaques, processo de encomenda, "A empresa", FAQ, contactos.
- **`catalogo.html`** (`<body data-page="catalog">`) — portefólio completo com pesquisa e filtros por coleção (estado refletido nos parâmetros de URL `categoria` e `busca`; `lang=pt|es|en` força o idioma nas duas páginas).
- **`site.js`** — todos os dados e lógica:
  - `SITE_TEXT` — **todas as strings do site**, em `pt`, `es` e `en`. O HTML tem textos PT estáticos como fallback, marcados com `data-i18n="chave"` (e variantes `data-i18n-placeholder`, `data-i18n-aria`, `data-i18n-alt`); `applyTextContent()` substitui-os conforme o idioma ativo (persistido em `localStorage` como `mbmq-lang`; na primeira visita segue o browser: pt, es, en, e inglês para o resto). **Ao editar um texto, mudar sempre 4 sítios**: `SITE_TEXT.pt`, `SITE_TEXT.es`, `SITE_TEXT.en` e o fallback estático no HTML.
  - `CATEGORY_META` — as 4 linhas (`essentials`, `lace`, `maxi`, `prints`) com nome/descrição por idioma e imagem.
  - `PRODUCTS` — os modelos do catálogo. Cada produto tem `id` (formato `MMQ-NN`), `category` (chave de `CATEGORY_META`), `featured` (aparece nos destaques da home), `image` e traduções `pt`/`es`/`en` (`name`, `desc`). A descrição diz só o que se vê na foto: nada de composição ou qualidades por confirmar. **Para adicionar um produto**: colocar a foto tratada em `catalogo/25/tratadas/`, acrescentar uma entrada aqui — as grelhas, filtros e contagens atualizam-se sozinhas.
  - Links de WhatsApp: gerados por `buildWhatsappUrl()`. Os genéricos (classe `js-whatsapp-generic` + `data-whatsapp-context`) recebem mensagens de `SITE_TEXT`; os de produto usam `buildProductMessage()` — todas as mensagens são de **pedido de condições de revenda**, manter esse enquadramento.
- **`styles.css`** — design system completo em variáveis CSS no `:root`.

## Design system

O visual é o de um fabricante: **o rosa vem do logotipo e funde-se com ele; o resto é branco, tinta e grelha**. Direção aprovada pelo dono do projeto em novembro de 2026 (substituiu a "margarida groovy"). Não introduzir cores fora da paleta nem tipografias novas:

- Cores: rosa `--pink #f4bdda` (cor exata do fundo de `mmqbmq.png`, para o logótipo não mostrar recorte), tinta `--ink #3f1229`, papel `--paper #fdfbfc`, fundo das fotos `--photo #f3f2f4`. O amarelo fica só no logótipo. Botão WhatsApp flutuante é verde (`#1eaa53`) por convenção da plataforma.
- Letra (Google Fonts): **Schibsted Grotesk** em tudo.
- Convenções: filetes em vez de cartões, referências `MMQ-NN` visíveis, sem rotações, margaridas decorativas, emojis ou animações de entrada. Sem travessões (—) nos textos.
- Fotos: uma foto de catálogo é a peça real, recortada e endireitada em fundo uniforme. As peças vestidas são fotos com mulher (`img/modelo-*.jpg`), sem etiquetas grandes nem marcas de água: o dono do projeto prefere-as a manequim. Não usar simulações de tecido sobre o corpo: testadas, notava-se que eram falsas.
- Acessibilidade já implementada e a preservar: skip-link, `aria-expanded`/`aria-pressed`, `prefers-reduced-motion` desativa as transições, fallbacks para JS desligado (`<noscript>`, FAQ em `<details>` nativo).

## Armadilhas conhecidas

- `catalogo/25/cueca*.jpeg` e `img/01.jpeg`, `02.jpeg`, `03.jpeg`, `ref-150.jpg` são os originais, já não usados pelas páginas. As imagens publicadas são `catalogo/25/tratadas/` e `img/modelo-*.jpg`, com menos de 160 KB cada; não adicionar imagens sem otimizar.
- Os metadados nos dois HTML (Open Graph, `canonical`, `hreflang`, JSON-LD) usam URLs absolutos do GitHub Pages: se o site ganhar domínio próprio, atualizá-los em ambas as páginas.
- O menu móvel (`.nav-panel`) é `position: absolute` dentro de uma grid — precisa do `justify-self: stretch` no breakpoint ≤860px para não encolher (bug já corrigido; não remover).
