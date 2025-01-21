"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { Clock, Zap, Filter, RefreshCw } from "lucide-react"

function generateLatestPost(id: number) {
  const topics = [
    "Frontend Framework",
    "Backend API",
    "Mobile SDK",
    "AI Algorithm",
    "DevOps Tool",
    "Security Protocol",
    "Database Optimization",
    "UI/UX Trend",
  ]
  return {
    title: `Just Released: New ${topics[id % topics.length]} that promises to revolutionize development`,
    author: {
      name: `Early Adopter ${id}`,
      username: `@earlyadopter${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 29, 2024",
    readTime: "3 min",
    endorsements: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 20),
    tags: ["latest", topics[id % topics.length].toLowerCase().replace(/\s+/g, ""), "new"],
  }
}

export default function DiscoverLatestPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateLatestPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Clock className="mr-2 h-6 w-6" />
                Latest Updates
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search latest updates" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="releases">New Releases</SelectItem>
                    <SelectItem value="updates">Major Updates</SelectItem>
                    <SelectItem value="announcements">Announcements</SelectItem>
                    <SelectItem value="features">Feature Previews</SelectItem>
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
                Just Now
              </Button>
              <Button variant="secondary">
                <Clock className="mr-2 h-4 w-4" />
                Today
              </Button>
              <Button variant="secondary">
                <RefreshCw className="mr-2 h-4 w-4" />
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

