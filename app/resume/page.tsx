"use client"

import { useAppStore } from "@/lib/store"
import { Topbar } from "@/components/topbar"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal"

export default function ResumePage() {
  const { lang } = useAppStore()
  const lk = lang === "pt-BR" ? "pt" : "en"
  const resumeUrl = lk === "pt"
    ? "https://drive.google.com/file/d/1MCwFMIMVMIlq06SjZ9COzwL635esj4nf/view?usp=sharing"
    : "https://drive.google.com/file/d/16z-7Re65rbXkMTqnSOM-fq6_knJlEe4F/view?usp=drive_link"

  return (
    <>
      <RevealObserver />
      <Topbar variant="sub" backHref="/" backLabel="mateus arce" subLabel={{ pt: "currículo", en: "resume" }} />
      <main className="page-main" id="main-content">
        <div className="cv-head reveal">
          <h1>Mateus <span className="accent">Arce</span></h1>
          <p className="role">
            <span lang="pt-BR">Desenvolvedor Full Stack <span className="pink">·</span> NestJS / React / Go</span>
            <span lang="en-US">Full Stack Developer <span className="pink">·</span> NestJS / React / Go</span>
          </p>
          <div className="cv-meta">
            <span>
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Manaus, BR
            </span>
            <span>
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
              <a href="mailto:contato@mateusarce.dev">contato@mateusarce.dev</a>
            </span>
            <span>
              <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18H5.7v-8.4h2.6V18zM7 8.4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 9.6h-2.6V14c0-1-.4-1.6-1.3-1.6-.7 0-1.1.5-1.3 1V18h-2.6V9.6h2.6v1.2a2.7 2.7 0 0 1 2.4-1.3c1.7 0 2.8 1.1 2.8 3.5V18z" /></svg>
              <a href="https://linkedin.com/in/mateus-arce" target="_blank" rel="noopener">linkedin.com/in/mateus-arce</a>
            </span>
            <span>
              <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.4-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" /></svg>
              <a href="https://github.com/mateusarcedev" target="_blank" rel="noopener">github.com/mateusarcedev</a>
            </span>
          </div>
          <div className="cv-actions">
            <a className="ql primary" href={resumeUrl} target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
              <span lang="pt-BR">Baixar PDF</span><span lang="en-US">Download PDF</span>
            </a>
            <button className="ql" onClick={() => window.print()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 9V2h12v7M18 14h-3v4H9v-4H6" /><rect x="6" y="14" width="12" height="8" rx="1" /><rect x="6" y="9" width="12" height="5" rx="1" /></svg>
              <span lang="pt-BR">Imprimir</span><span lang="en-US">Print</span>
            </button>
          </div>
        </div>

        {/* SUMMARY */}
        <section className="resume-section reveal">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2 className="sec-title"><span lang="pt-BR">Resumo</span><span lang="en-US">Summary</span></h2>
            <span className="sec-rule" />
          </div>
          <div className="summary">
            <p lang="pt-BR">Desenvolvedor Full Stack com experiência em arquitetar <b>backends escaláveis</b> e construir <b>front-ends responsivos</b>. Atuação em projetos web de P&amp;D e sistemas internos, liderando pequenos times e definindo padrões de código, contratos de API e integrações com infraestrutura corporativa. <em>Forte atuação com NestJS/Node, React/Next.js, Go e Docker.</em></p>
            <p lang="en-US">Full Stack Software Engineer with experience architecting <b>scalable backends</b> and building <b>responsive web frontends</b>. Hands-on in web R&amp;D projects and internal systems, providing technical leadership for small teams and defining coding standards, API contracts, and integrations with corporate infrastructure. <em>Strong experience with NestJS/Node, React/Next.js, Go and Docker.</em></p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="resume-section reveal">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <h2 className="sec-title"><span lang="pt-BR">Experiência</span><span lang="en-US">Experience</span></h2>
            <span className="sec-rule" />
          </div>
          {/* Supertrans */}
          <div className="cv-job">
            <div className="cv-job-time">
              <span className="now">●</span> <span lang="pt-BR">mai 2026 → presente</span><span lang="en-US">may 2026 → present</span>
              <span className="loc">Manaus, BR</span>
            </div>
            <div className="cv-job-body">
              <h3><span lang="pt-BR">Desenvolvedor Full Stack Pleno</span><span lang="en-US">Mid-level Full Stack Developer</span> — <span className="co">Supertrans</span></h3>
              <div className="cv-job-sub"><span lang="pt-BR">Backend, IA e infraestrutura</span><span lang="en-US">Backend, AI and infrastructure</span></div>
              <ul lang="pt-BR">
                <li>Backends em <b>Go</b>, <b>Node.js</b> (NestJS) e <b>Python</b> — APIs, workers e integrações</li>
                <li>Agentes de IA e automações com <b>LangGraph</b></li>
                <li>Mensageria e cache: <b>RabbitMQ</b> e <b>Redis</b></li>
                <li>Deploy em servidores <b>Linux</b> com <b>Docker</b>, proxy com <b>Nginx</b>/<b>Traefik</b></li>
              </ul>
              <ul lang="en-US">
                <li>Backends in <b>Go</b>, <b>Node.js</b> (NestJS) and <b>Python</b> — APIs, workers, integrations</li>
                <li>AI agents and automation with <b>LangGraph</b></li>
                <li>Messaging and cache: <b>RabbitMQ</b> and <b>Redis</b></li>
                <li>Deployments to <b>Linux</b> servers with <b>Docker</b>, proxy via <b>Nginx</b>/<b>Traefik</b></li>
              </ul>
            </div>
          </div>
          {/* Sidia Dev I */}
          <div className="cv-job">
            <div className="cv-job-time">
              <span lang="pt-BR">nov 2024 → abr 2026</span><span lang="en-US">nov 2024 → apr 2026</span>
              <span className="loc">Manaus, BR</span>
            </div>
            <div className="cv-job-body">
              <h3><span lang="pt-BR">Desenvolvedor de Software I</span><span lang="en-US">Software Developer I</span> — <span className="co">Sidia</span></h3>
              <div className="cv-job-sub"><span lang="pt-BR">Desenvolvimento Full Stack</span><span lang="en-US">Full Stack Development</span></div>
              <ul lang="pt-BR">
                <li>Referência técnica em projeto web de P&amp;D, liderando time de 2 devs e 1 QA</li>
                <li>Modelagem de base de dados e decisões técnicas do backend</li>
                <li>Servidores Ubuntu + Nginx + CI/CD com Jenkins</li>
                <li>Funções SQL para relatórios com otimizações e índices</li>
              </ul>
              <ul lang="en-US">
                <li>Technical reference in a web R&amp;D project, leading team of 2 devs and 1 QA</li>
                <li>Database modeling and key backend technical decisions</li>
                <li>Ubuntu servers + Nginx + CI/CD with Jenkins</li>
                <li>SQL functions for reporting with optimizations and indexes</li>
              </ul>
            </div>
          </div>
          {/* Sidia Intern */}
          <div className="cv-job">
            <div className="cv-job-time">
              <span lang="pt-BR">abr 2024 → nov 2024</span><span lang="en-US">apr 2024 → nov 2024</span>
              <span className="loc">Manaus, BR</span>
            </div>
            <div className="cv-job-body">
              <h3><span lang="pt-BR">Estagiário</span><span lang="en-US">Intern</span> — <span className="co">Sidia</span></h3>
              <div className="cv-job-sub"><span lang="pt-BR">Desenvolvimento Full Stack</span><span lang="en-US">Full Stack Development</span></div>
              <ul lang="pt-BR">
                <li>App mobile interno em React Native integrado a APIs corporativas</li>
                <li>Serviço NestJS para armazenamento de imagens</li>
                <li>Sistema de validação de corridas via geolocalização (raio de 400m)</li>
              </ul>
              <ul lang="en-US">
                <li>Internal React Native mobile app integrated with corporate APIs</li>
                <li>NestJS service for image storage</li>
                <li>Ride validation system using geolocation (400m radius)</li>
              </ul>
            </div>
          </div>
          {/* Visteon */}
          <div className="cv-job">
            <div className="cv-job-time">
              <span lang="pt-BR">fev 2022 → dez 2023</span><span lang="en-US">feb 2022 → dec 2023</span>
              <span className="loc">Manaus, BR</span>
            </div>
            <div className="cv-job-body">
              <h3><span lang="pt-BR">Estagiário de TI</span><span lang="en-US">IT Intern</span> — <span className="co">Visteon</span></h3>
              <div className="cv-job-sub"><span lang="pt-BR">Desenvolvimento Backend e Frontend</span><span lang="en-US">Backend and Frontend Development</span></div>
              <ul lang="pt-BR">
                <li>Manutenção e modernização de sistemas legados em PHP</li>
                <li>Interfaces interativas em React e Vue.js</li>
              </ul>
              <ul lang="en-US">
                <li>Maintenance and modernization of legacy PHP systems</li>
                <li>Interactive UIs in React and Vue.js</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="resume-section reveal">
          <div className="sec-head">
            <span className="sec-num">03</span>
            <h2 className="sec-title"><span lang="pt-BR">Habilidades</span><span lang="en-US">Skills</span></h2>
            <span className="sec-rule" />
          </div>
          <div className="skills-grid">
            <div className="skill-row"><span className="k">Backend</span><span className="v">Go, NestJS, Node.js, Express, Python, PHP, REST, GraphQL</span></div>
            <div className="skill-row"><span className="k">Frontend</span><span className="v">React, Next.js, Vue.js, React Native, Tailwind, CSS3</span></div>
            <div className="skill-row"><span className="k"><span lang="pt-BR">Dados</span><span lang="en-US">Data</span></span><span className="v">PostgreSQL, MySQL, Prisma, Redis, RabbitMQ, MongoDB</span></div>
            <div className="skill-row"><span className="k">DevOps</span><span className="v">Docker, Kubernetes, Nginx, Traefik, CI/CD, GitHub Actions</span></div>
            <div className="skill-row"><span className="k">Cloud</span><span className="v">AWS, DigitalOcean, Vercel, Supabase</span></div>
            <div className="skill-row"><span className="k">AI</span><span className="v">LangGraph, LangChain, <span lang="pt-BR">Agentes de IA</span><span lang="en-US">AI Agents</span></span></div>
            <div className="skill-row"><span className="k"><span lang="pt-BR">Outros</span><span lang="en-US">Other</span></span><span className="v">Keycloak (SSO), JWT, OAuth2, Figma, Jira</span></div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="resume-section reveal">
          <div className="sec-head">
            <span className="sec-num">04</span>
            <h2 className="sec-title"><span lang="pt-BR">Formação</span><span lang="en-US">Education</span></h2>
            <span className="sec-rule" />
          </div>
          <div className="edu-row">
            <div className="edu-time">2020 – 2025 <span className="done"><span lang="pt-BR">concluído</span><span lang="en-US">completed</span></span></div>
            <div className="edu-body">
              <h3><span lang="pt-BR">Engenharia da Computação</span><span lang="en-US">Computer Engineering</span></h3>
              <p><span lang="pt-BR">Universidade Metropolitana de Manaus — Fametro</span><span lang="en-US">Metropolitan University of Manaus — Fametro</span></p>
            </div>
          </div>
          <div className="edu-row">
            <div className="edu-time">2017 – 2019 <span className="done"><span lang="pt-BR">concluído</span><span lang="en-US">completed</span></span></div>
            <div className="edu-body">
              <h3><span lang="pt-BR">Técnico em Informática</span><span lang="en-US">Technical High School in Informatics</span></h3>
              <p><span lang="pt-BR">Instituto Federal do Amazonas — IFAM</span><span lang="en-US">Federal Institute of Amazonas — IFAM</span></p>
            </div>
          </div>
          <div className="langs">
            <p lang="pt-BR"><b>Idiomas:</b> Português <em>(nativo)</em> · Inglês <em>(intermediário B1 — EFSET)</em>, leitura técnica fluente e comunicação em ambiente profissional.</p>
            <p lang="en-US"><b>Languages:</b> Portuguese <em>(native)</em> · English <em>(intermediate B1 — EFSET)</em>, strong technical reading and professional communication.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="cv-cta reveal">
          <p lang="pt-BR">Prefere uma cópia offline?</p>
          <p lang="en-US">Prefer an offline copy?</p>
          <a className="ql primary" href={resumeUrl} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
            <span lang="pt-BR">Baixar PDF</span><span lang="en-US">Download PDF</span>
          </a>
        </div>
      </main>
      <Footer variant="resume" />
    </>
  )
}
