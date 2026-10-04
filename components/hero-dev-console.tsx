"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

const agentSteps = [
  { id: "plan", label: "planner", meta: "scope + tasks" },
  { id: "code", label: "coder", meta: "implement" },
  { id: "review", label: "reviewer", meta: "inspect diff" },
  { id: "test", label: "tester", meta: "validate" },
]

export function HeroDevConsole() {
  const rootRef = useRef<HTMLDivElement>(null)

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
    <div ref={rootRef} className="hero-dev-console" aria-hidden="true">
      <div className="dev-console-window">
        <div className="dev-console-top">
          <div className="dev-console-lights"><span /><span /><span /></div>
          <span className="dev-console-path">~/agent-workflow</span>
          <span className="dev-console-live">
            <i className="dev-console-status-dot" />
            online
          </span>
        </div>

        <div className="dev-console-body">
          <div className="dev-console-command">
            <span className="dev-console-prompt">mateus@dev:~$</span>
            <span> run workflow --task=&quot;ship feature&quot;</span>
          </div>

          <div className="dev-console-stack">
            <span>web</span>
            <span>api</span>
            <span>mobile</span>
            <span>agents</span>
          </div>

          <div className="agent-flow">
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
    </div>
  )
}
