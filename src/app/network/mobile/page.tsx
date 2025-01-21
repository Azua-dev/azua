"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { Smartphone, Layers, Zap, TrendingUp } from "lucide-react"

function generateMobileDevPost(id: number) {
  const topics = ["React Native", "Flutter", "iOS", "Android", "Xamarin", "Kotlin", "Swift", "Ionic"]
  return {
    title: `Mobile Dev Spotlight: ${topics[id % topics.length]} app optimization strategies`,
    author: {
      name: `Mobile Dev ${id}`,
      username: `@mobiledev${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 24, 2024",
    readTime: "5 min",
    endorsements: Math.floor(Math.random() * 200),
    comments: Math.floor(Math.random() * 30),
    tags: ["mobile", topics[id % topics.length].toLowerCase(), "appdev"],
  }
}

export default function NetworkMobileDevPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 16 }, (_, i) => generateMobileDevPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Smartphone className="mr-2 h-6 w-6" />
                Mobile Dev Network
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search mobile dev topics" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react-native">React Native</SelectItem>
                    <SelectItem value="flutter">Flutter</SelectItem>
                    <SelectItem value="ios">iOS</SelectItem>
                    <SelectItem value="android">Android</SelectItem>
                    <SelectItem value="xamarin">Xamarin</SelectItem>
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
                <Layers className="mr-2 h-4 w-4" />
                Cross-Platform
              </Button>
              <Button variant="secondary">
                <Smartphone className="mr-2 h-4 w-4" />
                Native
              </Button>
              <Button variant="secondary">
                <Zap className="mr-2 h-4 w-4" />
                Performance
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

