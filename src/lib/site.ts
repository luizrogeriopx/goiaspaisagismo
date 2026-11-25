/**
 * Single source of truth for the business: contact details, services, projects.
 * Browser-safe — no server-only values here.
 */

export const SITE = {
  name: "Goiás Paisagismo e Jardinagem",
  wordmark: "Goiás",
  wordmarkSub: "Paisagismo",
  tagline: "Jardinagem, paisagismo e manutenção de jardins em Goiânia e região",
  city: "Goiânia",
  state: "GO",
  region: "Goiânia e região metropolitana",
  since: 2009,
  email: "contato@goiaspaisagismo.com.br",
  instagram: "goiaspaisagismo",
  hours: "Seg a Sex: 8h às 17h | Sábado: 8h às 12h",
  whatsapp: "5562994111432",
  whatsappDisplay: "(62) 9 9411-1432",
  address: "Av. T-63, 1639, Jardim América, Goiânia - GO",
} as const;

export function whatsappLink(message?: string): string {
  const text =
    message ?? `Olá, ${SITE.name}! Vi o site e gostaria de falar sobre o meu jardim.`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export type ProjectCategory =
  | "Residencial"
  | "Comercial"
  | "Pequenos espaços"
  | "Muros verdes"
  | "Manutenção";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Residencial",
  "Comercial",
  "Pequenos espaços",
  "Muros verdes",
  "Manutenção",
];

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  neighborhood: string;
  year: number;
  area: string;
  image: string;
  summary: string;
  brief: string;
  highlights: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "area-da-piscina",
    title: "Área da piscina em camadas",
    category: "Residencial",
    neighborhood: "Jardim Goiás",
    year: 2025,
    area: "320 m²",
    image: "/images/projeto-piscina.jpg",
    summary:
      "Canteiros em três alturas fechando a vista da piscina, com gramíneas que balançam com o vento.",
    brief:
      "A família queria privacidade sem fechar o quintal com muro alto. Resolvemos com camadas: forração rasteira no contorno, gramíneas médias no meio e touceiras altas nos cantos. A piscina ganhou sombra no fim da tarde e o jardim continua leve.",
    highlights: [
      "Forração de amendoim nas bordas",
      "Gramíneas: capim-do Texas e miscanto",
      "Irrigação por gotejamento em 4 setores",
      "Iluminação de piso embutida",
    ],
  },
  {
    slug: "muro-verde-marista",
    title: "Muro verde na entrada",
    category: "Muros verdes",
    neighborhood: "Setor Marista",
    year: 2024,
    area: "28 m² de parede",
    image: "/images/projeto-muro-verde.jpg",
    summary:
      "Painel de samambaias, jiboias e ripsális transformando uma empena de concreto em fundo vivo.",
    brief:
      "A entrada era um muro de concreto frio, sem graça. Montamos um painel modular com irrigação automática e drenagem própria, escolhendo espécies de meia-sombra para que o verde se mantenha denso o ano inteiro.",
    highlights: [
      "Painel modular com drenagem própria",
      "Samambaias, ripsális e jiboias",
      "Fertirrigação programada",
      "Manutenção quinzenal inclusa",
    ],
  },
  {
    slug: "patio-com-fogo-de-chao",
    title: "Pátio com fogo de chão",
    category: "Residencial",
    neighborhood: "Alphaville",
    year: 2025,
    area: "90 m²",
    image: "/images/projeto-patio.jpg",
    summary:
      "Círculo de pedra, banco de madeira e oliveira no fundo: o canto de conversa da casa.",
    brief:
      "O pedido foi um lugar para receber à noite, sem obra pesada. Fizemos o piso de brita com faixas de pedra, o fogo de chão no centro e um canteiro de gramíneas escondendo a lateral. Ficou pronto em nove dias.",
    highlights: [
      "Fogo de chão em pedra bruta",
      "Banco de eucalipto tratado",
      "Oliveira ornamental de 3 m",
      "Iluminação em fio com luz quente",
    ],
  },
  {
    slug: "quintal-de-40m2",
    title: "Quintal de 40 m²",
    category: "Pequenos espaços",
    neighborhood: "Setor Bueno",
    year: 2024,
    area: "40 m²",
    image: "/images/projeto-quintal.jpg",
    summary:
      "Deck, tira de grama e canteiros suspensos de temperos em um quintal que media 4 metros de largura.",
    brief:
      "Espaço pequeno pede decisão: cortamos o volume, levantamos os canteiros e colocamos o deck no fundo para a planta respirar. A horta de temperos fica na altura da mão, ao lado da porta da cozinha.",
    highlights: [
      "Deck de cumaru com bancada",
      "Canteiros suspensos de temperos",
      "Cerca de bambu como fundo",
      "Grama esmeralda em faixa central",
    ],
  },
  {
    slug: "entrada-comercial",
    title: "Entrada comercial",
    category: "Comercial",
    neighborhood: "Parque Flamboyant",
    year: 2025,
    area: "150 m²",
    image: "/images/projeto-comercial.jpg",
    summary:
      "Arbustos podados em volume, forração florida e brita decorativa na frente do escritório.",
    brief:
      "A empresa queria uma fachada que parecesse cuidada todos os dias, sem depender de jardinagem diária. Trabalhamos com espécies de crescimento lento, forração autolimpante e um contrato de visita semanal.",
    highlights: [
      "Arbustos de crescimento lento",
      "Forração florida o ano todo",
      "Brita decorativa sobre manta",
      "Visita semanal de manutenção",
    ],
  },
  {
    slug: "jardim-da-frente",
    title: "Jardim da frente",
    category: "Residencial",
    neighborhood: "Serrinha",
    year: 2023,
    area: "210 m²",
    image: "/images/hero-jardim.jpg",
    summary:
      "Caminho de pedra, canteiros mistos e uma árvore de sombra para a calçada da casa.",
    brief:
      "Reforma completa: tiramos o gramado doente, reorganizamos o caminho, adubamos o solo e plantamos uma árvore de porte médio que hoje dá sombra na sala. O jardim é baixo e não exige poda todo mês.",
    highlights: [
      "Substrato novo em todo o canteiro",
      "Árvore de sombra na calçada",
      "Caminho de pedra portuguesa",
      "Canteiro de baixo crescimento",
    ],
  },
  {
    slug: "canteiros-de-flores",
    title: "Canteiros de flores",
    category: "Residencial",
    neighborhood: "Jardim América",
    year: 2024,
    area: "60 m²",
    image: "/images/servico-canteiros.jpg",
    summary:
      "Convivência de flores de sol e de sombra, com floração escalonada ao longo do ano.",
    brief:
      "A cliente queria cor o ano inteiro. Montamos o canteiro por época de floração: o que abre na primavera, o que segura o verão, o que segura o inverno. Numa visita por trimestre o conjunto se renova.",
    highlights: [
      "Escalonamento de floração",
      "Multiplicação de mudas próprias",
      "Cobertura morta para reter água",
      "Visita trimestral de renovação",
    ],
  },
  {
    slug: "varanda-jardim",
    title: "Varanda jardim",
    category: "Pequenos espaços",
    neighborhood: "Nova Suíça",
    year: 2025,
    area: "12 m²",
    image: "/images/servico-varanda.jpg",
    summary:
      "Horta de temperos, vasos de terracota e um painel vertical em uma varanda de apartamento.",
    brief:
      "Sem terra, sem problema: tudo em vasos com prato de drenagem e um painel de folhagens na parede. Escolhemos plantas que aguentam o vento da varanda e o sol da tarde, com rega de cinco minutos por dia.",
    highlights: [
      "Horta de manjericão, alecrim e coentro",
      "Painel vertical de folhagens",
      "Vasos com prato de drenagem",
      "Seleção para sol da tarde",
    ],
  },
  {
    slug: "poda-e-renovacao",
    title: "Poda e renovação de sebes",
    category: "Manutenção",
    neighborhood: "Vila New York",
    year: 2024,
    area: "55 m de sebe",
    image: "/images/servico-poda.jpg",
    summary:
      "Sebe abandonada voltando a fechar, com poda de formação e adubação de recuperação.",
    brief:
      "A sebe tinha buracos e galho seco por falta de corte. Fizemos a poda drástica na época certa, adubamos e combinamos o retorno a cada dois meses. Em um ano ela fechou de novo, uniforme.",
    highlights: [
      "Poda de formação na época certa",
      "Adubação de recuperação",
      "Controle de pragas sem queima",
      "Retorno a cada dois meses",
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  includes: string[];
  bestFor: string;
};

export const SERVICES: Service[] = [
  {
    slug: "jardinagem",
    title: "Jardinagem",
    summary:
      "Cuidamos do seu jardim com técnica e dedicação, garantindo plantas saudáveis, bonitas e sempre bem cuidadas.",
    image: "/images/jardinagem.jpg",
    includes: [
      "Corte de grama e acabamento",
      "Poda de limpeza e formação",
      "Adubação e controle de pragas",
      "Limpeza e recolhimento de resíduos",
    ],
    bestFor: "Quem quer jardim sempre bonito sem precisar pensar nisso.",
  },
  {
    slug: "poda",
    title: "Poda",
    summary:
      "Poda técnica que valoriza a estética, fortalece as plantas e mantém seu jardim organizado e seguro.",
    image: "/images/poda.jpg",
    includes: [
      "Poda de formação e de limpeza",
      "Poda de árvores e arbustos",
      "Retirada de galhos secos",
      "Acabamento e limpeza do local",
    ],
    bestFor: "Quem quer plantas saudáveis e jardim com visual profissional.",
  },
  {
    slug: "plantio",
    title: "Plantio",
    summary:
      "Escolha correta das plantas e plantio profissional para um crescimento forte, equilibrado e duradouro.",
    image: "/images/plantio.jpg",
    includes: [
      "Seleção das espécies ideais",
      "Preparo e correção do solo",
      "Plantio com cobertura morta",
      "Orientação sobre regas iniciais",
    ],
    bestFor: "Quem vai iniciar um jardim ou renovar canteiros.",
  },
  {
    slug: "paisagismo",
    title: "Paisagismo",
    summary:
      "Projetos que transformam espaços em ambientes harmoniosos e cheios de vida.",
    image: "/images/paisagismo.jpg",
    includes: [
      "Visita técnica e medição do espaço",
      "Plantas por camada: forração, média e alta",
      "Lista de espécies com quantidade",
      "Sugestão de iluminação e irrigação",
    ],
    bestFor: "Quem vai construir, reformar ou quer ver o jardim antes de comprar planta.",
  },
  {
    slug: "manutencao",
    title: "Manutenção",
    summary:
      "Manutenção completa para preservar a beleza do seu jardim o ano todo, sem preocupações.",
    image: "/images/manutencao.jpg",
    includes: [
      "Visitas programadas (semanal, quinzenal ou mensal)",
      "Poda, adubação e controle de pragas",
      "Troca de muda que não pegou",
      "Relatório de cada visita",
    ],
    bestFor: "Quem viaja ou não tem tempo para cuidar do jardim.",
  },
  {
    slug: "limpeza",
    title: "Limpeza",
    summary:
      "Limpeza eficiente de áreas verdes, deixando o espaço renovado, organizado e agradável.",
    image: "/images/limpeza.jpg",
    includes: [
      "Remoção de ervas daninhas",
      "Recolhimento de folhas e galhos",
      "Limpeza de canteiros e bordas",
      "Descarte correto de resíduos",
    ],
    bestFor: "Jardins abandonados ou que precisam de reforma rápida.",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Visita e diagnóstico",
    text: "Vamos até o local, medimos, vemos a luz e o solo, e conversamos sobre o uso que você quer dar ao espaço.",
  },
  {
    number: "02",
    title: "Projeto e plantas",
    text: "Você recebe a leitura do espaço, as espécies escolhidas por camada e a lista de plantas com quantidade.",
  },
  {
    number: "03",
    title: "Implantação",
    text: "Preparamos o solo, compramos as mudas, plantamos, testamos a irrigação e deixamos o canteiro limpo.",
  },
  {
    number: "04",
    title: "Manutenção",
    text: "Visitas programadas para podar, adubar e trocar o que não pegou. O jardim continua como no dia da entrega.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Excelente serviço! Meu jardim ficou lindo e muito bem cuidado. Profissionais pontuais, caprichosos e atenciosos. Recomendo com certeza.",
    name: "Fernanda Reis",
    where: "Goiânia - GO",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    quote:
      "Superou minhas expectativas. O paisagismo transformou completamente o espaço e a manutenção mantém tudo sempre impecável.",
    name: "Marcos Torres",
    where: "Ap. de Goiânia - GO",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    quote:
      "Desde o primeiro atendimento até a finalização do serviço, tudo foi perfeito. Meu jardim nunca esteve tão bonito e saudável.",
    name: "Ana Luíza",
    where: "Goiânia - GO",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    quote:
      "Empresa séria e comprometida. Dá para perceber o cuidado e o conhecimento em cada detalhe do trabalho. Fiquei muito satisfeito.",
    name: "José Carlos",
    where: "Goiânia - GO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
];

export const STATS = [
  { value: "+3.000", label: "Projetos de paisagismo residencial e comercial" },
  { value: "+10 Anos", label: "de experiência em jardinagem, poda, plantio, manutenção e revitalização" },
];

export const BENEFITS = [
  {
    icon: "🌿",
    title: "Profissionalismo e Experiência",
    text: "Equipe capacitada, com conhecimento técnico e cuidado em cada detalhe do serviço.",
  },
  {
    icon: "🌱",
    title: "Atendimento Personalizado",
    text: "Cada projeto é único e pensado de acordo com suas necessidades e estilo do espaço.",
  },
  {
    icon: "✂️",
    title: "Qualidade nos Serviços",
    text: "Trabalhamos com técnicas corretas e materiais de qualidade para resultados duradouros.",
  },
  {
    icon: "🌳",
    title: "Valorização do Seu Espaço",
    text: "Jardins bem cuidados aumentam a beleza, o conforto e o valor do seu imóvel.",
  },
  {
    icon: "🔧",
    title: "Manutenção Completa",
    text: "Cuidamos de tudo para que seu jardim esteja sempre bonito, saudável e organizado.",
  },
  {
    icon: "🤝",
    title: "Compromisso e Confiança",
    text: "Cumprimos prazos, respeitamos seu espaço e entregamos exatamente o que prometemos.",
  },
];

export const ABOUT = {
  image: "/images/foto-sobre.jpg",
  paragraphs: [
    "A <strong>Goiás Paisagismo e Jardinagem</strong> une técnica, criatividade e amor pela natureza para criar ambientes verdes que encantam e valorizam cada detalhe do seu imóvel.",
    "Mais do que plantar e cuidar, nós <strong>planejamos experiências.</strong> Cada projeto é pensado de forma personalizada, respeitando o estilo do cliente, as características do espaço e o equilíbrio natural das plantas. O resultado são jardins vivos, saudáveis e cheios de personalidade.",
    "Contamos com uma equipe especializada, materiais de qualidade e um <strong>compromisso constante com a excelência.</strong> Do projeto à manutenção, cuidamos de tudo para que você desfrute de um ambiente sempre bonito, organizado e acolhedor.",
    "Invista em qualidade de vida, valorização do seu patrimônio e contato diário com a natureza. Confie em quem entende de paisagismo e jardinagem. <strong>Goiás Paisagismo e Jardinagem</strong>, seu espaço merece esse cuidado.",
  ],
};

export const MISSION_IMAGES = [
  { src: "/images/missao1.jpg", alt: "Jardim externo" },
  { src: "/images/missao2.jfif", alt: "Jardim externo" },
  { src: "/images/missao3.jfif", alt: "Jardim externo" },
  { src: "/images/missao4.jfif", alt: "Jardim externo" },
  { src: "/images/missao5.jfif", alt: "Jardim externo" },
];

export type FaqItem = {
  question: string;
  answer: string;
  cta?: { label: string; href: string };
};

export const FAQ: FaqItem[] = [
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Oferecemos jardinagem, paisagismo, plantio, poda, manutenção, limpeza de áreas verdes e revitalização de jardins.",
  },
  {
    question: "Vocês atendem residências e empresas?",
    answer:
      "Sim, atendemos residências, condomínios, empresas e áreas comerciais, sempre com soluções personalizadas.",
  },
  {
    question: "Vocês fazem manutenção periódica?",
    answer:
      "Sim. Trabalhamos com planos de manutenção semanal, quinzenal ou mensal, conforme a necessidade do cliente.",
  },
  {
    question: "O paisagismo é feito sob medida?",
    answer:
      "Sim. Cada projeto é desenvolvido de forma personalizada, respeitando o espaço, o estilo do cliente e as condições do ambiente.",
  },
  {
    question: "Vocês fornecem as plantas e materiais?",
    answer:
      "Sim. Fornecemos plantas, insumos e materiais de qualidade, garantindo um serviço completo e prático para o cliente.",
  },
  {
    question: "É necessário contrato para os serviços?",
    answer:
      "Para manutenções recorrentes, recomendamos contrato. Para serviços pontuais, o atendimento pode ser feito sem contrato.",
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer:
      "Você pode entrar em contato pelo WhatsApp. Retornamos rapidamente para agendar uma visita técnica. Basta clicar no botão abaixo!",
    cta: {
      label: "Solicitar pelo WhatsApp",
      href: "https://wa.me/556294111432?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento.",
    },
  },
];

export const PLANTS_STRIP = [
  "Ipê-amarelo",
  "Oliveira",
  "Alecrim-pata-de-cordeiro",
  "Tibuchina",
  "Tolbos",

  "Jiboia",
  "Ripsális",
  "Lantana",
  "Bougainvília",
  "Grama-esmeralda",
  "Capim-do-Texas",
  "Comigo-ninguém-pode",
];
