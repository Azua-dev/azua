import Link from "next/link"
import { Button } from "/components/ui/button"

export default function StatusPage() {
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
        <h1 className="text-4xl font-bold mb-8">Platform Status</h1>
        <div className="space-y-8">
          <div className="bg-green-500/10 border border-green-500 rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-400">All Systems Operational</h2>
            <p className="text-zinc-400">Last updated: February 10, 2025 at 10:00 AM UTC</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Web Application</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">API</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Database</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Authentication Services</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Search Functionality</span>
              <span className="text-green-400">Operational</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

