import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
