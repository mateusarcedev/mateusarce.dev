export type Tech = {
  name: string
  slug: string
  color: string
  cat: string
  invertible?: boolean
  desc: { pt: string; en: string }
}

export const TECH: Tech[] = [
  // frontend
  { name: "JavaScript", slug: "javascript", color: "F7DF1E", cat: "frontend", desc: { pt: "Runtime JavaScript", en: "JavaScript runtime" } },
  { name: "TypeScript", slug: "typescript", color: "3178C6", cat: "frontend", desc: { pt: "Tipagem estática para JS", en: "Static typing for JS" } },
  { name: "React", slug: "react", color: "61DAFB", cat: "frontend", desc: { pt: "Biblioteca UI declarativa", en: "Declarative UI library" } },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF", cat: "frontend", invertible: true, desc: { pt: "Framework React com SSR/SSG", en: "React framework with SSR/SSG" } },
  { name: "Vue.js", slug: "vuedotjs", color: "4FC08D", cat: "frontend", desc: { pt: "Framework progressivo", en: "Progressive framework" } },
  { name: "SASS", slug: "sass", color: "CC6699", cat: "frontend", desc: { pt: "Pré-processador CSS", en: "CSS preprocessor" } },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4", cat: "frontend", desc: { pt: "Framework CSS utilitário", en: "Utility-first CSS" } },
  { name: "Styled Components", slug: "styledcomponents", color: "DB7093", cat: "frontend", desc: { pt: "CSS-in-JS", en: "CSS-in-JS" } },
  { name: "CSS", slug: "css", color: "1572B6", cat: "frontend", desc: { pt: "Estilização web", en: "Web styling" } },
  { name: "Zustand", slug: "reactquery", color: "FF4154", cat: "frontend", desc: { pt: "State management minimalista", en: "Minimalist state management" } },
  // backend
  { name: "Node.js", slug: "nodedotjs", color: "339933", cat: "backend", desc: { pt: "JS server-side", en: "Server-side JavaScript" } },
  { name: "Express", slug: "express", color: "FFFFFF", cat: "backend", invertible: true, desc: { pt: "Framework minimalista", en: "Minimalist framework" } },
  { name: "Fastify", slug: "fastify", color: "FFFFFF", cat: "backend", invertible: true, desc: { pt: "Framework de alta performance", en: "High-performance framework" } },
  { name: "Nest.js", slug: "nestjs", color: "E0234E", cat: "backend", desc: { pt: "Framework escalável e modular", en: "Scalable, modular framework" } },
  { name: "Laravel", slug: "laravel", color: "FF2D20", cat: "backend", desc: { pt: "Framework PHP elegante", en: "Elegant PHP framework" } },
  { name: "Python", slug: "python", color: "3776AB", cat: "backend", desc: { pt: "Linguagem de propósito geral", en: "General-purpose language" } },
  { name: "Go", slug: "go", color: "00ADD8", cat: "backend", desc: { pt: "Linguagem compilada e concorrente", en: "Compiled concurrent language" } },
  { name: "REST", slug: "swagger", color: "85EA2D", cat: "backend", desc: { pt: "API-first", en: "API-first" } },
  // database
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1", cat: "database", desc: { pt: "SGBD relacional avançado", en: "Advanced relational DBMS" } },
  { name: "MySQL", slug: "mysql", color: "4479A1", cat: "database", desc: { pt: "SGBD relacional popular", en: "Popular relational DBMS" } },
  { name: "Supabase", slug: "supabase", color: "3ECF8E", cat: "database", desc: { pt: "BaaS com PostgreSQL", en: "BaaS with PostgreSQL" } },
  { name: "Prisma", slug: "prisma", color: "FFFFFF", cat: "database", invertible: true, desc: { pt: "ORM type-safe", en: "Type-safe ORM" } },
  { name: "Redis", slug: "redis", color: "DC382D", cat: "database", desc: { pt: "Cache em memória", en: "In-memory cache" } },
  { name: "RabbitMQ", slug: "rabbitmq", color: "FF6600", cat: "database", desc: { pt: "Message broker", en: "Message broker" } },
  // devops
  { name: "Docker", slug: "docker", color: "2496ED", cat: "devops", desc: { pt: "Containerização", en: "Containerization" } },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5", cat: "devops", desc: { pt: "Orquestração de containers", en: "Container orchestration" } },
  { name: "Linux", slug: "linux", color: "FCC624", cat: "devops", desc: { pt: "SO Unix-like", en: "Unix-like OS" } },
  { name: "Nginx", slug: "nginx", color: "009639", cat: "devops", desc: { pt: "Servidor web e proxy reverso", en: "Web server / reverse proxy" } },
  { name: "Traefik", slug: "traefikproxy", color: "24A1C1", cat: "devops", desc: { pt: "Edge router / proxy reverso", en: "Edge router / reverse proxy" } },
  { name: "CI/CD", slug: "githubactions", color: "2088FF", cat: "devops", desc: { pt: "Integração contínua", en: "Continuous integration" } },
  { name: "Keycloak", slug: "keycloak", color: "4D4D4D", cat: "devops", desc: { pt: "Identidade e SSO", en: "Identity and SSO" } },
  // cloud
  { name: "AWS", slug: "amazon", color: "FF9900", cat: "cloud", desc: { pt: "Plataforma cloud da Amazon", en: "Amazon cloud platform" } },
  { name: "Digital Ocean", slug: "digitalocean", color: "0080FF", cat: "cloud", desc: { pt: "Cloud simplificada", en: "Simplified cloud" } },
  { name: "Vercel", slug: "vercel", color: "FFFFFF", cat: "cloud", invertible: true, desc: { pt: "Plataforma para frontend", en: "Frontend platform" } },
  // mobile
  { name: "React Native", slug: "react", color: "61DAFB", cat: "mobile", desc: { pt: "Apps nativos multiplataforma", en: "Cross-platform native apps" } },
  // tools
  { name: "Git", slug: "git", color: "F05032", cat: "tools", desc: { pt: "Controle de versão", en: "Version control" } },
  { name: "GitLab", slug: "gitlab", color: "FC6D26", cat: "tools", desc: { pt: "Plataforma DevOps", en: "DevOps platform" } },
  { name: "Bitbucket", slug: "bitbucket", color: "0052CC", cat: "tools", desc: { pt: "Hospedagem Git", en: "Git hosting" } },
  { name: "Jira", slug: "jira", color: "0052CC", cat: "tools", desc: { pt: "Gerenciamento ágil", en: "Agile project mgmt" } },
  { name: "NPM", slug: "npm", color: "CB3837", cat: "tools", desc: { pt: "Gerenciador de pacotes JS", en: "JS package manager" } },
  // testing
  { name: "Vitest", slug: "vitest", color: "6E9F18", cat: "testing", desc: { pt: "Framework de testes", en: "Test framework" } },
  // ai
  { name: "LangGraph", slug: "langchain", color: "1C3C3C", cat: "ai", desc: { pt: "Agentes de IA orquestrados", en: "Orchestrated AI agents" } },
  { name: "LangChain", slug: "langchain", color: "1C3C3C", cat: "ai", desc: { pt: "Framework para LLMs", en: "Framework for LLMs" } },
  // design
  { name: "Figma", slug: "figma", color: "F24E1E", cat: "design", desc: { pt: "Design colaborativo", en: "Collaborative design" } },
]

export const CAT_LABEL: Record<string, { pt: string; en: string }> = {
  frontend: { pt: "Frontend", en: "Frontend" },
  backend: { pt: "Backend", en: "Backend" },
  database: { pt: "Dados", en: "Data" },
  devops: { pt: "DevOps", en: "DevOps" },
  cloud: { pt: "Nuvem", en: "Cloud" },
  mobile: { pt: "Mobile", en: "Mobile" },
  tools: { pt: "Ferramentas", en: "Tools" },
  testing: { pt: "Testes", en: "Testing" },
  design: { pt: "Design", en: "Design" },
  ai: { pt: "IA / Agentes", en: "AI / Agents" },
}

export const CAT_ORDER = ["backend", "frontend", "database", "devops", "cloud", "ai", "mobile", "tools", "testing", "design"]

/** Kept for backward compatibility */
export const technologies = TECH
export const categoryMetadata = CAT_LABEL
