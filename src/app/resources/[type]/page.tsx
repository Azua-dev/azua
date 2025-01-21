"use client"

import { useParams } from "next/navigation"
import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { PostCard } from "../../../components/post-card"

function generateResourcePost(id: number, type: string) {
  const titles = {
    learning: `Learning path #${id} - Master new skills`,
    tools: `Essential developer tool #${id} for productivity`,
    libraries: `Must-have library #${id} for modern development`,
    news: `Breaking tech news #${id} - Industry updates`,
    jobs: `Job opportunity #${id} - Join top tech companies`,
  }

  return {
    title: titles[type as keyof typeof titles] || `Resource #${id}`,
    author: {
      name: `Resource Provider ${id}`,
      username: `@resource${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 21, 2024",
    readTime: "6 min",
    endorsements: Math.floor(Math.random() * 1500),
    comments: Math.floor(Math.random() * 150),
    tags: [type, "resources", "development"],
  }
}

export default function ResourcesPage() {
  const params = useParams()
  const type = params.type as string

  const posts = Array.from({ length: 12 }, (_, i) => generateResourcePost(i, type))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6 capitalize">{type.split("-").join(" ")}</h1>
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

