import { Card, CardContent } from "@/components/ui/card"
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
    <section className="mb-12">
      <h2 className={`text-xl mb-6 ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>{t.experience}</h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"}`}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {exp.logo && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-white p-1">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className={`font-bold text-lg ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
                      {exp.title[lang]}
                    </h3>
                    <div className="flex items-center text-sm mt-1 md:mt-0">
                      <CalendarIcon size={14} className="mr-1" />
                      <span>
                        {exp.startDate[lang]} - {exp.endDate ? exp.endDate[lang] : t.present}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <BuildingIcon size={14} className="mr-1" />
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{exp.location[lang]}</span>
                  </div>

                  <div className="mb-4">
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.description[lang].map((item, i) => (
                        <li key={i} className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">{t.technologies}:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className={`${theme === "dark"
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
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
