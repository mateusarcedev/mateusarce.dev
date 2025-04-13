"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

type Project = {
  name: {
    "pt-BR": string
    "en-US": string
  }
  description: {
    "pt-BR": string
    "en-US": string
  }
  url: string
  featured: boolean
  tags: string[]
}

type ProjectsSectionProps = {
  theme: string
  t: {
    projects: string
    featured: string
    all: string
    viewProject: string
  }
  lang: "pt-BR" | "en-US"
  projects: Project[]
}

export function ProjectsSection({ theme, t, lang, projects }: ProjectsSectionProps) {
  const [projectFilter, setProjectFilter] = useState("all")
  const filteredProjects = projectFilter === "featured" ? projects.filter((project) => project.featured) : projects

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-xl ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>{t.projects}</h2>
        <div>
          <Tabs defaultValue="all" onValueChange={setProjectFilter}>
            <TabsList className={theme === "dark" ? "bg-[#1E1E1E]" : "bg-gray-200"}>
              <TabsTrigger value="all">{t.all}</TabsTrigger>
              <TabsTrigger value="featured">{t.featured}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={index} className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"} h-full`}>
            <CardContent className="p-4 flex flex-col h-full">
              <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
                {project.name[lang]}
              </h3>
              <p className={`text-sm mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} flex-1`}>
                {project.description[lang]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-xs px-2 py-1 rounded-full ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${theme === "dark" ? "text-[#E96479] hover:text-[#CD5888]" : "text-red-600 hover:text-red-800"} transition-colors mt-auto inline-flex items-center gap-1`}
              >
                {t.viewProject} →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
