"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen font-mono bg-[#151515] text-white flex items-center justify-center p-8">
      <div className="text-center">
        <p className="text-red-400 text-sm mb-2">Erro</p>
        <h1 className="text-2xl font-bold mb-4">Algo deu errado</h1>
        <p className="text-gray-400 text-sm mb-8">
          Ocorreu um erro inesperado. Tente novamente.
        </p>
        <button
          onClick={reset}
          className="text-sm text-[#15F5BA] hover:text-[#22A39F] transition-colors underline underline-offset-4"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
