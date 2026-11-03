"use client"

import { useState, useEffect } from "react"
import { useAppStore } from "@/lib/store"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { type GithubRepo, GITHUB_USER } from "@/lib/github"
import { ScaledFrame } from "@/components/scaled-frame"
import { PUBLISHED_BY_REPO } from "@/data/published"
import { HOMEPAGE_OVERRIDES } from "@/data/repo-config"

type Props = { repoName: string }

export function ProjectReadme({ repoName }: Props) {
  const { lang } = useAppStore()
  const [repo, setRepo] = useState<GithubRepo | null>(null)
  const [readmeState, setReadmeState] = useState<{ key: string; content: string | null } | null>(null)
  const requestKey = `${repoName}:${lang}`
  const loading = readmeState?.key !== requestKey
  const readme = loading ? null : readmeState.content
  const pub = PUBLISHED_BY_REPO[repoName]
  const homepage = HOMEPAGE_OVERRIDES[repoName] ?? repo?.homepage
  const lk = lang === "pt-BR" ? "pt" : "en"

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then(setRepo)
  }, [repoName])

  useEffect(() => {
    let cancelled = false
    const decode = (c: string) => {
      const b = Uint8Array.from(atob(c.replace(/\n/g, "")), (ch) => ch.charCodeAt(0))
      return new TextDecoder("utf-8").decode(b)
    }
    const fetchReadme = async () => {
      if (lang === "en-US") {
        const enRes = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}/contents/README.en.md`, { headers: { Accept: "application/vnd.github.v3+json" } })
        if (enRes.ok) { const d = await enRes.json(); if (d?.content) return decode(d.content) }
      }
      const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repoName}/readme`, { headers: { Accept: "application/vnd.github.v3+json" } })
      if (res.ok) { const d = await res.json(); if (d?.content) return decode(d.content) }
      return null
    }
    fetchReadme().then((content) => {
      if (!cancelled) setReadmeState({ key: requestKey, content })
    })

    return () => {
      cancelled = true
    }
  }, [repoName, lang, requestKey])

  function resolveImg(src: string | undefined): string {
    if (!src || src.startsWith("http") || src.startsWith("//")) return src ?? ""
    const branch = repo?.default_branch ?? "main"
    return `https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/${branch}/${src.replace(/^\.\//, "")}`
  }

  return (
    <>
      <Topbar variant="sub" backHref="/projects" backLabel={lang === "pt-BR" ? "projetos" : "projects"} subLabel={{ pt: repoName, en: repoName }} />
      <main className="page-main" id="main-content">
        {loading ? (
          <div style={{ padding: "56px 0" }}>
            <div className="skeleton" style={{ height: 32, width: 220, marginBottom: 14 }} />
            <div className="skeleton" style={{ height: 16, width: "100%", marginBottom: 10 }} />
            <div className="skeleton" style={{ height: 16, width: "75%", marginBottom: 10 }} />
          </div>
        ) : (
          <>
            {pub ? (
              <div className="page-head pub-detail-head">
                <span className="readme-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                  <span lang="pt-BR">publicado</span><span lang="en-US">published</span>
                </span>
                <div className="pub-detail-row">
                  <div className="pub-detail-title">
                    <h1 className="repo-name">{pub.name}</h1>
                    <p className="repo-desc">{pub.desc[lk]}</p>
                  </div>
                  <div className="repo-actions" style={{ margin: 0 }}>
                    <a className="ql" href={pub.repo} target="_blank" rel="noopener">github</a>
                    <a className="ql primary" href={pub.url} target="_blank" rel="noopener">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" /></svg>
                      <span lang="pt-BR">abrir site</span><span lang="en-US">open site</span>
                    </a>
                  </div>
                </div>
                <div className="pub-browser">
                  <div className="pub-browser-bar"><span><i /><i /><i /></span>{pub.host}</div>
                  <div className="pub-browser-shot">
                    {pub.noEmbed && pub.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={pub.img} alt={`${pub.name} — ${pub.host}`} loading="lazy" />
                    ) : (
                      <ScaledFrame src={pub.url} title={pub.name} />
                    )}
                  </div>
                </div>
              </div>
            ) : (
            <div className="page-head" style={{ paddingBottom: 0 }}>
              <span className="readme-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                {GITHUB_USER}
              </span>
              <h1 className="repo-name">{repoName.split("").map((ch, i) => ch === "-" ? <span key={i} className="accent">-</span> : ch)}</h1>
              {repo?.description && <p className="repo-desc">{repo.description}</p>}
              <div className="repo-meta">
                {repo?.language && <span className="lang-tag">{repo.language}</span>}
                {repo && repo.stargazers_count > 0 && (
                  <span className="stars">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
                    {repo.stargazers_count}
                  </span>
                )}
              </div>
              {repo && repo.topics.length > 0 && (
                <div className="repo-topics">{repo.topics.map((t) => <span key={t}>{t}</span>)}</div>
              )}
              <div className="repo-actions">
                {repo && (
                  <a className="ql" href={repo.html_url} target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.4-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" /></svg>
                    github
                  </a>
                )}
                {homepage && (
                  <a className="ql primary" href={homepage} target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" /></svg>
                    demo
                  </a>
                )}
              </div>
            </div>
            )}
            <div className={pub ? "readme-wrap pub-detail-body" : "readme-wrap"}>
              <div>
              <span className="readme-tag" style={{ marginBottom: 20 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
                README.md
              </span>
              {readme ? (
                <div className="md">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    components={{
                      img: ({ src, alt }) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={typeof src === "string" ? resolveImg(src) : undefined} alt={alt ?? ""} className="max-w-full rounded" />
                      ),
                    }}
                  >
                    {readme}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="empty-state">
                  <strong lang="pt-BR">Nenhum README encontrado.</strong>
                  <strong lang="en-US">No README found for this repository.</strong>
                </div>
              )}
              </div>
              {pub && (
                <aside className="pub-aside">
                  <div><span>status</span><span className="pub-main">● online · {pub.version}</span></div>
                  <div><span>site</span><a href={pub.url} target="_blank" rel="noopener">{pub.host}</a></div>
                  <div><span>repo</span><span>{GITHUB_USER}/{pub.repoName}</span></div>
                  {repo?.language && <div><span><span lang="pt-BR">linguagem</span><span lang="en-US">language</span></span><span>{repo.language}</span></div>}
                </aside>
              )}
            </div>
          </>
        )}
      </main>
      <Footer variant="projects" />
    </>
  )
}
