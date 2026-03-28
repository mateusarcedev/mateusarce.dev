"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function GsapAnimations() {
  useEffect(() => {
    // Refresh after images/fonts settle
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 400)

    const ctx = gsap.context(() => {
      // ── Bio section ──────────────────────────────────────────────────────────
      gsap.from('[data-section="bio"]', {
        scrollTrigger: {
          trigger: '[data-section="bio"]',
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      // ── Project cards — stagger ───────────────────────────────────────────────
      const projectSection = document.querySelector('[data-section="projects"]')
      if (projectSection) {
        const cards = projectSection.querySelectorAll("[data-project-card]")
        if (cards.length) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: projectSection,
              start: "top 75%",
              once: true,
            },
            opacity: 0,
            y: 40,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
          })
        }
      }

      // ── Experience timeline line — draw (scrub) ───────────────────────────────
      const timelineLine = document.querySelector("[data-timeline-line]")
      if (timelineLine) {
        gsap.from(timelineLine, {
          scrollTrigger: {
            trigger: '[data-section="experience"]',
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
          scaleY: 0,
          transformOrigin: "top center",
        })
      }

      // ── Experience items — slide in from left ─────────────────────────────────
      document.querySelectorAll("[data-exp-item]").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            once: true,
          },
          opacity: 0,
          x: -30,
          duration: 0.7,
          ease: "power3.out",
        })
      })

      // ── Tech chips — wave stagger ─────────────────────────────────────────────
      const techSection = document.querySelector('[data-section="technologies"]')
      if (techSection) {
        const chips = techSection.querySelectorAll("[data-tech-chip]")
        if (chips.length) {
          gsap.from(chips, {
            scrollTrigger: {
              trigger: techSection,
              start: "top 75%",
              once: true,
            },
            opacity: 0,
            scale: 0.8,
            stagger: { amount: 0.9, from: "start" },
            duration: 0.35,
            ease: "back.out(1.5)",
          })
        }
      }
    })

    return () => {
      clearTimeout(timeout)
      ctx.revert()
    }
  }, [])

  return null
}
