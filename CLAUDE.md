# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este projeto

Site-portfólio da **"Malmequer bem me quer"** (marca portuguesa de moda íntima feminina — "senhora íntimo"), feito para um cliente. A marca é de um fabricante **de Guimarães, com confeção própria e fabrico em Portugal** (confirmado pelo dono do projeto). Não está confirmado que a confeção seja em Guimarães: escrever "empresa de Guimarães" e "fabricado em Portugal". O objetivo é mostrar a **lojas e revendedores**, com Espanha como mercado prioritário, o que a marca faz e encaminhar pedidos de revenda para o WhatsApp. Envios: Portugal e Espanha; outros países sob consulta. **Não é uma loja online** — não há preços nem checkout; o canal de venda é exclusivamente o WhatsApp (+351 935 521 564). A "lista de pedido" junta referências numa só mensagem de WhatsApp: é um pedido de condições, não um carrinho.

Site estático (HTML + CSS + JS vanilla), sem dependências nem framework. As páginas de cada idioma são geradas por um pequeno script Node. Publicação presumida em GitHub Pages (`https://thecreative1.github.io/MalmequerBemmequer/`).

## Regras invioláveis (não alterar sem autorização do dono do projeto)

1. **O nome da marca nunca se traduz.** Em espanhol e inglês fica igualmente "Malmequer bem me quer" — nunca "Malmequer bien me Quiere" (erro antigo já corrigido). O mesmo vale para nomes de modelos (ex.: "Malmequer Básica").
2. **O logotipo (`mmqbmq.png`) mantém-se sempre** — é a margarida sobre fundo rosa. Não substituir, recriar nem "melhorar".
3. **Não inventar factos comerciais.** Não existem (ainda) dados confirmados sobre: quantidades mínimas, preços, prazos concretos, morada, e-mail, redes sociais. Onde falta informação, o texto diz "sob consulta" e aponta para o WhatsApp. Se uma alteração precisar destes dados, perguntar ao utilizador — nunca preencher com valores plausíveis.
4. **O tom é B2B** — o texto fala com lojistas ("a sua loja", "condições de revenda"), não com consumidoras finais. Manter em qualquer texto novo, nos três idiomas.
5. **Todo o conteúdo visível existe em PT, ES e EN.** Qualquer texto novo tem de ser adicionado nas três línguas em `SITE_TEXT` (ver arquitetura abaixo). Nunca deixar um idioma desatualizado.
6. **O dono do projeto quer ser consultado antes de mudanças de direção** (visual, estrutura, público-alvo). Ajustes pontuais dentro da direção atual não precisam de pergunta; redesenhos e novas secções sim.

## Comandos

Não há lint nem testes. **Depois de alterar `_templates/` ou `site.js`, gerar as páginas:**

```
node tools/build-pages.js
```

Para pré-visualizar localmente:

```
python -m http.server 8123
```

(ou usar a configuração `static-site` em `.claude/launch.json`). Abrir `http://localhost:8123`. Atenção: o browser faz cache agressiva de `styles.css`/`site.js` com este servidor — usar hard-reload ao verificar alterações.

Deploy = gerar as páginas, commit e push para `main` (GitHub Pages serve a raiz do repositório). `_config.yml` deixa de fora do site publicado o `CLAUDE.md`, `tools/` e as fotos originais.

## Arquitetura

Cada idioma tem o seu endereço, por causa do Google: `/` (PT), `/es/` e `/en/`, cada um com página inicial e catálogo. **Nunca editar os HTML gerados** (`index.html`, `catalogo.html`, `es/`, `en/`, `sitemap.xml`, `robots.txt`): editar a fonte e voltar a gerar.

- **`_templates/index.html`** (`data-page="home"`) — página de apresentação: topo rosa com o logótipo, ficha da empresa, peças vestidas, vantagens B2B, linhas de produto, destaques, processo de encomenda, "A empresa", FAQ, contactos.
- **`_templates/catalogo.html`** (`data-page="catalog"`) — catálogo completo com pesquisa e filtros por linha (estado refletido nos parâmetros de URL `categoria` e `busca`).
- **`tools/build-pages.js`** — preenche os modelos com os textos de cada idioma, escreve o catálogo no HTML, os metadados, o `canonical`, o `hreflang`, o `sitemap.xml` e o `robots.txt`. O endereço do site está numa só constante, `SITE_URL`.
- **`site.js`** — todos os dados e a lógica do browser:
  - `SITE_TEXT` — **todas as strings do site**, em `pt`, `es` e `en`. Os modelos marcam onde vão com `data-i18n="chave"` (e variantes `data-i18n-placeholder`, `data-i18n-aria`, `data-i18n-alt`); uma chave em falta faz o gerador falhar. **Ao editar um texto, mudar `SITE_TEXT` nos 3 idiomas e voltar a gerar.**
  - O idioma vem da página (`<html data-lang>`), nunca do browser: o site não muda de idioma sozinho, porque o Google tem de encontrar cada versão. Se o browser preferir outro idioma, `setupLanguageHint()` só mostra um link. Links antigos com `?lang=es` são redirecionados.
  - `CATEGORY_META` — as 4 linhas (`essentials`, `lace`, `maxi`, `prints`) com nome/descrição por idioma e imagem.
  - `PRODUCTS` — os modelos do catálogo. Cada produto tem `id` (formato `MMQ-NN`), `category` (chave de `CATEGORY_META`), `featured` (aparece nos destaques da home), `image` e traduções `pt`/`es`/`en` (`name`, `desc`). A descrição diz só o que se vê na foto: nada de composição ou qualidades por confirmar. **Para adicionar um produto**: colocar a foto tratada em `catalogo/25/tratadas/`, acrescentar uma entrada aqui — as grelhas, filtros e contagens atualizam-se sozinhas.
  - Links de WhatsApp: gerados por `buildWhatsappUrl()`. Nos modelos, os genéricos levam a classe `js-whatsapp-generic` + `data-whatsapp-context` e o gerador escreve a mensagem de `SITE_TEXT`; a lista de pedido usa `buildListMessage()` (guardada em `localStorage` como `mbmq-list`, só com códigos) — todas as mensagens são de **pedido de condições de revenda**, manter esse enquadramento.
- **`styles.css`** — design system completo em variáveis CSS no `:root`.

## Design system

O visual é o de um fabricante: **o rosa vem do logotipo e funde-se com ele; o resto é branco, tinta e grelha**. Direção aprovada pelo dono do projeto em novembro de 2026 (substituiu a "margarida groovy"). Não introduzir cores fora da paleta nem tipografias novas:

- Cores: rosa `--pink #f4bdda` (cor exata do fundo de `mmqbmq.png`, para o logótipo não mostrar recorte), tinta `--ink #3f1229`, papel `--paper #fdfbfc`, fundo das fotos `--photo #f3f2f4`. O amarelo fica só no logótipo. Botão WhatsApp flutuante é verde (`#1eaa53`) por convenção da plataforma.
- Letra (Google Fonts): **Schibsted Grotesk** em tudo.
- Assinatura ("o cós", aprovada em novembro de 2026): vem da própria peça. Recorte em picô do elástico nas orlas rosa, faixa `.waistband` com "malmequer / bem me quer" como no cós real (só o nome da marca, por isso não se traduz), referências `MMQ-NN` como etiqueta cosida e costura tracejada (`--stitch`) a abrir as secções.
- Convenções: filetes em vez de cartões, sem rotações, margaridas decorativas, emojis ou animações de entrada. Movimento só ao passar o rato. Sem travessões (—) nos textos.
- Fotos: uma foto de catálogo é a peça real, recortada e endireitada em fundo uniforme. As peças vestidas são fotos com mulher (`img/modelo-*.jpg`), sem etiquetas grandes nem marcas de água: o dono do projeto prefere-as a manequim. Não usar simulações de tecido sobre o corpo: testadas, notava-se que eram falsas. Exceção aprovada pelo dono do projeto (novembro de 2026): `img/modelo-estampada.jpg`, na secção "A empresa", é uma imagem gerada de modelo com a foto real da MMQ-07 deformada por cima (tecido, cós e etiqueta verdadeiros). Novas composições deste tipo só com aprovação dele.
- Acessibilidade já implementada e a preservar: skip-link, `aria-expanded`/`aria-pressed`, `prefers-reduced-motion` desativa as transições, fallbacks para JS desligado (`<noscript>`, FAQ em `<details>` nativo).

## Armadilhas conhecidas

- As fotos vestidas (`img/modelo-*.jpg`) têm versões WebP (`.webp` com 1000 px e `-600.webp`), servidas por `<picture>` em `_templates/index.html`. Ao trocar uma foto, gerar também as duas WebP com o mesmo nome.
- `_templates/404.html` gera uma só página 404 para os três idiomas (o GitHub Pages serve-a em qualquer endereço em falta): caminhos absolutos e `noindex`.
- **Catálogo em construção**: enquanto `CATALOG_READY` em `site.js` for `false`, o site não mostra modelos, filtros nem lista de pedido; mostra o aviso e encaminha para o WhatsApp. Os modelos têm blocos `<!--ready-->` e `<!--building-->`, e o gerador fica só com os do modo ativo. Para publicar o catálogo: passar a `true` e voltar a gerar.
- `googlee5f53c7884dc1364.html` e `BingSiteAuth.xml` são as verificações do Google Search Console e do Bing Webmaster Tools: não apagar nem editar.

- `catalogo/25/cueca*.jpeg` e `img/01.jpeg`, `02.jpeg`, `03.jpeg`, `ref-150.jpg` são os originais, já não usados pelas páginas. As imagens publicadas são `catalogo/25/tratadas/` e `img/modelo-*.jpg`, com menos de 160 KB cada; não adicionar imagens sem otimizar.
- Os metadados (Open Graph, `canonical`, `hreflang`, JSON-LD, sitemap) usam URLs absolutos: se o site ganhar domínio próprio, mudar `SITE_URL` em `tools/build-pages.js` e voltar a gerar. O `robots.txt` só tem efeito na raiz de um domínio próprio.
- SEO: os textos usam de propósito as palavras dos compradores ("cuecas", "por grosso"; "bragas", "al por mayor"; "briefs", "wholesale"). Manter ao rever textos, sem as forçar.
- Telemóvel: alvos de toque com pelo menos 44 px, efeitos de `:hover` só dentro de `@media (hover: hover)` (no toque ficam presos) e o WhatsApp flutuante recolhe quando `.hero-actions` ou `.contact-actions` estão à vista. Testar de 320 px a desktop, com o telemóvel deitado, nos três idiomas (o espanhol tem os textos mais longos).
- O menu móvel (`.nav-panel`) é `position: absolute` dentro de uma grid — precisa do `justify-self: stretch` no breakpoint ≤860px para não encolher (bug já corrigido; não remover).
