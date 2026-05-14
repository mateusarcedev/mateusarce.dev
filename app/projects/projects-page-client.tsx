"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAppStore } from "@/lib/store"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal"
import { type GithubRepo, GITHUB_USER } from "@/lib/github"
import { FEATURED_REPOS, COURSE_REPOS, HOMEPAGE_OVERRIDES } from "@/data/repo-config"

export function ProjectsPageClient() {
  const { lang } = useAppStore()
  const router = useRouter()
  const lk = lang === "pt-BR" ? "pt" : "en"
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [langFilter, setLangFilter] = useState<string>("all")

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?type=public&sort=pushed&per_page=100`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    })
      .then((r) => { if (!r.ok) { setError(true); return [] } return r.json() })
      .then((data: GithubRepo[]) => { if (Array.isArray(data)) setRepos(data.filter((r) => !r.fork)) })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const languages = Array.from(new Set(repos.map((r) => r.language).filter(Boolean))) as string[]
  const filtered = (langFilter === "all" ? repos : repos.filter((r) => r.language === langFilter))
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <RevealObserver />
      <Topbar variant="sub" backHref="/" backLabel="mateus arce" subLabel={{ pt: "projetos", en: "projects" }} />
      <main className="page-main" id="main-content">
        <div className="page-head reveal">
          <h1><span lang="pt-BR">Projeto<span className="accent">s</span></span><span lang="en-US">Project<span className="accent">s</span></span></h1>
          {loading ? (
            <p><span lang="pt-BR">Carregando...</span><span lang="en-US">Loading...</span></p>
          ) : error ? (
            <p style={{ color: "var(--pink)" }}>
              <span lang="pt-BR">Limite da API do GitHub atingido. Tente novamente em alguns minutos.</span>
              <span lang="en-US">GitHub API rate limit reached. Try again in a few minutes.</span>
            </p>
          ) : (
            <p><b>{repos.length}</b> <span lang="pt-BR">repositórios públicos</span><span lang="en-US">public repositories</span></p>
          )}
        </div>

        {!loading && (
          <div className="filter-bar reveal">
            <div className="filter-label"><span lang="pt-BR">filtrar por linguagem</span><span lang="en-US">filter by language</span></div>
            <div className="pills">
              <button className="pill" aria-pressed={langFilter === "all"} onClick={() => setLangFilter("all")}>
                <span lang="pt-BR">Todos</span><span lang="en-US">All</span>
                <span className="c">{repos.length}</span>
              </button>
              {languages.map((l) => (
                <button key={l} className="pill" aria-pressed={langFilter === l} onClick={() => setLangFilter(l)}>
                  {l}
                  <span className="c">{repos.filter((r) => r.language === l).length}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <section className="repos">
          {loading && (
            <div className="skeleton-grid">
              {Array.from({ length: 6 }).map((_, i) => <div key={i} className="skeleton" />)}
            </div>
          )}
          {!loading && filtered.length === 0 && (
            <div className="empty-state">
              <strong lang="pt-BR">Nenhum repositório encontrado</strong>
              <strong lang="en-US">No repositories found</strong>
              <span lang="pt-BR">Tente ajustar o filtro de linguagem.</span>
              <span lang="en-US">Try adjusting the language filter.</span>
            </div>
          )}
          {!loading && filtered.length > 0 && (
            <div className="grid">
              {filtered.map((repo) => {
                const isFeatured = FEATURED_REPOS.includes(repo.name)
                const isCourse = COURSE_REPOS.includes(repo.name)
                const homepage = HOMEPAGE_OVERRIDES[repo.name] ?? repo.homepage
                return (
                  <article
                    key={repo.id}
                    className={`card${isFeatured ? " featured" : ""}`}
                    onClick={() => router.push(`/projects/${repo.name}`)}
                  >
                    <div className="card-head">
                      <span className="card-name">{repo.name}</span>
                      <div className="card-badges">
                        {isFeatured && <span className="badge featured"><span lang="pt-BR">destaque</span><span lang="en-US">featured</span></span>}
                        {isCourse && <span className="badge course"><span lang="pt-BR">curso</span><span lang="en-US">course</span></span>}
                        {repo.stargazers_count > 0 && (
                          <span className="badge stars">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
                            {repo.stargazers_count}
                          </span>
                        )}
                      </div>
                    </div>
                    {repo.language && <div className="card-lang">{repo.language}</div>}
                    <p className="card-desc">{repo.description ?? (lk === "pt" ? "Sem descrição." : "No description.")}</p>
                    {repo.topics.length > 0 && (
                      <div className="card-topics">{repo.topics.slice(0, 5).map((t) => <span key={t}>{t}</span>)}</div>
                    )}
                    <div className="card-actions">
                      <a className="card-action" href={repo.html_url} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.4-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" /></svg>
                        github
                      </a>
                      {homepage && (
                        <a className="card-action primary" href={homepage} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" /></svg>
                          demo
                        </a>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </section>
      </main>
      <Footer variant="projects" />
    </>
  )
}
