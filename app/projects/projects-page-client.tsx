"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppStore } from "@/lib/store"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScaledFrame } from "@/components/scaled-frame"
import { PUBLISHED } from "@/data/published"
import { RevealObserver } from "@/components/reveal"
import { type GithubRepo, GITHUB_USER } from "@/lib/github"
import { FEATURED_REPOS, COURSE_REPOS, HOMEPAGE_OVERRIDES, EXTERNAL_REPO_LINKS } from "@/data/repo-config"

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
        <div className="page-head reveal projects-head">
          <h1><span lang="pt-BR">Projeto<span className="accent">s</span></span><span lang="en-US">Project<span className="accent">s</span></span></h1>
          {loading ? (
            <p><span lang="pt-BR">Carregando...</span><span lang="en-US">Loading...</span></p>
          ) : error ? (
            <p style={{ color: "var(--pink)" }}>
              <span lang="pt-BR">Limite da API do GitHub atingido. Tente novamente em alguns minutos.</span>
              <span lang="en-US">GitHub API rate limit reached. Try again in a few minutes.</span>
            </p>
          ) : (
            <p>
              <b>{PUBLISHED.length}</b> <span lang="pt-BR">publicados</span><span lang="en-US">published</span> · <b>{repos.length}</b> <span lang="pt-BR">repositórios públicos</span><span lang="en-US">public repositories</span>
            </p>
          )}
        </div>

        <section className="reveal projects-published">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2 className="sec-title"><span lang="pt-BR">Publicados</span><span lang="en-US">Published</span></h2>
            <span className="sec-rule" />
            <span className="sec-count"><span lang="pt-BR">no ar</span><span lang="en-US">live</span></span>
          </div>
          <div className="pub-list">
            {PUBLISHED.map((p) => (
              <Link className="pub-row" key={p.slug} href={`/projects/${p.repoName}`}>
                <span className="pub-row-n">{p.n}</span>
                <div className="pub-row-shot">
                  {p.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.img} alt="" loading="lazy" />
                  ) : (
                    <ScaledFrame src={p.url} title={p.name} />
                  )}
                </div>
                <div className="pub-row-main">
                  <strong>{p.name}</strong>
                  <span className="pub-kind">{p.kind[lk]}</span>
                  <span className="pub-row-desc">{p.desc[lk]}</span>
                </div>
                <div className="pub-row-status">
                  {p.live && <span className="pub-live"><span />online</span>}
                  <span className="pub-ver">{p.version}</span>
                </div>
                <div className="pub-row-links">
                  <span className="pub-main">{p.host} ↗</span>
                  <span>{p.repoName}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="sec-head reveal">
          <span className="sec-num">02</span>
          <h2 className="sec-title">Open source</h2>
          <span className="sec-rule" />
          <span className="sec-count"><span lang="pt-BR">via GitHub API</span><span lang="en-US">via GitHub API</span></span>
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
            <div className="grid grid-3">
              {filtered.map((repo) => {
                const isFeatured = FEATURED_REPOS.includes(repo.name)
                const isCourse = COURSE_REPOS.includes(repo.name)
                const homepage = HOMEPAGE_OVERRIDES[repo.name] ?? repo.homepage
                const externalLinks = EXTERNAL_REPO_LINKS[repo.name] ?? []
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
                    <p className="card-desc">{repo.description ?? (lk === "pt" ? "Sem descrição." : "No description.")}</p>
                    <div className="card-foot">
                      {repo.language && <span className="card-lang">{repo.language}</span>}
                      {externalLinks.map((link) => (
                        <a key={link.url} className="card-ext" href={link.url} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>{link.label} ↗</a>
                      ))}
                      {homepage && (
                        <a className="card-ext" href={homepage} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>demo ↗</a>
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
