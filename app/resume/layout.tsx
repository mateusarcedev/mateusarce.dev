import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Currículo | Mateus Arce",
  description:
    "Currículo de Mateus Arce — Engenheiro de Software Full Stack com foco em sistemas backend, integrações e automação.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Currículo | Mateus Arce",
    description:
      "Currículo de Mateus Arce — Engenheiro de Software Full Stack com foco em sistemas backend, integrações e automação.",
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
