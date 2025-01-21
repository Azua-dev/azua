/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { Shield, Users, MessageSquare, Heart, XCircle, AlertTriangle } from "lucide-react"

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-black">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="16" r="8" className="fill-purple-500" fillOpacity="0.8" />
            <circle cx="22" cy="16" r="8" className="fill-purple-400" fillOpacity="0.8" />
          </svg>
          <span className="text-2xl font-bold">Azua.dev</span>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Community Guidelines</h1>
            <p className="text-lg text-zinc-400">
              Our community thrives on respect, collaboration, and meaningful interactions. These guidelines ensure a
              positive environment for all members.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Respect and Inclusivity</h2>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Treat all community members with respect and kindness</li>
                    <li>• Embrace diversity and different perspectives</li>
                    <li>• No discrimination, harassment, or hate speech</li>
                    <li>• Use inclusive language and consider cultural differences</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Quality Content</h2>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Share meaningful, relevant content</li>
                    <li>• Provide constructive feedback</li>
                    <li>• Credit others&apos; work appropriately</li>
                    <li>• Keep discussions on-topic and professional</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Prohibited Behavior</h2>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• No spam or self-promotion</li>
                    <li>• No harassment or bullying</li>
                    <li>• No inappropriate or offensive content</li>
                    <li>• No sharing of confidential information</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Consequences</h2>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Violations may result in content removal</li>
                    <li>• Repeated violations lead to temporary suspension</li>
                    <li>• Severe violations result in permanent ban</li>
                    <li>• All decisions are at moderators&apos; discretion</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-400 mb-4">
              By using Azua.dev, you agree to follow these guidelines and help maintain a positive community
              environment.
            </p>
            <Button asChild variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
              <Link href="/feed">Return to Platform</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

