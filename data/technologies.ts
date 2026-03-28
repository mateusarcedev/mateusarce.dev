import {
  SiNginx,
  SiExpress,
  SiFastify,
  SiVitest,
  SiPostgresql,
  SiMysql,
  SiGithubactions,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiSupabase,
  SiHeroku,
  SiVercel,
  SiReactquery,
  SiSwagger,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiLaravel,
  SiLinux,
  SiPython,
  SiFigma,
  SiGo,
  SiVuedotjs,
  SiGit,
  SiBitbucket,
  SiDigitalocean,
  SiJira,
  SiAmazonwebservices,
  SiGitlab,
  SiSass,
  SiCss3,
  SiNpm,
} from "react-icons/si"
import { FaDatabase } from "react-icons/fa"

export const technologies = [
  // Frontend
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    description: {
      "pt-BR": "Runtime JavaScript",
      "en-US": "JavaScript Runtime",
    },
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    description: {
      "pt-BR": "Tipagem estática para JS",
      "en-US": "Static typing for JS",
    },
    category: "frontend",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    description: {
      "pt-BR": "Biblioteca UI declarativa",
      "en-US": "Declarative UI library",
    },
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    description: {
      "pt-BR": "Framework React com SSR/SSG",
      "en-US": "React framework with SSR/SSG",
    },
    category: "frontend",
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
    color: "#4FC08D",
    description: {
      "pt-BR": "Framework progressivo",
      "en-US": "Progressive framework",
    },
    category: "frontend",
  },
  {
    name: "React Native",
    icon: SiReact,
    color: "#61DAFB",
    description: {
      "pt-BR": "Apps nativos multiplataforma",
      "en-US": "Cross-platform native apps",
    },
    category: "mobile",
  },
  {
    name: "SASS",
    icon: SiSass,
    color: "#CC6699",
    description: {
      "pt-BR": "Pré-processador CSS",
      "en-US": "CSS preprocessor",
    },
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    description: {
      "pt-BR": "Framework CSS utilitário",
      "en-US": "Utility-first CSS",
    },
    category: "frontend",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "#DB7093",
    description: {
      "pt-BR": "CSS-in-JS",
      "en-US": "CSS-in-JS",
    },
    category: "frontend",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572B6",
    description: {
      "pt-BR": "Estilização web",
      "en-US": "Web styling",
    },
    category: "frontend",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    description: {
      "pt-BR": "Design colaborativo",
      "en-US": "Collaborative design",
    },
    category: "design",
  },

  // Backend
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    description: {
      "pt-BR": "Runtime JavaScript server-side",
      "en-US": "Server-side JavaScript runtime",
    },
    category: "backend",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
    description: {
      "pt-BR": "Framework minimalista",
      "en-US": "Minimalist framework",
    },
    category: "backend",
  },
  {
    name: "Fastify",
    icon: SiFastify,
    color: "#000000",
    description: {
      "pt-BR": "Framework de alta performance",
      "en-US": "High-performance framework",
    },
    category: "backend",
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
    color: "#E0234E",
    description: {
      "pt-BR": "Framework escalável e modular",
      "en-US": "Scalable and modular framework",
    },
    category: "backend",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20",
    description: {
      "pt-BR": "Framework PHP elegante",
      "en-US": "Elegant PHP framework",
    },
    category: "backend",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    description: {
      "pt-BR": "Linguagem de propósito geral",
      "en-US": "General-purpose language",
    },
    category: "backend",
  },
  {
    name: "Go",
    icon: SiGo,
    color: "#00ADD8",
    description: {
      "pt-BR": "Linguagem compilada e concorrente",
      "en-US": "Compiled concurrent language",
    },
    category: "backend",
  },
  {
    name: "RESTful API",
    icon: SiSwagger,
    color: "#85EA2D",
    description: {
      "pt-BR": "API-first",
      "en-US": "API-first",
    },
    category: "backend",
  },

  // Database
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    description: {
      "pt-BR": "SGBD relacional avançado",
      "en-US": "Advanced relational DBMS",
    },
    category: "database",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    description: {
      "pt-BR": "SGBD relacional popular",
      "en-US": "Popular relational DBMS",
    },
    category: "database",
  },
  {
    name: "Database",
    icon: FaDatabase,
    color: "#336791",
    description: {
      "pt-BR": "Gerenciamento de dados",
      "en-US": "Data management",
    },
    category: "database",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    description: {
      "pt-BR": "Backend-as-a-Service com PostgreSQL",
      "en-US": "Backend-as-a-Service with PostgreSQL",
    },
    category: "database",
  },

  // DevOps & Cloud
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    description: {
      "pt-BR": "Containerização",
      "en-US": "Containerization",
    },
    category: "devops",
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "#FCC624",
    description: {
      "pt-BR": "Sistema operacional Unix-like",
      "en-US": "Unix-like operating system",
    },
    category: "devops",
  },
  {
    name: "Nginx",
    icon: SiNginx,
    color: "#009639",
    description: {
      "pt-BR": "Servidor web e proxy reverso",
      "en-US": "Web server and reverse proxy",
    },
    category: "devops",
  },
  {
    name: "CI/CD",
    icon: SiGithubactions,
    color: "#2088FF",
    description: {
      "pt-BR": "Integração e entrega contínua",
      "en-US": "Continuous integration and delivery",
    },
    category: "devops",
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
    color: "#232F3E",
    description: {
      "pt-BR": "Plataforma cloud da Amazon",
      "en-US": "Amazon cloud platform",
    },
    category: "cloud",
  },
  {
    name: "Digital Ocean",
    icon: SiDigitalocean,
    color: "#0080FF",
    description: {
      "pt-BR": "Infraestrutura cloud simplificada",
      "en-US": "Simplified cloud infrastructure",
    },
    category: "cloud",
  },
  {
    name: "Heroku",
    icon: SiHeroku,
    color: "#430098",
    description: {
      "pt-BR": "PaaS para deploy rápido",
      "en-US": "PaaS for rapid deployment",
    },
    category: "cloud",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    description: {
      "pt-BR": "Plataforma para frontend",
      "en-US": "Frontend platform",
    },
    category: "cloud",
  },

  // Tools & Others
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    description: {
      "pt-BR": "Controle de versão distribuído",
      "en-US": "Distributed version control",
    },
    category: "tools",
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    color: "#FC6D26",
    description: {
      "pt-BR": "Plataforma DevOps completa",
      "en-US": "Complete DevOps platform",
    },
    category: "tools",
  },
  {
    name: "Bitbucket",
    icon: SiBitbucket,
    color: "#0052CC",
    description: {
      "pt-BR": "Hospedagem Git Atlassian",
      "en-US": "Atlassian Git hosting",
    },
    category: "tools",
  },
  {
    name: "Jira",
    icon: SiJira,
    color: "#0052CC",
    description: {
      "pt-BR": "Gerenciamento ágil de projetos",
      "en-US": "Agile project management",
    },
    category: "tools",
  },
  {
    name: "Vitest",
    icon: SiVitest,
    color: "#729B1B",
    description: {
      "pt-BR": "Framework de testes rápido",
      "en-US": "Fast testing framework",
    },
    category: "testing",
  },
  {
    name: "Zustand",
    icon: SiReactquery,
    color: "#FF4154",
    description: {
      "pt-BR": "State management minimalista",
      "en-US": "Minimalist state management",
    },
    category: "frontend",
  },
  {
    name: "NPM",
    icon: SiNpm,
    color: "#CB3837",
    description: {
      "pt-BR": "Gerenciador de pacotes JS",
      "en-US": "JS package manager",
    },
    category: "tools",
  },
]

export const categoryMetadata = {
  frontend: {
    icon: "🎨",
    title: {
      "pt-BR": "Frontend",
      "en-US": "Frontend",
    },
    description: {
      "pt-BR": "Ferramentas de interface e experiência do usuário",
      "en-US": "Interface and user experience tools",
    },
  },
  backend: {
    icon: "⚙️",
    title: {
      "pt-BR": "Backend",
      "en-US": "Backend",
    },
    description: {
      "pt-BR": "Ambiente e frameworks de servidor",
      "en-US": "Server environment and frameworks",
    },
  },
  database: {
    icon: "🗄️",
    title: {
      "pt-BR": "Banco de Dados",
      "en-US": "Database",
    },
    description: {
      "pt-BR": "Sistemas de armazenamento e gerenciamento de dados",
      "en-US": "Data storage and management systems",
    },
  },
  cloud: {
    icon: "☁️",
    title: {
      "pt-BR": "Nuvem",
      "en-US": "Cloud",
    },
    description: {
      "pt-BR": "Plataformas de hospedagem e infraestrutura",
      "en-US": "Hosting and infrastructure platforms",
    },
  },
  devops: {
    icon: "🔧",
    title: {
      "pt-BR": "DevOps",
      "en-US": "DevOps",
    },
    description: {
      "pt-BR": "Ferramentas de deploy e automação",
      "en-US": "Deployment and automation tools",
    },
  },
  mobile: {
    icon: "📱",
    title: {
      "pt-BR": "Mobile",
      "en-US": "Mobile",
    },
    description: {
      "pt-BR": "Desenvolvimento de aplicativos móveis",
      "en-US": "Mobile application development",
    },
  },
  design: {
    icon: "✨",
    title: {
      "pt-BR": "Design",
      "en-US": "Design",
    },
    description: {
      "pt-BR": "Ferramentas de design e prototipagem",
      "en-US": "Design and prototyping tools",
    },
  },
  tools: {
    icon: "🛠️",
    title: {
      "pt-BR": "Ferramentas",
      "en-US": "Tools",
    },
    description: {
      "pt-BR": "Controle de versão e gerenciamento de projetos",
      "en-US": "Version control and project management",
    },
  },
  testing: {
    icon: "🧪",
    title: {
      "pt-BR": "Testes",
      "en-US": "Testing",
    },
    description: {
      "pt-BR": "Frameworks e ferramentas de teste",
      "en-US": "Testing frameworks and tools",
    },
  },
}
