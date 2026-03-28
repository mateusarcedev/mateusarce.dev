import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Props = {
  theme: string
  lang: "pt-BR" | "en-US"
}

export function ProjectsLink({ theme, lang }: Props) {
  const isDark = theme === "dark"

  return (
    <section data-section="projects" className="mb-16">
      <Link
        href="/projects"
        className={`group inline-flex items-center gap-2 mb-0 transition-colors ${
          isDark ? "text-white hover:text-[#15F5BA]" : "text-gray-900 hover:text-blue-600"
        }`}
      >
        <h2 className="text-3xl font-bold uppercase">
          {lang === "pt-BR" ? "Projetos" : "Projects"}
        </h2>
        <ArrowUpRight className="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </section>
  )
}
