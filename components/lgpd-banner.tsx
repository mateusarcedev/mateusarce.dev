"use client"

import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"

export function LgpdBanner() {
  const { lang, lgpdConsent, setLgpdConsent } = useAppStore()

  if (lang !== "pt-BR" || lgpdConsent !== null) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--line)] bg-[var(--surface)] px-4 py-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--fg-dim)]">
          Este site coleta dados de navegação (páginas visitadas, tempo de carregamento) via{" "}
          <span className="text-[var(--fg)]">Vercel Analytics</span> para melhorar a experiência. Nenhum dado pessoal é
          coletado. Em conformidade com a{" "}
          <span className="text-[var(--mint)]">LGPD (Lei nº 13.709/2018)</span>.
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="border border-[var(--line)] text-[var(--fg-dim)] hover:border-[var(--fg-dim)] hover:bg-[var(--bg-soft)] hover:text-[var(--fg)]"
            onClick={() => setLgpdConsent("rejected")}
          >
            Rejeitar
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="bg-[var(--mint)] text-[var(--bg)] hover:brightness-110"
            onClick={() => setLgpdConsent("accepted")}
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
