import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Currículo | Mateus Arce",
  description:
    "Currículo de Mateus Silva Andrade Arce — Desenvolvedor Full Stack com experiência em NestJS, React, Next.js e arquitetura de sistemas escaláveis.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Currículo | Mateus Arce",
    description:
      "Currículo de Mateus Silva Andrade Arce — Desenvolvedor Full Stack com experiência em NestJS, React, Next.js e arquitetura de sistemas escaláveis.",
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
