import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"

export default function AboutPage() {
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
        <h1 className="text-4xl font-bold mb-8">About Azua.dev</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-zinc-400">
              At Azua.dev, we&apos;re on a mission to empower the world&apos;s top developers by providing a platform that fosters
              collaboration, learning, and growth. We believe that by connecting the brightest minds in tech, we can
              accelerate innovation and shape the future of software development.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-zinc-400">
              Founded in 2024 by a group of passionate developers, Azua.dev was born out of the need for a dedicated
              space where elite programmers could connect, share knowledge, and work on groundbreaking projects. What
              started as a small community has grown into a global network of the top 1% of developers from diverse
              backgrounds and specialties.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">Excellence</h3>
                <p className="text-zinc-400">
                  We strive for excellence in everything we do, from code quality to user experience.
                </p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">Collaboration</h3>
                <p className="text-zinc-400">
                  We believe in the power of teamwork and knowledge sharing to drive innovation.
                </p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">Continuous Learning</h3>
                <p className="text-zinc-400">
                  We&apos;re committed to lifelong learning and staying at the forefront of technology.
                </p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">Diversity</h3>
                <p className="text-zinc-400">
                  We celebrate diversity in all its forms and believe it leads to better solutions.
                </p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">Ethics</h3>
                <p className="text-zinc-400">
                  We uphold the highest ethical standards in our practices and decision-making.
                </p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-4">
                <h3 className="text-lg font-medium mb-2">Innovation</h3>
                <p className="text-zinc-400">
                  We encourage creative thinking and push the boundaries of what&apos;s possible.
                </p>
              </Card>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
            <p className="text-zinc-400 mb-4">
              If you&apos;re passionate about coding and want to be part of a community that&apos;s shaping the future of
              technology, we invite you to join Azua.dev. Together, we can build amazing things.
            </p>
            <Button asChild>
              <Link href="/auth">Join the top 1% devs free forever</Link>
            </Button>
          </section>
        </div>
      </main>
    </div>
  )
}

