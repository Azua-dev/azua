"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { MessageSquare, TrendingUp, Users, Filter } from "lucide-react"

function generateDiscussionPost(id: number) {
  const topics = [
    "Code Quality",
    "Best Practices",
    "Tech Ethics",
    "Career Growth",
    "Work-Life Balance",
    "Remote Work",
    "Tech Interviews",
    "Mentorship",
  ]
  return {
    title: `Hot Discussion: ${topics[id % topics.length]} - Share your thoughts and experiences`,
    author: {
      name: `Discussion Starter ${id}`,
      username: `@discusser${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 30, 2024",
    readTime: "7 min",
    endorsements: Math.floor(Math.random() * 300) + 100,
    comments: Math.floor(Math.random() * 50) + 20,
    tags: ["discussion", topics[id % topics.length].toLowerCase().replace(/\s+/g, ""), "community"],
  }
}

export default function DiscoverDiscussionsPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateDiscussionPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <MessageSquare className="mr-2 h-6 w-6" />
                Discussions
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search discussions" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technical</SelectItem>
                    <SelectItem value="career">Career</SelectItem>
                    <SelectItem value="industry">Industry</SelectItem>
                    <SelectItem value="ethics">Ethics</SelectItem>
                    <SelectItem value="lifestyle">Dev Lifestyle</SelectItem>
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
                <TrendingUp className="mr-2 h-4 w-4" />
                Most Active
              </Button>
              <Button variant="secondary">
                <Users className="mr-2 h-4 w-4" />
                Community Pick
              </Button>
              <Button variant="secondary">
                <MessageSquare className="mr-2 h-4 w-4" />
                Start a Discussion
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

