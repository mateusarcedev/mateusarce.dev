'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Moon, Sun, Languages } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useQuery } from '@tanstack/react-query'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  faAws
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase as solidDatabase } from '@fortawesome/free-solid-svg-icons'

const translations = {
  'pt-BR': {
    role: 'Desenvolvedor de software Full Stack',
    bio: 'Sou um desenvolvedor full stack apaixonado por tecnologia e inovação. Comprometido com o crescimento profissional contínuo, estou sempre em busca de novos desafios que aprimorem minhas competências e contribuam para soluções tecnológicas impactantes.',
    projects: 'Projetos',
    technologies: 'Tecnologias',
    stats: 'Estatísticas do GitHub',
    repositories: 'Repositórios',
    followers: 'Seguidores',
    following: 'Seguindo',
    contributions: 'Contribuições',
    curriculum: 'currículo'
  },
  'en-US': {
    role: 'Full Stack Software Developer',
    bio: 'I am a full stack developer passionate about technology and innovation. Committed to continuous professional growth, I am always seeking new challenges that enhance my skills and contribute to impactful technological solutions.',
    projects: 'Projects',
    technologies: 'Technologies',
    stats: 'GitHub Stats',
    repositories: 'Repositories',
    followers: 'Followers',
    following: 'Following',
    contributions: 'Contributions',
    curriculum: 'resume'
  }
}

const projects = [
  {
    name: { 'pt-BR': "DevLinks", 'en-US': "DevLinks" },
    description: {
      'pt-BR': "Um hub de ferramentas para desenvolvedores.",
      'en-US': "A hub of tools for developers."
    },
    url: "https://devlinks.mateusarce.dev/"
  },
  {
    name: { 'pt-BR': "Estou aqui", 'en-US': "I am here" },
    description: {
      'pt-BR': "App React Native para registrar e listar participantes de eventos.",
      'en-US': "React Native app to register and list event participants."
    },
    url: "https://github.com/mateusarcedev/im_here"
  },
  {
    name: { 'pt-BR': "Login Keycloak", 'en-US': "Keycloak login" },
    description: {
      'pt-BR': "Uma página de login em nest.js com next-auth.",
      'en-US': "A login page in nest.js with next-auth."
    },
    url: "https://github.com/mateusarcedev/keycloack-login"
  },
  {
    name: { 'pt-BR': "Meus contatos", 'en-US': "My contacts" },
    description: {
      'pt-BR': "Uma API para criar e gerenciar contatos.",
      'en-US': "An API to create and manage contacts."
    },
    url: "https://github.com/mateusarcedev/mycontacts"
  },
  {
    name: { 'pt-BR': "Template", 'en-US': "Template" },
    description: {
      'pt-BR': "Um site com mudança de idioma e tema para reaproveitar em outros projetos.",
      'en-US': "A website with language and theme change to reuse in other projects."
    },
    url: "https://github.com/mateusarcedev/template_site_translate_and_change-theme"
  },
  {
    name: { 'pt-BR': "Bot Sticker", 'en-US': "Sticker Bot" },
    description: {
      'pt-BR': "Um bot de figurinhas para o WhatsApp.",
      'en-US': "A sticker bot for WhatsApp."
    },
    url: "https://github.com/mateusarcedev/bot_sticker_whatsapp"
  },
  {
    name: { 'pt-BR': "Perguntas de Entrevistas", 'en-US': "Interview Questions" },
    description: {
      'pt-BR': "Um site com perguntas e respostas de entrevistas para devs.",
      'en-US': "A website with interview questions and answers for developers."
    },
    url: "https://github.com/mateusarcedev/interviews_questions"
  },
  {
    name: { 'pt-BR': "Bot Vagas WhatsApp", 'en-US': "WhatsApp Job Bot" },
    description: {
      'pt-BR': "Um bot que lista vagas de repositórios do GitHub no WhatsApp.",
      'en-US': "A bot that lists job openings from GitHub repositories on WhatsApp."
    },
    url: "https://github.com/mateusarcedev/bot_vagas_whatsapp"
  },
  {
    name: { 'pt-BR': "Consulta CEP", 'en-US': "ZIP Code Lookup" },
    description: {
      'pt-BR': "Aplicação utilizada para preencher o endereço a partir do CEP digitado.",
      'en-US': "Application used to fill in the address based on the entered ZIP code."
    },
    url: "https://github.com/mateusarcedev/consulta_cep"
  }
]

const technologies = [
  { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
  { name: 'Node.js', icon: faNode, color: '#339933' },
  { name: 'React', icon: faReact, color: '#61DAFB' },
  { name: 'Docker', icon: faDocker, color: '#2496ED' },
  { name: 'Laravel', icon: faLaravel, color: '#FF2D20' },
  { name: 'Database', icon: solidDatabase, color: '#336791' },
  { name: 'Linux', icon: faLinux, color: '#FCC624' },
  { name: 'Python', icon: faPython, color: '#3776AB' },
  { name: 'Figma', icon: faFigma, color: '#F24E1E' },
  { name: 'Go', icon: faGolang, color: '#00ADD8' },
  { name: 'Vue.js', icon: faVuejs, color: '#4FC08D' },
  { name: 'Git', icon: faGitAlt, color: '#F05032' },
  { name: 'Bitbucket', icon: faBitbucket, color: '#0052CC' },
  { name: 'Digital Ocean', icon: faDigitalOcean, color: '#0080FF' },
  { name: 'Jira', icon: faJira, color: '#0052CC' },
  { name: 'AWS', icon: faAws, color: '#232F3E' }
]

const generateMockContributions = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    contributions: Math.floor(Math.random() * 200) + 50
  }))
}

const fetchGithubStats = async () => {
  const response = await fetch('https://api.github.com/users/mateusarcedev')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function Portfolio() {
  const [lang, setLang] = useState<'pt-BR' | 'en-US'>('pt-BR');
  const [theme, setTheme] = useState('dark')
  const t = translations[lang];

  const { data: githubStats, isLoading: isLoadingStats, error: statsError } = useQuery({
    queryKey: ['githubStats'],
    queryFn: fetchGithubStats
  })

  const { data: contributionData } = useQuery({
    queryKey: ['contributions'],
    queryFn: generateMockContributions,
    staleTime: Infinity // Since this is mock data, we don't need to refetch it
  })

  if (statsError) {
    console.error('Error fetching GitHub stats:', statsError)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#151515] text-white' : 'bg-gray-100 text-gray-800'} font-mono p-8 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4 space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={theme === 'dark' ? 'text-[#15F5BA] hover:text-[#22A39F]' : 'text-gray-800 hover:text-gray-600'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLang(lang === 'pt-BR' ? 'en-US' : 'pt-BR')}
            className={theme === 'dark' ? 'text-[#15F5BA] hover:text-[#22A39F]' : 'text-gray-800 hover:text-gray-600'}
          >
            <Languages className="h-5 w-5" />
          </Button>
        </div>

        <header className="mb-12">
          <h1 className={`${theme === 'dark' ? 'text-[#15F5BA]' : 'text-blue-600'} text-2xl font-bold mb-2`}>Mateus Silva Andrade Arce</h1>
          <h2 className="text-xl mb-4">{t.role}</h2>
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="https://avatars.githubusercontent.com/u/96782284?v=4"
              alt="Mateus Arce"
              fill
              className="rounded-full"
              priority
            />
          </div>
          <p className={`${theme === 'dark' ? 'text-[#E96479]' : 'text-red-600'} mb-4`}>arcemateuss@gmail.com</p>
          <nav className="flex flex-wrap gap-4">
            <a href="https://github.com/mateusarcedev" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#15F5BA] hover:text-[#22A39F]' : 'text-blue-600 hover:text-blue-800'} transition-colors`}>
              <i className="fa-brands fa-github mr-2"></i>github
            </a>
            <a href="https://www.linkedin.com/in/mateus-arce/" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#15F5BA] hover:text-[#22A39F]' : 'text-blue-600 hover:text-blue-800'} transition-colors`}>
              <i className="fa-brands fa-linkedin mr-2"></i>linkedin
            </a>
            <a href="https://devlinks.mateusarce.dev/" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#15F5BA] hover:text-[#22A39F]' : 'text-blue-600 hover:text-blue-800'} transition-colors`}>
              <i className="fa-solid fa-toolbox mr-2"></i>devlinks
            </a>
            <a href="/resume" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#15F5BA] hover:text-[#22A39F]' : 'text-blue-600 hover:text-blue-800'} transition-colors`}>
              <i className="fa-regular fa-file-lines mr-2"></i>{t.curriculum}
            </a>
          </nav>
        </header>

        <section className="mb-12">
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t.bio}</p>
        </section>

        {!isLoadingStats && githubStats && (
          <section className="mb-12">
            <h2 className={`text-xl mb-6 ${theme === 'dark' ? 'text-[#15F5BA]' : 'text-blue-600'}`}>{t.stats}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid grid-cols-2 gap-4">
                <div className={`${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white shadow-md'} p-4 rounded text-center`}>
                  <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-[#15F5BA]' : 'text-blue-600'}`}>{githubStats.public_repos}</p>
                  <p className="text-sm">{t.repositories}</p>
                </div>
                <div className={`${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white shadow-md'} p-4 rounded text-center`}>
                  <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-[#15F5BA]' : 'text-blue-600'}`}>{githubStats.followers}</p>
                  <p className="text-sm">{t.followers}</p>
                </div>
                <div className={`${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white shadow-md'} p-4 rounded text-center`}>
                  <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-[#15F5BA]' : 'text-blue-600'}`}>{githubStats.following}</p>
                  <p className="text-sm">{t.following}</p>
                </div>
                <div className={`${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white shadow-md'} p-4 rounded text-center`}>
                  <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-[#15F5BA]' : 'text-blue-600'}`}>{contributionData?.reduce((acc, curr) => acc + curr.contributions, 0)}</p>
                  <p className="text-sm">{t.contributions}</p>
                </div>
              </div>
              <div className={`${theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-white shadow-md'} p-4 rounded`}>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={contributionData}>
                    <XAxis dataKey="month" stroke={theme === 'dark' ? "#15F5BA" : "#3B82F6"} />
                    <YAxis stroke={theme === 'dark' ? "#15F5BA" : "#3B82F6"} />
                    <Tooltip
                      contentStyle={{ backgroundColor: theme === 'dark' ? '#1E1E1E' : '#FFFFFF', border: 'none', color: theme === 'dark' ? '#FFFFFF' : '#000000' }}
                      labelStyle={{ color: theme === 'dark' ? '#15F5BA' : '#3B82F6' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="contributions"
                      stroke={theme === 'dark' ? "#15F5BA" : "#3B82F6"}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        )}

        <section className="mb-12">
          <h2 className={`text-xl mb-4 ${theme === 'dark' ? 'text-[#15F5BA]' : 'text-blue-600'}`}>{t.projects}</h2>
          <ul className="space-y-2">
            {projects.map((project, index) => (
              <li key={index}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#E96479] hover:text-[#CD5888]' : 'text-red-600 hover:text-red-800'} transition-colors`}>
                  <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                  {project.name[lang]}:
                </a>
                {' '}<span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{project.description[lang]}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className={`text-xl mb-4 ${theme === 'dark' ? 'text-[#15F5BA]' : 'text-blue-600'}`}>{t.technologies}</h2>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group relative"
                title={tech.name}
              >
                <FontAwesomeIcon
                  icon={tech.icon}
                  className={`text-3xl ${theme === 'dark' ? 'text-[#15F5BA] hover:text-[#22A39F]' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}
                  style={{ color: tech.color }}
                />
                <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-[#1E1E1E] text-white' : 'bg-white text-gray-800'} px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}