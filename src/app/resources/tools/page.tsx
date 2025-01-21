"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { Wrench, Download, Star, Filter } from "lucide-react"

function generateDevToolPost(id: number) {
  const tools = [
    "Code Editor",
    "Version Control",
    "CI/CD Pipeline",
    "Debugging Tool",
    "Performance Profiler",
    "API Testing",
    "Database Management",
    "Containerization",
  ]
  return {
    title: `Developer Tool Spotlight: Essential ${tools[id % tools.length]} for boosting productivity`,
    author: {
      name: `Tool Expert ${id}`,
      username: `@toolexpert${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Feb 3, 2024",
    readTime: "8 min",
    endorsements: Math.floor(Math.random() * 500) + 200,
    comments: Math.floor(Math.random() * 100) + 50,
    tags: ["devtool", tools[id % tools.length].toLowerCase().replace(/\s+/g, ""), "productivity"],
  }
}

export default function ResourcesToolsPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateDevToolPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Wrench className="mr-2 h-6 w-6" />
                Developer Tools
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search developer tools" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ide">IDEs & Editors</SelectItem>
                    <SelectItem value="vcs">Version Control</SelectItem>
                    <SelectItem value="ci-cd">CI/CD</SelectItem>
                    <SelectItem value="testing">Testing</SelectItem>
                    <SelectItem value="monitoring">Monitoring</SelectItem>
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
                <Download className="mr-2 h-4 w-4" />
                Popular Downloads
              </Button>
              <Button variant="secondary">
                <Star className="mr-2 h-4 w-4" />
                Top Rated
              </Button>
              <Button variant="secondary">
                <Wrench className="mr-2 h-4 w-4" />
                New Releases
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

