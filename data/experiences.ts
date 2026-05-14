export type Experience = {
  logo: string
  logoClass?: string
  current?: boolean
  startDate?: string
  dateRange: { pt: string; en: string }
  duration?: string
  title: { pt: string; en: string }
  company: string
  location: string
  bullets: { pt: string[]; en: string[] }
  tech: string[]
}

export const experiences: Experience[] = [
  {
    logo: "/images/supertrans_logo.png",
    logoClass: "logo-supertrans",
    current: true,
    startDate: "2026-05-01",
    dateRange: { pt: "mai 2026 → presente", en: "may 2026 → present" },
    title: { pt: "Desenvolvedor Full Stack Pleno", en: "Mid-level Full Stack Developer" },
    company: "Supertrans",
    location: "Manaus, BR",
    bullets: {
      pt: [
        "Backends em <b>Go</b>, <b>Node.js</b> (NestJS) e <b>Python</b> — APIs, workers, integrações",
        "Agentes de IA e automações com <b>LangGraph</b>",
        "Mensageria e cache: <b>RabbitMQ</b> e <b>Redis</b>",
        "Proxy reverso e roteamento com <b>Nginx</b> e <b>Traefik</b>",
        "Persistência com <b>PostgreSQL</b> + <b>Prisma</b>; auth com <b>Keycloak</b>",
        "Deploy em servidores <b>Linux</b> com <b>Docker</b>",
      ],
      en: [
        "Backends in <b>Go</b>, <b>Node.js</b> (NestJS) and <b>Python</b> — APIs, workers, integrations",
        "AI agents and automation with <b>LangGraph</b>",
        "Messaging and cache: <b>RabbitMQ</b> and <b>Redis</b>",
        "Reverse proxy and routing with <b>Nginx</b> and <b>Traefik</b>",
        "Persistence with <b>PostgreSQL</b> + <b>Prisma</b>; auth via <b>Keycloak</b>",
        "Deployments to <b>Linux</b> servers with <b>Docker</b>",
      ],
    },
    tech: ["Go", "TypeScript", "Node.js", "NestJS", "Next.js", "React", "Python", "LangGraph", "Prisma", "PostgreSQL", "RabbitMQ", "Redis", "Keycloak", "Docker", "Nginx", "Traefik", "Linux"],
  },
  {
    logo: "/images/sidia_logo.webp",
    dateRange: { pt: "nov 2024 → abr 2026", en: "nov 2024 → apr 2026" },
    duration: "1 yr 5 mo",
    title: { pt: "Desenvolvedor de Software I", en: "Software Developer I" },
    company: "Sidia Instituto de Tecnologia",
    location: "Manaus, BR",
    bullets: {
      pt: [
        "APIs e microserviços escaláveis com NestJS",
        "SSO com Keycloak — segurança e UX em uma só passada",
        "Performance e usabilidade em React e Next.js",
        "Infraestrutura contínua com Docker e Kubernetes",
      ],
      en: [
        "Scalable APIs and microservices with NestJS",
        "SSO with Keycloak — security and UX in one pass",
        "Performance & usability on React and Next.js apps",
        "Continuous infra with Docker and Kubernetes",
      ],
    },
    tech: ["NestJS", "React", "Next.js", "Keycloak", "Docker", "Kubernetes"],
  },
  {
    logo: "/images/sidia_logo.webp",
    dateRange: { pt: "abr 2024 → nov 2024", en: "apr 2024 → nov 2024" },
    duration: "7 mo",
    title: { pt: "Estagiário", en: "Intern" },
    company: "Sidia Instituto de Tecnologia",
    location: "Manaus, BR",
    bullets: {
      pt: [
        "APIs robustas com NestJS e backend tuning",
        "UI fluida em React e integração com Keycloak",
        "Refatorações com foco em boas práticas",
        "Apps mobile multiplataforma com React Native",
      ],
      en: [
        "Robust NestJS APIs and backend tuning",
        "Smooth React UIs and Keycloak integration",
        "Refactors with best-practice focus",
        "Cross-platform mobile apps with React Native",
      ],
    },
    tech: ["NestJS", "React", "React Native", "Keycloak"],
  },
  {
    logo: "/images/visteon_logo.webp",
    dateRange: { pt: "fev 2022 → dez 2023", en: "feb 2022 → dec 2023" },
    duration: "1 yr 11 mo",
    title: { pt: "Estagiário de TI", en: "IT Intern" },
    company: "Visteon Amazonas",
    location: "Manaus, BR",
    bullets: {
      pt: [
        "Manutenção e expansão de sistemas legados em PHP",
        "Novas features em Node.js e Python",
        "Interfaces interativas em React e Vue.js",
        "Otimização de queries e bases MySQL",
      ],
      en: [
        "Maintenance & expansion of legacy PHP systems",
        "New features in Node.js and Python",
        "Interactive UIs in React and Vue.js",
        "Query & MySQL database optimization",
      ],
    },
    tech: ["PHP", "Node.js", "Python", "React", "Vue.js", "MySQL"],
  },
]
