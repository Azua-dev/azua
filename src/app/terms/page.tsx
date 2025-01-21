import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">Azua.dev</span>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400">Last updated: January 21, 2025</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Terms</h2>
            <p className="text-zinc-400">
              By accessing Azua.dev, you agree to be bound by these terms of service and agree that you are responsible for
              compliance with any applicable local laws.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Use License</h2>
            <p className="text-zinc-400">
              Permission is granted to temporarily access x.dev for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-zinc-400">
              The materials on x.dev are provided on an &apos;as is&apos; basis. Azua.dev makes no warranties, expressed or implied,
              and hereby disclaims and negates all other warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual
              property or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitations</h2>
            <p className="text-zinc-400">
              In no event shall Azua.dev or its suppliers be liable for any damages arising out of the use or inability to
              use the materials on Azua.dev.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Revisions</h2>
            <p className="text-zinc-400">
              The materials appearing on Azua.dev could include technical, typographical, or photographic errors. Azua.dev
              does not warrant that any of the materials on its website are accurate, complete or current.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

