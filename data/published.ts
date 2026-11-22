const GH = "https://github.com/mateusarcedev"

export type PublishedProject = {
  n: string
  slug: string
  name: string
  kind: { pt: string; en: string }
  host: string
  url: string
  repo: string
  repoName: string
  img: string
  version: string
  live: boolean
  /** Repository isn't public: never link to or generate a public details page. */
  private?: boolean
  /** Site blocks embedding in an iframe. */
  noEmbed?: boolean
  /** Optional second public frontend belonging to the same project. */
  demoUrl?: string
  desc: { pt: string; en: string }
}

/**
 * Frontends with successful production deployments on Vercel.
 * A landing page and its demo count as ONE project, not two entries.
 * GitHub-only projects are listed separately in /projects.
 */
export const PUBLISHED: PublishedProject[] = [
  {
    n: "01",
    slug: "devhub",
    name: "DevHub",
    kind: { pt: "catálogo de ferramentas", en: "developer tools catalog" },
    host: "devhub.mateusarce.dev",
    url: "https://devhub.mateusarce.dev/",
    repo: "",
    repoName: "devhub",
    img: "",
    version: "",
    live: true,
    private: true,
    desc: {
      pt: "Catálogo de ferramentas para desenvolvedores com busca e comparações inteligentes.",
      en: "Developer tools catalog with intelligent search and comparisons.",
    },
  },
  {
    n: "02",
    slug: "motion",
    name: "MOTION",
    kind: { pt: "framework criativo", en: "creative framework" },
    host: "motion.mateusarce.dev",
    url: "https://motion.mateusarce.dev/",
    repo: `${GH}/motion-studio`,
    repoName: "motion-studio",
    img: "https://motion.mateusarce.dev/assets/og-pt.png",
    version: "v1.0.0-rc.2",
    live: true,
    desc: {
      pt: "Framework open source para criação de sites, vídeos e conteúdos visuais.",
      en: "Open-source framework for creating websites, video and visual content.",
    },
  },
  {
    n: "03",
    slug: "tools",
    name: "ToolsOnDesk",
    kind: { pt: "ferramentas desktop", en: "desktop tools" },
    host: "tools.mateusarce.dev",
    url: "https://tools.mateusarce.dev/",
    repo: `${GH}/tools-on-desk`,
    repoName: "tools-on-desk",
    img: "",
    version: "v0.1.0",
    live: true,
    desc: {
      pt: "Suíte desktop para editar, converter e produzir conteúdos localmente.",
      en: "Desktop suite to edit, convert and create content locally.",
    },
  },
  {
    n: "04",
    slug: "sql-vault",
    name: "SQL Vault",
    kind: { pt: "ferramenta para devs", en: "developer tool" },
    host: "sql-vault-landing.vercel.app",
    url: "https://sql-vault-landing.vercel.app/",
    repo: `${GH}/sql-vault`,
    repoName: "sql-vault",
    img: "",
    version: "",
    live: true,
    desc: {
      pt: "Gerenciador self-hosted de consultas SQL com histórico, IA e extensão VS Code.",
      en: "Self-hosted SQL query manager with versioning, AI and a VS Code extension.",
    },
  },
  {
    n: "05",
    slug: "financeiro",
    name: "Meu Financeiro",
    kind: { pt: "gestão financeira", en: "personal finance" },
    host: "meufinanceiro.mateusarce.dev",
    url: "https://meufinanceiro.mateusarce.dev/",
    demoUrl: "https://demo.meufinanceiro.mateusarce.dev/",
    repo: "",
    repoName: "meu-financeiro",
    img: "/images/meufinanceiro.png",
    version: "",
    live: true,
    private: true,
    noEmbed: true,
    desc: {
      pt: "Gestão financeira pessoal com uma demonstração pública de dados fictícios.",
      en: "Personal finance management with a public demo using fictional data.",
    },
  },
  {
    n: "06",
    slug: "tefe",
    name: "Memórias de Tefé",
    kind: { pt: "museu digital", en: "digital museum" },
    host: "tefe.mateusarce.dev",
    url: "https://tefe.mateusarce.dev/",
    repo: `${GH}/vila-de-ega`,
    repoName: "vila-de-ega",
    img: "",
    version: "",
    live: true,
    desc: {
      pt: "Museu digital com histórias, acontecimentos, personagens e lugares de Tefé.",
      en: "Digital museum of the stories, people, events and places of Tefé.",
    },
  },
  {
    n: "07",
    slug: "freelancer",
    name: "Freelancer",
    kind: { pt: "site profissional", en: "professional website" },
    host: "freelancer.mateusarce.dev",
    url: "https://freelancer.mateusarce.dev/",
    repo: "",
    repoName: "freelas.mateusarce.dev",
    img: "",
    version: "",
    live: true,
    private: true,
    desc: {
      pt: "Página para apresentar serviços de desenvolvimento de software.",
      en: "Website presenting software development services.",
    },
  },
  {
    n: "08",
    slug: "leo-motos",
    name: "Léo Motos",
    kind: { pt: "site de cliente", en: "client website" },
    host: "leo-motos-links.vercel.app",
    url: "https://leo-motos-links.vercel.app/",
    repo: `${GH}/leo-motos-linktree`,
    repoName: "leo-motos-linktree",
    img: "",
    version: "",
    live: true,
    desc: {
      pt: "Página de aluguel de motos com modelos e acesso direto ao WhatsApp.",
      en: "Motorcycle rental website with model listings and WhatsApp contact.",
    },
  },
  {
    n: "09",
    slug: "supertrans",
    name: "Supertrans — Protótipo",
    kind: { pt: "protótipo web", en: "web prototype" },
    host: "supertrans-prototip.vercel.app",
    url: "https://supertrans-prototip.vercel.app/",
    repo: `${GH}/supertrans-prototip`,
    repoName: "supertrans-prototip",
    img: "",
    version: "",
    live: true,
    desc: {
      pt: "Protótipo publicado de interface para a área de transportes.",
      en: "Published interface prototype for transportation workflows.",
    },
  },
  {
    n: "10",
    slug: "epis",
    name: "Entrega de EPIs",
    kind: { pt: "protótipo web", en: "web prototype" },
    host: "sistema-de-entrega-epis.vercel.app",
    url: "https://sistema-de-entrega-epis.vercel.app/",
    repo: "",
    repoName: "sistema-de-entrega-epis",
    img: "",
    version: "",
    live: true,
    private: true,
    desc: {
      pt: "Interface web para um sistema de entrega de equipamentos de proteção.",
      en: "Web interface for a personal protective equipment delivery system.",
    },
  },
]

export const HERO_ROLES = {
  pt: ["sistemas backend", "ferramentas para devs", "automação com IA", "plataformas internas"],
  en: ["backend systems", "developer tools", "AI automation", "internal platforms"],
}

export const MARQUEE = [
  "Go", "TypeScript", "NestJS", "Next.js", "React", "Python",
  "LangGraph", "PostgreSQL", "RabbitMQ", "Redis", "Docker", "React Native",
]

export const STACK_GROUPS = [
  { k: { pt: "Front-end", en: "Front-end" }, v: "React, Next.js, TypeScript" },
  { k: { pt: "Back-end", en: "Back-end" }, v: "Go, NestJS, Python, PostgreSQL" },
  { k: { pt: "Mobile", en: "Mobile" }, v: "React Native" },
  { k: { pt: "IA & automação", en: "AI & automation" }, v: "LangGraph, AI agents, workflows" },
]

export const PUBLISHED_BY_REPO: Record<string, PublishedProject> = Object.fromEntries(
  PUBLISHED.filter((p) => !p.private).map((p) => [p.repoName, p])
)
