"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs"
import { Compass, TrendingUp, Clock, Hash } from "lucide-react"

function generateExplorePost(id: number, category: string) {
  const categories = {
    trending: "Trending topic",
    latest: "Latest development",
    topics: "Hot topic",
  }
  return {
    title: `${categories[category as keyof typeof categories]} #${id}: Exciting new developments in tech`,
    author: {
      name: `Explorer ${id}`,
      username: `@explorer${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 22, 2024",
    readTime: "4 min",
    endorsements: Math.floor(Math.random() * 500),
    comments: Math.floor(Math.random() * 50),
    tags: ["explore", category, "tech"],
  }
}

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState("trending")
  const [posts, setPosts] = useState(() => Array.from({ length: 12 }, (_, i) => generateExplorePost(i, activeTab)))

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setPosts(Array.from({ length: 12 }, (_, i) => generateExplorePost(i, value)))
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
                <Compass className="mr-2 h-6 w-6" />
                Explore
              </h1>
              <Input type="search" placeholder="Search topics" className="w-64" />
            </div>
            <Tabs defaultValue="trending" className="mb-6" onValueChange={handleTabChange}>
              <TabsList>
                <TabsTrigger value="trending">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Trending
                </TabsTrigger>
                <TabsTrigger value="latest">
                  <Clock className="mr-2 h-4 w-4" />
                  Latest
                </TabsTrigger>
                <TabsTrigger value="topics">
                  <Hash className="mr-2 h-4 w-4" />
                  Topics
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

