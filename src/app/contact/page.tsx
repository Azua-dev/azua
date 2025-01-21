import Link from "next/link"
import { Button } from "/components/ui/button"
import { Card } from "/components/ui/card"
import { Input } from "/components/ui/input"
import { Textarea } from "/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select"

export default function ContactPage() {
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
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-zinc-400 mb-4">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you. Fill out the form
              below, and we'll get back to you as soon as possible.
            </p>
            <Card className="bg-zinc-900 border-zinc-800 p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-1">
                    Subject
                  </label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-4">
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-medium mb-2">Email Support</h3>
                <p className="text-zinc-400">
                  For general inquiries:{" "}
                  <a href="mailto:info@azua.dev" className="text-purple-400 hover:underline">
                    info@azua.dev
                  </a>
                </p>
                <p className="text-zinc-400">
                  For technical support:{" "}
                  <a href="mailto:support@azua.dev" className="text-purple-400 hover:underline">
                    support@azua.dev
                  </a>
                </p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-medium mb-2">Community Forum</h3>
                <p className="text-zinc-400">
                  Join our community forum to get help from other developers and x.dev team members.
                </p>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="/community">Visit Forum</Link>
                </Button>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-medium mb-2">Social Media</h3>
                <p className="text-zinc-400 mb-2">
                  Follow us on social media for the latest updates, tips, and community highlights.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/xdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/company/xdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/xdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    GitHub
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

