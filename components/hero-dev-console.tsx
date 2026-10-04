"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

const agentSteps = [
  { id: "plan", label: "planner", meta: "scope + tasks" },
  { id: "code", label: "coder", meta: "implement" },
  { id: "review", label: "reviewer", meta: "inspect diff" },
  { id: "test", label: "tester", meta: "validate" },
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

    const logs = root.querySelectorAll(".dev-log")
    const nodes = root.querySelectorAll(".agent-node")
    const packets = root.querySelectorAll(".agent-packet")
    const cursor = root.querySelector(".dev-console-cursor")
    const status = root.querySelector(".dev-console-status-dot")

    const animations = [
      animate(logs, {
        opacity: { from: 0 },
        x: { from: 8 },
        delay: stagger(90),
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
        x: [0, 30],
        opacity: [0, 1, 0],
        delay: stagger(260),
        duration: 1400,
        loop: true,
        ease: "inOut(2)",
      }),
    ]

    if (cursor) {
      animations.push(
        animate(cursor, {
          opacity: [1, 0],
          duration: 620,
          loop: true,
          alternate: true,
          ease: "steps(1)",
        })
      )
    }

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
    <aside ref={rootRef} className="hero-dev-console" aria-label={isPt ? "Resumo profissional e workflow de agentes" : "Professional summary and agent workflow"}>
      <div className="dev-console-window">
        <div className="dev-console-top">
          <div className="dev-console-lights" aria-hidden="true"><span /><span /><span /></div>
          <span className="dev-console-path">~/agent-workflow</span>
          <span className="dev-console-live">
            <i className="dev-console-status-dot" aria-hidden="true" />
            online
          </span>
        </div>

        <div className="dev-console-body">
          <div className="dev-console-profile">
            <div className="dev-console-role">
              <span lang="pt-BR">Desenvolvedor de Software Full Stack <i>·</i> front-end, back-end, mobile e agentes de IA</span>
              <span lang="en-US">Full Stack Software Developer <i>·</i> front-end, back-end, mobile and AI agents</span>
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
                <span lang="pt-BR">na <b>Supertrans</b></span>
                <span lang="en-US">at <b>Supertrans</b></span>
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

          <div className="dev-console-command">
            <span className="dev-console-prompt">mateus@dev:~$</span>
            <span> run workflow --task=&quot;ship feature&quot;</span>
          </div>

          <div className="dev-console-stack" aria-label="Current focus">
            <span>web</span>
            <span>api</span>
            <span>mobile</span>
            <span>agents</span>
          </div>

          <div className="agent-flow" aria-label="Agent workflow">
            <div className="agent-origin">
              <span className="agent-origin-icon">&gt;_</span>
              <span>task</span>
            </div>

            <div className="agent-flow-line"><span className="agent-packet" /></div>

            {agentSteps.map((step, index) => (
              <div className="agent-flow-fragment" key={step.id}>
                <div className="agent-node">
                  <div className="agent-node-top">
                    <span className="agent-node-dot" />
                    <strong>{step.label}</strong>
                  </div>
                  <small>{step.meta}</small>
                </div>
                {index < agentSteps.length - 1 && (
                  <div className="agent-flow-line"><span className="agent-packet" /></div>
                )}
              </div>
            ))}
          </div>

          <div className="dev-console-logs">
            <div className="dev-log"><span>✓</span> context loaded <b>skills/code</b></div>
            <div className="dev-log"><span>✓</span> implementation ready <b>frontend + api</b></div>
            <div className="dev-log"><span>✓</span> review passed <b>0 blockers</b></div>
            <div className="dev-log"><span>→</span> shipping <b>production</b><i className="dev-console-cursor">█</i></div>
          </div>
        </div>
      </div>
    </aside>
  )
}
