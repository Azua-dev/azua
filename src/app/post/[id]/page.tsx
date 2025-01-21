"use client"

import { ArrowLeft, ArrowRight, Facebook, Link2, MessageSquare, Share2, PhoneIcon as WhatsApp, X } from "lucide-react"
import Image from "next/image"
import { Button } from "/components/ui/button"
import { Card } from "/components/ui/card"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"

export default function PostPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Link2 className="h-4 w-4" />
                Read post
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-4">
              <div className="space-y-4">
                <Card className="p-6 bg-zinc-900/50 border-zinc-800">
                  <h1 className="text-2xl font-bold text-white mb-4">Top Tools of 2024 (Part 1)</h1>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-zinc-400">
                      TLDR HubSpot is recommended as the top free CRM software for small and scaling businesses,
                      offering powerful features and an intuitive user experience. The post lists tools ranked #60 to
                      #31 for 2024, including libraries like remoteStorage for data persistence, CodeViz for visualizing
                      codebases, and matcha.css for simple styling.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />8 Comments
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Link2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <WhatsApp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-zinc-900/50 border-zinc-800">
                  <h2 className="text-lg font-semibold text-white mb-4">Comments</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Image src="/placeholder.svg" alt="Avatar" width={40} height={40} className="rounded-full" />
                      <div className="flex-1">
                        <textarea
                          placeholder="Share your thoughts"
                          className="w-full h-24 bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white resize-none"
                        />
                        <div className="mt-2 flex justify-end">
                          <Button>Post</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="p-4 bg-zinc-900/50 border-zinc-800">
                  <h3 className="font-medium text-white mb-4">You might like</h3>
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg bg-zinc-800" />
                        <div>
                          <h4 className="text-sm font-medium text-white">Related article title</h4>
                          <p className="text-xs text-zinc-400 mt-1">2 upvotes • 1 comment</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

