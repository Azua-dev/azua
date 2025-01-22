"use client"

import { Copy, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

const socialPlatforms = [
  { name: "X", icon: "/placeholder.svg" },
  { name: "WhatsApp", icon: "/placeholder.svg" },
  { name: "Facebook", icon: "/placeholder.svg" },
  { name: "Reddit", icon: "/placeholder.svg" },
  { name: "LinkedIn", icon: "/placeholder.svg" },
  { name: "Telegram", icon: "/placeholder.svg" },
  { name: "Email", icon: "/placeholder.svg" },
]

export default function InvitePage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Invite friends</h1>

        <div className="space-y-8">
          <div className="flex gap-2">
            <Input readOnly value="https://dly.to/w0NhLllmreS" className="bg-zinc-900/50 border-zinc-800" />
            <Button variant="secondary" className="gap-2">
              <Copy className="w-4 h-4" />
              Copy link
            </Button>
          </div>

          <div>
            <h2 className="text-sm font-medium text-zinc-400 mb-4">or invite via</h2>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-4">
              {socialPlatforms.map((platform) => (
                <button
                  key={platform.name}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Image src={platform.icon || "/placeholder.svg"} alt={platform.name} width={24} height={24} />
                  </div>
                  <span className="text-xs text-zinc-400">{platform.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Buddies you brought onboard</h2>
            <p className="text-zinc-400 mb-8">
              Meet the developers who joined Azua.dev through your invite. They might just be your ticket to future
              rewards 😉
            </p>

            <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
              <Users className="w-12 h-12 mb-4" />
              <p>No referred members found</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

