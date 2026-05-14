import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mateusarce.dev"),
  title: "Mateus Arce — Full Stack Developer",
  description:
    "Full Stack Developer building scalable backends, AI agents and distributed systems with Go, NestJS, React and Python. Currently at Supertrans.",
  applicationName: "Mateus Arce",
  authors: [{ name: "Mateus Arce", url: "https://mateusarce.dev" }],
  creator: "Mateus Arce",
  keywords: [
    "Mateus Arce",
    "full stack developer",
    "software engineer",
    "Go developer",
    "NestJS",
    "React",
    "Next.js",
    "AI agents",
    "LangGraph",
    "backend developer",
    "portfolio",
    "Manaus",
    "Brazil",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mateus Arce — Full Stack Developer",
    description:
      "Building scalable backends, AI agents and distributed systems with Go, NestJS, React and Python.",
    url: "https://mateusarce.dev/",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateus Arce — Full Stack Developer · AI agents · NestJS · Go · React",
      },
    ],
    siteName: "Mateus Arce",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Arce — Full Stack Developer",
    description:
      "Building scalable backends, AI agents and distributed systems with Go, NestJS, React and Python.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateus Arce — Full Stack Developer",
      },
    ],
  },
}
