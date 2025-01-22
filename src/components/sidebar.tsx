/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import {
  ChevronDown,
  BookMarked,
  Clock,
  Compass,
  History,
  Home,
  MessageSquare,
  Plus,
  Users,
  Hash,
  Globe,
  Trophy,
  LinkIcon,
  FileText,
  GitBranch,
  MessageCircle,
  Rocket,
  Star,
  Bookmark,
  Code2,
  Coffee,
  Cpu,
  Database,
  FolderGit2,
  Gamepad2,
  GraduationCap,
  LayoutGrid,
  Library,
  Newspaper,
  Palette,
  Share2,
  Shapes,
  Terminal,
  Wrench,
  Smartphone,
  Calendar,
  Briefcase,
  ClipboardList,
} from "lucide-react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible"
import { cn } from "../../src/lib/utils"

interface NavItemProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  isActive?: boolean
}

function NavItem({ href, icon, children, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
        isActive ? "text-primary bg-secondary" : "text-muted-foreground hover:text-primary hover:bg-secondary",
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between w-full px-3 py-2">
      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{children}</span>
      <ChevronDown className="h-4 w-4 text-zinc-500" />
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="w-60 border-r border-border bg-background h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto">
      <div className="flex flex-col h-full py-2">
        <div className="px-4 mb-2">
        <Button
className="w-full justify-start gap-2 bg-secondary border-border text-white hover:bg-border"
variant="outline"
onClick={() => window.location.href = '/NewPost'}
> 
<Plus className="h-4 w-4" />
New post
</Button>

        </div>

        <div className="px-2 space-y-1">
          <NavItem href="/feed" icon={<Home className="h-4 w-4" />} isActive>
            My feed
          </NavItem>
          <NavItem href="/following" icon={<Users className="h-4 w-4" />}>
            Following
          </NavItem>
          <NavItem href="/explore" icon={<Compass className="h-4 w-4" />}>
            Explore
          </NavItem>
          <NavItem href="/history" icon={<History className="h-4 w-4" />}>
            History
          </NavItem>
          <NavItem href="/leaderboard" icon={<Trophy className="h-4 w-4" />}>
            Leaderboard
          </NavItem>
        </div>

        <Collapsible className="px-2 mt-4">
          <CollapsibleTrigger className="w-full">
            <SectionTitle>Network</SectionTitle>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1">
            <NavItem href="/network/mine" icon={<Rocket className="h-4 w-4" />}>
              Mine
            </NavItem>
            <NavItem href="/network/frontend" icon={<Palette className="h-4 w-4" />}>
              Frontend
            </NavItem>
            <NavItem href="/network/backend" icon={<Database className="h-4 w-4" />}>
              Backend
            </NavItem>
            <NavItem href="/network/mobile" icon={<Smartphone className="h-4 w-4" />}>
              Mobile Dev
            </NavItem>
            <NavItem href="/network/ai" icon={<Cpu className="h-4 w-4" />}>
              AI & ML
            </NavItem>
            <NavItem href="/network/devops" icon={<Terminal className="h-4 w-4" />}>
              DevOps
            </NavItem>
            <NavItem href="/network/custom" icon={<Plus className="h-4 w-4" />}>
              Custom feed
            </NavItem>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="px-2 mt-4">
          <CollapsibleTrigger className="w-full">
            <SectionTitle>Bookmarks</SectionTitle>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1">
            <NavItem href="/bookmarks/all" icon={<Bookmark className="h-4 w-4" />}>
              All bookmarks
            </NavItem>
            <NavItem href="/bookmarks/reading-list" icon={<BookMarked className="h-4 w-4" />}>
              Reading list
            </NavItem>
            <NavItem href="/bookmarks/favorites" icon={<Star className="h-4 w-4" />}>
              Favorites
            </NavItem>
            <NavItem href="/bookmarks/shared" icon={<Share2 className="h-4 w-4" />}>
              Shared with me
            </NavItem>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="px-2 mt-4">
          <CollapsibleTrigger className="w-full">
            <SectionTitle>Discover</SectionTitle>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1">
            <NavItem href="/discover/trending" icon={<Trophy className="h-4 w-4" />}>
              Trending
            </NavItem>
            <NavItem href="/discover/latest" icon={<Clock className="h-4 w-4" />}>
              Latest
            </NavItem>
            <NavItem href="/discover/discussions" icon={<MessageCircle className="h-4 w-4" />}>
              Discussions
            </NavItem>
            <NavItem href="/discover/challenges" icon={<Code2 className="h-4 w-4" />}>
              Challenges
            </NavItem>
            <NavItem href="/discover/events" icon={<Calendar className="h-4 w-4" />}>
              Events
            </NavItem>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="px-2 mt-4">
          <CollapsibleTrigger className="w-full">
            <SectionTitle>Resources</SectionTitle>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1">
            <NavItem href="/resources/learning" icon={<GraduationCap className="h-4 w-4" />}>
              Learning paths
            </NavItem>
            <NavItem href="/resources/tools" icon={<Wrench className="h-4 w-4" />}>
              Developer tools
            </NavItem>
            <NavItem href="/resources/libraries" icon={<Library className="h-4 w-4" />}>
              Libraries
            </NavItem>
            <NavItem href="/resources/changelog" icon={<ClipboardList className="h-4 w-4" />}>
              Changelog
            </NavItem>
            <NavItem href="/resources/feedback" icon={<MessageSquare className="h-4 w-4" />}>
              Feedback
            </NavItem>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </aside>
  )
}

