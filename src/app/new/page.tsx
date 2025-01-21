"use client"

import { AtSign, ImageIcon, Link2, Users } from "lucide-react"
import { Button } from "/components/ui/button"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <div className="max-w-4xl mx-auto p-4">
            <Tabs defaultValue="post" className="w-full">
              <div className="flex items-center gap-4 mb-6">
                <TabsList className="bg-zinc-900">
                  <TabsTrigger value="post" className="data-[state=active]:bg-purple-500">
                    New post
                  </TabsTrigger>
                  <TabsTrigger value="link" className="data-[state=active]:bg-purple-500">
                    Share a link
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="post" className="space-y-6">
                <Select>
                  <SelectTrigger className="w-full bg-zinc-900 border-zinc-800 h-12">
                    <Users className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Select Squad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="team">Team</SelectItem>
                  </SelectContent>
                </Select>

                <div className="aspect-video rounded-lg border-2 border-dashed border-zinc-800 flex items-center justify-center bg-zinc-900/50">
                  <div className="text-center">
                    <ImageIcon className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                    <p className="text-sm text-zinc-400">Thumbnail</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Post Title*"
                    className="w-full bg-zinc-900 border-0 rounded-lg p-4 text-white text-lg placeholder:text-zinc-500 focus:ring-2 focus:ring-purple-500"
                  />
                  <div className="flex justify-end">
                    <span className="text-xs text-zinc-500">250</span>
                  </div>
                </div>

                <Tabs defaultValue="write" className="w-full">
                  <div className="flex items-center justify-between border-b border-zinc-800 mb-4">
                    <TabsList className="bg-transparent border-b border-transparent h-auto">
                      <TabsTrigger
                        value="write"
                        className="text-sm px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent"
                      >
                        Write
                      </TabsTrigger>
                      <TabsTrigger
                        value="preview"
                        className="text-sm px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:bg-transparent"
                      >
                        Preview
                      </TabsTrigger>
                    </TabsList>
                    <span className="text-xs text-zinc-500">Saved</span>
                  </div>
                  <TabsContent value="write">
                    <textarea
                      className="w-full min-h-[400px] bg-transparent border-0 text-white resize-none focus:ring-0 text-base"
                      placeholder="Write your post content here..."
                    />
                  </TabsContent>
                </Tabs>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                      <ImageIcon className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                      <Link2 className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                      <AtSign className="w-5 h-5" />
                    </Button>
                  </div>
                  <Button className="bg-purple-500 hover:bg-purple-600">Post</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

