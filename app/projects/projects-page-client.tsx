"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Github, ExternalLink, Star, ArrowLeft, Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { type GithubRepo, GITHUB_USER } from "@/lib/github"

export function ProjectsPageClient() {
  const { resolvedTheme, setTheme } = useTheme()
  const { lang, setLang } = useAppStore()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [langFilter, setLangFilter] = useState<string>("all")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?type=public&sort=pushed&per_page=100`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    })
      .then((r) => {
        if (!r.ok) { setError(true); return [] }
        return r.json()
      })
      .then((data: GithubRepo[]) => {
        if (Array.isArray(data)) setRepos(data.filter((r) => !r.fork))
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : true

  const languages = Array.from(new Set(repos.map((r) => r.language).filter(Boolean))) as string[]
  const filtered = (langFilter === "all" ? repos : repos.filter((r) => r.language === langFilter))
    .sort((a, b) => a.name.localeCompare(b.name))

  const allLabel = lang === "pt-BR" ? "Todos" : "All"
  const reposLabel =
    lang === "pt-BR"
      ? `${repos.length} repositórios públicos`
      : `${repos.length} public repositories`

  return (
    <div
      className={`min-h-screen font-mono transition-colors duration-300 ${
        isDark ? "bg-[#151515] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={isDark ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-gray-800 hover:text-gray-600"}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLang(lang === "pt-BR" ? "en-US" : "pt-BR")}
              className={isDark ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-gray-800 hover:text-gray-600"}
            >
              <Languages className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <h1 className={`text-3xl font-bold mb-2 uppercase ${isDark ? "text-white" : "text-gray-900"}`}>
          {lang === "pt-BR" ? "Projetos" : "Projects"}
        </h1>

        {loading ? (
          <p className={`text-sm mb-8 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
            {lang === "pt-BR" ? "Carregando..." : "Loading..."}
          </p>
        ) : error ? (
          <p className={`text-sm mb-8 ${isDark ? "text-red-400" : "text-red-500"}`}>
            {lang === "pt-BR"
              ? "Limite da API do GitHub atingido. Tente novamente em alguns minutos."
              : "GitHub API rate limit reached. Try again in a few minutes."}
          </p>
        ) : (
          <p className={`text-sm mb-8 ${isDark ? "text-gray-500" : "text-gray-500"}`}>{reposLabel}</p>
        )}

        {/* Language filter */}
        {!loading && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setLangFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                langFilter === "all"
                  ? isDark ? "bg-[#15F5BA] text-black" : "bg-blue-600 text-white"
                  : isDark ? "bg-[#1E1E1E] text-gray-400 hover:bg-[#2A2A2A] hover:text-gray-200"
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
                    ? isDark ? "bg-[#15F5BA] text-black" : "bg-blue-600 text-white"
                    : isDark ? "bg-[#1E1E1E] text-gray-400 hover:bg-[#2A2A2A] hover:text-gray-200"
                             : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        )}

        {/* Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-xl border h-40 animate-pulse ${
                  isDark ? "bg-[#1a1a1a] border-gray-800" : "bg-gray-200 border-gray-200"
                }`}
              />
            ))}
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((repo) => (
              <article
                key={repo.id}
                onClick={() => router.push(`/projects/${repo.name}`)}
                className={`cursor-pointer rounded-xl border flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  isDark
                    ? "bg-[#1a1a1a] border-gray-800 hover:border-[#15F5BA]/30 hover:shadow-[#15F5BA]/10"
                    : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-blue-100"
                }`}
              >
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="min-w-0">
                      <h2 className={`font-bold text-base truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                        {repo.name}
                      </h2>
                      {repo.language && (
                        <p className={`text-xs mt-0.5 ${isDark ? "text-[#15F5BA]" : "text-blue-600"}`}>
                          {repo.language}
                        </p>
                      )}
                    </div>
                    {repo.stargazers_count > 0 && (
                      <span
                        className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full shrink-0 ${
                          isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
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

                  <div className={`flex gap-3 mt-5 pt-4 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`relative flex items-center gap-1.5 text-xs font-medium transition-colors ${
                        isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`relative flex items-center gap-1.5 text-xs font-medium transition-colors ${
                          isDark ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"
                        }`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
