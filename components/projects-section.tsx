"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

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
  demo?: string
  featured: boolean
  category: string
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
    viewCode: string
    liveDemo: string
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
  const [showAll, setShowAll] = useState(false)

  const isDark = theme === "dark"

  const filteredProjects =
    categoryFilter === "all" ? projects : projects.filter((project) => project.category === categoryFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-8 uppercase ${isDark ? "text-white" : "text-gray-900"}`}>
          {t.projects}
        </h2>

        <div className="flex flex-wrap gap-2">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCategoryFilter(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                categoryFilter === key
                  ? isDark
                    ? "bg-[#15F5BA] text-black shadow-lg shadow-[#15F5BA]/20"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : isDark
                    ? "bg-[#1E1E1E] text-gray-400 hover:bg-[#2A2A2A] hover:text-gray-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {label[lang]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <article
            key={`project-${index}`}
            className={`rounded-xl border flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
              isDark
                ? "bg-[#1a1a1a] border-gray-800 hover:border-[#15F5BA]/30 hover:shadow-[#15F5BA]/10"
                : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-blue-100"
            } ${project.featured ? (isDark ? "ring-1 ring-[#15F5BA]/20" : "ring-1 ring-blue-200") : ""}`}
          >
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className={`font-bold text-base ${isDark ? "text-white" : "text-gray-900"}`}>
                    {project.name[lang]}
                  </h3>
                  <p className={`text-xs mt-0.5 ${isDark ? "text-[#15F5BA]" : "text-blue-600"}`}>
                    {project.subtitle[lang]}
                  </p>
                </div>
                {project.featured && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                      isDark ? "bg-[#15F5BA]/10 text-[#15F5BA]" : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {t.featured}
                  </span>
                )}
              </div>

              <p className={`text-sm leading-relaxed flex-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {project.description[lang]}
              </p>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded font-mono ${
                        isDark ? "bg-[#252525] text-gray-400" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className={`flex gap-3 mt-5 pt-4 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                    isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Github className="h-3.5 w-3.5" />
                  {t.viewCode}
                </a>
                {project.demo && project.demo !== project.github && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                      isDark ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"
                    }`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t.liveDemo}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              isDark
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
