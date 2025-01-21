"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { Settings, Filter, Plus, TrendingUp } from "lucide-react"

function generateCustomPost(id: number) {
  const topics = ["Frontend", "Backend", "Mobile", "AI/ML", "DevOps", "Blockchain", "IoT", "Cybersecurity"]
  return {
    title: `Custom Feed: ${topics[id % topics.length]} insights tailored for you`,
    author: {
      name: `Expert ${id}`,
      username: `@expert${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 27, 2024",
    readTime: "5 min",
    endorsements: Math.floor(Math.random() * 500),
    comments: Math.floor(Math.random() * 60),
    tags: ["custom", topics[id % topics.length].toLowerCase(), "personalized"],
  }
}

export default function NetworkCustomFeedPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 16 }, (_, i) => generateCustomPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Settings className="mr-2 h-6 w-6" />
                Custom Feed (Pro)
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search custom feed" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="ai-ml">AI/ML</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Customize
                </Button>
              </div>
            </div>
            <div className="flex space-x-4 mb-6">
              <Button variant="secondary">
                <Plus className="mr-2 h-4 w-4" />
                Add Topic
              </Button>
              <Button variant="secondary">
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </Button>
              <Button variant="secondary">
                <TrendingUp className="mr-2 h-4 w-4" />
                Trending in Your Network
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

