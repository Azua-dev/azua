/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Header } from "../../components/header"
import { Sidebar } from "../../components/sidebar"
import { PostCard } from "../../components/post-card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { History, Trash2 } from "lucide-react"

function generateHistoryPost(id: number) {
  return {
    title: `Recently viewed article #${id}`,
    author: {
      name: `Author ${id}`,
      username: `@author${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 22, 2024",
    readTime: "5 min",
    endorsements: Math.floor(Math.random() * 200),
    comments: Math.floor(Math.random() * 30),
    tags: ["history", "viewed", "tech"],
  }
}

export default function HistoryPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateHistoryPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <History className="mr-2 h-6 w-6" />
                History
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search history" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="last-week">Last 7 days</SelectItem>
                    <SelectItem value="last-month">Last 30 days</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear History
                </Button>
              </div>
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

