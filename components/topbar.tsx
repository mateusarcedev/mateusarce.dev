"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useAppStore } from "@/lib/store"

type TopbarProps = {
  variant?: "home" | "sub"
  backHref?: string
  backLabel?: string
  subLabel?: { pt: string; en: string }
}

export function Topbar({ variant = "home", backHref = "/", backLabel = "mateus arce", subLabel }: TopbarProps) {
  const { setTheme, resolvedTheme } = useTheme()
  const { lang, setLang } = useAppStore()

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          {variant === "home" ? (
            <>
              <span className="brand-dot" aria-hidden="true" />
              <strong>mateus arce</strong>
              <span className="sep">·</span>
              <span className="dim" lang="pt-BR">desenvolvedor full stack</span>
              <span className="dim" lang="en-US">full stack developer</span>
            </>
          ) : (
            <>
              <Link className="back" href={backHref}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 6l-6 6 6 6" /></svg>
                <strong>{backLabel}</strong>
              </Link>
              {subLabel && (
                <>
                  <span className="sep">·</span>
                  <span className="dim" lang="pt-BR">{subLabel.pt}</span>
                  <span className="dim" lang="en-US">{subLabel.en}</span>
                </>
              )}
            </>
          )}
        </div>
        <div className="controls">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              onClick={() => setLang("pt-BR")}
              aria-pressed={lang === "pt-BR"}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en-US")}
              aria-pressed={lang === "en-US"}
            >
              EN
            </button>
          </div>
          <button
            className="iconbtn"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
