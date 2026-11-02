"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useAppStore } from "@/lib/store"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal"
import { HeroOrb } from "@/components/hero-orb"
import { RoleRotator } from "@/components/role-rotator"
import { PublishedProjects } from "@/components/published-projects"
import { MARQUEE, STACK_GROUPS } from "@/data/published"
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

export function HomeClient() {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"
  const clock = useClock()

  const firstExperienceStart = useMemo(
    () =>
      experiences
        .map((experience) => experience.startDate)
        .filter((date): date is string => Boolean(date))
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())[0],
    []
  )
  const totalExperience = firstExperienceStart ? formatDuration(firstExperienceStart, lk) : null

  return (
    <>
      <RevealObserver />
      <Topbar variant="home" />
      <main className="page-main" id="main-content">
        {/* HERO */}
        <section className="hero-3d">
          <div className="hero-3d-copy reveal">
            <div className="hero-status">
              <i />
              <em><span lang="pt-BR">disponível</span><span lang="en-US">available</span></em>
              <span>·</span>
              <span>Manaus, BR · UTC-4 · {clock}</span>
            </div>
            <h1>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero-avatar" src="https://github.com/mateusarcedev.png?size=160" alt="Mateus Arce" width={56} height={56} />
              <span>Mateus</span> <span className="accent">Arce</span>
            </h1>
            <p className="hero-3d-role">
              <span lang="pt-BR">Construo </span><span lang="en-US">I build </span>
              <RoleRotator />
            </p>
            <p className="hero-3d-sub">
              <span lang="pt-BR">Full stack sênior na <a href="https://supertranstransportes.com.br/" target="_blank" rel="noopener">Supertrans Transportes</a>, desenvolvendo de ponta a ponta: backend, web, mobile nativo e IA.</span>
              <span lang="en-US">Senior full stack at <a href="https://supertranstransportes.com.br/" target="_blank" rel="noopener">Supertrans Transportes</a>, building end to end: backend, web, native mobile and AI.</span>
            </p>
            <div className="quick-links">
              <a className="ql primary" href="#published">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                <span lang="pt-BR">projetos</span><span lang="en-US">projects</span>
              </a>
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
              <a className="ql email" href="mailto:contato@mateusarce.dev">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
                email
              </a>
            </div>
          </div>
          <HeroOrb />
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i}>{m}<i>◆</i></span>
            ))}
          </div>
        </div>

        {/* PUBLISHED */}
        <section id="published" className="reveal" style={{ paddingTop: 80 }}>
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2 className="sec-title"><span lang="pt-BR">Publicados</span><span lang="en-US">Published</span></h2>
            <span className="sec-rule" />
            <span className="sec-count"><span lang="pt-BR">no ar</span><span lang="en-US">live</span> · *.mateusarce.dev</span>
          </div>
          <PublishedProjects />
          <Link className="proj-link" href="/projects" style={{ marginTop: 20 }}>
            <div className="proj-link-text">
              <strong lang="pt-BR">Todos os projetos →</strong>
              <strong lang="en-US">All projects →</strong>
              <span lang="pt-BR">publicados + repositórios (README e código-fonte)</span>
              <span lang="en-US">published + repositories (README and source code)</span>
            </div>
          </Link>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="reveal home-sec">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <h2 className="sec-title"><span lang="pt-BR">Experiência</span><span lang="en-US">Experience</span></h2>
            <span className="sec-rule" />
            {totalExperience && <span className="sec-count">{totalExperience}</span>}
          </div>
          <div className="exp-compact">
            {experiences.map((exp, i) => (
              <div className="exp-row" key={i}>
                <div className={`exp-logo ${exp.logoClass || ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={exp.logo} alt={exp.company} />
                </div>
                <div className="exp-row-main">
                  <div className="exp-row-title"><span lang="pt-BR">{exp.title.pt}</span><span lang="en-US">{exp.title.en}</span></div>
                  <div className="exp-row-co">{exp.company}</div>
                </div>
                <div className="exp-row-range">
                  <span lang="pt-BR">{exp.dateRange.pt}</span><span lang="en-US">{exp.dateRange.en}</span>
                </div>
                <div className="exp-row-detail">
                  <ul lang="pt-BR">
                    {exp.bullets.pt.map((b, j) => <li key={j} dangerouslySetInnerHTML={{ __html: b }} />)}
                  </ul>
                  <ul lang="en-US">
                    {exp.bullets.en.map((b, j) => <li key={j} dangerouslySetInnerHTML={{ __html: b }} />)}
                  </ul>
                  <div className="exp-tech" aria-label={lk === "pt" ? "Tecnologias" : "Technologies"}>
                    {exp.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="reveal home-sec">
          <div className="sec-head">
            <span className="sec-num">03</span>
            <h2 className="sec-title">Stack</h2>
            <span className="sec-rule" />
          </div>
          <div className="stack-grid">
            {STACK_GROUPS.map((g) => (
              <div className="stack-grid-cell" key={g.k.en}>
                <span className="stack-grid-k">{g.k[lk]}</span>
                <span className="stack-grid-v">{g.v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="reveal">
          <div className="sec-head">
            <span className="sec-num">04</span>
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
