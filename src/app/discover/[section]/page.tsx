"use client"

import { useParams } from "next/navigation"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"

function generateDiscoverPost(id: number, section: string) {
  const titles = {
    trending: `Top trending article #${id} in development`,
    latest: `Latest development update #${id} - Hot off the press`,
    discussions: `Hot discussion #${id} - Developer community insights`,
    challenges: `Coding challenge #${id} - Test your skills`,
    events: `Upcoming tech event #${id} - Don't miss out`,
  }

  return {
    title: titles[section as keyof typeof titles] || `Discover post #${id}`,
    author: {
      name: `Community Member ${id}`,
      username: `@member${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 21, 2024",
    readTime: "3 min",
    endorsements: Math.floor(Math.random() * 2000),
    comments: Math.floor(Math.random() * 200),
    tags: [section, "community", "development"],
  }
}

export default function DiscoverPage() {
  const params = useParams()
  const section = params.section as string

  const posts = Array.from({ length: 12 }, (_, i) => generateDiscoverPost(i, section))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6 capitalize">{section}</h1>
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

