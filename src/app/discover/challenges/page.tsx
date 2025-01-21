"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { Code, Trophy, Clock, Filter } from "lucide-react"

function generateChallengePost(id: number) {
  const challenges = [
    "Algorithmic Puzzle",
    "UI Design Sprint",
    "API Integration",
    "Performance Optimization",
    "Security Audit",
    "Code Refactoring",
    "Database Design",
    "Machine Learning Model",
  ]
  return {
    title: `Developer Challenge: ${challenges[id % challenges.length]} - Test your skills and win prizes`,
    author: {
      name: `Challenge Master ${id}`,
      username: `@challenger${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 31, 2024",
    readTime: "10 min",
    endorsements: Math.floor(Math.random() * 500) + 200,
    comments: Math.floor(Math.random() * 100) + 50,
    tags: ["challenge", challenges[id % challenges.length].toLowerCase().replace(/\s+/g, ""), "competition"],
  }
}

export default function DiscoverChallengesPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateChallengePost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Code className="mr-2 h-6 w-6" />
                Developer Challenges
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search challenges" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>
            <div className="flex space-x-4 mb-6">
              <Button variant="secondary">
                <Trophy className="mr-2 h-4 w-4" />
                Leaderboard
              </Button>
              <Button variant="secondary">
                <Clock className="mr-2 h-4 w-4" />
                Upcoming
              </Button>
              <Button variant="secondary">
                <Code className="mr-2 h-4 w-4" />
                Submit Solution
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {posts.map((post, i) => (
                <PostCard key={i} {...post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

