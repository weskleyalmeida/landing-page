/* Español. Los nombres de proyectos y tecnologías no se traducen. */
window.I18N = window.I18N || {};
window.I18N.es = {
  meta: {
    title: 'Wesley Fernandes — Desarrollador Fullstack & Cloud',
    description: 'Desarrollador Fullstack enfocado en Cloud, AWS, Node.js, React.js y Microservicios.',
    role: 'Desarrollador Fullstack & Cloud',
    ogImageAlt: 'Wesley Fernandes — Desarrollador Fullstack & Cloud',
    locale: 'es_ES',
  },

  common: {
    skip: 'Saltar al contenido',
  },

  nav: {
    label: 'Principal',
    brand: 'Wesley Fernandes — volver al inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    about: 'Sobre mí',
    architecture: 'Cómo construyo',
    projects: 'Proyectos',
    stack: 'Stack',
    github: 'GitHub',
    cta: 'Hablemos',
    language: 'Idioma',
    languageToggle: 'Seleccionar idioma (actual: Español)',
  },

  hero: {
    eyebrow: 'Hola, soy Wesley',
    title: 'Construyendo software escalable <span class="hero__title-accent">para la nube.</span>',
    lede: 'Desarrollador fullstack enfocado en crear aplicaciones modernas, arquitecturas escalables y soluciones en la nube.',
    viewProjects: 'Ver proyectos',
    connect: 'Hablemos',
    location: 'Fortaleza — CE, Brasil',
    diagram: 'Arquitectura cloud abstracta: un cliente llama a un API gateway que enruta hacia microservicios, que se comunican mediante un bus de eventos y persisten en bases de datos.',
    diagramRegion: 'nube · región',
    diagramBus: 'kafka · eventos',
    scroll: 'Ir a la sección Sobre mí',
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'De la interfaz a la infraestructura, <span class="text-muted">me gusta encargarme de todo el camino.</span>',
    p1: 'Soy desarrollador fullstack y trabajo con cloud e ingeniería de producto. Me gusta convertir ideas en sistemas que escalan: APIs tipadas, servicios orientados a eventos e interfaces limpias y responsivas.',
    p2: 'La mayor parte de mi trabajo vive en el ecosistema JavaScript: Node.js y NestJS en el backend, React en el frontend y AWS por debajo. Ahora mismo estoy profundizando en conceptos avanzados de AWS y en Go, y siempre estoy dispuesto a colaborar en proyectos open source.',
    portraitAlt: 'Ilustración estilo anime de Wesley programando en su portátil',
    code: {
      role: "'Desarrollador Fullstack & Cloud'",
      based: "'Fortaleza, CE — Brasil'",
      events: "'eventos'",
      microservices: "'microservicios'",
      awsAdvanced: "'AWS avanzado'",
      caption: 'Un objeto TypeScript que resume el rol, la ubicación, el stack y lo que Wesley está aprendiendo.',
    },
  },

  certification: {
    kicker: 'Credencial verificada · Amazon Web Services',
    text: 'Validación de los fundamentos de cloud en AWS: conceptos, servicios principales, seguridad, arquitectura y precios.',
    verify: 'Verificar en Credly',
  },

  architecture: {
    eyebrow: 'Ingeniería',
    title: 'Cómo construyo',
    lede: 'Cada capa tiene una única responsabilidad y un contrato claro con la siguiente. Los servicios son pequeños, se comunican mediante eventos siempre que pueden y todo se despliega en contenedores, para que el sistema crezca sin tener que reescribirse.',
    principles: {
      typed: 'Tipado de extremo a extremo',
      coupling: 'Bajo acoplamiento, asíncrono por defecto',
      data: 'Cada servicio es dueño de sus datos',
      automation: 'Camino a producción automatizado',
    },
    pipeline: 'Capas de una arquitectura conceptual, del frontend a la nube',
    layers: {
      frontend: { name: 'Frontend', desc: 'Interfaces tipadas y basadas en componentes.' },
      api: { name: 'API', desc: 'Contratos validados, autenticación JWT y endpoints documentados.' },
      microservices: { name: 'Microservicios', desc: 'Servicios pequeños, con límites bien definidos.' },
      broker: { name: 'Broker de mensajes', desc: 'Los eventos desacoplan productores y consumidores.' },
      database: { name: 'Base de datos', desc: 'Relacional o documental, elegida por servicio.' },
      cloud: { name: 'Cloud', desc: 'En contenedores y desplegado mediante pipelines.' },
    },
  },

  projects: {
    eyebrow: 'Trabajos seleccionados',
    title: 'Proyectos',
    lede: 'Repositorios públicos enfocados en backend, APIs y arquitectura de servicios.',
    viewOnGithub: 'Ver en GitHub',
    browseAll: 'Ver todos los repositorios en GitHub',
    case: {
      kicker: 'Caso destacado · nestjs-kafka',
      title: 'Arquitectura de microservicios orientada a eventos',
      desc: 'Un flujo de pedidos y pagos dividido en dos servicios NestJS independientes que nunca se llaman directamente entre sí. Se comunican solo mediante tópicos de Kafka y cada uno tiene su propia base de datos.',
      flow: 'orders-service publica en el tópico orders; payments-service lo consume y publica en el tópico payments, que consume orders-service.',
      producerConsumer: 'productor · consumidor',
      consumerProducer: 'consumidor · productor',
      step1: 'Un nuevo pedido se guarda como <code>PENDING</code> y se publica en el tópico <code>orders</code>.',
      step2: 'El servicio de pagos consume el evento, registra el pago y publica en <code>payments</code>.',
      step3: 'El servicio de pedidos consume el resultado y marca el pedido como <code>PAYED</code> o <code>CANCELLED</code>.',
      concepts: 'Conceptos',
      builtWith: 'Construido con',
      tags: {
        producerConsumer: 'Productor / Consumidor',
        async: 'Comunicación asíncrona',
        consumerGroups: 'Consumer groups',
        dbPerService: 'Base de datos por servicio',
        monorepo: 'Monorepo Nest',
      },
    },
    users: {
      desc: 'Gestión de usuarios fullstack. Una API NestJS con autenticación JWT, estrategias de Passport, documentación Swagger y carga de archivos, consumida por un cliente React con contexto de autenticación y rutas protegidas.',
    },
    auth: {
      desc: 'Una API de tareas protegida con estrategias local y JWT de Passport, guards y decoradores personalizados (<code>@IsPublic</code>, <code>@CurrentUser</code>), migraciones con Prisma y documentación Swagger.',
    },
    solid: {
      desc: 'Un servicio Express construido sobre los principios SOLID: casos de uso, interfaces de repositorio y de proveedor de correo, e implementaciones intercambiables (Mailtrap mediante Nodemailer).',
    },
    go: {
      desc: 'Go en la práctica: goroutines, channels y patrones de concurrencia, generics, servidores y clientes HTTP, context, templates y acceso a bases de datos con Docker.',
      concurrency: 'Concurrencia',
    },
  },

  stack: {
    eyebrow: 'Herramientas',
    title: 'Stack tecnológico',
    lede: 'Las herramientas que uso a diario, del navegador a la infraestructura.',
    databases: 'Bases de datos',
  },

  github: {
    eyebrow: 'Huella open source',
    title: 'Código a la vista.',
    snapshot: 'Instantánea de GitHub',
    live: 'En vivo desde la API de GitHub',
    repos: 'Repositorios públicos',
    since: 'En GitHub desde',
    languages: 'Lenguajes',
    primary: 'Lenguaje principal',
    byLanguage: 'Repositorios por lenguaje',
    recent: 'Actividad reciente',
    other: 'Otros',
    langItem: '{name}: {count} repositorios',
    snapshotChart: 'TypeScript: 28 repositorios, JavaScript: 14, HTML: 5, Go: 2, Java: 2, CSS: 2, otros: 3',
    today: 'hoy',
    daysAgo: 'hace {n} d',
    dateLocale: 'es-ES',
  },

  learning: {
    eyebrow: 'Hoja de ruta',
    title: 'Explorando ahora',
    aws: { title: 'Conceptos avanzados de AWS', desc: 'Yendo más allá de la base de Cloud Practitioner, más a fondo en servicios y diseño.' },
    go: { title: 'Go', desc: 'Concurrencia, generics, HTTP y acceso a datos, estudiados en público.' },
    cloud: { title: 'Arquitectura Cloud', desc: 'Sistemas distribuidos que escalan y se mantienen resilientes.' },
    openSource: { title: 'Open Source', desc: 'Buscando proyectos en los que colaborar y aportar a la comunidad.' },
  },

  personal: {
    eyebrow: 'Fuera del horario',
    title: 'Más allá del código',
    text: 'Lejos de la terminal, lo más probable es que me encuentres jugando o produciendo música: otros dos lugares donde se juntan sistemas, timing y mucha iteración.',
    gaming: 'Videojuegos',
    music: 'Producción musical',
  },

  contact: {
    eyebrow: 'Abierto a oportunidades',
    title: 'Construyamos algo <span class="hero__title-accent">increíble.</span>',
    text: '¿Tienes una idea, un proyecto o una oportunidad? Hablemos.',
    whatsappAria: 'Chatear por WhatsApp al +55 85 98650-6832 (se abre en una pestaña nueva)',
    email: 'Escríbeme',
    emailAria: 'Enviar un correo a fernandess.weslley@gmail.com',
    copy: 'Copiar correo',
    copied: 'Copiado',
    copyFailed: 'No se pudo copiar',
    phoneAria: 'WhatsApp +55 85 98650-6832 (se abre en una pestaña nueva)',
  },

  theme: {
    toLight: 'Activar modo claro',
    toDark: 'Activar modo oscuro',
  },

  footer: {
    role: 'Desarrollador Fullstack & Cloud',
    note: 'Hecho con código y curiosidad.',
    email: 'Correo',
    emailAria: 'Enviar un correo a fernandess.weslley@gmail.com',
    whatsappAria: 'WhatsApp +55 85 98650-6832 (se abre en una pestaña nueva)',
  },
};
