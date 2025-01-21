import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"

export default function FeatureRequestsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Azua.dev</span>
        </Link>
        <Button asChild variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
          <Link href="/auth">Join the top 1% devs free forever</Link>
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Feature Requests</h1>
        <Card className="bg-zinc-900 border-zinc-800 p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Submit a Feature Request</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-zinc-400 mb-1">
                Feature Title
              </label>
              <Input id="title" placeholder="Enter a concise title for your feature request" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-zinc-400 mb-1">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Describe the feature you'd like to see and how it would benefit the community"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
        </Card>
        <h2 className="text-2xl font-semibold mb-4">Popular Requests</h2>
        <div className="space-y-4">
          <Card className="bg-zinc-900 border-zinc-800 p-4">
            <h3 className="text-lg font-medium mb-2">Integrated Code Editor</h3>
            <p className="text-zinc-400 mb-2">Add a built-in code editor for quick code sharing and collaboration.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Votes: 1,300</span>
              <Button variant="outline" size="sm">
                Vote
              </Button>
            </div>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-4">
            <h3 className="text-lg font-medium mb-2">AI-Powered Code Review</h3>
            <p className="text-zinc-400 mb-2">
              Implement an AI system to provide automated code reviews and suggestions.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Votes: 600</span>
              <Button variant="outline" size="sm">
                Vote
              </Button>
            </div>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-4">
            <h3 className="text-lg font-medium mb-2">Virtual Coding Bootcamps</h3>
            <p className="text-zinc-400 mb-2">Organize virtual coding bootcamps for intensive learning experiences.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">Votes: 450</span>
              <Button variant="outline" size="sm">
                Vote
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

