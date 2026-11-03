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
  /** repo is private: no repo link, no detail page */
  private?: boolean
  /** site blocks iframes: use img as the preview in the hero */
  noEmbed?: boolean
  desc: { pt: string; en: string }
}

export const PUBLISHED: PublishedProject[] = [
  {
    n: "01",
    slug: "motion",
    name: "MOTION",
    kind: { pt: "framework criativo open source", en: "open source creative framework" },
    host: "motion.mateusarce.dev",
    url: "https://motion.mateusarce.dev/",
    repo: `${GH}/motion-studio`,
    repoName: "motion-studio",
    img: "https://motion.mateusarce.dev/assets/og-pt.png",
    version: "v1.0.0-rc.2",
    live: true,
    desc: {
      pt: "Framework de desenvolvimento criativo open-source: websites cinematográficos, 3D, vídeo CFR, carrosséis e posts em código reproduzível.",
      en: "Open-source creative development framework: cinematic websites, 3D, CFR video, carousels and posts as reproducible code.",
    },
  },
  {
    n: "02",
    slug: "tools",
    name: "ToolsOnDesk",
    kind: { pt: "app desktop · Windows", en: "desktop app · Windows" },
    host: "tools.mateusarce.dev",
    url: "https://tools.mateusarce.dev/",
    repo: `${GH}/tools-on-desk`,
    repoName: "tools-on-desk",
    img: "",
    version: "v0.1.0",
    live: true,
    desc: {
      pt: "A suíte desktop definitiva para edição de mídias, conversão de documentos, pôsteres e estúdio criativo com IA. 100% offline-first, seguro e sem assinaturas.",
      en: "The ultimate desktop suite for media editing, document conversion, posters and an AI creative studio. 100% offline-first, secure, no subscriptions.",
    },
  },
  {
    n: "03",
    slug: "financeiro",
    name: "Meu Financeiro",
    kind: { pt: "finanças pessoais · open source", en: "personal finance · open source" },
    host: "meufinanceiro.mateusarce.dev",
    url: "https://meufinanceiro.mateusarce.dev/",
    repo: `${GH}/meu-financeiro`,
    repoName: "meu-financeiro",
    img: "/images/meufinanceiro.png",
    version: "",
    live: true,
    private: true,
    noEmbed: true,
    desc: {
      pt: "App de finanças pessoais de código aberto. Explore uma demo fictícia sem conectar seu banco.",
      en: "Open-source personal finance app. Explore a fictional demo without connecting your bank.",
    },
  },
  {
    n: "04",
    slug: "sqlvault",
    name: "SQL Vault",
    kind: { pt: "cofre SQL self-hosted · open source", en: "self-hosted SQL vault · open source" },
    host: "sqlvault.mateusarce.dev",
    url: "https://sqlvault.mateusarce.dev/pt-BR",
    repo: `${GH}/sql-vault`,
    repoName: "sql-vault",
    img: "/images/sqlvault.png",
    version: "v0.1.0",
    live: true,
    /** the site sends X-Frame-Options: DENY, so img is the preview */
    noEmbed: true,
    desc: {
      pt: "Cofre self-hosted para consultas SQL com versionamento, segurança, IA e integração com VS Code.",
      en: "Self-hosted SQL vault with versioning, security, AI and VS Code integration.",
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
  PUBLISHED.map((p) => [p.repoName, p])
)
