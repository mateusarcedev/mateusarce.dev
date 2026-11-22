"use client"

import { useAppStore } from "@/lib/store"
import { ScaledFrame } from "@/components/scaled-frame"
import { PUBLISHED } from "@/data/published"

/** Compact, scannable list of frontends — no full-size promotional cards. */
export function PublishedProjects() {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"

  return (
    <div className="pub-grid">
      {PUBLISHED.map((p) => (
        <article className="pub-card" key={p.slug}>
          <a className="pub-shot" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={lk === "pt" ? `Abrir site do projeto ${p.name}` : `Open ${p.name} website`}>
            {p.img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.img} alt="" loading="lazy" />
            ) : (
              <>
                <ScaledFrame src={p.url} title={p.name} />
                <span className="pub-shot-fallback" aria-hidden="true">{p.name.slice(0, 2)}</span>
              </>
            )}
          </a>
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
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
