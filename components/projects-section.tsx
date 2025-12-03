"use client"
import { useState } from "react"

type Project = {
  name: {
    "pt-BR": string
    "en-US": string
  }
  subtitle: {
    "pt-BR": string
    "en-US": string
  }
  description: {
    "pt-BR": string
    "en-US": string
  }
  url: string
  github: string
  featured: boolean
  category: "frontend" | "backend" | "fullstack" | "bot"
  tags: string[]
  image?: string
}

type ProjectsSectionProps = {
  theme: string
  t: {
    projects: string
    featured: string
    all: string
    viewProject: string
    frontend?: string
    backend?: string
    fullstack?: string
    bots?: string
  }
  lang: "pt-BR" | "en-US"
  projects: Project[]
}

const categoryLabels = {
  all: { "pt-BR": "Todos", "en-US": "All" },
  frontend: { "pt-BR": "Front-end", "en-US": "Front-end" },
  backend: { "pt-BR": "Back-end", "en-US": "Back-end" },
  fullstack: { "pt-BR": "Full Stack", "en-US": "Full Stack" },
  bot: { "pt-BR": "Bots", "en-US": "Bots" },
}

export function ProjectsSection({ theme, t, lang, projects }: ProjectsSectionProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filteredProjects =
    categoryFilter === "all" ? projects : projects.filter((project) => project.category === categoryFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-8 uppercase ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {t.projects}
        </h2>

        <div className="flex flex-wrap gap-2">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCategoryFilter(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                categoryFilter === key
                  ? theme === "dark"
                    ? "bg-[#15F5BA] text-black shadow-lg shadow-[#15F5BA]/20"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : theme === "dark"
                    ? "bg-[#1E1E1E] text-gray-400 hover:bg-[#2A2A2A] hover:text-gray-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {label[lang]}
            </button>
          ))}
        </div>
      </div>

      <ul className="space-y-4">
        {displayedProjects.map((project, index) => (
          <li key={`project-${index}`} className="flex gap-2">
            <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>•</span>
            <div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold hover:underline ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}
              >
                {project.name[lang]}
              </a>
              <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                : {project.description[lang]}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {filteredProjects.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#1E1E1E] text-[#15F5BA] border border-[#15F5BA]/30 hover:bg-[#15F5BA] hover:text-black hover:shadow-lg hover:shadow-[#15F5BA]/20"
                : "bg-white text-blue-600 border border-blue-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
            }`}
          >
            {showAll ? (lang === "pt-BR" ? "Ver menos" : "Show less") : lang === "pt-BR" ? "Ver mais" : "Show more"}
          </button>
        </div>
      )}
    </section>
  )
}
