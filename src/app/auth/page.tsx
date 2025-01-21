"use client"

import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Welcome to Azua.dev</h1>
          <p className="text-zinc-400">Join the elite 1% of developers who shape the future</p>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-12 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50 space-x-3"
            onClick={() => console.log("GitHub login")}
          >
            <Github className="w-5 h-5" />
            <span className="text-white">Continue with GitHub</span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700/50 space-x-3"
            onClick={() => console.log("Google login")}
          >
            <Image src="/placeholder.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
            <span className="text-white">Continue with Google</span>
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" className="border-zinc-700 data-[state=checked]:bg-purple-500" />
          <label htmlFor="terms" className="text-sm text-zinc-400">
            I agree to the{" "}
            <Link href="/terms" className="text-purple-400 hover:text-purple-300">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </Link>
          </label>
        </div>
      </div>
    </div>
  )
}

