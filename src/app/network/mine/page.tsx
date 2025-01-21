/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { PostCard } from "../../../components/post-card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Rocket, Users, Star, MessageCircle } from "lucide-react"

function generateNetworkPost(id: number, category: string) {
  const categories = {
    posts: "Your post",
    connections: "Connection update",
    mentions: "You were mentioned",
    interactions: "Recent interaction",
  }
  return {
    title: `${categories[category as keyof typeof categories]} #${id}`,
    author: {
      name: `Network User ${id}`,
      username: `@network${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 22, 2024",
    readTime: "2 min",
    endorsements: Math.floor(Math.random() * 50),
    comments: Math.floor(Math.random() * 10),
    tags: ["network", category, "personal"],
  }
}

export default function NetworkMinePage() {
  const [activeTab, setActiveTab] = useState("posts")
  const [posts, setPosts] = useState(() => Array.from({ length: 12 }, (_, i) => generateNetworkPost(i, activeTab)))

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setPosts(Array.from({ length: 12 }, (_, i) => generateNetworkPost(i, value)))
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Rocket className="mr-2 h-6 w-6" />
                My Network
              </h1>
              <Input type="search" placeholder="Search your network" className="w-64" />
            </div>
            <Tabs defaultValue="posts" className="mb-6" onValueChange={handleTabChange}>
              <TabsList>
                <TabsTrigger value="posts">
                  <Star className="mr-2 h-4 w-4" />
                  Your Posts
                </TabsTrigger>
                <TabsTrigger value="connections">
                  <Users className="mr-2 h-4 w-4" />
                  Connections
                </TabsTrigger>
                <TabsTrigger value="mentions">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Mentions
                </TabsTrigger>
                <TabsTrigger value="interactions">
                  <Rocket className="mr-2 h-4 w-4" />
                  Interactions
                </TabsTrigger>
              </TabsList>
            </Tabs>
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

