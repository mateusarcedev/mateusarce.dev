"use client"

import { useEffect, useRef, useState } from "react"
import { HERO_ROLES } from "@/data/published"
import { useAppStore } from "@/lib/store"

const EASE = "cubic-bezier(.2,.7,.2,1)"

/** Rotating role word with blur/slide swap and a blinking caret. */
export function RoleRotator() {
  const { lang } = useAppStore()
  const roles = HERO_ROLES[lang === "pt-BR" ? "pt" : "en"]
  const [i, setI] = useState(0)
  const wordRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => {
      const el = wordRef.current
      const swap = () => {
        setI((n) => (n + 1) % roles.length)
        requestAnimationFrame(() =>
          el?.animate(
            [{ opacity: 0, transform: "translateY(8px)", filter: "blur(4px)" }, { opacity: 1, transform: "none", filter: "blur(0)" }],
            { duration: 420, easing: EASE, fill: "backwards" }
          )
        )
      }
      if (!el) return swap()
      const out = el.animate(
        [{ opacity: 1 }, { opacity: 0, transform: "translateY(-8px)", filter: "blur(4px)" }],
        { duration: 260, easing: EASE, fill: "forwards" }
      )
      out.onfinish = () => { out.cancel(); swap() }
    }, 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="role-rot">
      <span ref={wordRef} className="role-word">{roles[i % roles.length]}</span>
      <span className="role-caret" aria-hidden="true" />
    </span>
  )
}
