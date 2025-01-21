"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { TrendingUp, Zap, Clock, Filter } from "lucide-react"

function generateTrendingPost(id: number) {
  const topics = [
    "Web Development",
    "Mobile Apps",
    "AI/ML",
    "Blockchain",
    "DevOps",
    "Cybersecurity",
    "Cloud Computing",
    "IoT",
  ]
  return {
    title: `Trending: ${topics[id % topics.length]} breakthrough that's taking the dev world by storm`,
    author: {
      name: `Trend Setter ${id}`,
      username: `@trendsetter${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 28, 2024",
    readTime: "4 min",
    endorsements: Math.floor(Math.random() * 1000) + 500,
    comments: Math.floor(Math.random() * 100) + 50,
    tags: ["trending", topics[id % topics.length].toLowerCase().replace(/\s+/g, ""), "hot"],
  }
}

export default function DiscoverTrendingPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateTrendingPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <TrendingUp className="mr-2 h-6 w-6" />
                Trending Now
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search trending topics" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Apps</SelectItem>
                    <SelectItem value="ai-ml">AI/ML</SelectItem>
                    <SelectItem value="blockchain">Blockchain</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
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
                <Zap className="mr-2 h-4 w-4" />
                Most Viral
              </Button>
              <Button variant="secondary">
                <Clock className="mr-2 h-4 w-4" />
                Rising Stars
              </Button>
              <Button variant="secondary">
                <TrendingUp className="mr-2 h-4 w-4" />
                This Week
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

