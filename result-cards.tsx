type CareerItem = string | { title: string; salaryRange?: string }

type ResultData = {
  careers: CareerItem[]
  skills: string[]
  tip: string
}

export default function ResultCards({ data }: { data: ResultData }) {
  return (
    <div className="space-y-6">
      {/* Careers */}
      <section aria-labelledby="careers-title">
        <h3 id="careers-title" className="font-semibold mb-3">
          🎯 Careers
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {data.careers?.map((c, idx) => {
            const title = typeof c === "string" ? c : c.title
            const salary = typeof c === "string" ? "Varies" : c.salaryRange || "Varies"
            return (
              <article key={idx} className="m3-card p-4">
                <p className="text-pretty font-medium">{title}</p>
                <p className="text-muted-foreground text-sm mt-1">Salary: {salary}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-title">
        <h3 id="skills-title" className="font-semibold mb-3">
          💡 Skills to build
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.skills?.map((s, idx) => (
            <span key={idx} className="rounded-full border px-3 py-1 text-sm" aria-label={`Skill: ${s}`}>
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Tip */}
      <section aria-labelledby="tip-title">
        <h3 id="tip-title" className="font-semibold mb-3">
          🌱 Motivational tip
        </h3>
        <article className="m3-card p-4 border-l-4" style={{ borderLeftColor: "var(--color-accent)" }}>
          <p className="italic text-pretty">{data.tip}</p>
        </article>
      </section>
    </div>
  )
}
