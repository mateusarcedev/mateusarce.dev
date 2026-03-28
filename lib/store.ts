import { create } from "zustand"
import { persist } from "zustand/middleware"

type AppState = {
  lang: "pt-BR" | "en-US"
  setLang: (lang: "pt-BR" | "en-US") => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      lang: "pt-BR",
      setLang: (lang) => set({ lang }),
    }),
    { name: "portfolio-lang" },
  ),
)
