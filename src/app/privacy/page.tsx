import Link from "next/link"
import { Button } from "/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">x.dev</span>
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400">Last updated: January 21, 2025</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-zinc-400">
              We collect information you provide directly to us when you create an account, update your profile, or
              interact with other users on the platform.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-zinc-400">
              We use the information we collect to provide, maintain, and improve our services, communicate with you,
              and protect our platform and users.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-zinc-400">
              We do not share your personal information with third parties except as described in this privacy policy or
              with your consent.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
            <p className="text-zinc-400">
              We take reasonable measures to help protect your personal information from loss, theft, misuse,
              unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Your Rights</h2>
            <p className="text-zinc-400">
              You have the right to access, update, or delete your personal information. You can do this through your
              account settings or by contacting us directly.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Cookies</h2>
            <p className="text-zinc-400">
              We use cookies and similar technologies to provide and improve our services and to understand how you use
              our platform.
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

