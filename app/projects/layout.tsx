import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects — Mateus Arce",
  description: "Public projects by Mateus Arce, fetched directly from GitHub.",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
