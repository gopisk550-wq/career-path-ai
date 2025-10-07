"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function QuizForm() {
  const router = useRouter()
  const [subjects, setSubjects] = useState("")
  const [hobbies, setHobbies] = useState("")
  const [teamwork, setTeamwork] = useState("")
  const [lifestyle, setLifestyle] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams({
      subjects,
      hobbies,
      teamwork,
      lifestyle,
    })
    router.push(`/results?${params.toString()}`)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Favorite subjects</label>
        <input
          className="rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., Math, Biology, Art"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Hobbies</label>
        <input
          className="rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., Coding, Music, Sports"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Teamwork preference</label>
        <select
          className="rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
          value={teamwork}
          onChange={(e) => setTeamwork(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="solo">I prefer working solo</option>
          <option value="collaborative">I enjoy collaborating</option>
          <option value="either">Either is fine</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Dream lifestyle</label>
        <input
          className="rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g., Remote, Travel, High-impact, Flexible hours"
          value={lifestyle}
          onChange={(e) => setLifestyle(e.target.value)}
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-primary-gradient ripple w-full" aria-label="Analyze my path">
          Analyze My Path
        </button>
      </div>
    </form>
  )
}
