/* Português (Brasil) — idioma padrão. Nomes de projetos e tecnologias não são traduzidos. */
window.I18N = window.I18N || {};
window.I18N.pt = {
  meta: {
    title: 'Wesley Fernandes — Desenvolvedor Fullstack & Cloud',
    description: 'Desenvolvedor Fullstack com foco em Cloud, AWS, Node.js, React.js e Microsserviços.',
    role: 'Desenvolvedor Fullstack & Cloud',
    ogImageAlt: 'Wesley Fernandes — Desenvolvedor Fullstack & Cloud',
    locale: 'pt_BR',
  },

  common: {
    skip: 'Pular para o conteúdo',
  },

  nav: {
    label: 'Principal',
    brand: 'Wesley Fernandes — voltar ao topo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    about: 'Sobre',
    architecture: 'Como construo',
    projects: 'Projetos',
    stack: 'Stack',
    github: 'GitHub',
    cta: 'Vamos conversar',
    language: 'Idioma',
    languageToggle: 'Selecionar idioma (atual: Português)',
  },

  hero: {
    eyebrow: 'Olá, eu sou o Wesley',
    title: 'Construindo software escalável <span class="hero__title-accent">para a nuvem.</span>',
    lede: 'Desenvolvedor fullstack focado em criar aplicações modernas, arquiteturas escaláveis e soluções em nuvem.',
    viewProjects: 'Ver projetos',
    connect: 'Vamos conversar',
    location: 'Fortaleza — CE, Brasil',
    diagram: 'Arquitetura de nuvem abstrata: um cliente chama um API gateway que roteia para microsserviços, que se comunicam por um barramento de eventos e persistem em bancos de dados.',
    diagramRegion: 'nuvem · região',
    diagramBus: 'kafka · eventos',
    scroll: 'Rolar até a seção Sobre',
  },

  about: {
    eyebrow: 'Sobre mim',
    title: 'Da interface à infraestrutura, <span class="text-muted">gosto de cuidar do caminho inteiro.</span>',
    p1: 'Sou desenvolvedor fullstack e trabalho com cloud e engenharia de produto. Gosto de transformar ideias em sistemas que escalam — APIs tipadas, serviços orientados a eventos e interfaces limpas e responsivas.',
    p2: 'A maior parte do meu trabalho está no ecossistema JavaScript: Node.js e NestJS no backend, React no frontend e AWS por baixo de tudo. Hoje estou me aprofundando em conceitos avançados de AWS e em Go, e estou sempre aberto a colaborar com open source.',
    portraitAlt: 'Ilustração em estilo anime do Wesley programando no notebook',
    code: {
      role: "'Desenvolvedor Fullstack & Cloud'",
      based: "'Fortaleza, CE — Brasil'",
      events: "'eventos'",
      microservices: "'microsserviços'",
      awsAdvanced: "'AWS avançado'",
      caption: 'Um objeto TypeScript que resume o papel, a localização, a stack e os estudos atuais do Wesley.',
    },
  },

  certification: {
    kicker: 'Credencial verificada · Amazon Web Services',
    text: 'Validação dos fundamentos de cloud na AWS: conceitos, serviços principais, segurança, arquitetura e preços.',
    verify: 'Verificar no Credly',
  },

  architecture: {
    eyebrow: 'Engenharia',
    title: 'Como eu construo',
    lede: 'Cada camada tem uma única responsabilidade e um contrato claro com a próxima. Os serviços são pequenos, conversam por eventos sempre que possível e tudo roda em containers — assim o sistema cresce sem precisar ser reescrito.',
    principles: {
      typed: 'Tipado de ponta a ponta',
      coupling: 'Baixo acoplamento, assíncrono por padrão',
      data: 'Cada serviço é dono dos seus dados',
      automation: 'Caminho até produção automatizado',
    },
    pipeline: 'Camadas de uma arquitetura conceitual, do frontend à nuvem',
    layers: {
      frontend: { name: 'Frontend', desc: 'Interfaces tipadas e baseadas em componentes.' },
      api: { name: 'API', desc: 'Contratos validados, autenticação JWT e endpoints documentados.' },
      microservices: { name: 'Microsserviços', desc: 'Serviços pequenos, com fronteiras bem definidas.' },
      broker: { name: 'Mensageria', desc: 'Eventos desacoplam produtores e consumidores.' },
      database: { name: 'Banco de dados', desc: 'Relacional ou de documentos — escolhido por serviço.' },
      cloud: { name: 'Cloud', desc: 'Em containers e entregue por pipelines.' },
    },
  },

  projects: {
    eyebrow: 'Trabalhos selecionados',
    title: 'Projetos',
    lede: 'Repositórios públicos com foco em backend, APIs e arquitetura de serviços.',
    viewOnGithub: 'Ver no GitHub',
    browseAll: 'Ver todos os repositórios no GitHub',
    case: {
      kicker: 'Case em destaque · nestjs-kafka',
      title: 'Arquitetura de microsserviços orientada a eventos',
      desc: 'Um fluxo de pedidos e pagamentos dividido em dois serviços NestJS independentes, que nunca chamam um ao outro diretamente. Eles se comunicam apenas por tópicos do Kafka, e cada um tem seu próprio banco de dados.',
      flow: 'O orders-service publica no tópico orders; o payments-service consome esse tópico e publica no tópico payments, que é consumido pelo orders-service.',
      producerConsumer: 'produtor · consumidor',
      consumerProducer: 'consumidor · produtor',
      step1: 'Um novo pedido é salvo como <code>PENDING</code> e publicado no tópico <code>orders</code>.',
      step2: 'O serviço de pagamentos consome o evento, registra o pagamento e publica em <code>payments</code>.',
      step3: 'O serviço de pedidos consome o resultado e marca o pedido como <code>PAYED</code> ou <code>CANCELLED</code>.',
      concepts: 'Conceitos',
      builtWith: 'Construído com',
      tags: {
        producerConsumer: 'Produtor / Consumidor',
        async: 'Comunicação assíncrona',
        consumerGroups: 'Consumer groups',
        dbPerService: 'Banco por serviço',
        monorepo: 'Monorepo Nest',
      },
    },
    users: {
      desc: 'Gestão de usuários fullstack. Uma API NestJS com autenticação JWT, estratégias do Passport, documentação Swagger e upload de arquivos, consumida por um cliente React com contexto de autenticação e rotas protegidas.',
    },
    auth: {
      desc: 'Uma API de tarefas protegida com estratégias local e JWT do Passport, guards e decorators customizados (<code>@IsPublic</code>, <code>@CurrentUser</code>), migrations com Prisma e documentação Swagger.',
    },
    solid: {
      desc: 'Um serviço Express construído sobre os princípios SOLID: casos de uso, interfaces de repositório e de provedor de e-mail, e implementações intercambiáveis (Mailtrap via Nodemailer).',
    },
    go: {
      desc: 'Go na prática: goroutines, channels e padrões de concorrência, generics, servidores e clientes HTTP, context, templates e acesso a banco de dados com Docker.',
      concurrency: 'Concorrência',
    },
  },

  stack: {
    eyebrow: 'Ferramentas',
    title: 'Stack de tecnologias',
    lede: 'As ferramentas que uso no dia a dia, do navegador à infraestrutura.',
    databases: 'Bancos de dados',
  },

  github: {
    eyebrow: 'Presença open source',
    title: 'Código em público.',
    snapshot: 'Snapshot do GitHub',
    live: 'Ao vivo pela API do GitHub',
    repos: 'Repositórios públicos',
    since: 'No GitHub desde',
    languages: 'Linguagens',
    primary: 'Linguagem principal',
    byLanguage: 'Repositórios por linguagem',
    recent: 'Atividade recente',
    other: 'Outras',
    langItem: '{name}: {count} repositórios',
    snapshotChart: 'TypeScript: 28 repositórios, JavaScript: 14, HTML: 5, Go: 2, Java: 2, CSS: 2, outras: 3',
    today: 'hoje',
    daysAgo: 'há {n} d',
    dateLocale: 'pt-BR',
  },

  learning: {
    eyebrow: 'Roadmap',
    title: 'Explorando agora',
    aws: { title: 'Conceitos avançados de AWS', desc: 'Indo além da base do Cloud Practitioner, mais a fundo em serviços e design.' },
    go: { title: 'Go', desc: 'Concorrência, generics, HTTP e acesso a dados — estudados em público.' },
    cloud: { title: 'Arquitetura Cloud', desc: 'Sistemas distribuídos que escalam e continuam resilientes.' },
    openSource: { title: 'Open Source', desc: 'Procurando projetos para colaborar e retribuir à comunidade.' },
  },

  personal: {
    eyebrow: 'Fora do expediente',
    title: 'Além do código',
    text: 'Longe do terminal, você provavelmente vai me encontrar jogando ou produzindo música — dois outros lugares onde sistemas, timing e muita iteração se encontram.',
    gaming: 'Games',
    music: 'Produção musical',
  },

  contact: {
    eyebrow: 'Aberto a oportunidades',
    title: 'Vamos construir algo <span class="hero__title-accent">incrível.</span>',
    text: 'Tem uma ideia, projeto ou oportunidade? Vamos conversar.',
    whatsappAria: 'Conversar no WhatsApp pelo +55 85 98650-6832 (abre em uma nova aba)',
    email: 'Entrar em contato',
    emailAria: 'Enviar um e-mail para fernandess.weslley@gmail.com',
    copy: 'Copiar e-mail',
    copied: 'Copiado',
    copyFailed: 'Não foi possível copiar',
    phoneAria: 'WhatsApp +55 85 98650-6832 (abre em uma nova aba)',
  },

  theme: {
    toLight: 'Ativar modo claro',
    toDark: 'Ativar modo escuro',
  },

  footer: {
    role: 'Desenvolvedor Fullstack & Cloud',
    note: 'Feito com código & curiosidade.',
    email: 'E-mail',
    emailAria: 'Enviar e-mail para fernandess.weslley@gmail.com',
    whatsappAria: 'WhatsApp +55 85 98650-6832 (abre em uma nova aba)',
  },
};
