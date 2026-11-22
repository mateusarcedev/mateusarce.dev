"use client"

import { useAppStore } from "@/lib/store"
import { PUBLISHED } from "@/data/published"

/** Compact, scannable list of frontends — no full-size promotional cards. */
export function PublishedProjects({ showCodeLink = false }: { showCodeLink?: boolean }) {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"

  return (
    <div className="pub-grid">
      {PUBLISHED.map((p) => (
        <article className="pub-card" key={p.slug}>
          <div className={`pub-shot${p.slug === "tools" ? " pub-shot-logo" : ""}`}>
            {p.img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.img} alt="" loading="lazy" />
            ) : (
              <span className="pub-shot-fallback" aria-hidden="true">
                <span className="pub-shot-fallback-kicker">{p.host}</span>
                <span className="pub-shot-fallback-name">{p.name}</span>
              </span>
            )}
            <a className="pub-shot-cover" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={lk === "pt" ? `Abrir site do projeto ${p.name}` : `Open ${p.name} website`} />
          </div>
          <div className="pub-body">
            <div className="pub-title">
              <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
            </div>
            <span className="pub-kind">{p.kind[lk]}</span>
            <p>{p.desc[lk]}</p>
            <div className="pub-links">
              <a className="pub-main" href={p.url} target="_blank" rel="noopener noreferrer">
                <span lang="pt-BR">abrir site ↗</span><span lang="en-US">open site ↗</span>
              </a>
              {p.demoUrl && (
                <a href={p.demoUrl} target="_blank" rel="noopener noreferrer">
                  <span lang="pt-BR">ver demo ↗</span><span lang="en-US">view demo ↗</span>
                </a>
              )}
              {showCodeLink && !p.private && p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  <span lang="pt-BR">código ↗</span><span lang="en-US">source ↗</span>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
