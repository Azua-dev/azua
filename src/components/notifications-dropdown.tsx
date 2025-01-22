"use client"

import { Bell } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../src/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../../src/components/ui/dropdown-menu"
import { ScrollArea } from "../../src/components/ui/scroll-area"

interface Notification {
  id: string
  user: {
    name: string
    avatar: string
    username: string
  }
  action: string
  target: string
  category: string
  preview?: {
    title: string
    image: string
  }
}

const notifications: Notification[] = [
  {
    id: "1",
    user: {
      name: "Maksym Tymofeiev",
      avatar: "/placeholder.svg",
      username: "@maksym",
    },
    action: "shared a new post on",
    target: "WebCraft",
    category: "Prompt-Based UI",
    preview: {
      title: "Prompt-Based UI",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XE36v3mPh87ZbTHjG3s7iI9rLDfPIu.png",
    },
  },
  {
    id: "2",
    user: {
      name: "Maksym Tymofeiev",
      avatar: "/placeholder.svg",
      username: "@maksym",
    },
    action: "shared a new post on",
    target: "UX/UI",
    category: "Prompt-Based UI",
    preview: {
      title: "Prompt-Based UI",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XE36v3mPh87ZbTHjG3s7iI9rLDfPIu.png",
    },
  },
  // Add more notifications as needed
]

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">View notifications</span>
          <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[380px] bg-background border-border">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="font-semibold text-foreground">Notifications</h2>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            Mark all as read
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-200px)] min-h-[300px]">
          <div className="px-2 py-3">
            {notifications.map((notification) => (
              <Link key={notification.id} href="#" className="flex gap-4 p-2 rounded-lg hover:bg-secondary">
                <Image
                  src={notification.user.avatar || "/placeholder.svg"}
                  alt={notification.user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{notification.user.name}</span> {notification.action}{" "}
                    <span className="font-medium text-foreground">{notification.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{notification.category}</p>
                  {notification.preview && (
                    <div className="mt-2 flex gap-3 p-3 rounded-lg bg-zinc-800/50">
                      <Image
                        src={notification.preview.image || "/placeholder.svg"}
                        alt={notification.preview.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <p className="text-sm text-muted-foreground">{notification.preview.title}</p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

