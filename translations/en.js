/* English. Project and technology names are never translated. */
window.I18N = window.I18N || {};
window.I18N.en = {
  meta: {
    title: 'Wesley Fernandes — Fullstack Developer & Cloud',
    description: 'Fullstack Developer focused on Cloud, AWS, Node.js, React.js and Microservices.',
    role: 'Fullstack Developer & Cloud Engineer',
    ogImageAlt: 'Wesley Fernandes — Fullstack Developer & Cloud Engineer',
    locale: 'en_US',
  },

  common: {
    skip: 'Skip to content',
  },

  nav: {
    label: 'Primary',
    brand: 'Wesley Fernandes — back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    about: 'About',
    architecture: 'How I build',
    projects: 'Projects',
    stack: 'Stack',
    github: 'GitHub',
    cta: "Let's connect",
    language: 'Language',
    languageToggle: 'Select language (current: English)',
  },

  hero: {
    eyebrow: "Hello, I'm Wesley",
    title: 'Building scalable software <span class="hero__title-accent">for the cloud.</span>',
    lede: 'Fullstack developer focused on building modern applications, scalable architectures and cloud-based solutions.',
    viewProjects: 'View Projects',
    connect: "Let's Connect",
    location: 'Fortaleza — CE, Brazil',
    diagram: 'Abstract cloud architecture: a client calls an API gateway that routes to microservices, which communicate through an event bus and persist to databases.',
    diagramRegion: 'cloud · region',
    diagramBus: 'kafka · event bus',
    scroll: 'Scroll to About',
  },

  about: {
    eyebrow: 'About me',
    title: 'From interface to infrastructure, <span class="text-muted">I like owning the whole path.</span>',
    p1: "I'm a fullstack developer working with cloud and product engineering. I enjoy turning ideas into systems that scale — typed APIs, event-driven services and clean, responsive interfaces.",
    p2: "Most of my work lives in the JavaScript ecosystem: Node.js and NestJS on the backend, React on the frontend, AWS underneath. Right now I'm going deeper into advanced AWS concepts and Go, and I'm always happy to collaborate on open source.",
    portraitAlt: 'Anime-style illustration of Wesley coding on his laptop',
    code: {
      role: "'Fullstack Developer & Cloud Engineer'",
      based: "'Fortaleza, CE — Brazil'",
      events: "'events'",
      microservices: "'microservices'",
      awsAdvanced: "'AWS advanced'",
      caption: "A TypeScript object summarizing Wesley's role, location, stack and current learning.",
    },
  },

  certification: {
    kicker: 'Verified credential · Amazon Web Services',
    text: 'Foundational validation of AWS cloud concepts, core services, security, architecture and pricing.',
    verify: 'Verify on Credly',
  },

  architecture: {
    eyebrow: 'Engineering',
    title: 'How I build',
    lede: 'Every layer has one job and a clear contract with the next. Services stay small, talk through events when they can, and everything ships in containers — so the system can grow without being rewritten.',
    principles: {
      typed: 'Typed end to end',
      coupling: 'Loose coupling, async by default',
      data: 'Each service owns its data',
      automation: 'Automate the path to production',
    },
    pipeline: 'Conceptual architecture layers, from frontend to cloud',
    layers: {
      frontend: { name: 'Frontend', desc: 'Component-driven, typed interfaces.' },
      api: { name: 'API', desc: 'Validated contracts, JWT auth, documented endpoints.' },
      microservices: { name: 'Microservices', desc: 'Small services with clear boundaries.' },
      broker: { name: 'Message Broker', desc: 'Events decouple producers from consumers.' },
      database: { name: 'Database', desc: 'Relational or document — chosen per service.' },
      cloud: { name: 'Cloud', desc: 'Containerized and shipped through pipelines.' },
    },
  },

  projects: {
    eyebrow: 'Selected work',
    title: 'Projects',
    lede: 'Public repositories focused on backend, APIs and service architecture.',
    viewOnGithub: 'View on GitHub',
    browseAll: 'Browse all repositories on GitHub',
    case: {
      kicker: 'Featured case · nestjs-kafka',
      title: 'Event-driven microservices architecture',
      desc: 'An order and payment flow split into two independent NestJS services that never call each other directly. They communicate only through Kafka topics, each one owning its own database.',
      flow: 'orders-service publishes to the orders topic; payments-service consumes it and publishes to the payments topic, which orders-service consumes.',
      producerConsumer: 'producer · consumer',
      consumerProducer: 'consumer · producer',
      step1: 'A new order is stored as <code>PENDING</code> and published to the <code>orders</code> topic.',
      step2: 'The payments service consumes it, records the payment and emits to <code>payments</code>.',
      step3: 'The orders service consumes the result and marks the order <code>PAYED</code> or <code>CANCELLED</code>.',
      concepts: 'Concepts',
      builtWith: 'Built with',
      tags: {
        producerConsumer: 'Producer / Consumer',
        async: 'Async communication',
        consumerGroups: 'Consumer groups',
        dbPerService: 'Database per service',
        monorepo: 'Nest monorepo',
      },
    },
    users: {
      desc: 'Fullstack user management. A NestJS API with JWT auth, Passport strategies, Swagger docs and file uploads, consumed by a React client with an auth context and protected routes.',
    },
    auth: {
      desc: 'A task API secured with local and JWT Passport strategies, custom guards and decorators (<code>@IsPublic</code>, <code>@CurrentUser</code>), Prisma migrations and Swagger documentation.',
    },
    solid: {
      desc: 'An Express service built around SOLID principles: use cases, repository and mail-provider interfaces, and swappable implementations (Mailtrap through Nodemailer).',
    },
    go: {
      desc: 'Hands-on Go: goroutines, channels and concurrency patterns, generics, HTTP servers and clients, context, templates and database access with Docker.',
      concurrency: 'Concurrency',
    },
  },

  stack: {
    eyebrow: 'Toolbox',
    title: 'Technology Stack',
    lede: 'The tools I reach for, from the browser down to the infrastructure.',
    databases: 'Databases',
  },

  github: {
    eyebrow: 'Open source footprint',
    title: 'Code in the open.',
    snapshot: 'Snapshot from GitHub',
    live: 'Live from the GitHub API',
    repos: 'Public repositories',
    since: 'On GitHub since',
    languages: 'Languages',
    primary: 'Primary language',
    byLanguage: 'Repositories by language',
    recent: 'Recently active',
    other: 'Other',
    langItem: '{name}: {count} repositories',
    snapshotChart: 'TypeScript: 28 repositories, JavaScript: 14, HTML: 5, Go: 2, Java: 2, CSS: 2, other: 3',
    today: 'today',
    daysAgo: '{n}d ago',
    dateLocale: 'en-US',
  },

  learning: {
    eyebrow: 'Roadmap',
    title: 'Currently Exploring',
    aws: { title: 'AWS Advanced Concepts', desc: 'Building on the Cloud Practitioner foundation, deeper into services and design.' },
    go: { title: 'Go', desc: 'Concurrency, generics, HTTP and data access — studied in the open.' },
    cloud: { title: 'Cloud Architecture', desc: 'Distributed systems that scale and stay resilient.' },
    openSource: { title: 'Open Source', desc: 'Looking for projects to collaborate on and give back to.' },
  },

  personal: {
    eyebrow: 'Off the clock',
    title: 'Beyond the Code',
    text: "Away from the terminal you'll usually find me gaming or producing music — two other places where systems, timing and a lot of iteration come together.",
    gaming: 'Gaming',
    music: 'Music Production',
  },

  contact: {
    eyebrow: 'Open to opportunities',
    title: 'Let\'s build something <span class="hero__title-accent">great.</span>',
    text: "Have an idea, project or opportunity? Let's connect.",
    whatsappAria: 'Chat on WhatsApp at +55 85 98650-6832 (opens WhatsApp in a new tab)',
    email: 'Get in touch',
    emailAria: 'Send an email to fernandess.weslley@gmail.com',
    copy: 'Copy email',
    copied: 'Copied',
    copyFailed: 'Copy failed',
    phoneAria: 'WhatsApp +55 85 98650-6832 (opens in a new tab)',
  },

  theme: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
  },

  footer: {
    role: 'Fullstack Developer & Cloud',
    note: 'Built with code & curiosity.',
    email: 'Email',
    emailAria: 'Email fernandess.weslley@gmail.com',
    whatsappAria: 'WhatsApp +55 85 98650-6832 (opens in a new tab)',
  },
};
