import { Badge } from "@/components/ui/badge"
import { CalendarIcon, BuildingIcon } from "lucide-react"

type Experience = {
  title: {
    "pt-BR": string
    "en-US": string
  }
  company: string
  location: {
    "pt-BR": string
    "en-US": string
  }
  startDate: {
    "pt-BR": string
    "en-US": string
  }
  endDate: {
    "pt-BR": string
    "en-US": string
  } | null
  description: {
    "pt-BR": string[]
    "en-US": string[]
  }
  technologies: string[]
  logo?: string
}

type ExperienceSectionProps = {
  theme: string
  t: {
    experience: string
    present: string
    technologies: string
  }
  experiences: Experience[]
  lang: "pt-BR" | "en-US"
}

export function ExperienceSection({ theme, t, experiences, lang }: ExperienceSectionProps) {
  return (
    <section data-section="experience" className="mb-12">
      <h2 className={`text-xl mb-8 ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>{t.experience}</h2>

      <div className="relative">
        {/* Timeline vertical line */}
        <div
          data-timeline-line
          className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-300"
          } hidden md:block`}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} data-exp-item className="relative flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Timeline dot and logo */}
              <div className="flex-shrink-0 flex items-start gap-4">
                {/* Timeline dot */}
                <div className="relative z-10 hidden md:block">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      theme === "dark" ? "bg-[#1E1E1E] border-2 border-[#15F5BA]" : "bg-white border-2 border-blue-600"
                    }`}
                  >
                    {exp.logo ? (
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={exp.company}
                        className="w-12 h-12 object-contain rounded-full"
                      />
                    ) : (
                      <BuildingIcon size={24} className={theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"} />
                    )}
                  </div>
                </div>

                {/* Mobile logo */}
                <div className="md:hidden">
                  {exp.logo && (
                    <div className="w-16 h-16 rounded-md overflow-hidden bg-white p-1">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                {/* Date badge */}
                <div className="mb-3">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                      theme === "dark"
                        ? "bg-[#15F5BA]/10 text-[#15F5BA] border border-[#15F5BA]/20"
                        : "bg-blue-50 text-blue-600 border border-blue-200"
                    }`}
                  >
                    <CalendarIcon size={14} />
                    <span>
                      {exp.startDate[lang]} - {exp.endDate ? exp.endDate[lang] : t.present}
                    </span>
                  </div>
                </div>

                {/* Title and company */}
                <div className="mb-3">
                  <h3 className={`font-bold text-xl mb-1 ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
                    {exp.title[lang]}
                  </h3>
                  <div className="flex items-center text-sm">
                    <BuildingIcon size={14} className="mr-2" />
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>{exp.location[lang]}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {exp.description[lang].map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            theme === "dark" ? "bg-[#15F5BA]" : "bg-blue-600"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-sm font-medium mb-2">{t.technologies}:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={`${
                          theme === "dark"
                            ? "bg-gray-800 text-gray-200 border-gray-700"
                            : "bg-gray-100 text-gray-800 border-gray-200"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
