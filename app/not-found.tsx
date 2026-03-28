import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen font-mono bg-[#151515] dark:bg-[#151515] text-white dark:text-white flex items-center justify-center p-8">
      <div className="text-center">
        <p className="text-[#15F5BA] text-sm mb-2">404</p>
        <h1 className="text-2xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-gray-400 text-sm mb-8">
          A rota que você acessou não existe.
        </p>
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
