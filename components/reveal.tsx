"use client"

import { useEffect } from "react"

export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: "0px 0px -8% 0px" }
    )
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
