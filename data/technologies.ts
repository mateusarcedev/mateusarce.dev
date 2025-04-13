import {
  faJs,
  faNode,
  faReact,
  faDocker,
  faLaravel,
  faLinux,
  faPython,
  faFigma,
  faGolang,
  faVuejs,
  faGitAlt,
  faBitbucket,
  faDigitalOcean,
  faJira,
  faAws,
  faGitlab,
  faSass,
  faReacteurope,
  faCss3Alt,
  faNpm,
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase as solidDatabase } from "@fortawesome/free-solid-svg-icons"
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
} from "react-icons/si"

export const technologies = [
  // Frontend
  {
    name: "JavaScript",
    icon: faJs,
    color: "#F7DF1E",
    description: {
      "pt-BR": "Linguagem de programação interpretada estruturada para web.",
      "en-US": "Structured interpreted programming language for the web.",
    },
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    isReactIcon: true,
    description: {
      "pt-BR": "Superset do JavaScript que adiciona tipagem estática.",
      "en-US": "JavaScript superset that adds static typing.",
    },
    category: "frontend",
  },
  {
    name: "React",
    icon: faReact,
    color: "#61DAFB",
    description: {
      "pt-BR": "Biblioteca JavaScript para construção de interfaces de usuário.",
      "en-US": "JavaScript library for building user interfaces.",
    },
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    isReactIcon: true,
    description: {
      "pt-BR": "Framework React para produção com SSR e SSG.",
      "en-US": "React framework for production with SSR and SSG.",
    },
    category: "frontend",
  },
  {
    name: "Vue.js",
    icon: faVuejs,
    color: "#4FC08D",
    description: {
      "pt-BR": "Framework progressivo para construção de interfaces.",
      "en-US": "Progressive framework for building user interfaces.",
    },
    category: "frontend",
  },
  {
    name: "React Native",
    icon: faReacteurope,
    color: "#61DAFB",
    description: {
      "pt-BR": "Framework para desenvolvimento de aplicativos móveis nativos.",
      "en-US": "Framework for building native mobile applications.",
    },
    category: "mobile",
  },
  {
    name: "SASS",
    icon: faSass,
    color: "#CC6699",
    description: {
      "pt-BR": "Pré-processador CSS com recursos avançados.",
      "en-US": "CSS preprocessor with advanced features.",
    },
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    isReactIcon: true,
    description: {
      "pt-BR": "Framework CSS utilitário para desenvolvimento rápido.",
      "en-US": "Utility-first CSS framework for rapid development.",
    },
    category: "frontend",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "#DB7093",
    isReactIcon: true,
    description: {
      "pt-BR": "Biblioteca para estilização de componentes com CSS-in-JS.",
      "en-US": "Library for styling components with CSS-in-JS.",
    },
    category: "frontend",
  },
  {
    name: "CSS",
    icon: faCss3Alt,
    color: "#1572B6",
    description: {
      "pt-BR": "Linguagem de estilo para descrever a apresentação de documentos.",
      "en-US": "Style sheet language for describing document presentation.",
    },
    category: "frontend",
  },
  {
    name: "Figma",
    icon: faFigma,
    color: "#F24E1E",
    description: {
      "pt-BR": "Ferramenta de design de interface colaborativa baseada na web.",
      "en-US": "Web-based collaborative interface design tool.",
    },
    category: "design",
  },

  // Backend
  {
    name: "Node.js",
    icon: faNode,
    color: "#339933",
    description: {
      "pt-BR": "Ambiente de execução JavaScript server-side.",
      "en-US": "Server-side JavaScript runtime environment.",
    },
    category: "backend",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#000000",
    isReactIcon: true,
    description: {
      "pt-BR": "Framework web minimalista para Node.js.",
      "en-US": "Minimalist web framework for Node.js.",
    },
    category: "backend",
  },
  {
    name: "Fastify",
    icon: SiFastify,
    color: "#000000",
    isReactIcon: true,
    description: {
      "pt-BR": "Framework web rápido e de baixo overhead para Node.js.",
      "en-US": "Fast and low overhead web framework for Node.js.",
    },
    category: "backend",
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
    color: "#E0234E",
    isReactIcon: true,
    description: {
      "pt-BR": "Framework progressivo para construir aplicações server-side eficientes e escaláveis.",
      "en-US": "Progressive framework for building efficient and scalable server-side applications.",
    },
    category: "backend",
  },
  {
    name: "Laravel",
    icon: faLaravel,
    color: "#FF2D20",
    description: {
      "pt-BR": "Framework PHP para desenvolvimento web com sintaxe elegante.",
      "en-US": "PHP framework for web development with elegant syntax.",
    },
    category: "backend",
  },
  {
    name: "Python",
    icon: faPython,
    color: "#3776AB",
    description: {
      "pt-BR": "Linguagem de programação de alto nível, interpretada e de propósito geral.",
      "en-US": "High-level, interpreted, general-purpose programming language.",
    },
    category: "backend",
  },
  {
    name: "Go",
    icon: faGolang,
    color: "#00ADD8",
    description: {
      "pt-BR": "Linguagem de programação compilada e estaticamente tipada.",
      "en-US": "Compiled, statically typed programming language.",
    },
    category: "backend",
  },
  {
    name: "RESTful API",
    icon: SiSwagger,
    color: "#85EA2D",
    isReactIcon: true,
    description: {
      "pt-BR": "Arquitetura para desenvolvimento de web services.",
      "en-US": "Architecture for developing web services.",
    },
    category: "backend",
  },

  // Database
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    isReactIcon: true,
    description: {
      "pt-BR": "Sistema de gerenciamento de banco de dados relacional.",
      "en-US": "Relational database management system.",
    },
    category: "database",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    isReactIcon: true,
    description: {
      "pt-BR": "Sistema de gerenciamento de banco de dados relacional.",
      "en-US": "Relational database management system.",
    },
    category: "database",
  },
  {
    name: "Database",
    icon: solidDatabase,
    color: "#336791",
    description: {
      "pt-BR": "Sistemas de gerenciamento de dados estruturados.",
      "en-US": "Structured data management systems.",
    },
    category: "database",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    isReactIcon: true,
    description: {
      "pt-BR": "Alternativa open source ao Firebase com PostgreSQL.",
      "en-US": "Open source Firebase alternative with PostgreSQL.",
    },
    category: "database",
  },

  // DevOps & Cloud
  {
    name: "Docker",
    icon: faDocker,
    color: "#2496ED",
    description: {
      "pt-BR": "Plataforma para desenvolvimento, envio e execução de aplicações em containers.",
      "en-US": "Platform for developing, shipping, and running applications in containers.",
    },
    category: "devops",
  },
  {
    name: "Linux",
    icon: faLinux,
    color: "#FCC624",
    description: {
      "pt-BR": "Sistema operacional de código aberto baseado em Unix.",
      "en-US": "Open-source Unix-like operating system.",
    },
    category: "devops",
  },
  {
    name: "Nginx",
    icon: SiNginx,
    color: "#009639",
    isReactIcon: true,
    description: {
      "pt-BR": "Servidor web de alto desempenho e proxy reverso.",
      "en-US": "High-performance web server and reverse proxy.",
    },
    category: "devops",
  },
  {
    name: "CI/CD",
    icon: SiGithubactions,
    color: "#2088FF",
    isReactIcon: true,
    description: {
      "pt-BR": "Práticas de integração e entrega contínua de software.",
      "en-US": "Continuous integration and continuous delivery practices.",
    },
    category: "devops",
  },
  {
    name: "AWS",
    icon: faAws,
    color: "#232F3E",
    description: {
      "pt-BR": "Plataforma de serviços em nuvem da Amazon.",
      "en-US": "Amazon's cloud services platform.",
    },
    category: "cloud",
  },
  {
    name: "Digital Ocean",
    icon: faDigitalOcean,
    color: "#0080FF",
    description: {
      "pt-BR": "Provedor de infraestrutura em nuvem para desenvolvedores.",
      "en-US": "Cloud infrastructure provider for developers.",
    },
    category: "cloud",
  },
  {
    name: "Heroku",
    icon: SiHeroku,
    color: "#430098",
    isReactIcon: true,
    description: {
      "pt-BR": "Plataforma em nuvem como serviço (PaaS).",
      "en-US": "Cloud platform as a service (PaaS).",
    },
    category: "cloud",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    isReactIcon: true,
    description: {
      "pt-BR": "Plataforma para implantação de sites estáticos e aplicações JAMstack.",
      "en-US": "Platform for deploying static sites and JAMstack applications.",
    },
    category: "cloud",
  },

  // Tools & Others
  {
    name: "Git",
    icon: faGitAlt,
    color: "#F05032",
    description: {
      "pt-BR": "Sistema de controle de versão distribuído.",
      "en-US": "Distributed version control system.",
    },
    category: "tools",
  },
  {
    name: "GitLab",
    icon: faGitlab,
    color: "#FC6D26",
    description: {
      "pt-BR": "Plataforma DevOps baseada em Git para desenvolvimento colaborativo.",
      "en-US": "Git-based DevOps platform for collaborative development.",
    },
    category: "tools",
  },
  {
    name: "Bitbucket",
    icon: faBitbucket,
    color: "#0052CC",
    description: {
      "pt-BR": "Serviço de hospedagem de repositórios Git.",
      "en-US": "Git repository hosting service.",
    },
    category: "tools",
  },
  {
    name: "Jira",
    icon: faJira,
    color: "#0052CC",
    description: {
      "pt-BR": "Software de gerenciamento de projetos e rastreamento de problemas.",
      "en-US": "Project management and issue tracking software.",
    },
    category: "tools",
  },
  {
    name: "Vitest",
    icon: SiVitest,
    color: "#729B1B",
    isReactIcon: true,
    description: {
      "pt-BR": "Framework de testes unitários rápido para Vite.",
      "en-US": "Fast unit test framework for Vite.",
    },
    category: "testing",
  },
  {
    name: "Zustand",
    icon: SiReactquery,
    color: "#FF4154",
    isReactIcon: true,
    description: {
      "pt-BR": "Solução de gerenciamento de estado minimalista para React.",
      "en-US": "Minimalist state management solution for React.",
    },
    category: "frontend",
  },
  {
    name: "NPM",
    icon: faNpm,
    color: "#CB3837",
    description: {
      "pt-BR": "Gerenciador de pacotes para JavaScript.",
      "en-US": "Package manager for JavaScript.",
    },
    category: "tools",
  },
]
