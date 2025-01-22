"use client"

import { Camera, X } from "lucide-react"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Profile</h1>

        <div className="space-y-8">
          <Card className="bg-zinc-900/50 border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-2">Profile Picture</h2>
            <p className="text-sm text-zinc-400 mb-4">
              Upload a picture to make your profile stand out and let people recognize your comments and contributions
              easily!
            </p>

            <div className="relative w-24 h-24 group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-frAmm2N1lIV8J6H7USV2T51FCE4U5g.png"
                alt="Profile"
                width={96}
                height={96}
                className="rounded-lg object-cover"
              />
              <button className="absolute -top-2 -right-2 bg-zinc-800 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <X className="w-4 h-4 text-zinc-400" />
              </button>
              <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <Camera className="w-6 h-6 text-white" />
              </button>
            </div>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Account Information</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-zinc-400">
                  Name
                </Label>
                <Input id="name" defaultValue="Terfa John" className="bg-zinc-800/50 border-zinc-700" />
              </div>

              <div>
                <Label htmlFor="username" className="text-zinc-400">
                  Username
                </Label>
                <Input id="username" defaultValue="k3t3r" className="bg-zinc-800/50 border-zinc-700" />
              </div>

              <div>
                <Label htmlFor="experience" className="text-zinc-400">
                  Experience Level
                </Label>
                <Select defaultValue="mid">
                  <SelectTrigger className="bg-zinc-800/50 border-zinc-700">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid-level (2-3 years)</SelectItem>
                    <SelectItem value="senior">Senior (4+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-2">Verified company badge</h2>
            <p className="text-sm text-zinc-400 mb-4">
              Verify your work email and get a verified company badge on your profile. We won&apos;t require any ID or
              personal information, just a verification code to complete the process.
            </p>

            <div className="flex gap-2">
              <Input placeholder="Work email" className="bg-zinc-800/50 border-zinc-700" />
              <Button variant="secondary">Verify</Button>
            </div>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">About</h2>
            <Textarea
              placeholder="Tell us about yourself..."
              defaultValue="Building 👨‍💻......"
              className="bg-zinc-800/50 border-zinc-700 min-h-[100px]"
            />
          </Card>

          <div className="flex justify-end">
            <Button className="bg-purple-500 hover:bg-purple-600">Save Changes</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

