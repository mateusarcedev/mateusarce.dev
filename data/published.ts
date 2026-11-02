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
]

export const HERO_ROLES = {
  pt: ["sistemas backend", "ferramentas para devs", "automação com IA", "plataformas internas"],
  en: ["backend systems", "developer tools", "AI automation", "internal platforms"],
}

export const MARQUEE = [
  "Go", "TypeScript", "NestJS", "Next.js", "React", "Python",
  "LangGraph", "PostgreSQL", "RabbitMQ", "Redis", "Docker", "React Native",
]
