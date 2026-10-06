"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

const agentSteps = [
  { id: "plan", label: "planejar", en: "plan" },
  { id: "code", label: "implementar", en: "build" },
  { id: "review", label: "revisar", en: "review" },
  { id: "test", label: "validar", en: "validate" },
]

const skillGroups = [
  {
    key: "frontend",
    title: "Front-end",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    key: "backend",
    title: "Back-end",
    items: ["Go", "NestJS", "Python", "PostgreSQL"],
  },
  {
    key: "mobile",
    title: "Mobile",
    items: ["React Native"],
  },
  {
    key: "ai",
    title: "IA & automação",
    enTitle: "AI & automation",
    items: ["LangGraph", "AI agents", "workflows"],
  },
]

type HeroDevConsoleProps = {
  lang: "pt-BR" | "en-US"
  clock: string
  totalExperience: string | null
}

export function HeroDevConsole({ lang, clock, totalExperience }: HeroDevConsoleProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const isPt = lang === "pt-BR"

  useEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const nodes = root.querySelectorAll(".agent-node")
    const packets = root.querySelectorAll(".agent-packet")
    const skillCards = root.querySelectorAll(".dev-skill-card")
    const status = root.querySelector(".dev-console-status-dot")

    const animations = [
      animate(skillCards, {
        opacity: { from: 0 },
        y: { from: 8 },
        delay: stagger(70),
        duration: 420,
        ease: "out(3)",
      }),
      animate(nodes, {
        y: [{ to: -2 }, { to: 0 }],
        delay: stagger(170),
        duration: 1200,
        loop: true,
        alternate: true,
        ease: "inOut(2)",
      }),
      animate(packets, {
        x: [0, 44],
        opacity: [0, 1, 0],
        delay: stagger(240),
        duration: 1500,
        loop: true,
        ease: "inOut(2)",
      }),
    ]

    if (status) {
      animations.push(
        animate(status, {
          scale: [1, 1.45],
          opacity: [1, 0.45],
          duration: 1050,
          loop: true,
          alternate: true,
          ease: "inOut(2)",
        })
      )
    }

    return () => {
      animations.forEach((animation) => {
        animation.revert()
      })
    }
  }, [])

  return (
    <aside
      ref={rootRef}
      className="hero-dev-console"
      aria-label={isPt ? "Resumo profissional e workflow com agentes" : "Professional summary and agent workflow"}
    >
      <div className="dev-console-window">
        <div className="dev-console-top">
          <div className="dev-console-lights" aria-hidden="true"><span /><span /><span /></div>
          <span className="dev-console-path">~/mateus/profile</span>
          <span className="dev-console-live">
            <i className="dev-console-status-dot" aria-hidden="true" />
            available
          </span>
        </div>

        <div className="dev-console-body">
          <div className="dev-console-profile">
            <div className="dev-console-role">
              <span lang="pt-BR">Engenheiro de Software <i>·</i> Full Stack <i>·</i> sistemas backend, ferramentas para devs e automação</span>
              <span lang="en-US">Software Engineer <i>·</i> Full Stack <i>·</i> backend systems, developer tools and automation</span>
            </div>

            <div className="dev-console-meta">
              <span className="dev-console-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <b>Manaus, BR</b>
              </span>

              <span className="dev-console-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                <b>UTC−4</b><span className="dev-console-meta-sep">·</span>{clock}
              </span>

              <span className="dev-console-meta-item">
                <span className="dev-console-company-dot" aria-hidden="true" />
                <span lang="pt-BR">Desenvolvedor Full Stack Sênior na <b>Supertrans</b></span>
                <span lang="en-US">Senior Full Stack Developer at <b>Supertrans</b></span>
              </span>

              {totalExperience && (
                <span className="dev-console-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M8 7V5a4 4 0 0 1 8 0v2" /><path d="M5 7h14v12H5z" /></svg>
                  <b>{totalExperience}</b>
                  <span lang="pt-BR">de experiência</span>
                  <span lang="en-US">experience</span>
                </span>
              )}
            </div>
          </div>

          <div className="dev-console-divider" />

          <div className="dev-console-section-head">
            <span>01</span>
            <strong><span lang="pt-BR">Habilidades principais</span><span lang="en-US">Core skills</span></strong>
          </div>

          <div className="dev-skills-grid">
            {skillGroups.map((group) => (
              <div className="dev-skill-card" key={group.key}>
                <strong>{isPt ? group.title : group.enTitle || group.title}</strong>
                <div className="dev-skill-tags">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="dev-console-divider" />

          <div className="dev-console-section-head">
            <span>02</span>
            <strong><span lang="pt-BR">Como uso agentes de IA</span><span lang="en-US">How I use AI agents</span></strong>
          </div>

          <div className="agent-flow" aria-label={isPt ? "Workflow com agentes" : "Agent workflow"}>
            <div className="agent-origin">
              <span className="agent-origin-icon">&gt;_</span>
              <span>{isPt ? "contexto" : "context"}</span>
            </div>

            <div className="agent-flow-line"><span className="agent-packet" /></div>

            {agentSteps.map((step, index) => (
              <div className="agent-flow-fragment" key={step.id}>
                <div className="agent-node">
                  <div className="agent-node-top">
                    <span className="agent-node-dot" />
                    <strong>{isPt ? step.label : step.en}</strong>
                  </div>
                </div>
                {index < agentSteps.length - 1 && (
                  <div className="agent-flow-line"><span className="agent-packet" /></div>
                )}
              </div>
            ))}
          </div>

          <p className="dev-console-agent-note">
            <span lang="pt-BR">Eu defino contexto, arquitetura e critérios; os agentes aceleram implementação, revisão e validação.</span>
            <span lang="en-US">I define context, architecture and criteria; agents accelerate implementation, review and validation.</span>
          </p>
        </div>
      </div>
    </aside>
  )
}
