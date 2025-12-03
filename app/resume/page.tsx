"use client"

import { useEffect, useState } from "react"
import { Download, Home, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function ResumePage() {
  const [lang, setLang] = useState<"pt-BR" | "en-US">("pt-BR")
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = mounted ? resolvedTheme ?? theme ?? "light" : "light"
  const isDark = activeTheme === "dark"
  const isPtBr = lang === "pt-BR"

  const resumeUrl = isPtBr
    ? "https://drive.google.com/file/d/1MCwFMIMVMIlq06SjZ9COzwL635esj4nf/view?usp=sharing"
    : "https://drive.google.com/file/d/16z-7Re65rbXkMTqnSOM-fq6_knJlEe4F/view?usp=drive_link"

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-[#151515] text-white" : "bg-gray-100 text-gray-800"
      } font-mono transition-colors duration-300`}
    >
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        {/* Header with controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <Link href="/">
            <Button
              variant="outline"
              className={`${
                isDark ? "border-[#15F5BA] text-[#15F5BA] hover:bg-[#15F5BA]/10" : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              <Home size={16} className="mr-2" />
              {isPtBr ? "Voltar" : "Back"}
            </Button>
          </Link>
          <div className="flex gap-2 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={isDark ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"}
              aria-label={isDark ? "Alternar para tema claro" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              onClick={() => setLang("pt-BR")}
              variant={lang === "pt-BR" ? "default" : "outline"}
              className={
                lang === "pt-BR"
                  ? isDark
                    ? "bg-[#15F5BA] text-black hover:bg-[#22A39F]"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                  : isDark
                    ? "border-[#15F5BA] text-[#15F5BA] hover:bg-[#15F5BA]/10"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }
            >
              PT-BR
            </Button>
            <Button
              onClick={() => setLang("en-US")}
              variant={lang === "en-US" ? "default" : "outline"}
              className={
                lang === "en-US"
                  ? isDark
                    ? "bg-[#15F5BA] text-black hover:bg-[#22A39F]"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                  : isDark
                    ? "border-[#15F5BA] text-[#15F5BA] hover:bg-[#15F5BA]/10"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }
            >
              EN
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div
          className={`${
            isDark ? "bg-[#0D0D0D] border-[#15F5BA]/20" : "bg-white border-gray-200"
          } border rounded-lg p-6 md:p-10`}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <h1
              className={`${isDark ? "text-[#15F5BA]" : "text-blue-600"} text-3xl md:text-4xl font-bold mb-2`}
            >
              MATEUS SILVA ANDRADE ARCE
            </h1>
            <p className="text-lg md:text-xl mb-4">
              {isPtBr
                ? "Desenvolvedor Full Stack Pleno (NestJS / React)"
                : "Full Stack Software Engineer (NestJS / React)"}
            </p>
            <div className="space-y-1 text-sm">
              <p>Manaus, Amazonas{isPtBr ? "" : ", Brazil"}</p>
              <p>(92) 98475-0440 | contato@mateusarce.dev</p>
              <p>
                <a
                  href="https://linkedin.com/in/mateus-arce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"}`}
                >
                  linkedin.com/in/mateus-arce
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/mateusarcedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"}`}
                >
                  github.com/mateusarcedev
                </a>
              </p>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2
              className={`${isDark ? "text-[#15F5BA]" : "text-blue-600"} text-xl font-bold mb-3 pb-2 border-b ${isDark ? "border-[#15F5BA]/30" : "border-blue-600/30"}`}
            >
              {isPtBr ? "RESUMO" : "SUMMARY"}
            </h2>
            <p className="leading-relaxed">
              {isPtBr
                ? "Desenvolvedor Full Stack com experiência em arquitetar backends escaláveis e construir front-ends responsivos. Atuação em projetos web de P&D e sistemas internos, liderando pequenos times e definindo padrões de código, contratos de API e integrações com infraestrutura corporativa. Forte atuação com NestJS/Node, React/Next.js e Docker."
                : "Full Stack Software Engineer with experience architecting scalable backends and building responsive web frontends. Hands-on in web R&D projects and internal systems, providing technical leadership for small teams and defining coding standards, API contracts, and integrations with corporate infrastructure. Strong experience with NestJS/Node, React/Next.js, Docker and relational databases."}
            </p>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2
              className={`${isDark ? "text-[#15F5BA]" : "text-blue-600"} text-xl font-bold mb-4 pb-2 border-b ${isDark ? "border-[#15F5BA]/30" : "border-blue-600/30"}`}
            >
              {isPtBr ? "EXPERIÊNCIA PROFISSIONAL" : "PROFESSIONAL EXPERIENCE"}
            </h2>

            {/* Job 1 */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    {isPtBr ? "Desenvolvedor de Software I" : "Software Developer I"} —{" "}
                    {isPtBr ? "Sidia Instituto de Tecnologia" : "Sidia Institute of Technology"}
                  </h3>
                  <p className="text-sm italic">{isPtBr ? "Desenvolvimento Full Stack" : "Full Stack Development"}</p>
                </div>
                <p className="text-sm whitespace-nowrap mt-1 sm:mt-0">
                  {isPtBr ? "Nov/2024 – Atual" : "Nov/2024 – Present"}
                  <br />
                  Manaus, {isPtBr ? "AM" : "Brazil"}
                </p>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed">
                <li>
                  {isPtBr
                    ? "Atuação como referência técnica em projeto web de P&D, liderando tecnicamente time composto por 2 devs e 1 QA na definição de arquitetura, contratos de API, padrões de código e boas práticas."
                    : "Technical reference in a web R&D project, providing hands-on leadership for a team of 2 developers and 1 QA in architecture design, API contracts, coding standards and best practices."}
                </li>
                <li>
                  {isPtBr
                    ? "Responsável pela modelagem da base de dados e principais decisões técnicas do backend, garantindo consistência e evolutividade do sistema."
                    : "Responsible for database modeling and key backend technical decisions, ensuring system consistency, performance and ease of evolution."}
                </li>
                <li>
                  {isPtBr
                    ? "Configuração de servidores Ubuntu e Nginx com proxy reverso e esteira de deploy automatizado com Jenkins, reduzindo esforço manual em releases."
                    : "Configured Ubuntu servers and Nginx with reverse proxy and an automated deployment pipeline using Jenkins, reducing manual work during releases."}
                </li>
                <li>
                  {isPtBr
                    ? "Modelagem e implementação de funções SQL críticas para relatórios, com otimizações e índices para consultas complexas."
                    : "Designed and implemented SQL functions critical for reporting, including optimizations and indexes for complex analytical queries."}
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    {isPtBr ? "Estagiário" : "Software Engineering Intern"} —{" "}
                    {isPtBr ? "Sidia Instituto de Tecnologia" : "Sidia Institute of Technology"}
                  </h3>
                  <p className="text-sm italic">{isPtBr ? "Desenvolvimento Full Stack" : "Full Stack Development"}</p>
                </div>
                <p className="text-sm whitespace-nowrap mt-1 sm:mt-0">
                  {isPtBr ? "Abr/2024 – Nov/2024" : "Apr/2024 – Nov/2024"}
                  <br />
                  Manaus, {isPtBr ? "AM" : "Brazil"}
                </p>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed">
                <li>
                  {isPtBr
                    ? "Desenvolvimento de app mobile interno em React Native (ponto, holerite, notícias, feriados) integrado a APIs corporativas."
                    : "Developed an internal mobile app in React Native (time tracking, payslips, news, holidays) integrated with corporate APIs."}
                </li>
                <li>
                  {isPtBr
                    ? "Criação de serviço em NestJS para armazenamento de imagens (mídia em storage e referências no banco), reduzindo carga na base de dados."
                    : "Built a NestJS service for image storage (media in object storage and references in the database), reducing database load and coupling."}
                </li>
                <li>
                  {isPtBr
                    ? "Implementação de sistema de validação de corridas do benefício transporte via geolocalização (raio de 400m)."
                    : "Implemented a system to validate transportation benefit rides using geolocation, enforcing a 400m radius to ensure proper corporate usage."}
                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    {isPtBr ? "Estagiário" : "Software Engineering Intern"} —{" "}
                    {isPtBr ? "Visteon Amazonas" : "Visteon Amazonas"}
                  </h3>
                  <p className="text-sm italic">
                    {isPtBr ? "Desenvolvimento Backend e Frontend" : "Backend and Frontend Development"}
                  </p>
                </div>
                <p className="text-sm whitespace-nowrap mt-1 sm:mt-0">
                  {isPtBr ? "Fev/2022 – Dez/2023" : "Feb/2022 – Dec/2023"}
                  <br />
                  Manaus, {isPtBr ? "AM" : "Brazil"}
                </p>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed">
                <li>
                  {isPtBr
                    ? "Manutenção e modernização de sistemas backend em PHP, migrando partes críticas para Node.js e Python."
                    : "Maintained and modernized backend systems in PHP, migrating critical parts to Node.js and Python when needed."}
                </li>
                <li>
                  {isPtBr
                    ? "Desenvolvimento de interfaces web em React e Vue.js, com foco em responsividade e uso interno."
                    : "Developed internal web interfaces in React and Vue.js with focus on responsiveness and usability."}
                </li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2
              className={`${isDark ? "text-[#15F5BA]" : "text-blue-600"} text-xl font-bold mb-3 pb-2 border-b ${isDark ? "border-[#15F5BA]/30" : "border-blue-600/30"}`}
            >
              {isPtBr ? "HABILIDADES TÉCNICAS" : "TECHNICAL SKILLS"}
            </h2>
            <div className="space-y-2 leading-relaxed">
              <p>
                <strong>Backend:</strong> NestJS, Node.js, Express.js, RESTful APIs, GraphQL,{" "}
                {isPtBr ? "Microserviços" : "Microservices"}, TypeScript, Python, PHP
              </p>
              <p>
                <strong>Frontend:</strong> React.js, Next.js, Vue.js, React Native, HTML5, CSS3, TailwindCSS,{" "}
                {isPtBr ? "Design Responsivo" : "Responsive Design"}
              </p>
              <p>
                <strong>{isPtBr ? "Bancos de Dados" : "Databases"}:</strong> PostgreSQL, MySQL, Prisma ORM, Redis,
                MongoDB, {isPtBr ? "otimização de queries" : "query optimization"}
              </p>
              <p>
                <strong>DevOps / Infra:</strong> Docker, Kubernetes, Nginx, Traefik, CI/CD, GitHub Actions, Grafana,
                Prometheus
              </p>
              <p>
                <strong>Cloud & {isPtBr ? "Ferramentas" : "Tools"}:</strong> DigitalOcean, Heroku, Vercel, Supabase,
                Postman, Figma, Jira, Confluence
              </p>
              <p>
                <strong>{isPtBr ? "Outros" : "Other"}:</strong> Keycloak (SSO), JWT, OAuth2; Java (
                {isPtBr ? "estudos" : "in progress"}),{" "}
                {isPtBr ? "aberto a atuação em backend Java" : "open to backend roles in Java ecosystems"}
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2
              className={`${isDark ? "text-[#15F5BA]" : "text-blue-600"} text-xl font-bold mb-4 pb-2 border-b ${isDark ? "border-[#15F5BA]/30" : "border-blue-600/30"}`}
            >
              {isPtBr ? "FORMAÇÃO, IDIOMAS & CERTIFICAÇÕES" : "EDUCATION, LANGUAGES & CERTIFICATIONS"}
            </h2>

            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <div>
                  <h3 className="font-bold">
                    {isPtBr
                      ? "Universidade Metropolitana de Manaus — Fametro"
                      : "Metropolitan University of Manaus — Fametro"}
                  </h3>
                  <p className="text-sm">
                    {isPtBr ? "Bacharel em Engenharia da Computação" : "B.Sc. in Computer Engineering"}
                  </p>
                </div>
                <p className="text-sm whitespace-nowrap">2020 – 2025</p>
              </div>
              <p className="text-sm italic">
                {isPtBr ? "Conclusão prevista: Dez/2025" : "Expected graduation: Dec/2025"}
              </p>
            </div>

            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <div>
                  <h3 className="font-bold">
                    {isPtBr ? "Instituto Federal do Amazonas — IFAM" : "Federal Institute of Amazonas — IFAM"}
                  </h3>
                  <p className="text-sm">
                    {isPtBr ? "Técnico em Informática" : "Technical High School in Informatics"}
                  </p>
                </div>
                <p className="text-sm whitespace-nowrap">2017 – 2019</p>
              </div>
              <p className="text-sm italic">{isPtBr ? "Concluído" : "Completed"}</p>
            </div>

            <div className="mt-4">
              <p>
                <strong>{isPtBr ? "Idiomas" : "Languages"}:</strong>{" "}
                {isPtBr
                  ? "Português (nativo); Inglês (intermediário B1 – EFSET), leitura técnica fluente e comunicação em ambiente profissional."
                  : "Portuguese (native); English (intermediate, B1 — EFSET), strong technical reading and professional communication."}
              </p>
            </div>
          </section>

          {/* Download Button */}
          <div className="text-center pt-6 border-t border-gray-300 dark:border-gray-700">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button
                className={
                  isDark
                    ? "bg-[#15F5BA] text-black hover:bg-[#22A39F]"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }
              >
                <Download size={16} className="mr-2" />
                {isPtBr ? "Baixar PDF" : "Download PDF"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
