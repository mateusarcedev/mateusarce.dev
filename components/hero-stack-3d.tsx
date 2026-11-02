"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { PUBLISHED } from "@/data/published"
import { useAppStore } from "@/lib/store"

const CYCLE_MS = 5000
const FRAME_W = 1440

type Pose = { x: number; y: number; z: number; o: number }

/** One project in focus at a time, soft perspective, auto-cycles every 5s. */
export function HeroStack3D() {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"
  const [front, setFront] = useState(0)
  const frontRef = useRef(0)
  const sceneRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0, sx: 0, sy: 0, hover: false })
  const cycleT = useRef(0)
  const n = PUBLISHED.length

  const focus = useCallback((i: number) => {
    cycleT.current = performance.now()
    frontRef.current = i
    setFront(i)
  }, [])

  useEffect(() => {
    const live = !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const t0 = performance.now()
    cycleT.current = t0
    let raf = 0
    const poses = new WeakMap<Element, Pose>()
    const loop = (now: number) => {
      const t = (now - t0) / 1000
      const q = mouse.current
      q.sx += (q.x - q.sx) * 0.07
      q.sy += (q.y - q.sy) * 0.07
      const sc = sceneRef.current
      if (sc) {
        sc.style.transform = `rotateY(${-16 + q.sx * 9}deg) rotateX(${6 - q.sy * 6}deg)`
        const cur = frontRef.current
        sc.querySelectorAll<HTMLElement>("[data-card]").forEach((el, i) => {
          const slot = (i - cur + n) % n
          const tg: Pose = slot === 0
            ? { x: 0, y: 0, z: 60, o: 1 }
            : { x: 90 + slot * 20, y: -64 - slot * 20, z: -160 - slot * 60, o: 0.5 }
          let c = poses.get(el)
          if (!c) { c = { ...tg }; poses.set(el, c) }
          c.x += (tg.x - c.x) * 0.09; c.y += (tg.y - c.y) * 0.09
          c.z += (tg.z - c.z) * 0.09; c.o += (tg.o - c.o) * 0.09
          const bob = live && slot === 0 ? Math.sin(t * 1.2) * 5 : 0
          el.style.transform = `translate3d(${c.x}px, ${c.y + bob}px, ${c.z}px)`
          el.style.opacity = c.o.toFixed(3)
          const fr = el.querySelector<HTMLElement>("iframe")
          if (fr) fr.style.transform = `scale(${el.clientWidth / FRAME_W})`
          el.style.zIndex = String(n - slot)
          el.style.borderColor = slot === 0 ? "var(--mint-edge)" : "var(--line)"
        })
        const prog = (now - cycleT.current) / CYCLE_MS
        if (live && !q.hover && prog >= 1 && n > 1) {
          cycleT.current = now
          const next = (cur + 1) % n
          frontRef.current = next
          setFront(next)
        }
        rootRef.current?.querySelectorAll<HTMLElement>("[data-prog]").forEach((p) => {
          p.style.width = Number(p.dataset.prog) === cur
            ? `${(live ? Math.min(1, q.hover ? 1 : prog) : 1) * 100}%`
            : "0%"
        })
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [n])

  return (
    <div className="hero3-wrap" ref={rootRef}>
      <div
        className="stack3d"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          mouse.current.x = ((e.clientX - r.left) / r.width) * 2 - 1
          mouse.current.y = ((e.clientY - r.top) / r.height) * 2 - 1
          mouse.current.hover = true
        }}
        onMouseLeave={() => {
          const m = mouse.current
          m.x = 0; m.y = 0; m.hover = false
          cycleT.current = performance.now()
        }}
      >
        <div className="stack3d-floor" aria-hidden="true" />
        <div className="stack3d-scene" ref={sceneRef}>
          {PUBLISHED.map((p, i) => (
            <div className="stack3d-card" data-card key={p.slug} onMouseEnter={() => focus(i)} aria-hidden={i !== front}>
              <div className="stack3d-bar">
                <span className="stack3d-dots"><i /><i /><i /></span>
                <span className="stack3d-url"><b />{p.host}</span>
                <a href={p.url} target="_blank" rel="noopener" tabIndex={i === front ? 0 : -1} aria-label={p.name}>↗</a>
              </div>
              <div className="stack3d-shot">
                {p.noEmbed && p.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <iframe src={p.url} title={p.name} tabIndex={-1} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero3-tabs" role="tablist">
        {PUBLISHED.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            role="tab"
            aria-selected={i === front}
            className="hero3-tab"
            onClick={() => focus(i)}
          >
            <span className="hero3-prog" data-prog={i} />
            <span className="hero3-tab-top">
              <small>{p.n}</small>
              <span className={i === front ? "on" : undefined}>{p.name}</span>
              <small className="ver">{p.version}</small>
            </span>
            <small>{p.kind[lk]}</small>
          </button>
        ))}
      </div>
    </div>
  )
}
