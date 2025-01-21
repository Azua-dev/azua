"use client"

import { useState } from "react"
import { Header } from "/components/layout/header"
import { Sidebar } from "/components/layout/sidebar"
import { PostCard } from "/components/feed/post-card"
import { Button } from "/components/ui/button"
import { Input } from "/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"
import { Calendar, MapPin, Users, Filter } from "lucide-react"

function generateEventPost(id: number) {
  const events = [
    "Tech Conference",
    "Hackathon",
    "Workshop",
    "Meetup",
    "Webinar",
    "Code Sprint",
    "Tech Talk",
    "Developer Summit",
  ]
  return {
    title: `Upcoming Event: ${events[id % events.length]} - Join the developer community for learning and networking`,
    author: {
      name: `Event Organizer ${id}`,
      username: `@organizer${id}`,
      avatar: "/placeholder.svg",
    },
    publishedAt: "Feb 1, 2024",
    readTime: "5 min",
    endorsements: Math.floor(Math.random() * 200) + 50,
    comments: Math.floor(Math.random() * 30) + 10,
    tags: ["event", events[id % events.length].toLowerCase().replace(/\s+/g, ""), "community"],
  }
}

export default function DiscoverEventsPage() {
  const [posts, setPosts] = useState(() => Array.from({ length: 20 }, (_, i) => generateEventPost(i)))

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                Developer Events
              </h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search events" className="w-64" />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conference">Conferences</SelectItem>
                    <SelectItem value="hackathon">Hackathons</SelectItem>
                    <SelectItem value="workshop">Workshops</SelectItem>
                    <SelectItem value="meetup">Meetups</SelectItem>
                    <SelectItem value="webinar">Webinars</SelectItem>
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
                <Calendar className="mr-2 h-4 w-4" />
                This Month
              </Button>
              <Button variant="secondary">
                <MapPin className="mr-2 h-4 w-4" />
                Near Me
              </Button>
              <Button variant="secondary">
                <Users className="mr-2 h-4 w-4" />
                My RSVPs
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

