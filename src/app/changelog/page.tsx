import Link from "next/link"
import { Button } from "/components/ui/button"

export default function ChangelogPage() {
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
        <h1 className="text-4xl font-bold mb-8">Changelog</h1>
        <div className="space-y-8">
          <div className="border-l-2 border-purple-500 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Version 1.2.0 - February 1, 2025</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Added new AI-powered code review feature</li>
              <li>Improved search functionality with advanced filters</li>
              <li>Introduced dark mode for better night-time coding sessions</li>
            </ul>
          </div>
          <div className="border-l-2 border-purple-500 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Version 1.1.0 - January 15, 2025</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Launched collaborative coding rooms for real-time pair programming</li>
              <li>Integrated with popular version control systems</li>
              <li>Enhanced user profiles with skill endorsements</li>
            </ul>
          </div>
          <div className="border-l-2 border-purple-500 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Version 1.0.0 - January 1, 2025</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Initial release of x.dev platform</li>
              <li>Basic features including user profiles, posts, and networking</li>
              <li>Implemented core algorithms for developer matching</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

