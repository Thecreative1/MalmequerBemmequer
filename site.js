const WHATSAPP_NUMBER = "351935521564";
const SITE_LANGUAGES = ["pt", "es", "en"];

// Enquanto for false, o site diz "catálogo em construção": sem modelos, filtros nem lista de pedido.
// Quando o catálogo estiver pronto, passar a true e voltar a gerar (node tools/build-pages.js).
const CATALOG_READY = false;

const SITE_TEXT = {
  pt: {
    pageTitleHome: "Fabricante de cuecas de senhora por grosso | Malmequer bem me quer",
    pageTitleCatalog: "Catálogo de cuecas de senhora para revenda | Malmequer bem me quer",
    pageDescHome: "Empresa de Guimarães com confeção própria. Cuecas e roupa interior feminina fabricadas em Portugal, para venda por grosso a lojas e revendedores.",
    pageDescCatalog: "Catálogo de cuecas e roupa interior feminina fabricadas em Portugal, para venda por grosso. Quatro linhas para lojas e revendedores. Peça as condições.",
    skipContent: "Saltar para o conteúdo",
    languageLabel: "Seletor de idioma",
    langHintClose: "Fechar",
    langHint: "Ver esta página em português",
    navLabel: "Principal",
    navCatalog: "Catálogo",
    navOrder: "Como encomendar",
    navCompany: "A empresa",
    menuLabel: "Abrir menu",
    logoAlt: "Logótipo da Malmequer bem me quer",
    heroKicker: "Fabricante de cuecas de senhora · Guimarães, Portugal",
    homeHeroTitle: "Roupa interior feminina, direta da confeção.",
    homeHeroDesc: "Somos uma empresa de Guimarães com confeção própria. Fabricamos cuecas de senhora em Portugal para lojas e revendedores, e vendemos por grosso, sem intermediários.",
    ctaCatalog: "Ver catálogo",
    ctaWhatsApp: "Pedir condições",
    fact1Label: "Origem",
    fact1Value: "Fabricado em Portugal",
    fact2Label: "Empresa",
    fact2Value: "Guimarães, com confeção própria",
    fact3Label: "Envios",
    fact3Value: "Portugal e Espanha. Outros países sob consulta",
    fact4Label: "Atendimento",
    wallAlt1: "Mulher a vestir modelo branco com renda lateral",
    wallAlt2: "Mulher a vestir modelo branco de cintura alta",
    wallAlt3: "Mulher a vestir modelo cor de pele de cintura alta",
    benefitsTitle: "Trate diretamente com quem produz.",
    benefit1Title: "Sem intermediários",
    benefit1Desc: "As condições, os tamanhos e a disponibilidade são tratados diretamente com quem fabrica. Uma só conversa, do primeiro contacto ao fecho da encomenda.",
    benefit2Title: "Produção portuguesa",
    benefit2Desc: "Todas as peças são feitas em Portugal, na nossa própria confeção. Uma origem clara, que pode apresentar com confiança às suas clientes.",
    benefit3Title: "Quatro linhas que se completam",
    benefit3Desc: "Essenciais, renda, maxi e estampadas: uma gama coerente para compor a oferta de uma loja ou abastecer uma rede de pontos de venda.",
    collectionsTitle: "Linhas de cuecas e roupa interior",
    previewTitle: "Uma seleção do catálogo",
    previewAll: "Ver todas as referências",
    processTitle: "Como encomendar",
    process1Title: "Escolha as referências",
    process1Desc: "Consulte o catálogo e junte à sua lista os modelos que fazem sentido para a sua loja ou rede. Cada um tem um código próprio, que simplifica o pedido.",
    process2Title: "Peça as condições",
    process2Desc: "Envie-nos a lista e o país de destino por WhatsApp, numa só mensagem. Respondemos com as condições de revenda, os tamanhos disponíveis e os prazos.",
    process3Title: "Confirme e receba",
    process3Desc: "Acertamos consigo as quantidades e o envio, e acompanhamos a encomenda diretamente, sem passar por terceiros.",
    aboutTitle: "Empresa nova, ofício de muitos anos.",
    aboutBody1: "A Malmequer bem me quer nasceu em Guimarães, no Vale do Ave, pela mão de Jorge Mendes. A empresa é recente; a experiência não. Depois de muitos anos a trabalhar no setor, deu o passo que faltava e abriu a sua própria confeção.",
    aboutBody2: "Somos uma empresa de família: a mãe e a irmã trabalham cá também. Fazemos cuecas de senhora, todas fabricadas em Portugal, sem intermediários entre a produção e a sua loja. Quando fala connosco, fala com quem faz.",
    aboutBody3: "Trabalhamos com lojas e revendedores em Portugal e Espanha, e analisamos outros mercados sob consulta. As condições definem-se caso a caso, conforme o perfil e o volume de cada cliente. O que fica combinado, cumpre-se.",
    aboutNote: "Há quem pergunte às pétalas. Nós ficámos com a resposta.",
    aboutAlt: "Mulher a vestir modelo preto com pequeno estampado floral, visto de frente, de lado e de costas",
    faqTitle: "Perguntas frequentes",
    faq1Q: "Qual é a quantidade mínima de encomenda?",
    faq1A: "As quantidades mínimas e as condições de revenda são definidas caso a caso, conforme o perfil da loja e o volume previsto. Fale connosco por WhatsApp para receber uma proposta.",
    faq2Q: "Que tamanhos estão disponíveis?",
    faq2A: "A disponibilidade por modelo e tamanho é confirmada no atendimento. Indique as referências que lhe interessam e enviamos a informação de cada uma.",
    faq3Q: "Quanto tempo demora a entrega?",
    faq3A: "O prazo depende do destino e da quantidade encomendada, e é confirmado antes do fecho da encomenda.",
    faq4Q: "Como funciona o pagamento?",
    faq4A: "As condições de pagamento são acordadas diretamente connosco antes do fecho da encomenda, sem intermediários.",
    faq5Q: "Enviam para fora de Portugal e Espanha?",
    faq5A: "Outros países são analisados sob consulta. Indique-nos o destino e o volume previsto, e confirmamos as opções de envio.",
    faq6Q: "O catálogo destina-se a quem?",
    faq6A: "A lojas e revendedores. Este site não faz venda ao público: serve para conhecer a gama e pedir as condições de revenda.",
    faq7Q: "Posso obter a composição de cada modelo?",
    faq7A: "Sim. A composição e os tamanhos são indicados sob consulta, referência a referência.",
    contactTitle: "Peça as condições de revenda.",
    contactDesc: "Diga-nos que referências lhe interessam, o país da sua loja e o tipo de negócio. Respondemos em português, espanhol ou inglês, com uma proposta adequada ao seu caso.",
    contactShipping: "Envios: Portugal e Espanha. Outros países sob consulta",
    contactPrimary: "Falar no WhatsApp",
    footerNote: "Roupa interior feminina fabricada em Portugal · Guimarães",
    noScript: "Ative o JavaScript para usar os filtros e a lista de pedido.",
    catalogTitle: "Catálogo",
    catalogLead: "As nossas cuecas e peças de roupa interior, organizadas por linha. Junte à sua lista os modelos que lhe interessam e peça as condições de venda por grosso numa só mensagem de WhatsApp.",
    catalogSearchLabel: "Pesquisar",
    catalogSearchPlaceholder: "Nome ou referência (ex.: MMQ-04)",
    catalogFilterLabel: "Linha",
    catalogResetFilters: "Limpar filtros",
    catalogEmptyTitle: "Nenhum modelo encontrado",
    catalogEmptyDesc: "Tente outro termo ou limpe os filtros para voltar a ver o catálogo completo.",
    catalogAvailability: "Tamanhos, composição e condições sob consulta",
    catalogAllFilter: "Todas",
    referenceSingular: "referência",
    referencePlural: "referências",
    listAdd: "Adicionar à lista",
    listAdded: "Na lista",
    listAddAria: "Adicionar à lista: {item}",
    listRemoveAria: "Remover da lista: {item}",
    listRegion: "Lista de pedido",
    listTitle: "A sua lista de pedido",
    listHint: "Enviamos-lhe as condições destas referências por WhatsApp. Pedir condições não é fazer uma encomenda.",
    listOpen: "Ver a lista",
    listClose: "Fechar a lista",
    listSend: "Enviar por WhatsApp",
    listRemove: "Remover",
    listClear: "Limpar a lista",
    listMessageIntro: "Olá! Tenho uma loja e gostava de receber as condições de revenda destas referências:",
    listMessageCountry: "País da loja:",
    genericWhatsappMessage: "Olá! Tenho interesse em revender a Malmequer bem me quer. Podem enviar-me as condições de revenda?",
    catalogWhatsappMessage: "Olá! Estou a ver o catálogo da Malmequer bem me quer e gostava de receber as condições de revenda para alguns modelos.",
    notFoundTitle: "Página não encontrada",
    notFoundCta: "Ir para a página inicial",
    buildingTitle: "Catálogo em construção",
    buildingDesc: "Estamos a preparar o catálogo online. Entretanto, contacte-nos pelo WhatsApp para receber o catálogo ou falar de encomendas para a sua loja.",
    buildingCta: "Pedir o catálogo",
    process1BuildingTitle: "Peça o catálogo",
    process1BuildingDesc: "O catálogo online está em construção. Fale connosco pelo WhatsApp e enviamos-lhe os modelos, cada um com o seu código, que simplifica o pedido.",
    process2BuildingDesc: "Indique-nos as referências que lhe interessam e o país de destino por WhatsApp. Respondemos com as condições de revenda, os tamanhos disponíveis e os prazos.",
    catalogBuildingWhatsappMessage: "Olá! Tenho uma loja e gostava de receber o catálogo da Malmequer bem me quer e as condições de revenda."
  },
  es: {
    pageTitleHome: "Fabricante de bragas al por mayor en Portugal | Malmequer bem me quer",
    pageTitleCatalog: "Catálogo de bragas al por mayor | Malmequer bem me quer",
    pageDescHome: "Empresa de Guimarães con confección propia. Bragas y ropa interior femenina fabricadas en Portugal, al por mayor para tiendas y distribuidores.",
    pageDescCatalog: "Catálogo de bragas y ropa interior femenina fabricadas en Portugal, al por mayor. Cuatro líneas para tiendas y distribuidores. Pida las condiciones.",
    skipContent: "Saltar al contenido",
    languageLabel: "Selector de idioma",
    langHintClose: "Cerrar",
    langHint: "Ver esta página en español",
    navLabel: "Principal",
    navCatalog: "Catálogo",
    navOrder: "Cómo hacer un pedido",
    navCompany: "La empresa",
    menuLabel: "Abrir menú",
    logoAlt: "Logotipo de Malmequer bem me quer",
    heroKicker: "Fabricante de bragas de mujer · Guimarães, Portugal",
    homeHeroTitle: "Ropa interior femenina, directa de fábrica.",
    homeHeroDesc: "Somos una empresa de Guimarães con confección propia. Fabricamos bragas de mujer en Portugal para tiendas y distribuidores, y vendemos al por mayor, sin intermediarios.",
    ctaCatalog: "Ver catálogo",
    ctaWhatsApp: "Pedir condiciones",
    fact1Label: "Origen",
    fact1Value: "Fabricado en Portugal",
    fact2Label: "Empresa",
    fact2Value: "Guimarães, con confección propia",
    fact3Label: "Envíos",
    fact3Value: "Portugal y España. Otros países bajo consulta",
    fact4Label: "Atención",
    wallAlt1: "Mujer con modelo blanco con encaje lateral",
    wallAlt2: "Mujer con modelo blanco de talle alto",
    wallAlt3: "Mujer con modelo color carne de talle alto",
    benefitsTitle: "Trate directamente con quien produce.",
    benefit1Title: "Sin intermediarios",
    benefit1Desc: "Las condiciones, las tallas y la disponibilidad se tratan directamente con quien fabrica. Una sola conversación, desde el primer contacto hasta el cierre del pedido.",
    benefit2Title: "Producción portuguesa",
    benefit2Desc: "Todas las piezas se hacen en Portugal, en nuestra propia confección. Un origen claro, que puede presentar con confianza a sus clientas.",
    benefit3Title: "Cuatro líneas que se complementan",
    benefit3Desc: "Esenciales, encaje, maxi y estampadas: una gama coherente para completar la oferta de una tienda o abastecer una red de puntos de venta.",
    collectionsTitle: "Líneas de bragas y ropa interior",
    previewTitle: "Una selección del catálogo",
    previewAll: "Ver todas las referencias",
    processTitle: "Cómo hacer un pedido",
    process1Title: "Elija las referencias",
    process1Desc: "Consulte el catálogo y añada a su lista los modelos que encajan con su tienda o su red. Cada uno tiene un código propio, que simplifica el pedido.",
    process2Title: "Pida las condiciones",
    process2Desc: "Envíenos la lista y el país de destino por WhatsApp, en un solo mensaje. Le respondemos con las condiciones de reventa, las tallas disponibles y los plazos.",
    process3Title: "Confirme y reciba",
    process3Desc: "Acordamos con usted las cantidades y el envío, y hacemos el seguimiento del pedido directamente, sin pasar por terceros.",
    aboutTitle: "Empresa nueva, oficio de muchos años.",
    aboutBody1: "Malmequer bem me quer nació en Guimarães, en el Valle del Ave, de la mano de Jorge Mendes. La empresa es reciente; la experiencia, no. Tras muchos años trabajando en el sector, dio el paso que faltaba y abrió su propia confección.",
    aboutBody2: "Somos una empresa familiar: su madre y su hermana también trabajan aquí. Fabricamos bragas de mujer, todas hechas en Portugal, sin intermediarios entre la producción y su tienda. Cuando habla con nosotros, habla con quien fabrica.",
    aboutBody3: "Trabajamos con tiendas y distribuidores en Portugal y España, y estudiamos otros mercados bajo consulta. Las condiciones se definen caso por caso, según el perfil y el volumen de cada cliente. Lo que se acuerda, se cumple.",
    aboutNote: "Hay quien deshoja la margarita. Nosotros nos quedamos con la respuesta: bem me quer, me quiere.",
    aboutAlt: "Mujer con modelo negro de pequeño estampado floral, visto de frente, de lado y de espalda",
    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿Cuál es el pedido mínimo?",
    faq1A: "Los pedidos mínimos y las condiciones de reventa se definen caso por caso, según el perfil de la tienda y el volumen previsto. Escríbanos por WhatsApp para recibir una propuesta.",
    faq2Q: "¿Qué tallas hay disponibles?",
    faq2A: "La disponibilidad por modelo y talla se confirma en la atención. Indíquenos las referencias que le interesan y le enviamos la información de cada una.",
    faq3Q: "¿Cuánto tarda la entrega?",
    faq3A: "El plazo depende del destino y de la cantidad pedida, y se confirma antes de cerrar el pedido.",
    faq4Q: "¿Cómo funciona el pago?",
    faq4A: "Las condiciones de pago se acuerdan directamente con nosotros antes de cerrar el pedido, sin intermediarios.",
    faq5Q: "¿Envían fuera de Portugal y España?",
    faq5A: "Otros países se estudian bajo consulta. Indíquenos el destino y el volumen previsto, y le confirmamos las opciones de envío.",
    faq6Q: "¿A quién se dirige el catálogo?",
    faq6A: "A tiendas y distribuidores. Este sitio no vende al público: sirve para conocer la gama y pedir las condiciones de reventa.",
    faq7Q: "¿Puedo conocer la composición de cada modelo?",
    faq7A: "Sí. La composición y las tallas se indican bajo consulta, referencia por referencia.",
    contactTitle: "Pida las condiciones de reventa.",
    contactDesc: "Díganos qué referencias le interesan, el país de su tienda y el tipo de negocio. Respondemos en portugués, español o inglés, con una propuesta adecuada a su caso.",
    contactShipping: "Envíos: Portugal y España. Otros países bajo consulta",
    contactPrimary: "Hablar por WhatsApp",
    footerNote: "Ropa interior femenina fabricada en Portugal · Guimarães",
    noScript: "Active JavaScript para usar los filtros y la lista de pedido.",
    catalogTitle: "Catálogo",
    catalogLead: "Nuestras bragas y prendas de ropa interior, organizadas por línea. Añada a su lista los modelos que le interesan y pida las condiciones al por mayor en un solo mensaje de WhatsApp.",
    catalogSearchLabel: "Buscar",
    catalogSearchPlaceholder: "Nombre o referencia (ej.: MMQ-04)",
    catalogFilterLabel: "Línea",
    catalogResetFilters: "Borrar filtros",
    catalogEmptyTitle: "No se ha encontrado ningún modelo",
    catalogEmptyDesc: "Pruebe otro término o borre los filtros para volver a ver el catálogo completo.",
    catalogAvailability: "Tallas, composición y condiciones bajo consulta",
    catalogAllFilter: "Todas",
    referenceSingular: "referencia",
    referencePlural: "referencias",
    listAdd: "Añadir a la lista",
    listAdded: "En la lista",
    listAddAria: "Añadir a la lista: {item}",
    listRemoveAria: "Quitar de la lista: {item}",
    listRegion: "Lista de pedido",
    listTitle: "Su lista de pedido",
    listHint: "Le enviamos las condiciones de estas referencias por WhatsApp. Pedir condiciones no es hacer un pedido en firme.",
    listOpen: "Ver la lista",
    listClose: "Cerrar la lista",
    listSend: "Enviar por WhatsApp",
    listRemove: "Quitar",
    listClear: "Vaciar la lista",
    listMessageIntro: "¡Hola! Tengo una tienda y me gustaría recibir las condiciones de reventa de estas referencias:",
    listMessageCountry: "País de la tienda:",
    genericWhatsappMessage: "¡Hola! Me interesa revender Malmequer bem me quer. ¿Pueden enviarme las condiciones de reventa?",
    catalogWhatsappMessage: "¡Hola! Estoy viendo el catálogo de Malmequer bem me quer y me gustaría recibir las condiciones de reventa de algunos modelos.",
    notFoundTitle: "Página no encontrada",
    notFoundCta: "Ir a la página de inicio",
    buildingTitle: "Catálogo en construcción",
    buildingDesc: "Estamos preparando el catálogo online. Mientras tanto, contáctenos por WhatsApp para recibir el catálogo o hablar de pedidos para su tienda.",
    buildingCta: "Pedir el catálogo",
    process1BuildingTitle: "Pida el catálogo",
    process1BuildingDesc: "El catálogo online está en construcción. Escríbanos por WhatsApp y le enviamos los modelos, cada uno con su código, que simplifica el pedido.",
    process2BuildingDesc: "Indíquenos las referencias que le interesan y el país de destino por WhatsApp. Le respondemos con las condiciones de reventa, las tallas disponibles y los plazos.",
    catalogBuildingWhatsappMessage: "¡Hola! Tengo una tienda y me gustaría recibir el catálogo de Malmequer bem me quer y las condiciones de reventa."
  },
  en: {
    pageTitleHome: "Wholesale women's briefs, made in Portugal | Malmequer bem me quer",
    pageTitleCatalog: "Wholesale women's briefs catalogue | Malmequer bem me quer",
    pageDescHome: "A company from Guimarães with its own production. Women's briefs and underwear made in Portugal, sold wholesale to shops and resellers.",
    pageDescCatalog: "Wholesale catalogue of women's briefs and underwear made in Portugal. Four lines for shops and resellers. Ask for our terms.",
    skipContent: "Skip to content",
    languageLabel: "Language selector",
    langHintClose: "Close",
    langHint: "See this page in English",
    navLabel: "Main",
    navCatalog: "Catalogue",
    navOrder: "How to order",
    navCompany: "The company",
    menuLabel: "Open menu",
    logoAlt: "Malmequer bem me quer logo",
    heroKicker: "Women's briefs manufacturer · Guimarães, Portugal",
    homeHeroTitle: "Women's underwear, direct from the maker.",
    homeHeroDesc: "We are a company from Guimarães with our own production. We manufacture women's briefs in Portugal for shops and resellers, and sell wholesale, with no middlemen.",
    ctaCatalog: "View catalogue",
    ctaWhatsApp: "Ask for terms",
    fact1Label: "Origin",
    fact1Value: "Made in Portugal",
    fact2Label: "Company",
    fact2Value: "Guimarães, with our own production",
    fact3Label: "Shipping",
    fact3Value: "Portugal and Spain. Other countries on request",
    fact4Label: "Service",
    wallAlt1: "Woman wearing a white style with side lace",
    wallAlt2: "Woman wearing a white high-waisted style",
    wallAlt3: "Woman wearing a nude high-waisted style",
    benefitsTitle: "Deal directly with the maker.",
    benefit1Title: "No middlemen",
    benefit1Desc: "Terms, sizes and availability are handled directly with the people who make the product. One conversation, from first contact to final order.",
    benefit2Title: "Portuguese production",
    benefit2Desc: "Every piece is made in Portugal, in our own facility. A clear origin you can present to your customers with confidence.",
    benefit3Title: "Four lines that work together",
    benefit3Desc: "Essentials, lace, maxi and prints: a coherent range to build the offer of a single shop or supply a network of stores.",
    collectionsTitle: "Briefs and underwear lines",
    previewTitle: "A selection from the catalogue",
    previewAll: "See all references",
    processTitle: "How to order",
    process1Title: "Choose your references",
    process1Desc: "Browse the catalogue and add the styles that suit your shop or network to your list. Each has its own code, which keeps ordering simple.",
    process2Title: "Ask for terms",
    process2Desc: "Send us the list and destination country over WhatsApp, in a single message. We reply with resale terms, available sizes and lead times.",
    process3Title: "Confirm and receive",
    process3Desc: "We agree quantities and shipping with you, and follow up on the order directly, with no third parties involved.",
    aboutTitle: "A new company, built on years in the trade.",
    aboutBody1: "Malmequer bem me quer was founded in Guimarães, in the Ave Valley, by Jorge Mendes. The company is recent; the experience is not. Many years of work in the sector came first, and setting up our own production was the step that was missing.",
    aboutBody2: "We are a family business: the founder's mother and sister work here too. We make women's briefs, all manufactured in Portugal, with no intermediaries between production and your shop. When you talk to us, you talk to the people who make them.",
    aboutBody3: "We work with shops and resellers in Portugal and Spain, and consider other markets on request. Terms are set case by case, according to each customer's profile and volume. What we agree, we deliver.",
    aboutNote: "Some ask the petals. We kept the answer: bem me quer, loves me.",
    aboutAlt: "Woman wearing a black style with a small floral print, seen from the front, side and back",
    faqTitle: "Frequently asked questions",
    faq1Q: "What is the minimum order?",
    faq1A: "Minimum orders and resale terms are set case by case, according to the shop's profile and expected volume. Message us on WhatsApp for a proposal.",
    faq2Q: "Which sizes are available?",
    faq2A: "Availability by style and size is confirmed when you contact us. Tell us which references interest you and we will send the details for each one.",
    faq3Q: "How long does delivery take?",
    faq3A: "Lead time depends on destination and order quantity, and is confirmed before the order is finalised.",
    faq4Q: "How does payment work?",
    faq4A: "Payment terms are agreed directly with us before the order is finalised, with no middlemen.",
    faq5Q: "Do you ship outside Portugal and Spain?",
    faq5A: "Other countries are considered on request. Tell us the destination and expected volume, and we will confirm the shipping options.",
    faq6Q: "Who is the catalogue for?",
    faq6A: "Shops and resellers. This site does not sell to the public: it is there to present the range and let you ask for resale terms.",
    faq7Q: "Can I get the composition of each style?",
    faq7A: "Yes. Composition and sizes are provided on request, reference by reference.",
    contactTitle: "Ask for our resale terms.",
    contactDesc: "Tell us which references interest you, where your shop is and what kind of business you run. We reply in Portuguese, Spanish or English, with a proposal suited to your case.",
    contactShipping: "Shipping: Portugal and Spain. Other countries on request",
    contactPrimary: "Message us on WhatsApp",
    footerNote: "Women's underwear made in Portugal · Guimarães",
    noScript: "Turn on JavaScript to use the filters and the request list.",
    catalogTitle: "Catalogue",
    catalogLead: "Our briefs and underwear, organised by line. Add the styles that interest you to your list and ask for wholesale terms in a single WhatsApp message.",
    catalogSearchLabel: "Search",
    catalogSearchPlaceholder: "Name or reference (e.g. MMQ-04)",
    catalogFilterLabel: "Line",
    catalogResetFilters: "Clear filters",
    catalogEmptyTitle: "No styles found",
    catalogEmptyDesc: "Try another term or clear the filters to see the full catalogue again.",
    catalogAvailability: "Sizes, composition and terms on request",
    catalogAllFilter: "All",
    referenceSingular: "reference",
    referencePlural: "references",
    listAdd: "Add to list",
    listAdded: "On your list",
    listAddAria: "Add to list: {item}",
    listRemoveAria: "Remove from list: {item}",
    listRegion: "Request list",
    listTitle: "Your request list",
    listHint: "We will send you terms for these references over WhatsApp. Asking for terms is not placing an order.",
    listOpen: "View list",
    listClose: "Close list",
    listSend: "Send on WhatsApp",
    listRemove: "Remove",
    listClear: "Clear list",
    listMessageIntro: "Hello! I have a shop and would like to receive resale terms for these references:",
    listMessageCountry: "Shop country:",
    genericWhatsappMessage: "Hello! I am interested in reselling Malmequer bem me quer. Could you send me your resale terms?",
    catalogWhatsappMessage: "Hello! I am looking at the Malmequer bem me quer catalogue and would like to receive resale terms for some styles.",
    notFoundTitle: "Page not found",
    notFoundCta: "Go to the home page",
    buildingTitle: "Catalogue in progress",
    buildingDesc: "We are preparing the online catalogue. In the meantime, contact us on WhatsApp to receive the catalogue or discuss orders for your shop.",
    buildingCta: "Ask for the catalogue",
    process1BuildingTitle: "Ask for the catalogue",
    process1BuildingDesc: "The online catalogue is in progress. Message us on WhatsApp and we will send you the styles, each with its own code, which keeps ordering simple.",
    process2BuildingDesc: "Tell us which references interest you and the destination country over WhatsApp. We reply with resale terms, available sizes and lead times.",
    catalogBuildingWhatsappMessage: "Hello! I have a shop and would like to receive the Malmequer bem me quer catalogue and your resale terms."
  }
};

const CATEGORY_META = {
  essentials: {
    image: "img/linha-essenciais.jpg",
    pt: { name: "Essenciais", description: "Modelos lisos, de linhas simples e tons neutros. A base de qualquer oferta de roupa interior." },
    es: { name: "Esenciales", description: "Modelos lisos, de líneas sencillas y tonos neutros. La base de cualquier oferta de ropa interior." },
    en: { name: "Essentials", description: "Plain styles with simple lines and neutral tones. The foundation of any underwear range." }
  },
  lace: {
    image: "img/linha-renda.jpg",
    pt: { name: "Renda", description: "Acabamentos mais trabalhados, para completar a oferta com peças de maior detalhe." },
    es: { name: "Encaje", description: "Acabados más elaborados, para completar la oferta con piezas de mayor detalle." },
    en: { name: "Lace", description: "More detailed finishes, to round out the range with finer pieces." }
  },
  maxi: {
    image: "img/linha-maxi.jpg",
    pt: { name: "Maxi", description: "Cintura alta e maior cobertura, para a clientela que prefere um corte mais subido." },
    es: { name: "Maxi", description: "Talle alto y mayor cobertura, para la clientela que prefiere un corte más alto." },
    en: { name: "Maxi", description: "High waist and fuller coverage, for customers who prefer a higher cut." }
  },
  prints: {
    image: "img/linha-estampadas.jpg",
    pt: { name: "Estampadas", description: "Pequenos estampados florais sobre fundos neutros, para dar variedade à oferta sem perder discrição." },
    es: { name: "Estampadas", description: "Pequeños estampados florales sobre fondos neutros, para dar variedad a la oferta sin perder discreción." },
    en: { name: "Prints", description: "Small floral prints on neutral grounds, to add variety to the range while staying understated." }
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
  search: "",
  list: loadRequestList(),
  listOpen: false
};

document.addEventListener("DOMContentLoaded", () => {
  if (redirectLegacyLanguageUrl()) {
    return;
  }

  setupYear();
  setupWaistbands();
  setupFloatingWhatsapp();
  setupRequestList();
  setupMenu();
  initializeCatalogState();
  refreshPage();
  setupCatalogControls();
  setupLanguageHint();
});

function getInitialLanguage() {
  return document.documentElement.dataset.lang || "pt";
}

// Links antigos com ?lang=es passam para a página própria do idioma.
function redirectLegacyLanguageUrl() {
  const url = new URL(window.location.href);
  const requested = url.searchParams.get("lang");
  const link = document.querySelector(`[data-lang-link="${requested}"]`);

  if (!link || !SITE_LANGUAGES.includes(requested) || requested === state.lang) {
    return false;
  }

  url.searchParams.delete("lang");
  window.location.replace(`${link.href}${url.search}${url.hash}`);
  return true;
}

function assetUrl(path) {
  return `${document.body.dataset.base || ""}${path}`;
}

// Nunca muda o idioma sozinho: o Google tem de encontrar cada versão. Sugere, com um link.
function setupLanguageHint() {
  const suggested = detectBrowserLanguage();
  const link = document.querySelector(`[data-lang-link="${suggested}"]`);
  let dismissed = false;
  const rememberChoice = () => {
    try {
      window.localStorage.setItem("mbmq-lang-hint", "1");
    } catch (error) {
      // Ignore localStorage issues: the suggestion returns on the next page.
    }
  };

  // Quem escolhe um idioma já decidiu: a sugestão não volta a aparecer.
  document.querySelectorAll("[data-lang-link]").forEach((entry) => {
    entry.addEventListener("click", rememberChoice);
  });

  try {
    dismissed = window.localStorage.getItem("mbmq-lang-hint") === "1";
  } catch (error) {
    // Ignore localStorage issues and keep showing the suggestion.
  }

  if (suggested === state.lang || dismissed || !link) {
    return;
  }

  const text = SITE_TEXT[suggested];
  const hint = document.createElement("div");
  hint.className = "lang-hint";
  hint.lang = suggested;
  hint.innerHTML = `
    <a href="${escapeHtml(link.getAttribute("href"))}" hreflang="${suggested}">${escapeHtml(text.langHint)}</a>
    <button type="button" aria-label="${escapeHtml(text.langHintClose)}">&times;</button>
  `;
  hint.querySelector("a").addEventListener("click", rememberChoice);
  hint.querySelector("button").addEventListener("click", () => {
    hint.remove();
    rememberChoice();
  });
  document.querySelector(".site-header").after(hint);
}

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

// A lista guarda só códigos: não é um carrinho, não tem preços nem encomenda.
function loadRequestList() {
  if (!CATALOG_READY) {
    return [];
  }

  try {
    const stored = JSON.parse(window.localStorage.getItem("mbmq-list") || "[]");
    return Array.isArray(stored)
      ? stored.filter((id) => PRODUCTS.some((product) => product.id === id))
      : [];
  } catch (error) {
    return [];
  }
}

function saveRequestList() {
  try {
    window.localStorage.setItem("mbmq-list", JSON.stringify(state.list));
  } catch (error) {
    // Ignore localStorage issues: the list still works until the page closes.
  }
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

// A faixa repete o nome da marca, que nunca se traduz; é decorativa.
function setupWaistbands() {
  const flower = '<span class="waistband-flower"></span>';
  const pair = `<span>malmequer</span>${flower}<span>bem me quer</span>${flower}`;

  document.querySelectorAll(".waistband").forEach((band) => {
    band.innerHTML = pair.repeat(14);
  });
}

// O botão flutuante recolhe quando os botões principais estão à vista.
function setupFloatingWhatsapp() {
  const button = document.querySelector(".floating-whatsapp");
  const targets = document.querySelectorAll(".hero-actions, .contact-actions");

  if (!button || !targets.length || !("IntersectionObserver" in window)) {
    return;
  }

  // Começa recolhido para não piscar por cima dos botões ao abrir a página.
  button.classList.add("is-hidden");

  const visible = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visible.add(entry.target);
      } else {
        visible.delete(entry.target);
      }
    });
    button.classList.toggle("is-hidden", visible.size > 0);
  });

  targets.forEach((target) => observer.observe(target));
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
  if (getCurrentPage() === "catalog") {
    renderCatalogFilters();
    renderCatalogProducts();
  }

  syncRequestList();
}

// As duas funções seguintes só são usadas por tools/build-pages.js, ao gerar as páginas.
function buildHomeCollections(lang) {
  return Object.entries(CATEGORY_META)
    .map(([key, category]) => {
      const translated = category[lang];
      const total = PRODUCTS.filter((product) => product.category === key).length;
      const content = `
          <img src="${escapeHtml(assetUrl(category.image))}" alt="" width="112" height="112" loading="lazy" decoding="async">
          <h3>${escapeHtml(translated.name)}</h3>
          <p>${escapeHtml(translated.description)}</p>`;

      // Com o catálogo em construção, a linha só se apresenta: não leva a lado nenhum.
      if (!CATALOG_READY) {
        return `
        <div class="line-row">${content}
        </div>
      `;
      }

      return `
        <a class="line-row" href="catalogo.html?categoria=${encodeURIComponent(key)}">${content}
          <span class="line-count">${escapeHtml(formatReferenceCount(total, lang))}</span>
        </a>
      `;
    })
    .join("");
}

function buildHomePreview(lang) {
  return PRODUCTS.filter((product) => product.featured)
    .map((product) => buildProductCard(product, lang))
    .join("");
}

function renderCatalogFilters() {
  const container = document.getElementById("category-filters");
  if (!container) {
    return;
  }

  container.innerHTML = buildCatalogFilters(state.lang, state.category);

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

function buildCatalogFilters(lang, activeCategory) {
  const entries = [
    {
      key: "all",
      label: SITE_TEXT[lang].catalogAllFilter,
      count: PRODUCTS.length
    },
    ...Object.entries(CATEGORY_META).map(([key, category]) => ({
      key,
      label: category[lang].name,
      count: PRODUCTS.filter((product) => product.category === key).length
    }))
  ];

  return entries
    .map((entry) => {
      const isActive = entry.key === activeCategory;
      return `
        <button class="filter-chip${isActive ? " is-active" : ""}" type="button" data-filter="${escapeHtml(entry.key)}" aria-pressed="${isActive}">
          ${escapeHtml(entry.label)} (${entry.count})
        </button>
      `;
    })
    .join("");
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
        <img src="${escapeHtml(assetUrl(product.image))}" alt="${escapeHtml(`${translated.name}: ${translated.desc}`)}" width="800" height="800" loading="lazy" decoding="async">
      </div>
      <h3 class="product-title">${escapeHtml(translated.name)}</h3>
      <p class="product-desc">${escapeHtml(translated.desc)}</p>
      ${buildListButton(product, lang)}
    </article>
  `;
}

function buildListButton(product, lang) {
  const isAdded = state.list.includes(product.id);
  const text = SITE_TEXT[lang];
  const item = `${product[lang].name} (${product.id})`;
  const aria = (isAdded ? text.listRemoveAria : text.listAddAria).replace("{item}", item);

  return `
    <button class="product-add${isAdded ? " is-added" : ""}" type="button" data-list-toggle="${escapeHtml(product.id)}" aria-label="${escapeHtml(aria)}">
      ${escapeHtml(isAdded ? text.listAdded : text.listAdd)}
    </button>
  `;
}

function buildListMessage(lang) {
  const text = SITE_TEXT[lang];
  const lines = state.list.map((id) => {
    const product = PRODUCTS.find((entry) => entry.id === id);
    return `- ${id}: ${product[lang].name}`;
  });

  return `${text.listMessageIntro}\n${lines.join("\n")}\n\n${text.listMessageCountry} `;
}

function setupRequestList() {
  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-list-toggle]");
    if (toggle) {
      toggleListItem(toggle.dataset.listToggle);
      return;
    }

    const remove = event.target.closest("[data-list-remove]");
    if (remove) {
      toggleListItem(remove.dataset.listRemove);
      focusListControl();
      return;
    }

    if (event.target.closest("#request-clear")) {
      state.list = [];
      state.listOpen = false;
      saveRequestList();
      syncRequestList();
      return;
    }

    if (event.target.closest("#request-toggle")) {
      state.listOpen = !state.listOpen;
      renderRequestBar();
      focusListControl();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.listOpen) {
      state.listOpen = false;
      renderRequestBar();
      focusListControl();
    }
  });
}

function focusListControl() {
  const control = document.getElementById("request-toggle");
  if (control) {
    control.focus();
  }
}

function toggleListItem(id) {
  state.list = state.list.includes(id)
    ? state.list.filter((entry) => entry !== id)
    : [...state.list, id];

  if (!state.list.length) {
    state.listOpen = false;
  }

  saveRequestList();
  syncRequestList();
}

// Atualiza os botões no sítio, para não perder o foco nem recarregar as fotos.
function syncRequestList() {
  document.querySelectorAll("[data-list-toggle]").forEach((button) => {
    const product = PRODUCTS.find((entry) => entry.id === button.dataset.listToggle);
    const holder = document.createElement("div");
    holder.innerHTML = buildListButton(product, state.lang);
    const fresh = holder.firstElementChild;
    button.className = fresh.className;
    button.setAttribute("aria-label", fresh.getAttribute("aria-label"));
    button.textContent = fresh.textContent.trim();
  });

  renderRequestBar();
}

function renderRequestBar() {
  let bar = document.getElementById("request-bar");
  if (!bar) {
    bar = document.createElement("aside");
    bar.id = "request-bar";
    bar.className = "request-bar";
    document.body.appendChild(bar);

    // Fica fora da barra, que é redesenhada: só assim os leitores de ecrã anunciam a contagem.
    const status = document.createElement("div");
    status.id = "request-status";
    status.className = "visually-hidden";
    status.setAttribute("aria-live", "polite");
    document.body.appendChild(status);
  }

  const total = state.list.length;
  const text = SITE_TEXT[state.lang];
  document.body.classList.toggle("has-request-list", total > 0);
  bar.hidden = total === 0;
  bar.setAttribute("aria-label", text.listRegion);
  document.getElementById("request-status").textContent = total
    ? `${text.listRegion}: ${formatReferenceCount(total, state.lang)}`
    : "";

  if (!total) {
    bar.innerHTML = "";
    return;
  }

  const items = state.list
    .map((id) => {
      const product = PRODUCTS.find((entry) => entry.id === id);
      const item = `${product[state.lang].name} (${id})`;
      return `
        <li class="request-item">
          <span class="request-code">${escapeHtml(id)}</span>
          <span class="request-name">${escapeHtml(product[state.lang].name)}</span>
          <button class="request-remove" type="button" data-list-remove="${escapeHtml(id)}" aria-label="${escapeHtml(text.listRemoveAria.replace("{item}", item))}">${escapeHtml(text.listRemove)}</button>
        </li>
      `;
    })
    .join("");

  bar.innerHTML = `
    <div class="request-panel" id="request-panel"${state.listOpen ? "" : " hidden"}>
      <div class="request-panel-inner">
        <h2 class="request-title">${escapeHtml(text.listTitle)}</h2>
        <p class="request-hint">${escapeHtml(text.listHint)}</p>
        <ul class="request-items">${items}</ul>
        <button class="request-clear" id="request-clear" type="button">${escapeHtml(text.listClear)}</button>
      </div>
    </div>
    <div class="request-row">
      <button class="request-toggle" id="request-toggle" type="button" aria-expanded="${state.listOpen}" aria-controls="request-panel">
        <span class="request-count">${escapeHtml(formatReferenceCount(total, state.lang))}</span>
        <span class="request-toggle-label">${escapeHtml(state.listOpen ? text.listClose : text.listOpen)}</span>
      </button>
      <a class="request-send" href="${buildWhatsappUrl(buildListMessage(state.lang))}" target="_blank" rel="noopener">${escapeHtml(text.listSend)}</a>
    </div>
  `;
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
