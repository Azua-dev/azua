import Link from "next/link"
import { Button } from "/components/ui/button"
import { Card } from "/components/ui/card"
import { ExternalLink, GitlabIcon as GitHub, Star } from "lucide-react"

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">x.dev</span>
        </Link>
        <Button asChild variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
          <Link href="/auth">Join the top 1% devs free forever</Link>
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Open Source</h1>
        <p className="text-xl text-zinc-400 mb-8">
          At x.dev, we believe in the power of open source. Check out our projects and contribute to the future of
          developer collaboration.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-2">x.dev Core</h2>
            <p className="text-zinc-400 mb-4">The main repository for the x.dev platform.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                <span className="text-zinc-400">1.2k</span>
              </div>
              <span className="text-zinc-400">TypeScript</span>
            </div>
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a href="https://github.com/x-dev/core" target="_blank" rel="noopener noreferrer">
                  <GitHub className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/x-dev/core" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-2">x.dev UI</h2>
            <p className="text-zinc-400 mb-4">A collection of reusable UI components for x.dev.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                <span className="text-zinc-400">876</span>
              </div>
              <span className="text-zinc-400">React</span>
            </div>
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a href="https://github.com/x-dev/ui" target="_blank" rel="noopener noreferrer">
                  <GitHub className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/x-dev/ui" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-2">x.dev API</h2>
            <p className="text-zinc-400 mb-4">The official API for integrating with x.dev services.</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                <span className="text-zinc-400">543</span>
              </div>
              <span className="text-zinc-400">Node.js</span>
            </div>
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a href="https://github.com/x-dev/api" target="_blank" rel="noopener noreferrer">
                  <GitHub className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/x-dev/api" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

