"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, ExternalLink, Star, ArrowLeft, Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { type GithubRepo, GITHUB_USER } from "@/lib/github"

type Props = {
  repoName: string
}

export function ProjectReadme({ repoName }: Props) {
  const { resolvedTheme, setTheme } = useTheme()
  const { lang, setLang } = useAppStore()
  const [mounted, setMounted] = useState(false)
  const [repo, setRepo] = useState<GithubRepo | null>(null)
  const [readme, setReadme] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then(setRepo)
  }, [repoName])

  useEffect(() => {
    setLoading(true)

    const decodeReadme = (content: string) => {
      const bytes = Uint8Array.from(atob(content.replace(/\n/g, "")), (c) => c.charCodeAt(0))
      return new TextDecoder("utf-8").decode(bytes)
    }

    const fetchReadme = async () => {
      if (lang === "en-US") {
        const enRes = await fetch(
          `https://api.github.com/repos/${GITHUB_USER}/${repoName}/contents/README.en.md`,
          { headers: { Accept: "application/vnd.github.v3+json" } },
        )
        if (enRes.ok) {
          const data = await enRes.json()
          if (data?.content) return decodeReadme(data.content)
        }
      }
      const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}/readme`, {
        headers: { Accept: "application/vnd.github.v3+json" },
      })
      if (res.ok) {
        const data = await res.json()
        if (data?.content) return decodeReadme(data.content)
      }
      return null
    }

    fetchReadme()
      .then(setReadme)
      .finally(() => setLoading(false))
  }, [repoName, lang])

  const isDark = mounted ? resolvedTheme === "dark" : true

  function resolveImageSrc(src: string | undefined): string {
    if (!src || src.startsWith("http") || src.startsWith("//")) return src ?? ""
    const branch = repo?.default_branch ?? "main"
    const clean = src.replace(/^\.\//, "")
    return `https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/${branch}/${clean}`
  }

  return (
    <div
      className={`min-h-screen font-mono transition-colors duration-300 ${
        isDark ? "bg-[#151515] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-3xl mx-auto p-4 md:p-8">
        {/* Nav */}
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === "pt-BR" ? "Projetos" : "Projects"}
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

        {loading ? (
          <div className="space-y-4">
            <div className={`h-8 w-48 rounded animate-pulse ${isDark ? "bg-[#1a1a1a]" : "bg-gray-200"}`} />
            <div className={`h-4 w-full rounded animate-pulse ${isDark ? "bg-[#1a1a1a]" : "bg-gray-200"}`} />
            <div className={`h-4 w-3/4 rounded animate-pulse ${isDark ? "bg-[#1a1a1a]" : "bg-gray-200"}`} />
          </div>
        ) : (
          <>
            {/* Repo header */}
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{repoName}</h1>
                {repo && repo.stargazers_count > 0 && (
                  <span
                    className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full shrink-0 ${
                      isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Star className="h-3.5 w-3.5" />
                    {repo.stargazers_count}
                  </span>
                )}
              </div>

              {repo?.description && (
                <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{repo.description}</p>
              )}

              {repo?.language && (
                <span className={`text-xs ${isDark ? "text-[#15F5BA]" : "text-blue-600"}`}>{repo.language}</span>
              )}

              {repo && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {repo.topics.map((topic) => (
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

              <div className={`flex gap-4 mt-4 pt-4 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                {repo && (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {repo?.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      isDark ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"
                    }`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>

            {/* README */}
            {readme ? (
              <div
                className={`rounded-xl border p-6 ${
                  isDark ? "bg-[#1a1a1a] border-gray-800" : "bg-white border-gray-200"
                }`}
              >
                <p className={`text-xs font-semibold mb-6 ${isDark ? "text-gray-600" : "text-gray-400"}`}>
                  README.md
                </p>
                <div
                  className={`prose prose-sm max-w-none ${
                    isDark
                      ? "prose-invert prose-headings:text-white prose-a:text-[#15F5BA] prose-code:text-[#15F5BA] prose-pre:bg-[#252525] prose-pre:border prose-pre:border-gray-700"
                      : "prose-headings:text-gray-900 prose-a:text-blue-600 prose-code:text-blue-700 prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200"
                  }`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    components={{
                      img: ({ src, alt }) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={resolveImageSrc(src)} alt={alt ?? ""} className="max-w-full rounded" />
                      ),
                    }}
                  >
                    {readme}
                  </ReactMarkdown>
                </div>
              </div>
            ) : (
              <div
                className={`rounded-xl border p-8 text-center text-sm ${
                  isDark ? "bg-[#1a1a1a] border-gray-800 text-gray-500" : "bg-white border-gray-200 text-gray-400"
                }`}
              >
                {lang === "pt-BR" ? "Nenhum README encontrado." : "No README found for this repository."}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
