"use client"

import React, { useState } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';

export default function PortfolioPage() {
  const [language, setLanguage] = useState("pt-br");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt-br" ? "en-us" : "pt-br"));
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#151515] text-[#15F4BA]' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto p-8 shadow-lg">
        <header className="mb-8 flex justify-between items-start">
          <div>
            <h1 className={`text-4xl font-extrabold mb-4 ${darkMode ? 'text-[#CD5888]' : 'text-gray-900'}`}>
              {language === "pt-br" ? "Mateus Arce | Desenvolvedor de Software" : "Mateus Arce | Software Developer"}
            </h1>
            <div className="flex gap-6 text-sm">
              <a
                href="https://www.linkedin.com/in/mateus-arce/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 ${darkMode ? 'hover:text-[#CD5888]' : 'hover:text-blue-500'}`}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 9h4v12H2z"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Linkedin
              </a>
              <a
                href="https://github.com/mateusarcedev"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 ${darkMode ? 'hover:text-[#CD5888]' : 'hover:text-blue-500'}`}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                </svg>
                Github
              </a>
              <a href="https://mateusarcedev.vercel.app/" className={`${darkMode ? 'hover:text-[#CD5888]' : 'hover:text-blue-500'}`}>
                Portfólio
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full ${darkMode ? 'bg-[#1E1E1E] hover:bg-[#CD5888]' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label={language === "pt-br" ? "Switch to English" : "Mudar para Português"}
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${darkMode ? 'bg-[#1E1E1E] hover:bg-[#CD5888]' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        <div className="mt-4 flex gap-4 text-sm">
          <a href="mailto:arcemateuss@gmail.com" className={`flex items-center gap-1 ${darkMode ? 'hover:text-[#CD5888]' : 'hover:text-blue-500'}`}>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            arcemateuss@gmail.com
          </a>
          <span className={`flex items-center gap-1 ${darkMode ? 'hover:text-[#CD5888]' : 'hover:text-blue-500'}`}>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +55 (97) 98419-2525
          </span>
        </div>

        <section className="mb-8 mt-8">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-[#CD5888]' : 'text-blue-900'}`}>
            {language === "pt-br" ? "Resumo Profissional" : "Professional Summary"}
          </h2>
          <p>
            {language === "pt-br"
              ? "Desenvolvedor de software com experiência na área de desenvolvimento full stack, focado em tecnologias como React.js, Next.js e NestJS. Atuação na criação de APIs e microserviços backend com NestJS, além de desenvolvimento de aplicativos multiplataforma com React Native. Experiência na conteinerização de aplicações e gerenciamento de ambientes com Docker. Conhecimento em modelagem e administração de bancos de dados MySQL e desenvolvimento backend com Node.js, Laravel e Python. Atualmente cursando Engenharia de Computação na Fametro e formado como Técnico em Informática pelo IFAM."
              : "Software developer with experience in full stack development, focused on technologies such as React.js, Next.js, and NestJS. Experience in creating APIs and backend microservices with NestJS, as well as developing cross-platform applications with React Native. Experience in containerizing applications and managing environments with Docker. Knowledge in modeling and administration of MySQL databases and backend development with Node.js, Laravel, and Python. Currently pursuing a degree in Computer Engineering at Fametro and graduated as a Computer Technician from IFAM."}
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-[#CD5888]' : 'text-blue-900'}`}>
            {language === "pt-br" ? "Formação Acadêmica" : "Education"}
          </h2>
          <div className="mb-6">
            <h3 className={`text-xl font-medium ${darkMode ? 'text-[#15F4BA]' : 'text-gray-800'}`}>
              {language === "pt-br" ? "Bacharel em Engenharia da Computação" : "Bachelor's in Computer Engineering"}
            </h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {language === "pt-br" ? "Universidade Metropolitana de Manaus, Fametro" : "Metropolitan University of Manaus, Fametro"}
            </p>
            <p className={`italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {language === "pt-br" ? "Cursando -  10º período" : "Currently in 10th semester"}
            </p>
          </div>
          <div>
            <h3 className={`text-xl font-medium ${darkMode ? 'text-[#15F4BA]' : 'text-gray-800'}`}>
              {language === "pt-br" ? "Técnico em Informática" : "Computer Technician"}
            </h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {language === "pt-br" ? "Instituto Federal do Amazonas (IFAM)" : "Federal Institute of Amazonas (IFAM)"}
            </p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>2017 - 2019</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-[#CD5888]' : 'text-blue-900'}`}>
            {language === "pt-br" ? "Idiomas" : "Languages"}
          </h2>
          <ul className={`list-inside list-disc ${darkMode ? 'text-[#15F4BA]' : 'text-gray-700'}`}>
            <li>{language === "pt-br" ? "Inglês: Intermediário" : "English: Intermediate"}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-[#CD5888]' : 'text-blue-900'}`}>
            {language === "pt-br" ? "Experiência" : "Experience"}
          </h2>
          <div className="mb-6">
            <h3 className={`text-xl font-medium ${darkMode ? 'text-[#15F4BA]' : 'text-gray-800'}`}>Sidia Instituto de Tecnologia</h3>
            <p className={`italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === "pt-br" ? "Desenvolvedor de Software I | Manaus, Brasil" : "Software Developer I | Manaus, Brazil"}
            </p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>11/2024 - {language === "pt-br" ? "Presente" : "Present"}</p>
            <p className="mt-2">
              {language === "pt-br"
                ? "Como Desenvolvedor de Software I, sou responsável por garantir a integração e a escalabilidade de sistemas críticos no Sidia. Minha principal atuação tem sido no desenvolvimento de APIs e microserviços com NestJS, aplicando práticas de design para garantir que as soluções sejam não só robustas, mas também de fácil manutenção. Tenho sido parte ativa na reformulação de processos de autenticação de usuários, implementando SSO com Keycloak para proporcionar uma experiência de login mais fluida e segura. No front-end, minha experiência com ReactJS e NextJS tem sido essencial para melhorar a performance das interfaces e otimizar a experiência do usuário, especialmente em projetos voltados para soluções corporativas. Além disso, estou aprimorando meu conhecimento em Docker e Kubernetes, focando em aprimorar a infraestrutura de integração contínua e facilitar o deployment de novas funcionalidades."
                : "As a Software Developer I, I am responsible for ensuring the integration and scalability of critical systems at Sidia. My main focus has been on developing APIs and microservices with NestJS, applying design practices to ensure that solutions are not only robust but also easy to maintain. I have been actively involved in redesigning user authentication processes, implementing SSO with Keycloak to provide a more fluid and secure login experience. On the front-end, my experience with ReactJS and NextJS has been essential to improve interface performance and optimize user experience, especially in projects aimed at corporate solutions. Additionally, I am enhancing my knowledge in Docker and Kubernetes, focusing on improving the continuous integration infrastructure and facilitating the deployment of new features."}
            </p>
          </div>

          <div className="mb-6">
            <h3 className={`text-xl font-medium ${darkMode ? 'text-[#15F4BA]' : 'text-gray-800'}`}>Sidia Instituto de Tecnologia</h3>
            <p className={`italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === "pt-br" ? "Estagiário | Manaus, Brasil" : "Intern | Manaus, Brazil"}
            </p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>04/2024 - 11/2024 (7 {language === "pt-br" ? "meses" : "months"})</p>
            <p className="mt-2">
              {language === "pt-br"
                ? "Durante o meu estágio no Sidia, fui desafiado a enfrentar problemas técnicos complexos, desde a construção de APIs robustas com NestJS até a implementação de funcionalidades em ReactJS para uma interface fluida e intuitiva. Tive a oportunidade de contribuir com a implementação do Keycloak como solução de autenticação, um processo que expandiu significativamente minha compreensão de segurança e gestão de usuários em larga escala. No backend, participei de iniciativas de melhoria contínua, envolvendo a refatoração de sistemas e aplicação de boas práticas de desenvolvimento. No front-end, fui responsável por otimizar a responsividade de aplicações, garantindo que os projetos se adaptassem de maneira eficiente a múltiplas plataformas. Além disso, ganhei experiência no desenvolvimento de aplicativos móveis multiplataforma com React Native, o que me proporcionou uma visão prática sobre a integração entre web e mobile. O estágio me deu uma visão completa do ciclo de vida de um produto de software, com ênfase em integração, escalabilidade e qualidade."
                : "During my internship at Sidia, I was challenged to tackle complex technical problems, from building robust APIs with NestJS to implementing features in ReactJS for a fluid and intuitive interface. I had the opportunity to contribute to the implementation of Keycloak as an authentication solution, a process that significantly expanded my understanding of security and user management at scale. On the backend, I participated in continuous improvement initiatives, involving system refactoring and application of good development practices. On the front-end, I was responsible for optimizing application responsiveness, ensuring that projects efficiently adapted to multiple platforms. Additionally, I gained experience in developing cross-platform mobile applications with React Native, which provided me with a practical view of web and mobile integration. The internship gave me a complete view of the software product lifecycle, with an emphasis on integration, scalability, and quality."}
            </p>
          </div>

          <div className="mb-6">
            <h3 className={`text-xl font-medium ${darkMode ? 'text-[#15F4BA]' : 'text-gray-800'}`}>Visteon Amazonas</h3>
            <p className={`italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === "pt-br" ? "Estagiário | Manaus, Brasil" : "Intern | Manaus, Brazil"}
            </p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              02/2022 - 12/2023 (1 {language === "pt-br" ? "ano e 11 meses" : "year and 11 months"})
            </p>
            <p className="mt-2">
              {language === "pt-br"
                ? "Durante meu estágio na Visteon Amazonas, trabalhei ao lado de engenheiros de software em diversos projetos que misturavam desafios técnicos com necessidades de negócios. No backend, fui exposto a sistemas legados, aprimorando funcionalidades em PHP e utilizando Node.js e Python para expandir a arquitetura do software. No frontend, não apenas implementei interfaces usando React e Vue, mas também colaborei com a equipe de design para criar protótipos de alta fidelidade no Figma, contribuindo com sugestões que melhoraram a usabilidade das interfaces. Um dos meus maiores aprendizados foi gerenciar bancos de dados MySQL, onde fui responsável por otimizar consultas e garantir a integridade dos dados, aplicando boas práticas que resultaram em uma melhoria significativa no desempenho de diversos processos."
                : "During my internship at Visteon Amazonas, I worked alongside software engineers on various projects that blended technical challenges with business needs. On the backend, I was exposed to legacy systems, enhancing functionalities in PHP and using Node.js and Python to expand the software architecture. On the frontend, I not only implemented interfaces using React and Vue, but also collaborated with the design team to create high-fidelity prototypes in Figma, contributing suggestions that improved interface usability. One of my biggest learnings was managing MySQL databases, where I was responsible for optimizing queries and ensuring data integrity, applying best practices that resulted in significant performance improvements in various processes."}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-[#CD5888]' : 'text-blue-900'}`}>
            {language === "pt-br" ? "Projetos Pessoais" : "Personal Projects"}
          </h2>
          <div>
            <h3 className={`text-xl font-medium ${darkMode ? 'text-[#15F4BA]' : 'text-gray-800'}`}>Tools4.tech</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {language === "pt-br" ? "Tecnologias: Nextjs, Nestjs, Supabase, PostgreSQL" : "Technologies: Nextjs, Nestjs, Supabase, PostgreSQL"}
            </p>
            <p className="mt-2">
              {language === "pt-br"
                ? "O Tools4.tech tem como objetivo se tornar um ponto centralizado de recursos para desenvolvedores de todos os níveis. O projeto reúne uma ampla variedade de ferramentas e materiais de estudo em um único local, simplificando o processo de aprendizagem e desenvolvimento. Com isso, busca tornar o aprendizado mais acessível e eficiente para programadores novatos e experientes. Além disso, o Tools4.tech permite que os desenvolvedores salvem suas ferramentas favoritas e sugiram novas opções, promovendo um ambiente colaborativo e em constante evolução."
                : "Tools4.tech aims to become a centralized resource hub for developers of all levels. The project brings together a wide variety of tools and study materials in one place, simplifying the learning and development process. It seeks to make learning more accessible and efficient for both novice and experienced programmers. Additionally, Tools4.tech allows developers to save their favorite tools and suggest new options, promoting a collaborative and constantly evolving environment."}
            </p>
            <a
              href="https://www.tools4.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-2 ${darkMode ? 'text-[#CD5888] hover:text-[#15F4BA]' : 'text-blue-600 hover:text-blue-800'}`}
            >
              {language === "pt-br" ? "Visitar Tools4.tech" : "Visit Tools4.tech"}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

