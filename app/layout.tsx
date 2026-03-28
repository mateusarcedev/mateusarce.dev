import localFont from "next/font/local"
import type { ReactNode } from "react"
import "./globals.css"
import { Providers } from "./providers"
import { LgpdBanner } from "@/components/lgpd-banner"

export { metadata } from "./metadata"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mateus Silva Andrade Arce",
  url: "https://mateusarce.dev",
  jobTitle: "Full Stack Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Sidia Instituto de Tecnologia",
  },
  sameAs: [
    "https://github.com/mateusarcedev",
    "https://linkedin.com/in/mateus-arce",
  ],
  knowsAbout: ["React", "Next.js", "NestJS", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preload" href="/images/avatar.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#15F5BA] focus:text-black focus:rounded focus:font-mono focus:text-sm"
        >
          Pular para o conteúdo
        </a>
        <Providers>
          {children}
          <LgpdBanner />
        </Providers>
      </body>
    </html>
  )
}
