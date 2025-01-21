/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Header } from "../../components/header"
import { Sidebar } from "../../components/sidebar"
import { PostCard } from "../../components/post-card"

// Mock data generator
function generateMockPost(id: number) {
  return {
    title: `How to build better ${id % 2 === 0 ? "React" : "Next.js"} applications with modern techniques`,
    author: {
      name: "John Doe",
      username: "@johndoe",
      avatar: "/placeholder.svg",
    },
    publishedAt: "Dec 20, 2023",
    readTime: "5 min",
    endorsements: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
    tags: ["react", "javascript", "webdev"],
  }
}

export default function FeedPage() {
  const [posts, setPosts] = useState<unknown[]>([])
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()

  async function loadMorePosts() {
    const newPosts = Array.from({ length: 9 }, (_, i) => generateMockPost(posts.length + i))
    setPosts((prev) => [...prev, ...newPosts])
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    if (inView) {
      loadMorePosts()
    }
  }, [inView, loadMorePosts])

  useEffect(() => {
    loadMorePosts()
  }, [loadMorePosts])

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {posts.map((post, i) => (
              <PostCard title={""} author={{
                name: "",
                avatar: "",
                username: ""
              }} publishedAt={""} readTime={""} endorsements={0} comments={0} tags={[]} key={i} {...post} />
            ))}
          </div>
          <div ref={ref} className="h-10" />
        </main>
      </div>
    </div>
  )
}

