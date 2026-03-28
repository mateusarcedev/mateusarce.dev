"use client"

import { useState } from "react"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"
import type { GithubRepo } from "@/lib/github"
import { FEATURED_REPOS, COURSE_REPOS, HOMEPAGE_OVERRIDES } from "@/data/repo-config"

type ProjectsSectionProps = {
  theme: string
  t: {
    projects: string
    viewCode: string
    liveDemo: string
  }
  lang: "pt-BR" | "en-US"
  repos: GithubRepo[]
}

export function ProjectsSection({ theme, t, lang, repos }: ProjectsSectionProps) {
  const [langFilter, setLangFilter] = useState<string>("all")
  const [showAll, setShowAll] = useState(false)

  const isDark = theme === "dark"

  const languages = Array.from(new Set(repos.map((r) => r.language).filter(Boolean))) as string[]

  const filtered = (langFilter === "all" ? repos : repos.filter((r) => r.language === langFilter))
    .sort((a, b) => a.name.localeCompare(b.name))
  const displayed = showAll ? filtered : filtered.slice(0, 6)

  const allLabel = lang === "pt-BR" ? "Todos" : "All"

  return (
    <section data-section="projects" className="mb-16">
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-8 uppercase ${isDark ? "text-white" : "text-gray-900"}`}>
          {t.projects}
        </h2>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setLangFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              langFilter === "all"
                ? isDark
                  ? "bg-[#15F5BA] text-black shadow-lg shadow-[#15F5BA]/20"
                  : "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : isDark
                  ? "bg-[#1E1E1E] text-gray-400 hover:bg-[#2A2A2A] hover:text-gray-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {allLabel}
          </button>
          {languages.map((l) => (
            <button
              key={l}
              onClick={() => setLangFilter(l)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                langFilter === l
                  ? isDark
                    ? "bg-[#15F5BA] text-black shadow-lg shadow-[#15F5BA]/20"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : isDark
                    ? "bg-[#1E1E1E] text-gray-400 hover:bg-[#2A2A2A] hover:text-gray-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((repo) => {
          const isFeatured = FEATURED_REPOS.includes(repo.name)
          const isCourse = COURSE_REPOS.includes(repo.name)
          const homepage = HOMEPAGE_OVERRIDES[repo.name] ?? repo.homepage

          return (
            <article
              key={repo.id}
              data-project-card
              className={`rounded-xl border flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isFeatured
                  ? isDark
                    ? "bg-[#1a1a1a] border-[#15F5BA]/40 hover:border-[#15F5BA] hover:shadow-[#15F5BA]/20"
                    : "bg-white border-blue-400 hover:border-blue-600 hover:shadow-blue-200"
                  : isDark
                    ? "bg-[#1a1a1a] border-gray-800 hover:border-[#15F5BA]/50 hover:shadow-[#15F5BA]/10"
                    : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-blue-100"
              }`}
            >
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`font-bold text-base truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                        {repo.name}
                      </h3>
                      {isFeatured && (
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${
                            isDark
                              ? "bg-[#15F5BA]/10 text-[#15F5BA] border border-[#15F5BA]/30"
                              : "bg-blue-50 text-blue-600 border border-blue-200"
                          }`}
                        >
                          {lang === "pt-BR" ? "destaque" : "featured"}
                        </span>
                      )}
                      {isCourse && (
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${
                            isDark
                              ? "bg-gray-800 text-gray-400 border border-gray-700"
                              : "bg-gray-100 text-gray-500 border border-gray-200"
                          }`}
                        >
                          Rocketseat
                        </span>
                      )}
                    </div>
                    {repo.language && (
                      <p className={`text-xs mt-0.5 ${isDark ? "text-[#15F5BA]" : "text-blue-600"}`}>
                        {repo.language}
                      </p>
                    )}
                  </div>
                  {repo.stargazers_count > 0 && (
                    <span
                      className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full shrink-0 ${
                        isFeatured
                          ? isDark
                            ? "bg-[#15F5BA]/10 text-[#15F5BA]"
                            : "bg-blue-50 text-blue-600"
                          : isDark
                            ? "bg-gray-800 text-gray-400"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>

                <p className={`text-sm leading-relaxed flex-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {repo.description ?? (lang === "pt-BR" ? "Sem descrição." : "No description.")}
                </p>

                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {repo.topics.slice(0, 5).map((topic) => (
                      <span
                        key={topic}
                        className={`text-xs px-2 py-0.5 rounded font-mono ${
                          isDark ? "bg-[#252525] text-gray-400" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className={`flex flex-wrap gap-2 mt-5 pt-4 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
                  <Link
                    href={`/projects/${repo.name}`}
                    className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-all ${
                      isDark
                        ? "bg-[#15F5BA]/10 text-[#15F5BA] border border-[#15F5BA]/20 hover:bg-[#15F5BA]/20"
                        : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
                    }`}
                  >
                    README
                  </Link>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-all ${
                      isDark
                        ? "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white"
                        : "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    <Github className="h-3.5 w-3.5" />
                    {t.viewCode}
                  </a>
                  {homepage && (
                    <a
                      href={homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-all ${
                        isDark
                          ? "bg-[#15F5BA]/10 text-[#15F5BA] border border-[#15F5BA]/20 hover:bg-[#15F5BA]/20"
                          : "bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100"
                      }`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {filtered.length > 6 && (
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
