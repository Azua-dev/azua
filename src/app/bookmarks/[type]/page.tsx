"use client"

import { useParams } from "next/navigation"
import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { PostCard } from "../../../components/post-card"

function generateBookmarkPost(id: number) {
  return {
    title: `Bookmarked article #${id} - Essential developer tips and tricks`,
    author: {
      name: `Developer ${id}`,
      username: `@dev${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 21, 2024",
    readTime: "4 min",
    endorsements: Math.floor(Math.random() * 500),
    comments: Math.floor(Math.random() * 50),
    tags: ["development", "programming", "tips"],
  }
}

export default function BookmarksPage() {
  const params = useParams()
  const type = params.type as string

  const posts = Array.from({ length: 8 }, (_, i) => generateBookmarkPost(i))

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

