"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { GraduationCap, BookOpen, Clock, Filter } from "lucide-react"

function generateLearningPathPost(id: number) {
  const paths = [
    "Full-Stack Development",
    "Machine Learning",
    "Cloud Architecture",
    "Mobile App Development",
    "DevOps Engineering",
    "Cybersecurity",
    "Data Science",
    "UI/UX Design",
  ]
  return {
    title: `Learning Path: ${paths[id % paths.length]} - Comprehensive guide to mastering in-demand skills`,
    author: {
      name: `Educator ${id}`,
      username: `@educator${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Feb 2, 2024",
    readTime: "15 min",
    endorsements: Math.floor(Math.random() * 1000) + 500,
    comments: Math.floor(Math.random() * 200) + 100,
    tags: ["learningpath", paths[id % paths.length].toLowerCase().replace(/\s+/g, ""), "education"],
  }
}

export default function ResourcesLearningPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateLearningPathPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <GraduationCap className="mr-2 h-6 w-6" />
                Learning Paths
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search learning paths" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="ai">AI & Machine Learning</SelectItem>
                    <SelectItem value="cloud">Cloud Computing</SelectItem>
                    <SelectItem value="security">Cybersecurity</SelectItem>
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
                <BookOpen className="mr-2 h-4 w-4" />
                My Paths
              </Button>
              <Button variant="secondary">
                <Clock className="mr-2 h-4 w-4" />
                In Progress
              </Button>
              <Button variant="secondary">
                <GraduationCap className="mr-2 h-4 w-4" />
                Completed
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

