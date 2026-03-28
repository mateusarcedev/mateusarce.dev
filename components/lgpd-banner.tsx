"use client"

import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"

export function LgpdBanner() {
  const { lang, lgpdConsent, setLgpdConsent } = useAppStore()

  if (lang !== "pt-BR" || lgpdConsent !== null) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-800 bg-[#151515] px-4 py-4 dark:border-gray-800 dark:bg-[#151515]">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-400">
          Este site coleta dados de navegação (páginas visitadas, tempo de carregamento) via{" "}
          <span className="text-gray-300">Vercel Analytics</span> para melhorar a experiência. Nenhum dado pessoal é
          coletado. Em conformidade com a{" "}
          <span className="text-[#15F5BA]">LGPD (Lei nº 13.709/2018)</span>.
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            size="sm"
            variant="outline"
            className="border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200"
            onClick={() => setLgpdConsent("rejected")}
          >
            Rejeitar
          </Button>
          <Button
            size="sm"
            className="bg-[#15F5BA] text-black hover:bg-[#22A39F]"
            onClick={() => setLgpdConsent("accepted")}
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
