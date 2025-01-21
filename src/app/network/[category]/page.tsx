"use client"

import { useParams } from "next/navigation"
import { Header } from "../../../components/header"
import { Sidebar } from "../../../components/sidebar"
import { PostCard } from "../../../components/post-card"

// Mock data generator for network posts
function generateNetworkPost(id: number, category: string) {
  const topics: Record<string, string[]> = {
    frontend: ["React", "Vue", "Angular", "CSS", "JavaScript"],
    backend: ["Node.js", "Python", "Java", "Go", "Databases"],
    mobile: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"],
    ai: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Science"],
    devops: ["Docker", "Kubernetes", "CI/CD", "Cloud", "DevOps"],
  }

  const categoryTopics = topics[category] || ["Development", "Programming", "Tech"]

  return {
    title: `${categoryTopics[id % categoryTopics.length]} - Latest trends and best practices in ${category}`,
    author: {
      name: `Dev Expert ${id}`,
      username: `@expert${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Jan 21, 2024",
    readTime: "5 min",
    endorsements: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
    tags: [category, ...categoryTopics.slice(0, 2)],
  }
}

export default function NetworkCategoryPage() {
  const params = useParams()
  const category = params.category as string

  const posts = Array.from({ length: 12 }, (_, i) => generateNetworkPost(i, category))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6 capitalize">{category} Network</h1>
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

