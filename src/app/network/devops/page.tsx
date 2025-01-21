/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { PostCard } from "../../../components/post-card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Terminal, Cloud, GitBranch, TrendingUp } from "lucide-react"

function generateDevOpsPost(id: number) {
  const topics = [
    "Continuous Integration",
    "Continuous Deployment",
    "Infrastructure as Code",
    "Containerization",
    "Kubernetes",
    "Monitoring",
    "Logging",
    "Security",
  ]
  return {
    title: `DevOps Best Practices: ${topics[id % topics.length]} strategies for efficient workflows`,
    author: {
      name: `DevOps Engineer ${id}`,
      username: `@devops${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 26, 2024",
    readTime: "6 min",
    endorsements: Math.floor(Math.random() * 300),
    comments: Math.floor(Math.random() * 40),
    tags: ["devops", topics[id % topics.length].toLowerCase().replace(/\s+/g, ""), "automation"],
  }
}

export default function NetworkDevOpsPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 16 }, (_, i) => generateDevOpsPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Terminal className="mr-2 h-6 w-6" />
                DevOps Network
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search DevOps topics" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ci-cd">CI/CD</SelectItem>
                    <SelectItem value="iac">Infrastructure as Code</SelectItem>
                    <SelectItem value="containers">Containerization</SelectItem>
                    <SelectItem value="monitoring">Monitoring</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
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
                <Cloud className="mr-2 h-4 w-4" />
                Cloud
              </Button>
              <Button variant="secondary">
                <GitBranch className="mr-2 h-4 w-4" />
                Version Control
              </Button>
              <Button variant="secondary">
                <Terminal className="mr-2 h-4 w-4" />
                Automation
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

