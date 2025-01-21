"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { Database, Server, Code, TrendingUp } from "lucide-react"

function generateBackendPost(id: number) {
  const topics = ["Node.js", "Python", "Java", "Go", "Ruby", "PHP", "C#", "Rust"]
  return {
    title: `Backend Insights: ${topics[id % topics.length]} performance optimization techniques`,
    author: {
      name: `Backend Dev ${id}`,
      username: `@backender${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 23, 2024",
    readTime: "7 min",
    endorsements: Math.floor(Math.random() * 250),
    comments: Math.floor(Math.random() * 35),
    tags: ["backend", topics[id % topics.length].toLowerCase(), "serverside"],
  }
}

export default function NetworkBackendPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 16 }, (_, i) => generateBackendPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Database className="mr-2 h-6 w-6" />
                Backend Network
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search backend topics" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nodejs">Node.js</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="go">Go</SelectItem>
                    <SelectItem value="ruby">Ruby</SelectItem>
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
                <Server className="mr-2 h-4 w-4" />
                Architecture
              </Button>
              <Button variant="secondary">
                <Database className="mr-2 h-4 w-4" />
                Databases
              </Button>
              <Button variant="secondary">
                <Code className="mr-2 h-4 w-4" />
                APIs
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

