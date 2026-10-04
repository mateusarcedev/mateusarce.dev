"use client"

import { useEffect } from "react"
import { animate, stagger } from "animejs"

export function RevealObserver() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion) return

    document.documentElement.classList.add("motion-ready")
    const running: Array<{ revert: () => unknown }> = []

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const target = entry.target
          target.classList.add("show")

          running.push(
            animate(target, {
              opacity: [0, 1],
              y: [10, 0],
              duration: 650,
              ease: "out(3)",
            })
          )

          const details = target.matches(".hero-grid")
            ? target.querySelectorAll(
                ".avatar, .hero-meta > h1, .hero-role, .hero-info > span, .quick-links .ql, .bio"
              )
            : target.querySelectorAll(
                ".sec-head > *, .exp, .cat-head, .now-cell, .proj-link, .contact-row"
              )

          if (details.length) {
            running.push(
              animate(details, {
                opacity: { from: 0 },
                y: { from: 6 },
                duration: 480,
                delay: stagger(32),
                ease: "out(3)",
              })
            )
          }

          io.unobserve(target)
        })
      },
      { threshold: 0.06, rootMargin: "0px 0px -8% 0px" }
    )

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      document.documentElement.classList.remove("motion-ready")
      running.forEach((animation) => {
        animation.revert()
      })
    }
  }, [])

  return null
}
