"use client"

export function Footer({ variant = "home" }: { variant?: "home" | "projects" | "resume" }) {
  return (
    <footer>
      <div>
        <span>© {new Date().getFullYear()} Mateus Arce</span>
      </div>
      <div>
        {variant === "home" && (
          <>
            <span lang="pt-BR">feito com <span className="h">♥</span> e muito café em Manaus</span>
            <span lang="en-US">built with <span className="h">♥</span> and lots of coffee in Manaus</span>
          </>
        )}
        {variant === "projects" && (
          <>
            <span lang="pt-BR">dados ao vivo do GitHub</span>
            <span lang="en-US">live data from GitHub</span>
          </>
        )}
        {variant === "resume" && (
          <>
            <span lang="pt-BR">atualizado em mai 2026</span>
            <span lang="en-US">updated may 2026</span>
          </>
        )}
      </div>
    </footer>
  )
}
