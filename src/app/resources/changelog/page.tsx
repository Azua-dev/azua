"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { ClipboardList, Tag, AlertCircle, Filter } from "lucide-react"

function generateChangelogPost(id: number) {
  const changes = [
    "New Feature",
    "Bug Fix",
    "Performance Improvement",
    "Security Update",
    "UI Enhancement",
    "API Change",
    "Documentation Update",
    "Deprecation Notice",
  ]
  const versions = ["1.0.0", "1.1.0", "1.2.0", "2.0.0", "2.1.0", "2.2.0", "3.0.0", "3.1.0"]
  return {
    title: `Changelog: ${changes[id % changes.length]} in version ${versions[id % versions.length]}`,
    author: {
      name: `Release Manager`,
      username: `@releasemanager`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Feb 6, 2024",
    readTime: "3 min",
    endorsements: Math.floor(Math.random() * 50) + 10,
    comments: Math.floor(Math.random() * 20) + 5,
    tags: [
      "changelog",
      changes[id % changes.length].toLowerCase().replace(/\s+/g, ""),
      `v${versions[id % versions.length]}`,
    ],
  }
}

export default function ResourcesChangelogPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateChangelogPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <ClipboardList className="mr-2 h-6 w-6" />
                Changelog
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search changes" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feature">New Features</SelectItem>
                    <SelectItem value="bugfix">Bug Fixes</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="deprecation">Deprecations</SelectItem>
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
                <Tag className="mr-2 h-4 w-4" />
                Latest Release
              </Button>
              <Button variant="secondary">
                <AlertCircle className="mr-2 h-4 w-4" />
                Breaking Changes
              </Button>
              <Button variant="secondary">
                <ClipboardList className="mr-2 h-4 w-4" />
                All Versions
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

