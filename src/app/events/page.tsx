import Link from "next/link"
import { Button } from "/components/ui/button"
import { Card } from "/components/ui/card"

export default function EventsPage() {
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
        <h1 className="text-4xl font-bold mb-8">Online Events</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-2">AI in Web Development</h2>
            <p className="text-zinc-400 mb-4">Learn how AI is revolutionizing web development practices.</p>
            <p className="text-sm text-zinc-500 mb-4">Date: March 15, 2025 | Time: 2:00 PM UTC</p>
            <Button className="w-full">Register Now</Button>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-2">Advanced React Patterns</h2>
            <p className="text-zinc-400 mb-4">Dive deep into advanced React patterns and optimization techniques.</p>
            <p className="text-sm text-zinc-500 mb-4">Date: March 20, 2025 | Time: 3:00 PM UTC</p>
            <Button className="w-full">Register Now</Button>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800 p-6">
            <h2 className="text-2xl font-semibold mb-2">Blockchain for Developers</h2>
            <p className="text-zinc-400 mb-4">
              Explore the fundamentals of blockchain technology and its applications.
            </p>
            <p className="text-sm text-zinc-500 mb-4">Date: March 25, 2025 | Time: 1:00 PM UTC</p>
            <Button className="w-full">Register Now</Button>
          </Card>
        </div>
      </main>
    </div>
  )
}

