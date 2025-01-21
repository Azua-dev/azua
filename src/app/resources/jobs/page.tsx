/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { PostCard } from "../../../components/post-card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Briefcase, MapPin, DollarSign, Filter } from "lucide-react"

function generateJobPost(id: number) {
  const jobs = [
    "Frontend Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Data Scientist",
    "UI/UX Designer",
    "Product Manager",
    "QA Engineer",
  ]
  const companies = [
    "TechCorp",
    "InnoSoft",
    "DataDynamics",
    "CloudNine",
    "AIVentures",
    "CyberShield",
    "MobileWave",
    "WebWizards",
  ]
  return {
    title: `Job Opening: ${jobs[id % jobs.length]} at ${companies[id % companies.length]}`,
    author: {
      name: `${companies[id % companies.length]} HR`,
      username: `@${companies[id % companies.length].toLowerCase()}hr`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Feb 5, 2024",
    readTime: "4 min",
    endorsements: Math.floor(Math.random() * 100) + 20,
    comments: Math.floor(Math.random() * 30) + 5,
    tags: [
      "job",
      jobs[id % jobs.length].toLowerCase().replace(/\s+/g, ""),
      companies[id % companies.length].toLowerCase(),
    ],
  }
}

export default function ResourcesJobBoardPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateJobPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Briefcase className="mr-2 h-6 w-6" />
                Job Board
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search jobs" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="fullstack">Full Stack</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
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
                <MapPin className="mr-2 h-4 w-4" />
                Remote Jobs
              </Button>
              <Button variant="secondary">
                <DollarSign className="mr-2 h-4 w-4" />
                Highest Paying
              </Button>
              <Button variant="secondary">
                <Briefcase className="mr-2 h-4 w-4" />
                Entry Level
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

