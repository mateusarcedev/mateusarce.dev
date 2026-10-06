import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mateusarce.dev"),
  title: "Mateus Arce — Software Engineer · Full Stack",
  description:
    "Software Engineer · Full Stack building backend systems, developer tools and automation with TypeScript, NestJS, React, Next.js, PostgreSQL and Docker. Currently at Supertrans.",
  applicationName: "Mateus Arce",
  authors: [{ name: "Mateus Arce", url: "https://mateusarce.dev" }],
  creator: "Mateus Arce",
  keywords: [
    "Mateus Arce",
    "software engineer",
    "full stack developer",
    "backend developer",
    "developer tools",
    "automation",
    "TypeScript",
    "NestJS",
    "React",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "portfolio",
    "Manaus",
    "Brazil",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mateus Arce — Software Engineer · Full Stack",
    description:
      "Building backend systems, developer tools and automation with TypeScript, NestJS, React, Next.js, PostgreSQL and Docker.",
    url: "https://mateusarce.dev/",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateus Arce — Software Engineer · Full Stack · backend systems · developer tools · automation",
      },
    ],
    siteName: "Mateus Arce",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Arce — Software Engineer · Full Stack",
    description:
      "Building backend systems, developer tools and automation with TypeScript, NestJS, React, Next.js, PostgreSQL and Docker.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateus Arce — Software Engineer · Full Stack",
      },
    ],
  },
}
