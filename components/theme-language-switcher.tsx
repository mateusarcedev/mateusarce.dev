"use client"

import { Moon, Sun, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"

type ThemeLanguageSwitcherProps = {
  theme: string
  setTheme: (theme: string) => void
  lang: "pt-BR" | "en-US"
  setLang: (lang: "pt-BR" | "en-US") => void
}

export function ThemeLanguageSwitcher({ theme, setTheme, lang, setLang }: ThemeLanguageSwitcherProps) {
  return (
    <div className="sticky top-0 z-10 flex justify-end mb-4 space-x-4 p-2 backdrop-blur-sm bg-opacity-80 rounded-lg">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-gray-800 hover:text-gray-600"}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setLang(lang === "pt-BR" ? "en-US" : "pt-BR")}
        className={theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-gray-800 hover:text-gray-600"}
        aria-label={lang === "pt-BR" ? "Switch to English" : "Mudar para Português"}
      >
        <Languages className="h-5 w-5" />
      </Button>
    </div>
  )
}
