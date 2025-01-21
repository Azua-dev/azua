import { ArrowDown, ArrowUp, BookmarkIcon, MessageSquare, Share2 } from "lucide-react"
import Image from "next/image"
import { Button } from "../components/ui/button"

interface PostCardProps {
  title: string
  author: {
    name: string
    avatar: string
    username: string
  }
  publishedAt: string
  readTime: string
  endorsements: number
  comments: number
  tags: string[]
}

export function PostCard({ title, author, publishedAt, readTime, endorsements, comments, tags }: PostCardProps) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 hover:bg-zinc-900/80 transition-colors">
      <div className="flex gap-3">
        <Image
          src={author.avatar || "/placeholder.svg"}
          alt={author.name}
          width={32}
          height={32}
          className="rounded-full h-8 w-8"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-white text-base leading-snug">{title}</h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
            <span>{author.username}</span>
            <span>•</span>
            <span>{publishedAt}</span>
            <span>•</span>
            <span>{readTime} read</span>
          </div>
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-zinc-800 text-zinc-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-green-400 -ml-2 h-8">
              <ArrowUp className="h-4 w-4" />
            </Button>
            <span className="text-sm text-zinc-400 min-w-[2ch] text-center">{endorsements}</span>
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-red-400 h-8">
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white -ml-2 h-8">
            <MessageSquare className="h-4 w-4 mr-1.5" />
            {comments}
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white h-8 w-8">
            <BookmarkIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white h-8 w-8">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

