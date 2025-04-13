import { Card, CardContent } from "@/components/ui/card"

type BioSectionProps = {
  theme: string
  bio: string
}

export function BioSection({ theme, bio }: BioSectionProps) {
  return (
    <section className="mb-12">
      <Card className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"}`}>
        <CardContent className="p-6">
          <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{bio}</p>
        </CardContent>
      </Card>
    </section>
  )
}
