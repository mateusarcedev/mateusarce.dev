"use client"

import { useEffect, useRef } from "react"

/** Renders a site at desktop width inside a box, scaled to fit its width. */
export function ScaledFrame({ src, title, width = 1440 }: { src: string; title: string; width?: number }) {
  const box = useRef<HTMLDivElement>(null)
  const frame = useRef<HTMLIFrameElement>(null)
  useEffect(() => {
    const el = box.current
    if (!el) return
    const fit = () => {
      if (frame.current) frame.current.style.transform = `scale(${el.clientWidth / width})`
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])
  return (
    <div ref={box} className="scaled-frame">
      <iframe ref={frame} src={src} title={title} tabIndex={-1} />
    </div>
  )
}
