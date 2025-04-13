import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { Card, CardContent } from "@/components/ui/card"

type Technology = {
  name: string
  icon: IconDefinition | React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
  isReactIcon?: boolean
  description: {
    "pt-BR": string
    "en-US": string
  }
  category: string
}

type TechnologiesSectionProps = {
  theme: string
  t: {
    technologies: string
    categories: {
      [key: string]: string
    }
  }
  technologies: Technology[]
  lang: "pt-BR" | "en-US"
}

export function TechnologiesSection({ theme, t, technologies, lang }: TechnologiesSectionProps) {
  // Group technologies by category
  const categorizedTech = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = []
      }
      acc[tech.category].push(tech)
      return acc
    },
    {} as Record<string, Technology[]>,
  )

  // Sort categories alphabetically
  const categories = Object.keys(categorizedTech).sort()

  return (
    <section className="mb-12">
      <h2 className={`text-xl mb-6 ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>{t.technologies}</h2>

      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className={`text-lg mb-4 ${theme === "dark" ? "text-[#E96479]" : "text-red-600"}`}>
            {t.categories[category]}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categorizedTech[category].map((tech) => (
              <Card
                key={tech.name}
                className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"} h-full`}
              >
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="flex items-center justify-center h-16 w-16 mb-3">
                    {tech.isReactIcon ? (
                      React.createElement(tech.icon as React.ComponentType<{ className: string; style: React.CSSProperties }>, {
                        className: "text-4xl",
                        style: { color: tech.color },
                      })
                    ) : (
                      <FontAwesomeIcon
                        icon={tech.icon as IconDefinition}
                        className="text-4xl"
                        style={{ color: tech.color }}
                      />
                    )}
                  </div>
                  <h4 className={`font-bold text-center mb-2 ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
                    {tech.name}
                  </h4>
                  <p className={`text-xs text-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    {tech.description[lang]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
