/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { Bell, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "../../src/components/ui/button"
import { Input } from "../../src/components/ui/input"
import { ProfileDropdown } from "./profile-dropdown"

export function Header() {
  return (
    <header className="h-14 border-b border-zinc-800 bg-black sticky top-0 z-50">
      <div className="container h-full flex items-center">
        <Link href="/feed" className="flex items-center space-x-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="12" r="6" className="fill-purple-500" fillOpacity="0.9" />
            <circle cx="16" cy="12" r="6" className="fill-purple-400" fillOpacity="0.9" />
          </svg>
          <span className="text-base font-semibold text-white">Azua.dev</span>
        </Link>

        <div className="flex-1 max-w-2xl ml-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input type="search" placeholder="Search..." className="w-full pl-9 bg-zinc-800 border-zinc-700" />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-1.5 font-mono text-[10px] font-medium text-zinc-400">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <Button variant="default" size="sm" className="bg-purple-500 hover:bg-purple-600">
            Upgrade to plus
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <ProfileDropdown />
        </div>
      </div>
    </header>
  )
}

