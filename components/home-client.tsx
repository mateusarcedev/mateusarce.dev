"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { useAppStore } from "@/lib/store"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal"
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

function useDuration(startDate: string) {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"
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

export function HomeClient() {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"
  const clock = useClock()
  const [curCat, setCurCat] = useState("all")

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
              <img src="/images/avatar.webp" alt="Mateus Arce" />
            </div>
            <div className="hero-meta">
              <h1>Mateus <span className="accent">Arce</span></h1>
              <p className="hero-role">
                <span lang="pt-BR">Desenvolvedor Full Stack <span className="pink">·</span> agentes de IA, automações e sistemas distribuídos</span>
                <span lang="en-US">Full Stack Developer <span className="pink">·</span> AI agents, automation and distributed systems</span>
              </p>
              <div className="hero-info">
                <span>
                  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <b>Manaus, BR</b>
                </span>
                <span>
                  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  <b>UTC−4</b> · {clock}
                </span>
                <span>
                  <span className="dot" aria-hidden="true" />
                  <span lang="pt-BR">na <b>Supertrans</b></span>
                  <span lang="en-US">at <b>Supertrans</b></span>
                </span>
              </div>
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
                <p lang="pt-BR">Atualmente desenvolvendo plataformas distribuídas na <b>Supertrans</b>, com foco em <em>arquitetura backend, agentes de IA e automações</em>. Antes, sistemas internos e P&amp;D na Sidia.</p>
                <p lang="en-US">Currently building distributed platforms at <b>Supertrans</b>, focused on <em>backend architecture, AI agents and automation</em>. Previously, internal systems and R&amp;D at Sidia.</p>
              </div>
            </div>
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
            {experiences.map((exp, i) => (
              <article className="exp" key={i}>
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
            ))}
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
                <span lang="pt-BR">backends em <span className="h">Go</span> e <span className="h">NestJS</span> na Supertrans</span>
                <span lang="en-US"><span className="h">Go</span> and <span className="h">NestJS</span> backends at Supertrans</span>
              </div>
            </div>
            <div className="now-cell">
              <div className="now-label"><span className="marker" /><span lang="pt-BR">Brincando com</span><span lang="en-US">Playing with</span></div>
              <div className="now-val">
                <span lang="pt-BR">agentes de IA via <span className="h">LangGraph</span> e automações em Python</span>
                <span lang="en-US">AI agents with <span className="h">LangGraph</span> and Python automation</span>
              </div>
            </div>
            <div className="now-cell">
              <div className="now-label"><span className="marker" /><span lang="pt-BR">Aprendendo</span><span lang="en-US">Learning</span></div>
              <div className="now-val">
                <span lang="pt-BR">arquitetura distribuída — filas, cache, observabilidade</span>
                <span lang="en-US">distributed architecture — queues, cache, observability</span>
              </div>
            </div>
            <div className="now-cell">
              <div className="now-label"><span className="marker" /><span lang="pt-BR">Bebendo</span><span lang="en-US">Drinking</span></div>
              <div className="now-val">
                <span className="p">☕</span>
                <span lang="pt-BR">café preto, sempre</span>
                <span lang="en-US">black coffee, always</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS LINK */}
        <section id="projects-link" className="reveal">
          <div className="sec-head">
            <span className="sec-num">04</span>
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
            <span className="sec-num">05</span>
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
