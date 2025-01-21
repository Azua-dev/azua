"use client"

import { Settings, User, Star, FileText, Users, LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { useState } from "react"

export function ProfileDropdown() {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...")
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-8 w-8 rounded-full overflow-hidden">
            <Image src="/placeholder.svg" alt="Profile" width={32} height={32} className="h-full w-full object-cover" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-zinc-900/95 border-zinc-800">
          <div className="flex items-center gap-3 p-3 border-b border-zinc-800">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-white">Terfa John</span>
                <Star className="h-3 w-3 text-purple-400 fill-purple-400" />
                <span className="text-xs text-purple-400">10</span>
              </div>
              <span className="text-xs text-zinc-400">@k3t3r • Joined June 2024</span>
            </div>
          </div>
          <div className="py-1">
            <DropdownMenuItem asChild className="px-3 py-2 text-sm text-zinc-100 focus:bg-zinc-800 focus:text-white">
              <Link href="/profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="px-3 py-2 text-sm text-purple-400 focus:bg-zinc-800">
              <Link href="/plus">
                <Star className="mr-2 h-4 w-4" />
                Upgrade to pro
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="px-3 py-2 text-sm text-zinc-100 focus:bg-zinc-800 focus:text-white">
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                Account details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="px-3 py-2 text-sm text-zinc-100 focus:bg-zinc-800 focus:text-white">
              <Link href="/reputation">
                <FileText className="mr-2 h-4 w-4" />
                Reputation
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="px-3 py-2 text-sm text-zinc-100 focus:bg-zinc-800 focus:text-white">
              <Link href="/devcard">
                <FileText className="mr-2 h-4 w-4" />
                Devcard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="px-3 py-2 text-sm text-zinc-100 focus:bg-zinc-800 focus:text-white">
              <Link href="/invite">
                <Users className="mr-2 h-4 w-4" />
                Invite friends
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-1 bg-zinc-800" />
            <DropdownMenuItem
              className="px-3 py-2 text-sm text-zinc-100 focus:bg-zinc-800 focus:text-white"
              onSelect={() => setShowLogoutDialog(true)}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
            <AlertDialogDescription>You will need to login again to access your account.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-zinc-800 hover:bg-zinc-700">Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-purple-500 hover:bg-purple-600" onClick={handleLogout}>
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

