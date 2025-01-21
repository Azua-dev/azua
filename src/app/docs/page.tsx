import Link from "next/link"
import { Button } from "/components/ui/button"
import { Card } from "/components/ui/card"
import { Search } from "lucide-react"

export default function DocsPage() {
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
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/introduction" className="text-purple-400 hover:underline">
                  Introduction to x.dev
                </Link>
              </li>
              <li>
                <Link href="/docs/quickstart" className="text-purple-400 hover:underline">
                  Quick Start Guide
                </Link>
              </li>
              <li>
                <Link href="/docs/installation" className="text-purple-400 hover:underline">
                  Installation
                </Link>
              </li>
            </ul>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-4">Core Concepts</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/networking" className="text-purple-400 hover:underline">
                  Developer Networking
                </Link>
              </li>
              <li>
                <Link href="/docs/collaboration" className="text-purple-400 hover:underline">
                  Collaboration Tools
                </Link>
              </li>
              <li>
                <Link href="/docs/learning" className="text-purple-400 hover:underline">
                  Learning Paths
                </Link>
              </li>
            </ul>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/api/authentication" className="text-purple-400 hover:underline">
                  Authentication
                </Link>
              </li>
              <li>
                <Link href="/docs/api/endpoints" className="text-purple-400 hover:underline">
                  Endpoints
                </Link>
              </li>
              <li>
                <Link href="/docs/api/webhooks" className="text-purple-400 hover:underline">
                  Webhooks
                </Link>
              </li>
            </ul>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-4">Guides</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/guides/profile-optimization" className="text-purple-400 hover:underline">
                  Optimizing Your Profile
                </Link>
              </li>
              <li>
                <Link href="/docs/guides/networking-tips" className="textli>
                <Link href="/docs/guides/networking-tips" className="text-purple-400 hover:underline">
                  Networking Tips
                </Link>
              </li>
              <li>
                <Link href="/docs/guides/code-collaboration" className="text-purple-400 hover:underline">
                  Effective Code Collaboration
                </Link>
              </li>
            </ul>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/tutorials/first-project" className="text-purple-400 hover:underline">
                  Creating Your First Project
                </Link>
              </li>
              <li>
                <Link href="/docs/tutorials/code-review" className="text-purple-400 hover:underline">
                  Conducting Effective Code Reviews
                </Link>
              </li>
              <li>
                <Link href="/docs/tutorials/mentorship" className="text-purple-400 hover:underline">
                  Becoming a Mentor
                </Link>
              </li>
            </ul>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/faqs/account" className="text-purple-400 hover:underline">
                  Account Management
                </Link>
              </li>
              <li>
                <Link href="/docs/faqs/billing" className="text-purple-400 hover:underline">
                  Billing and Subscriptions
                </Link>
              </li>
              <li>
                <Link href="/docs/faqs/troubleshooting" className="text-purple-400 hover:underline">
                  Troubleshooting
                </Link>
              </li>
            </ul>
          </Card>
        </div>
      </main>
  </div>
  )
}

