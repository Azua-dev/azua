/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { PostCard } from "../../components/post-card";

// Mock data generator
function generateMockPost(id: number) {
  return {
    title: `How to build better ${
      id % 2 === 0 ? "React" : "Next.js"
    } applications with modern techniques`,
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
  };
}

export default function FeedPage() {
  const [posts, setPosts] = useState<Array<any>>([]); // Use `Array<any>` for clarity
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  // Load more posts when triggered
  const loadMorePosts = () => {
    const newPosts = Array.from({ length: 9 }, (_, i) =>
      generateMockPost(posts.length + i)
    );
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setPage((prevPage) => prevPage + 1);
  };

  // Trigger loading when the observed element comes into view
  useEffect(() => {
    if (inView) loadMorePosts();
  }, [inView]);

  // Initial load
  useEffect(() => {
    loadMorePosts();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                author={post.author}
                publishedAt={post.publishedAt}
                readTime={post.readTime}
                endorsements={post.endorsements}
                comments={post.comments}
                tags={post.tags}
              />
            ))}
          </div>
          {/* Intersection Observer Trigger */}
          <div ref={ref} className="h-10" />
        </main>
      </div>
    </div>
  );
}


