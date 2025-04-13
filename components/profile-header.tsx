import { Github, Linkedin, Briefcase, FileText } from "lucide-react"

type ProfileHeaderProps = {
  theme: string
  t: {
    role: string
    curriculum: string
  }
}

export function ProfileHeader({ theme, t }: ProfileHeaderProps) {
  return (
    <header className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="relative w-32 h-32 rounded-full overflow-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/96782284?v=4"
          alt="Mateus Arce"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className={`${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"} text-2xl font-bold mb-2`}>
          Mateus Silva Andrade Arce
        </h1>
        <h2 className="text-xl mb-4">{t.role}</h2>
        <p className={`${theme === "dark" ? "text-[#E96479]" : "text-red-600"} mb-4`}>arcemateuss@gmail.com</p>
        <nav className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/mateusarcedev"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"} transition-colors flex items-center gap-2`}
            aria-label="GitHub Profile"
          >
            <Github size={16} />
            <span>github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mateus-arce/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"} transition-colors flex items-center gap-2`}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
            <span>linkedin</span>
          </a>
          <a
            href="https://www.tools4.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"} transition-colors flex items-center gap-2`}
            aria-label="Tools4.tech"
          >
            <Briefcase size={16} />
            <span>Tools4.tech</span>
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "dark" ? "text-[#15F5BA] hover:text-[#22A39F]" : "text-blue-600 hover:text-blue-800"} transition-colors flex items-center gap-2`}
            aria-label={t.curriculum}
          >
            <FileText size={16} />
            <span>{t.curriculum}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
