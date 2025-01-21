import Link from "next/link"
import { Button } from "/components/ui/button"
import { Card } from "/components/ui/card"

export default function AdvertisePage() {
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
        <h1 className="text-4xl font-bold mb-8">Advertise on x.dev</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Advertise with Us?</h2>
            <p className="text-zinc-400 mb-4">
              x.dev offers a unique opportunity to reach the top 1% of developers worldwide. Our platform is the go-to
              destination for elite programmers, tech leaders, and innovators in the software development industry.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">Targeted Audience</h3>
                <p className="text-zinc-400">Reach highly skilled developers across various specializations.</p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">High Engagement</h3>
                <p className="text-zinc-400">Our users are active and engaged, ensuring your message is seen.</p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">Brand Association</h3>
                <p className="text-zinc-400">Align your brand with excellence in the tech industry.</p>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Advertising Options</h2>
            <div className="space-y-4">
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-medium mb-2">Sponsored Content</h3>
                <p className="text-zinc-400 mb-4">
                  Share your expertise through in-depth articles, tutorials, or case studies that resonate with our
                  audience of top developers.
                </p>
                <Button variant="outline">Learn More</Button>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-medium mb-2">Display Advertising</h3>
                <p className="text-zinc-400 mb-4">
                  Showcase your product or service with strategically placed banner ads throughout our platform.
                </p>
                <Button variant="outline">View Placements</Button>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-medium mb-2">Newsletter Sponsorship</h3>
                <p className="text-zinc-400 mb-4">
                  Get your message directly to the inboxes of our elite developer community through our popular
                  newsletter.
                </p>
                <Button variant="outline">Check Availability</Button>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-medium mb-2">Event Sponsorship</h3>
                <p className="text-zinc-400 mb-4">
                  Sponsor our virtual events, webinars, or hackathons to gain maximum visibility among attendees.
                </p>
                <Button variant="outline">Explore Opportunities</Button>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-zinc-400 mb-4">
              Interested in advertising on x.dev? Our team is ready to help you create a custom advertising package that
              meets your goals and budget.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Our Advertising Team</Link>
            </Button>
          </section>
        </div>
      </main>
    </div>
  )
}

