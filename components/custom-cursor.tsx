"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function CustomCursor({ theme }: { theme: string }) {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hasPointer = window.matchMedia("(pointer: fine)").matches
    if (!hasPointer) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    gsap.set([dot, ring], { autoAlpha: 1 })

    const xDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" })
    const yDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" })
    const xRing = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" })
    const yRing = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" })

    const onMouseMove = (e: MouseEvent) => {
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    }

    const onEnter = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.5, duration: 0.25, ease: "power2.out" })
      gsap.to(dot, { scale: 0, duration: 0.2 })
    }

    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.25, ease: "power2.out" })
      gsap.to(dot, { scale: 1, duration: 0.2 })
    }

    const bindInteractives = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mouseleave", onLeave)
      })
    }

    window.addEventListener("mousemove", onMouseMove)
    bindInteractives()

    const observer = new MutationObserver(bindInteractives)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      observer.disconnect()
    }
  }, [])

  const accent = theme === "dark" ? "#15F5BA" : "#2563EB"

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: "50%",
          backgroundColor: accent,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          borderRadius: "50%",
          border: `1.5px solid ${accent}`,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          willChange: "transform",
        }}
      />
    </>
  )
}
