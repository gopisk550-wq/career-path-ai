import Link from "next/link"

export default function WelcomePage() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-6 py-10 page-enter">
      <section className="m3-card w-full max-w-xl p-8 text-center">
        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-pretty">CareerPath AI</h1>
          <p className="text-muted-foreground">
            Discover unique career paths, essential skills, and tailored motivation — powered by AI.
          </p>
        </header>

        <div className="mt-8">
          <Link
            href="/quiz"
            className="btn-primary-gradient ripple w-full"
            aria-label="Start the quiz to analyze my career path"
          >
            Start Quiz
          </Link>
        </div>
      </section>
    </main>
  )
}
