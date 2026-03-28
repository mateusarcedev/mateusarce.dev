import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mateusarce.dev"),
  title: "Mateus Arce | Portfólio",
  description:
    "Desenvolvedor full-stack e designer especializado em criação de sistemas personalizados. Conheça meus projetos e habilidades.",
  applicationName: "Mateus Arce",
  authors: [{ name: "Mateus Silva Andrade Arce", url: "https://mateusarce.dev" }],
  creator: "Mateus Silva Andrade Arce",
  keywords: [
    "Mateus Arce",
    "desenvolvedor full-stack",
    "developer portfolio",
    "Next.js",
    "React",
    "designer de sistemas",
    "software engineer Brazil",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mateus Arce | Portfólio",
    description:
      "Desenvolvedor full-stack e designer especializado em criação de sistemas personalizados. Conheça meus projetos e habilidades.",
    url: "https://mateusarce.dev/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfólio de Mateus Arce",
      },
    ],
    siteName: "Mateus Arce",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Arce | Portfólio",
    description:
      "Desenvolvedor full-stack e designer especializado em criação de sistemas personalizados.",
    images: [
      {
        url: "/images/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfólio de Mateus Arce",
      },
    ],
  },
}
