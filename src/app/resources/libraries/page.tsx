/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { PostCard } from "../../../components/post-card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Library, Download, Star, Filter } from "lucide-react"

function generateLibraryPost(id: number) {
  const libraries = [
    "UI Framework",
    "State Management",
    "Data Visualization",
    "Animation",
    "Testing Framework",
    "HTTP Client",
    "ORM",
    "Machine Learning",
  ]
  return {
    title: `Library Showcase: Powerful ${libraries[id % libraries.length]} for modern application development`,
    author: {
      name: `Library Creator ${id}`,
      username: `@libcreator${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Feb 4, 2024",
    readTime: "6 min",
    endorsements: Math.floor(Math.random() * 800) + 300,
    comments: Math.floor(Math.random() * 150) + 50,
    tags: ["library", libraries[id % libraries.length].toLowerCase().replace(/\s+/g, ""), "opensource"],
  }
}

export default function ResourcesLibrariesPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateLibraryPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Library className="mr-2 h-6 w-6" />
                Libraries & Frameworks
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search libraries" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="csharp">C#</SelectItem>
                    <SelectItem value="ruby">Ruby</SelectItem>
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
                <Download className="mr-2 h-4 w-4" />
                Most Downloaded
              </Button>
              <Button variant="secondary">
                <Star className="mr-2 h-4 w-4" />
                Highest Rated
              </Button>
              <Button variant="secondary">
                <Library className="mr-2 h-4 w-4" />
                Recently Updated
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

