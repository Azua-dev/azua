"use client"

import { Download } from "lucide-react"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"

export default function DevCardPage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Share your #DevCard!</h1>

        <div className="flex justify-center mb-8">
          <RadioGroup defaultValue="horizontal" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vertical" id="vertical" />
              <Label htmlFor="vertical" className="text-zinc-400">
                Vertical
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="horizontal" id="horizontal" />
              <Label htmlFor="horizontal" className="text-zinc-400">
                Horizontal
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Card className="bg-gradient-to-br from-orange-400 to-purple-600 p-6 mb-8">
          <div className="flex gap-6">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-2">Terfa John</h2>
              <div className="flex items-center gap-2 text-white/80 mb-4">
                <span>@k3t3r</span>
                <span>•</span>
                <span>Jun 30, 2024</span>
              </div>
              <p className="text-white/90 mb-6">Building 👨‍💻......</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["#webdev", "#devtools", "#open-source", "#ai", "#machine-learning"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-black/20 text-white/90 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-frAmm2N1lIV8J6H7USV2T51FCE4U5g.png"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="flex gap-4 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">60</div>
                  <div className="text-sm">Reputation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm">Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">36</div>
                  <div className="text-sm">Posts read</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-center">
          <Button size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            Download DevCard
          </Button>
        </div>
      </main>
    </div>
  )
}

