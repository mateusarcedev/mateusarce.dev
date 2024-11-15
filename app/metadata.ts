import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mateus Arce | Portfólio",
  description: "Desenvolvedor full-stack e designer especializado em criação de sistemas personalizados. Conheça meus projetos e habilidades.",
  openGraph: {
    title: "Mateus Arce | Portfólio",
    description: "Desenvolvedor full-stack e designer especializado em criação de sistemas personalizados. Conheça meus projetos e habilidades.",
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
  },
  twitter: {
    card: "summary_large_image",
    site: "@SeuTwitter",
    title: "Mateus Arce | Portfólio",
    description: "Desenvolvedor full-stack e designer especializado em criação de sistemas personalizados.",
    images: [
      {
        url: "/images/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfólio de Mateus Arce no Twitter",
      },
    ],
  },
};