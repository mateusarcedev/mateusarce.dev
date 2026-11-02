"use client"

import { useEffect, useRef } from "react"

type V3 = [number, number, number]

/** Dotted globe with orbiting ring and travelling arcs, drawn on a 2D canvas. */
export function HeroOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  useEffect(() => {
    const cv = canvasRef.current
    const ctx = cv?.getContext("2d")
    if (!cv || !ctx) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")

    const N = 460
    const pts: V3[] = []
    const ring: V3[] = []
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const th = i * 2.39996
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r])
    }
    for (let i = 0; i < 160; i++) {
      const a = (i / 160) * Math.PI * 2
      ring.push([Math.cos(a) * 1.42, 0, Math.sin(a) * 1.42])
    }
    const pick = () => ({
      a: pts[(Math.random() * N) | 0],
      b: pts[(Math.random() * N) | 0],
      p: 0,
      s: 0.18 + Math.random() * 0.22,
    })
    const arcs = Array.from({ length: 12 }, () => {
      const o = pick()
      o.p = Math.random()
      return o
    })

    const cs = getComputedStyle(cv)
    const mint = cs.getPropertyValue("--mint").trim() || "#3ee6a8"
    const dim = cs.getPropertyValue("--fg-dim").trim() || "#999"

    const arcPt = (a: V3, b: V3, t: number): V3 => {
      const x = a[0] + (b[0] - a[0]) * t
      const y = a[1] + (b[1] - a[1]) * t
      const z = a[2] + (b[2] - a[2]) * t
      const l = Math.hypot(x, y, z) || 1
      const k = (1 + 0.32 * Math.sin(Math.PI * t)) / l
      return [x * k, y * k, z * k]
    }

    let raf = 0
    let last = performance.now()
    let t = 0
    const draw = (now: number) => {
      const live = !reduced.matches
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (live) t += dt
      const dpr = window.devicePixelRatio || 1
      const w = cv.clientWidth
      const hh = cv.clientHeight
      if (cv.width !== Math.round(w * dpr)) {
        cv.width = Math.round(w * dpr)
        cv.height = Math.round(hh * dpr)
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, hh)

      const m = mouse.current
      m.x += (m.tx - m.x) * 0.05
      m.y += (m.ty - m.y) * 0.05
      const ry = t * 0.22 + m.x * 0.7
      const rx = -0.32 + m.y * 0.35
      const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx)
      const R = Math.min(w, hh) * 0.34
      const ox = w / 2, oy = hh / 2

      const proj = (p: V3, tilt = false): V3 => {
        const x = p[0]
        let y = p[1], z = p[2]
        if (tilt) {
          const c = Math.cos(0.42), s2 = Math.sin(0.42)
          const y2 = y * c - z * s2
          z = y * s2 + z * c
          y = y2
        }
        const x1 = x * cy + z * sy
        const z1 = -x * sy + z * cy
        const y1 = y * cx - z1 * sx
        const z2 = y * sx + z1 * cx
        const f = 3 / (3 - z2)
        return [ox + x1 * R * f, oy + y1 * R * f, z2]
      }

      pts.forEach((p, i) => {
        const [X, Y, Z] = proj(p)
        const d = (Z + 1) / 2
        ctx.globalAlpha = 0.08 + 0.62 * d * d
        ctx.fillStyle = i % 11 === 0 ? mint : dim
        ctx.beginPath()
        ctx.arc(X, Y, 0.6 + 1.3 * d, 0, 6.283)
        ctx.fill()
      })

      ctx.fillStyle = mint
      ring.forEach((p, i) => {
        if (i % 2) return
        const [X, Y, Z] = proj(p, true)
        const d = (Z + 1.42) / 2.84
        ctx.globalAlpha = 0.1 + 0.5 * d
        ctx.fillRect(X - 0.8, Y - 0.8, 1.6, 1.6)
      })

      ctx.lineWidth = 1
      ctx.strokeStyle = mint
      arcs.forEach((o, k) => {
        if (live) {
          o.p += dt * o.s
          if (o.p > 1.25) arcs[k] = pick()
        }
        ctx.globalAlpha = 0.22
        ctx.beginPath()
        for (let j = 0; j <= 28; j++) {
          const [X, Y] = proj(arcPt(o.a, o.b, j / 28))
          if (j) ctx.lineTo(X, Y)
          else ctx.moveTo(X, Y)
        }
        ctx.stroke()
        if (o.p <= 1) {
          const [X, Y] = proj(arcPt(o.a, o.b, o.p))
          ctx.globalAlpha = 0.9
          ctx.beginPath()
          ctx.arc(X, Y, 2.2, 0, 6.283)
          ctx.fill()
          ctx.globalAlpha = 0.18
          ctx.beginPath()
          ctx.arc(X, Y, 7, 0, 6.283)
          ctx.fill()
        }
      })
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="hero-orb"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mouse.current.tx = ((e.clientX - r.left) / r.width - 0.5) * 2
        mouse.current.ty = ((e.clientY - r.top) / r.height - 0.5) * 2
      }}
      onMouseLeave={() => {
        mouse.current.tx = 0
        mouse.current.ty = 0
      }}
    >
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  )
}
