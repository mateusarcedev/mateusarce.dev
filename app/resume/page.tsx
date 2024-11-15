import React from 'react';

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Mateus Arce | Desenvolvedor de Software</h1>
        <div className="flex gap-6 text-sm text-blue-700">
          <a
            href="https://www.linkedin.com/in/mateus-arce/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-500"
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
            className="flex items-center gap-1 hover:text-blue-500"
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
          <a href="https://mateusarce.dev/" className="text-blue-700 hover:text-blue-500">
            Portfólio
          </a>
        </div>
        <div className="mt-4 flex gap-4 text-sm text-gray-800">
          <a href="mailto:arcemateuss@gmail.com" className="flex items-center gap-1 hover:text-blue-500">
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
          <span className="flex items-center gap-1 hover:text-blue-500">
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
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Resumo Profissional</h2>
        <p className="text-gray-700">
          Desenvolvedor de software com experiência na área de desenvolvimento full
          stack, focado em tecnologias como React.js, Next.js e NestJS. Atuação na criação de APIs
          e microserviços backend com NestJS, além de desenvolvimento de aplicativos
          multiplataforma com React Native. Experiência na conteinerização de aplicações e
          gerenciamento de ambientes com Docker. Conhecimento em modelagem e administração
          de bancos de dados MySQL e desenvolvimento backend com Node.js, Laravel e Python.
          Atualmente cursando Engenharia de Computação na Fametro e formado como Técnico em
          Informática pelo IFAM.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Formação Acadêmica</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-800">Bacharel em Engenharia da Computação</h3>
          <p className="text-gray-600">Universidade Metropolitana de Manaus, Fametro</p>
          <p className="text-gray-500 italic">Cursando</p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-800">Técnico em Informática</h3>
          <p className="text-gray-600">Instituto Federal do Amazonas (IFAM)</p>
          <p className="text-gray-600">2017 - 2019</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Idiomas</h2>
        <ul className="list-inside list-disc text-gray-700">
          <li>Inglês: Intermediário</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Experiência</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-800">Sidia Instituto de Tecnologia</h3>
          <p className="text-gray-600 italic">Estagiário | Manaus, Brasil</p>
          <p className="text-gray-600">04/2024 - atualmente (6 meses)</p>
          <p className="mt-2 text-gray-700">
            Durante meu estágio no Sidia, tenho contribuído ativamente no desenvolvimento de APIs e microserviços utilizando o framework NestJS, focando em soluções escaláveis e robustas para o backend. No frontend, tenho trabalhado com ReactJS e NextJS para criar interfaces dinâmicas e responsivas, proporcionando uma experiência de usuário otimizada. Uma das minhas principais contribuições foi a implementação de autenticação via SSO com Keycloak, garantindo segurança e centralização no processo de login. Também adquiri experiência no desenvolvimento de aplicativos multiplataforma com React Native, expandindo as possibilidades de integração entre plataformas. Adicionalmente, participei do processo de conteinerização de aplicações com Docker, melhorando a infraestrutura e otimizando os ciclos de desenvolvimento.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-800">Visteon Amazonas</h3>
          <p className="text-gray-600 italic">Estagiário | Manaus, Brasil</p>
          <p className="text-gray-600">02/2022 - 12/2023 (1 ano e 11 meses)</p>
          <p className="mt-2 text-gray-700">
            Durante meu estágio na Visteon Amazonas, tive a oportunidade de atuar em diversas frentes do desenvolvimento de software. Fui responsável pela modelagem e administração de bancos de dados MySQL, assegurando integridade e alto desempenho nas soluções de armazenamento de dados. No frontend, desenvolvi protótipos de interfaces e fluxos de usuários no Figma, além de implementar interfaces dinâmicas com React.js e Vue.js. No backend, utilizei tecnologias como Node.js, Laravel e Python para criar funcionalidades robustas e escaláveis, atendendo às demandas dos sistemas. Também contribui para a manutenção e aprimoramento de sistemas legados desenvolvidos em PHP, garantindo a continuidade e a modernização desses projetos.
          </p>
        </div>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Projetos Pessoais</h2>
        <div>
          <h3 className="text-xl font-medium text-gray-800">Tools4.tech</h3>
          <p className="text-gray-600">Tecnologias: Nextjs, Nestjs, Supabase, PostgreSQL</p>
          <p className="text-gray-700 mt-2">
            O <a href="https://www.tools4.tech/" target="_blank" rel="noopener noreferrer"><strong>Tools4.tech</strong></a> tem como objetivo se tornar um ponto centralizado de recursos para desenvolvedores de todos os níveis. O projeto reúne uma ampla variedade de ferramentas e materiais de estudo em um único local, simplificando o processo de aprendizagem e desenvolvimento. Com isso, busca tornar o aprendizado mais acessível e eficiente para programadores novatos e experientes. Além disso, o Tools4.tech permite que os desenvolvedores salvem suas ferramentas favoritas e sugiram novas opções, promovendo um ambiente colaborativo e em constante evolução.
          </p>
        </div>
      </section>

    </div>
  );
}
