"use client"

import { useRef, useEffect } from "react"
import { Github, Linkedin, FileText, FolderGit2 } from "lucide-react"
import { gsap } from "gsap"

const NAME_CHARS = "Mateus Arce".split("")

type ProfileHeaderProps = {
  theme: string
  t: {
    role: string
    curriculum: string
    projects: string
  }
}

export function ProfileHeader({ theme, t }: ProfileHeaderProps) {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!headerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from('[data-hero="avatar"]', { opacity: 0, scale: 0.85, duration: 0.9 })
        .from('[data-hero="char"]', { opacity: 0, y: 18, stagger: 0.025, duration: 0.5 }, "-=0.5")
        .from('[data-hero="role"]', { opacity: 0, y: 14, duration: 0.5 }, "-=0.25")
        .from('[data-hero="email"]', { opacity: 0, y: 10, duration: 0.4 }, "-=0.2")
        .from('[data-hero="nav"]', { opacity: 0, y: 10, stagger: 0.09, duration: 0.4 }, "-=0.2")
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <header ref={headerRef} className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
      <div data-hero="avatar" className="relative w-32 h-32 rounded-full overflow-hidden">
        <img
          src="/images/avatar.webp"
          alt="Mateus Arce"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className={`${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"} text-2xl font-bold mb-2`}>
          {NAME_CHARS.map((char, i) => (
            <span key={i} data-hero="char" style={{ display: "inline-block" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <h2 data-hero="role" className="text-xl mb-4">
          {t.role}
        </h2>

        <p data-hero="email" className={`${theme === "dark" ? "text-[#E96479]" : "text-red-600"} mb-4`}>
          contato@mateusarce.dev
        </p>

        <nav className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            data-hero="nav"
            href="https://github.com/mateusarcedev"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"} transition-colors flex items-center gap-2`}
            aria-label="GitHub Profile"
          >
            <Github size={16} />
            <span>github</span>
          </a>
          <a
            data-hero="nav"
            href="https://www.linkedin.com/in/mateus-arce/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"} transition-colors flex items-center gap-2`}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
            <span>linkedin</span>
          </a>
          <a
            data-hero="nav"
            href="/resume"
            rel="noopener noreferrer"
            className={`${theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"} transition-colors flex items-center gap-2`}
            aria-label={t.curriculum}
          >
            <FileText size={16} />
            <span>{t.curriculum}</span>
          </a>
          <a
            data-hero="nav"
            href="/projects"
            className={`${theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"} transition-colors flex items-center gap-2`}
            aria-label={t.projects}
          >
            <FolderGit2 size={16} />
            <span>{t.projects.toLowerCase()}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
