import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Currículo | Mateus Arce",
  description:
    "Currículo de Mateus Arce — Desenvolvedor Full Stack atuando em sistemas internos e projetos de P&D.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Currículo | Mateus Arce",
    description:
      "Currículo de Mateus Arce — Desenvolvedor Full Stack atuando em sistemas internos e projetos de P&D.",
    url: "https://mateusarce.dev/resume",
    siteName: "Mateus Arce",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "profile",
  },
}

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children
}
