import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function RulesSection() {
  const rules = [
    "Teams of 2-4 members",
    "48 hours to build your project",
    "Use any programming language or technology",
    "Projects must be original and created during the hackathon",
    "Judging based on innovation, technical difficulty, and presentation",
  ]

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Hackathon Rules</h2>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Key Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

