"use client"

import { useState, useEffect, useMemo } from "react"
import { animate, stagger } from "animejs"
import Link from "next/link"
import { useAppStore } from "@/lib/store"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal"
import { HeroDevConsole } from "@/components/hero-dev-console"
import { ElectronicsLabVisual } from "@/components/electronics-lab-visual"
import { TECH, CAT_LABEL, CAT_ORDER } from "@/data/technologies"
import { experiences } from "@/data/experiences"

function useClock() {
  const [time, setTime] = useState("—")
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const manaus = new Date(utc - 4 * 3600000)
      setTime(`${String(manaus.getHours()).padStart(2, "0")}:${String(manaus.getMinutes()).padStart(2, "0")}`)
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])
  return time
}

function formatDuration(startDate: string, lk: "pt" | "en") {
  const start = new Date(startDate)
  const now = new Date()
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  const yrs = Math.floor(months / 12)
  const mos = months % 12
  const parts: string[] = []
  if (yrs > 0) parts.push(yrs + (lk === "pt" ? (yrs > 1 ? " anos" : " ano") : (yrs > 1 ? " yrs" : " yr")))
  if (mos > 0) parts.push(mos + (lk === "pt" ? (mos > 1 ? " meses" : " mês") : " mo"))
  return parts.join(" ")
}

function useDuration(startDate: string) {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"
  return formatDuration(startDate, lk)
}

export function HomeClient() {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"
  const clock = useClock()
  const [curCat, setCurCat] = useState("all")
  const [showAllExp, setShowAllExp] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const chips = document.querySelectorAll(".stack-cat:not([hidden]) .chip")
    if (!chips.length) return

    const animation = animate(chips, {
      opacity: { from: 0 },
      y: { from: 6 },
      duration: 420,
      delay: stagger(18),
      ease: "out(3)",
    })

    return () => {
      animation.revert()
    }
  }, [curCat])

  const grouped = useMemo(() => {
    const g: Record<string, typeof TECH> = {}
    TECH.forEach((t) => { (g[t.cat] = g[t.cat] || []).push(t) })
    Object.values(g).forEach((arr) => arr.sort((a, b) => a.name.localeCompare(b.name)))
    return g
  }, [])

  const catCounts = useMemo(() => {
    const c: Record<string, number> = {}
    TECH.forEach((t) => { c[t.cat] = (c[t.cat] || 0) + 1 })
    return c
  }, [])

  const firstExperienceStart = useMemo(
    () =>
      experiences
        .map((experience) => experience.startDate)
        .filter((date): date is string => Boolean(date))
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())[0],
    []
  )
  const totalExperience = firstExperienceStart ? formatDuration(firstExperienceStart, lk) : null
  const todayDate = new Date().toLocaleString(lk === "pt" ? "pt-BR" : "en-US", { month: "short", year: "numeric" })

  return (
    <>
      <RevealObserver />
      <Topbar variant="home" />
      <main className="page-main" id="main-content">
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid reveal">
            <div className="avatar">
              <img src="https://avatars.githubusercontent.com/u/96782284?v=4" alt="Mateus Arce" referrerPolicy="no-referrer" />
            </div>
            <div className="hero-meta">
              <h1>Mateus <span className="accent">Arce</span></h1>
              <div className="quick-links">
                <a className="ql" href="https://github.com/mateusarcedev" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.4-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" /></svg>
                  github
                </a>
                <a className="ql" href="https://www.linkedin.com/in/mateus-arce/" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18H5.7v-8.4h2.6V18zM7 8.4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 9.6h-2.6V14c0-1-.4-1.6-1.3-1.6-.7 0-1.1.5-1.3 1V18h-2.6V9.6h2.6v1.2a2.7 2.7 0 0 1 2.4-1.3c1.7 0 2.8 1.1 2.8 3.5V18z" /></svg>
                  linkedin
                </a>
                <Link className="ql" href="/resume">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
                  <span lang="pt-BR">currículo</span><span lang="en-US">resume</span>
                </Link>
                <a className="ql" href="#projects-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                  <span lang="pt-BR">projetos</span><span lang="en-US">projects</span>
                </a>
                <a className="ql email" href="mailto:contato@mateusarce.dev">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
                  email
                </a>
              </div>
              <div className="bio">
                <p lang="pt-BR">Atualmente desenvolvendo software na <b>Supertrans</b>, transitando entre <em>front-end, back-end, mobile, automações e workflows com agentes de IA</em>. Antes, sistemas internos e P&amp;D na Sidia.</p>
                <p lang="en-US">Currently building software at <b>Supertrans</b> across <em>front-end, back-end, mobile, automation and AI-agent workflows</em>. Previously, internal systems and R&amp;D at Sidia.</p>
              </div>
            </div>
            <HeroDevConsole
              lang={lang}
              clock={clock}
              totalExperience={totalExperience}
            />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="reveal">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2 className="sec-title"><span lang="pt-BR">Experiência</span><span lang="en-US">Experience</span></h2>
            <span className="sec-rule" />
            <span className="sec-count">0{experiences.length}</span>
          </div>
          <div className="exp-list">
            {experiences.slice(0, 2).map((exp, i) => (
              <ExpCard key={i} exp={exp} />
            ))}
            <div className={`exp-collapsed${showAllExp ? " open" : ""}`}>
              {experiences.slice(2).map((exp, i) => (
                <ExpCard key={i + 2} exp={exp} />
              ))}
            </div>
            <button className="exp-toggle" onClick={() => setShowAllExp((v) => !v)} aria-expanded={showAllExp}>
              <span className="exp-toggle-line" />
              <span className="exp-toggle-label">
                {showAllExp ? (
                  <><span lang="pt-BR">ver menos</span><span lang="en-US">show less</span></>
                ) : (
                  <><span lang="pt-BR">ver mais · +{experiences.length - 2} anteriores</span><span lang="en-US">show more · +{experiences.length - 2} previous</span></>
                )}
                <svg className={`exp-toggle-arrow${showAllExp ? " up" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 9l6 6 6-6" /></svg>
              </span>
              <span className="exp-toggle-line" />
            </button>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="reveal">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <h2 className="sec-title"><span lang="pt-BR">Tecnologias</span><span lang="en-US">Technologies</span></h2>
            <span className="sec-rule" />
            <span className="sec-count">{TECH.length} {lk === "pt" ? "tecnologias" : "techs"}</span>
          </div>
          <div className="stack-filters" role="group" aria-label="Category filter">
            <button className="pill" aria-pressed={curCat === "all"} onClick={() => setCurCat("all")}>
              <span className="ico">✦</span>
              <span lang="pt-BR">Todos</span><span lang="en-US">All</span>
              <span className="c">{TECH.length}</span>
            </button>
            {CAT_ORDER.map((cat) => (
              <button key={cat} className="pill" aria-pressed={curCat === cat} onClick={() => setCurCat(cat)}>
                <span className="ico">◆</span>
                <span lang="pt-BR">{CAT_LABEL[cat]?.pt}</span><span lang="en-US">{CAT_LABEL[cat]?.en}</span>
                <span className="c">{catCounts[cat] || 0}</span>
              </button>
            ))}
          </div>
          <div className="stack-cats">
            {(() => {
              let idx = 0
              return CAT_ORDER.map((cat) => {
                if (!grouped[cat]) return null
                idx++
                const hidden = curCat !== "all" && curCat !== cat
                return (
                  <div className="stack-cat" key={cat} hidden={hidden}>
                    <div className="cat-head">
                      <span className="num">{String(idx).padStart(2, "0")}</span>
                      <span lang="pt-BR">{CAT_LABEL[cat]?.pt}</span><span lang="en-US">{CAT_LABEL[cat]?.en}</span>
                      <span className="line" />
                      <span className="count">{grouped[cat].length}</span>
                    </div>
                    <div className="chips">
                      {grouped[cat].map((t) => (
                        <span className="chip" key={t.name} data-tip={t.desc[lk]}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                            alt="" loading="lazy" decoding="async"
                            className={t.invertible ? "invertible" : undefined}
                          />
                          <span>{t.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })
            })()}
          </div>
        </section>

        {/* NOW */}
        <section id="now" className="reveal">
          <div className="sec-head">
            <span className="sec-num">03</span>
            <h2 className="sec-title"><span lang="pt-BR">Agora</span><span lang="en-US">Now</span></h2>
            <span className="sec-rule" />
            <span className="sec-count">{todayDate}</span>
          </div>
          <div className="now-grid">
            <div className="now-cell">
              <div className="now-label"><span className="marker" /><span lang="pt-BR">Construindo</span><span lang="en-US">Building</span></div>
              <div className="now-val">
                <span lang="pt-BR">produtos e sistemas em <span className="h">front-end</span>, <span className="h">back-end</span> e <span className="h">mobile</span></span>
                <span lang="en-US">products and systems across <span className="h">front-end</span>, <span className="h">back-end</span> and <span className="h">mobile</span></span>
              </div>
            </div>
            <div className="now-cell">
              <div className="now-label"><span className="marker" /><span lang="pt-BR">Com IA</span><span lang="en-US">With AI</span></div>
              <div className="now-val">
                <span lang="pt-BR">workflows com <span className="h">agentes de IA</span>, skills de código e automações</span>
                <span lang="en-US"><span className="h">AI-agent</span> workflows, coding skills and automation</span>
              </div>
            </div>
            <div className="now-cell">
              <div className="now-label"><span className="marker" /><span lang="pt-BR">Evoluindo</span><span lang="en-US">Improving</span></div>
              <div className="now-val">
                <span lang="pt-BR">arquitetura distribuída — filas, cache, observabilidade e integração</span>
                <span lang="en-US">distributed architecture — queues, cache, observability and integration</span>
              </div>
            </div>
            <div className="now-cell">
              <div className="now-label"><span className="marker" /><span lang="pt-BR">Combustível</span><span lang="en-US">Fuel</span></div>
              <div className="now-val">
                <span className="p">☕</span>
                <span lang="pt-BR">café preto e curiosidade técnica</span>
                <span lang="en-US">black coffee and technical curiosity</span>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section id="workflow" className="reveal">
          <div className="sec-head">
            <span className="sec-num">04</span>
            <h2 className="sec-title"><span lang="pt-BR">Workflow</span><span lang="en-US">Workflow</span></h2>
            <span className="sec-rule" />
            <span className="sec-count"><span lang="pt-BR">humano + agentes</span><span lang="en-US">human + agents</span></span>
          </div>

          <div className="workflow-intro">
            <p lang="pt-BR">Uso agentes como uma camada de execução e revisão do meu trabalho: eu defino contexto, restrições e direção técnica; os agentes ajudam a decompor, implementar, testar e revisar com ciclos curtos.</p>
            <p lang="en-US">I use agents as an execution and review layer: I define context, constraints and technical direction; agents help break down, implement, test and review work in short cycles.</p>
          </div>

          <div className="workflow-board">
            <article className="workflow-stage">
              <span className="workflow-stage-num">01</span>
              <div>
                <strong><span lang="pt-BR">Contexto & direção</span><span lang="en-US">Context & direction</span></strong>
                <p lang="pt-BR">Requisitos, arquitetura, regras e definição do que significa “pronto”.</p>
                <p lang="en-US">Requirements, architecture, rules and a clear definition of done.</p>
              </div>
              <span className="workflow-stage-status">human</span>
            </article>
            <div className="workflow-connector"><span /></div>
            <article className="workflow-stage">
              <span className="workflow-stage-num">02</span>
              <div>
                <strong><span lang="pt-BR">Agentes em paralelo</span><span lang="en-US">Agents in parallel</span></strong>
                <p lang="pt-BR">Planejamento, código, busca no repositório, testes e revisão de diff.</p>
                <p lang="en-US">Planning, coding, repository search, tests and diff review.</p>
              </div>
              <span className="workflow-stage-status active">agents</span>
            </article>
            <div className="workflow-connector"><span /></div>
            <article className="workflow-stage">
              <span className="workflow-stage-num">03</span>
              <div>
                <strong><span lang="pt-BR">Validação & entrega</span><span lang="en-US">Validate & ship</span></strong>
                <p lang="pt-BR">Eu reviso decisões, valido o comportamento e fecho o ciclo com deploy e feedback.</p>
                <p lang="en-US">I review decisions, validate behavior and close the loop with deployment and feedback.</p>
              </div>
              <span className="workflow-stage-status">ship</span>
            </article>
          </div>

          <div className="workflow-toolbelt">
            <span className="workflow-toolbelt-label"><span lang="pt-BR">modo de trabalho</span><span lang="en-US">working mode</span></span>
            <span>frontend</span><span>backend</span><span>mobile</span><span>automation</span><span>agentic coding</span><span>review loops</span>
          </div>
        </section>

        {/* LEARNING LAB */}
        <section id="learning" className="reveal">
          <div className="sec-head">
            <span className="sec-num">05</span>
            <h2 className="sec-title"><span lang="pt-BR">Aprendendo</span><span lang="en-US">Learning</span></h2>
            <span className="sec-rule" />
            <span className="sec-count"><span lang="pt-BR">hobby / curiosidade</span><span lang="en-US">hobby / curiosity</span></span>
          </div>

          <div className="learning-grid">
            <div className="learning-copy">
              <span className="learning-eyebrow"><span lang="pt-BR">fora do trabalho</span><span lang="en-US">outside work</span></span>
              <h3><span lang="pt-BR">Eletrônica básica, Arduino e ESP32.</span><span lang="en-US">Basic electronics, Arduino and ESP32.</span></h3>
              <p lang="pt-BR">Não é meu foco profissional — é um laboratório pessoal para entender melhor sensores, sinais, GPIO, microcontroladores e o caminho entre software e hardware.</p>
              <p lang="en-US">It is not my professional focus — it is a personal lab for understanding sensors, signals, GPIO, microcontrollers and the bridge between software and hardware.</p>
              <div className="learning-tags"><span>Arduino</span><span>ESP32</span><span>GPIO</span><span>sensores</span><span>eletrônica básica</span></div>
            </div>
            <ElectronicsLabVisual />
          </div>
        </section>

        {/* PROJECTS LINK */}
        <section id="projects-link" className="reveal">
          <div className="sec-head">
            <span className="sec-num">06</span>
            <h2 className="sec-title"><span lang="pt-BR">Projetos</span><span lang="en-US">Projects</span></h2>
            <span className="sec-rule" />
          </div>
          <Link className="proj-link" href="/projects">
            <div className="proj-link-text">
              <strong lang="pt-BR">Ver todos os projetos →</strong>
              <strong lang="en-US">See all projects →</strong>
              <span lang="pt-BR">repositórios públicos do GitHub, com READMEs renderizados e demos ao vivo</span>
              <span lang="en-US">public GitHub repositories, rendered READMEs and live demos</span>
            </div>
            <svg className="arrow" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </section>

        {/* CONTACT */}
        <section id="contact" className="reveal">
          <div className="sec-head">
            <span className="sec-num">07</span>
            <h2 className="sec-title"><span lang="pt-BR">Contato</span><span lang="en-US">Contact</span></h2>
            <span className="sec-rule" />
            <span className="sec-count"><span lang="pt-BR">resposta em ~24h</span><span lang="en-US">~24h response</span></span>
          </div>
          <div className="contact">
            <div className="contact-row email">
              <span className="k">email</span>
              <a href="mailto:contato@mateusarce.dev">contato@mateusarce.dev</a>
            </div>
            <div className="contact-row">
              <span className="k">github</span>
              <a href="https://github.com/mateusarcedev" target="_blank" rel="noopener">@mateusarcedev</a>
            </div>
            <div className="contact-row">
              <span className="k">linkedin</span>
              <a href="https://www.linkedin.com/in/mateus-arce/" target="_blank" rel="noopener">/in/mateus-arce</a>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="home" />
    </>
  )
}

function DurationBadge({ startDate }: { startDate: string }) {
  const dur = useDuration(startDate)
  return <span className="dur">{dur}</span>
}

function ExpCard({ exp }: { exp: (typeof experiences)[number] }) {
  return (
    <article className="exp">
      <div className={`exp-logo ${exp.logoClass || ""}`}>
        <img src={exp.logo} alt={exp.company} />
      </div>
      <div className="exp-body">
        <div className="exp-dates">
          {exp.current && <span className="now">● now</span>}
          <span lang="pt-BR">{exp.dateRange.pt}</span>
          <span lang="en-US">{exp.dateRange.en}</span>
          {exp.current && exp.startDate ? (
            <DurationBadge startDate={exp.startDate} />
          ) : exp.duration ? (
            <span className="dur">{exp.duration}</span>
          ) : null}
        </div>
        <h3><span lang="pt-BR">{exp.title.pt}</span><span lang="en-US">{exp.title.en}</span></h3>
        <div className="exp-co"><b>{exp.company}</b><span className="at">·</span>{exp.location}</div>
        <ul className="exp-bullets" lang="pt-BR">
          {exp.bullets.pt.map((b, j) => <li key={j} dangerouslySetInnerHTML={{ __html: b }} />)}
        </ul>
        <ul className="exp-bullets" lang="en-US">
          {exp.bullets.en.map((b, j) => <li key={j} dangerouslySetInnerHTML={{ __html: b }} />)}
        </ul>
        <div className="exp-tech">
          {exp.tech.map((t) => <span className="t" key={t}>{t}</span>)}
        </div>
      </div>
    </article>
  )
}
