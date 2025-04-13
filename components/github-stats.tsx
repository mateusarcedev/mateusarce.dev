import { Card, CardContent } from "@/components/ui/card"
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

type GithubStatsProps = {
  theme: string
  t: {
    stats: string
    repositories: string
    followers: string
    following: string
    contributions: string
    monthNames: string[]
  }
  githubStats: {
    public_repos: number
    followers: number
    following: number
  }
  contributionData: {
    month: number
    contributions: number
  }[]
}

export function GithubStats({ theme, t, githubStats, contributionData }: GithubStatsProps) {
  const formatMonth = (monthNum: number) => {
    return t.monthNames[monthNum - 1]
  }

  return (
    <section className="mb-12">
      <h2 className={`text-xl mb-6 ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>{t.stats}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          <Card className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"}`}>
            <CardContent className="p-4 text-center">
              <p className={`text-2xl font-bold ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
                {githubStats.public_repos}
              </p>
              <p className="text-sm">{t.repositories}</p>
            </CardContent>
          </Card>
          <Card className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"}`}>
            <CardContent className="p-4 text-center">
              <p className={`text-2xl font-bold ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
                {githubStats.followers}
              </p>
              <p className="text-sm">{t.followers}</p>
            </CardContent>
          </Card>
          <Card className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"}`}>
            <CardContent className="p-4 text-center">
              <p className={`text-2xl font-bold ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
                {githubStats.following}
              </p>
              <p className="text-sm">{t.following}</p>
            </CardContent>
          </Card>
          <Card className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"}`}>
            <CardContent className="p-4 text-center">
              <p className={`text-2xl font-bold ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
                {contributionData?.reduce((acc, curr) => acc + curr.contributions, 0)}
              </p>
              <p className="text-sm">{t.contributions}</p>
            </CardContent>
          </Card>
        </div>
        <Card className={`${theme === "dark" ? "bg-[#1E1E1E] border-gray-700" : "bg-white"}`}>
          <CardContent className="p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={contributionData}>
                <XAxis dataKey="month" stroke={theme === "dark" ? "#15F5BA" : "#3B82F6"} tickFormatter={formatMonth} />
                <YAxis stroke={theme === "dark" ? "#15F5BA" : "#3B82F6"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === "dark" ? "#1E1E1E" : "#FFFFFF",
                    border: "none",
                    color: theme === "dark" ? "#FFFFFF" : "#000000",
                  }}
                  labelStyle={{ color: theme === "dark" ? "#15F5BA" : "#3B82F6" }}
                  formatter={(value, name) => [value, t.contributions]}
                  labelFormatter={(label) => formatMonth(label)}
                />
                <Line
                  type="monotone"
                  dataKey="contributions"
                  stroke={theme === "dark" ? "#15F5BA" : "#3B82F6"}
                  strokeWidth={2}
                  dot={{ fill: theme === "dark" ? "#15F5BA" : "#3B82F6", r: 4 }}
                  activeDot={{ r: 6, fill: theme === "dark" ? "#E96479" : "#EF4444" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
