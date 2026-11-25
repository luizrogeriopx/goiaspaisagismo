/**
 * Single source of truth for the business: contact details, services, projects.
 * Browser-safe — no server-only values here.
 */

export const SITE = {
  name: "Goiás Paisagismo",
  wordmark: "Goiás",
  wordmarkSub: "Paisagismo",
  tagline: "Jardinagem, paisagismo e manutenção de jardins em Goiânia e região",
  city: "Goiânia",
  state: "GO",
  region: "Goiânia e região metropolitana",
  since: 2009,
  email: "contato@goiaspaisagismo.com.br",
  instagram: "goiaspaisagismo",
  hours: "Segunda a sábado, das 7h às 18h",
  /**
   * Placeholder — troque pelo número real do WhatsApp (DDI + DDD + número).
   */
  whatsapp: "5562900000000",
  whatsappDisplay: "(62) 90000-0000",
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
  includes: string[];
  bestFor: string;
};

export const SERVICES: Service[] = [
  {
    slug: "projeto-de-paisagismo",
    title: "Projeto de paisagismo",
    summary:
      "Leitura do espaço, planta com as espécies definidas e lista de plantas com quantidade e preço.",
    includes: [
      "Visita técnica e medição do espaço",
      "Plantas por camada: forração, média e alta",
      "Lista de espécies com quantidade",
      "Sugestão de iluminação e irrigação",
    ],
    bestFor: "Quem vai construir, reformar ou quer ver o jardim antes de comprar planta.",
  },
  {
    slug: "implantacao-de-jardim",
    title: "Implantação de jardim",
    summary:
      "Preparo do solo, compra das mudas, plantio e limpeza. Você entra no jardim pronto.",
    includes: [
      "Correção e adubação do solo",
      "Compra e entrega das mudas",
      "Plantio, cobertura morta e limpeza",
      "Teste de irrigação no dia da entrega",
    ],
    bestFor: "Quem já tem o projeto, ou confia na nossa escolha de espécies.",
  },
  {
    slug: "manutencao-e-poda",
    title: "Manutenção e poda",
    summary:
      "Visitas programadas para cortar, adubar, trocar o que morreu e deixar o jardim apresentável.",
    includes: [
      "Poda de formação e de limpeza",
      "Corte de grama e acabamento",
      "Adubação e controle de pragas",
      "Troca de muda que não pegou",
    ],
    bestFor: "Quem quer jardim sempre bonito sem precisar pensar nisso.",
  },
  {
    slug: "muros-verdes",
    title: "Muros verdes e jardins verticais",
    summary:
      "Painel de folhagens com estrutura, irrigação e drenagem próprias, para dentro ou para fora.",
    includes: [
      "Estrutura e painel modular",
      "Irrigação e fertirrigação automáticas",
      "Seleção de espécies por luz",
      "Contrato de manutenção do painel",
    ],
    bestFor: "Empenas frias, halls, varandas e fachadas sem canteiro.",
  },
  {
    slug: "irrigacao",
    title: "Irrigação automática",
    summary:
      "Setores por tipo de planta, programador e aspersores ou gotejadores ajustados para o seu sol.",
    includes: [
      "Divisão por setores de sombra e sol",
      "Programador com horário por dia",
      "Gotejamento em canteiros e vasos",
      "Assistência e reparo de vazamentos",
    ],
    bestFor: "Quem viaja, esquece de regar ou gasta água demais.",
  },
  {
    slug: "horta-e-temperos",
    title: "Horta e temperos",
    summary:
      "Canteiros ou vasos de comestíveis na altura da mão, com calendário de plantio da nossa região.",
    includes: [
      "Canteiro suspenso ou vasos modulares",
      "Mudas de temperos e folhas",
      "Substrato próprio para horta",
      "Calendário de plantio de Goiânia",
    ],
    bestFor: "Cozinha de casa, restaurante e varanda com sol.",
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
      "Pedi orçamento para três lugares e a Goiás foi a única que subiu no muro para ver a luz. O jardim da frente virou o que a casa tinha de melhor.",
    name: "Camila R.",
    where: "Serrinha",
  },
  {
    quote:
      "Contratei a manutenção por um ano. Numa falta nossa o jardim continuou no ponto, e eles avisaram antes de trocar qualquer muda.",
    name: "Eduardo M.",
    where: "Alphaville",
  },
  {
    quote:
      "A varanda do apartamento tinha 12 m² e virou a horta da casa. Manjericão, alecrim e coentro o ano todo, sem molhar o chão.",
    name: "Juliana T.",
    where: "Nova Suíça",
  },
];

export const STATS = [
  { value: "17", label: "anos de jardim em Goiânia" },
  { value: "320", label: "jardins implantados" },
  { value: "48h", label: "para responder um orçamento" },
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
