"use client"

import type { MouseEvent } from "react"
import { useAppStore } from "@/lib/store"
import { ScaledFrame } from "@/components/scaled-frame"
import { PUBLISHED } from "@/data/published"

function tilt(e: MouseEvent<HTMLElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width
  const py = (e.clientY - r.top) / r.height
  el.style.transition = "transform .12s linear, border-color .3s"
  el.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 11}deg)`
  el.style.borderColor = "var(--mint-edge)"
  const g = el.querySelector<HTMLElement>("[data-glare]")
  if (g) {
    g.style.opacity = "1"
    g.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, var(--mint-dim), transparent 60%)`
  }
}

function untilt(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  el.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1), border-color .3s"
  el.style.transform = ""
  el.style.borderColor = ""
  const g = el.querySelector<HTMLElement>("[data-glare]")
  if (g) g.style.opacity = "0"
}

export function PublishedProjects() {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"
  return (
    <div className="pub-grid">
      {PUBLISHED.map((p) => (
        <article className="pub-card" key={p.slug} onMouseMove={tilt} onMouseLeave={untilt}>
          <div className="pub-shot">
            {p.img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.img} alt={`${p.name} — ${p.host}`} loading="lazy" />
            ) : (
              <ScaledFrame src={p.url} title={p.name} />
            )}
          </div>
          <div className="pub-body">
            <div className="pub-title">
              <strong>{p.name}</strong>
              {p.live && <span className="pub-live"><span />online</span>}
              <span className="pub-ver">{p.version}</span>
            </div>
            <span className="pub-kind">{p.kind[lk]}</span>
            <p>{p.desc[lk]}</p>
            <div className="pub-links">
              <a href={p.url} target="_blank" rel="noopener" className="pub-main">{p.host} ↗</a>
              <a href={p.repo} target="_blank" rel="noopener">repo</a>
            </div>
          </div>
          <div className="pub-glare" data-glare />
        </article>
      ))}
    </div>
  )
}
