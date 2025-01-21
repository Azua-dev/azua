/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState } from "react"
import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { PostCard } from "../../../components/post-card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Palette, TrendingUp, Clock, BookOpen } from "lucide-react"

function generateFrontendPost(id: number) {
  const topics = ["React", "Vue", "Angular", "CSS", "JavaScript", "TypeScript", "Web Performance", "Accessibility"]
  return {
    title: `Frontend Focus: ${topics[id % topics.length]} best practices and tips`,
    author: {
      name: `Frontend Dev ${id}`,
      username: `@frontender${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 22, 2024",
    readTime: "6 min",
    endorsements: Math.floor(Math.random() * 300),
    comments: Math.floor(Math.random() * 40),
    tags: ["frontend", topics[id % topics.length].toLowerCase(), "webdev"],
  }
}

export default function NetworkFrontendPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 16 }, (_, i) => generateFrontendPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Palette className="mr-2 h-6 w-6" />
                Frontend Network
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search frontend topics" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="css">CSS</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Trending
                </Button>
              </div>
            </div>
            <div className="flex space-x-4 mb-6">
              <Button variant="secondary">
                <Clock className="mr-2 h-4 w-4" />
                Latest
              </Button>
              <Button variant="secondary">
                <BookOpen className="mr-2 h-4 w-4" />
                Tutorials
              </Button>
              <Button variant="secondary">
                <TrendingUp className="mr-2 h-4 w-4" />
                Popular
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

