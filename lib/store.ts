import { create } from "zustand"
import { persist } from "zustand/middleware"

type AppState = {
  lang: "pt-BR" | "en-US"
  setLang: (lang: "pt-BR" | "en-US") => void
  lgpdConsent: "accepted" | "rejected" | null
  setLgpdConsent: (consent: "accepted" | "rejected") => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      lang: "pt-BR",
      setLang: (lang) => set({ lang }),
      lgpdConsent: null,
      setLgpdConsent: (lgpdConsent) => set({ lgpdConsent }),
    }),
    { name: "portfolio-lang" },
  ),
)
