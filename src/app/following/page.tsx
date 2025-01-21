"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Users, Search } from "lucide-react"

function generateFollowingPost(id: number) {
  return {
    title: `Latest update from your network #${id}`,
    author: {
      name: `Followed User ${id}`,
      username: `@followed${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 22, 2024",
    readTime: "3 min",
    endorsements: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 20),
    tags: ["development", "tech", "update"],
  }
}

export default function FollowingPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 12 }, (_, i) => generateFollowingPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white">Following</h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search following" className="w-64" />
                <Button variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Following
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

