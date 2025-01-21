/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="16" r="8" className="fill-purple-500" fillOpacity="0.8" />
            <circle cx="22" cy="16" r="8" className="fill-purple-400" fillOpacity="0.8" />
          </svg>
          <span className="text-2xl font-bold text-white">Azua.dev</span>
        </Link>
        <Button asChild variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
          <Link href="/auth">Join the top 1% devs free forever</Link>
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-20">
  <section className="text-center space-y-6">
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
      Where elite developers
      <br />
      <span className="text-purple-500">
        shape the future
      </span>
    </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Join the exclusive network for the top 1% of developers who code with passion and purpose. Elevate your
            craft, share your expertise, and build the next generation of technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600">
              <Link href="/auth">Join the top 1% devs free forever</Link>
            </Button>
          </div>
        </section>

        <section className="relative max-w-4xl mx-auto">
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Global Developer Network</h2>
                <p className="text-zinc-400">
                  Connect with developers from over 150 countries, share knowledge, and collaborate on groundbreaking
                  projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["AI", "Web3", "Cloud", "Mobile", "DevOps"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="relative h-full">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A855F7" />
                        <stop offset="100%" stopColor="#9333EA" />
                      </linearGradient>
                    </defs>
                    {/* Enhanced network visualization */}
                    <g className="opacity-80">
                      {/* Central hub */}
                      <circle cx="100" cy="100" r="20" fill="url(#gradient)" className="opacity-90" />

                      {/* Outer nodes */}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <g key={i}>
                          <circle
                            cx={100 + Math.cos((i * Math.PI * 2) / 12) * 70}
                            cy={100 + Math.sin((i * Math.PI * 2) / 12) * 70}
                            r="4"
                            fill="url(#gradient)"
                          />
                          {/* Connection lines */}
                          <path
                            d={`M ${100 + Math.cos((i * Math.PI * 2) / 12) * 70} ${
                              100 + Math.sin((i * Math.PI * 2) / 12) * 70
                            } L ${100 + Math.cos(((i + 1) * Math.PI * 2) / 12) * 70} ${
                              100 + Math.sin(((i + 1) * Math.PI * 2) / 12) * 70
                            }`}
                            stroke="url(#gradient)"
                            strokeWidth="1"
                            className="opacity-50"
                          />
                          {/* Connections to center */}
                          <path
                            d={`M 100 100 L ${100 + Math.cos((i * Math.PI * 2) / 12) * 70} ${
                              100 + Math.sin((i * Math.PI * 2) / 12) * 70
                            }`}
                            stroke="url(#gradient)"
                            strokeWidth="1"
                            className="opacity-30"
                          />
                          {/* Animated pulse effect */}
                          <circle
                            cx={100 + Math.cos((i * Math.PI * 2) / 12) * 70}
                            cy={100 + Math.sin((i * Math.PI * 2) / 12) * 70}
                            r="6"
                            fill="url(#gradient)"
                            className="opacity-20 animate-pulse"
                          />
                        </g>
                      ))}

                      {/* Additional connecting lines for depth */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <path
                          key={`cross-${i}`}
                          d={`M ${100 + Math.cos((i * Math.PI) / 3) * 70} ${
                            100 + Math.sin((i * Math.PI) / 3) * 70
                          } L ${100 + Math.cos(((i + 3) * Math.PI) / 3) * 70} ${
                            100 + Math.sin(((i + 3) * Math.PI) / 3) * 70
                          }`}
                          stroke="url(#gradient)"
                          strokeWidth="0.5"
                          className="opacity-20"
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center">
            <div className="flex justify-center space-x-2">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-yellow-500 text-2xl">
                  {star}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold mt-4 text-white">Trusted by</h2>
            <p className="text-4xl font-bold text-purple-400">1,000+ Developers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-12 bg-zinc-800/50 rounded-lg backdrop-blur-sm border border-zinc-700/30 flex items-center justify-center"
              >
                <Image src="/placeholder.svg" alt={`Company ${i}`} width={80} height={30} className="opacity-50" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="16" r="8" className="fill-purple-500" fillOpacity="0.8" />
                  <circle cx="22" cy="16" r="8" className="fill-purple-400" fillOpacity="0.8" />
                </svg>
                <span className="text-2xl font-bold">Azua.dev</span>
              </Link>
              <p className="text-zinc-400 text-sm">
                Azua.dev is a professional network for the top 1% of developers to learn, collaborate, and grow together
                with passion.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white text-sm">
                    Web version
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="text-zinc-400 hover:text-white text-sm">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-zinc-400 hover:text-white text-sm">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-zinc-400 hover:text-white text-sm">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="/opensource" className="text-zinc-400 hover:text-white text-sm">
                    Open source
                  </Link>
                </li>
                <li>
                  <Link href="/feature-requests" className="text-zinc-400 hover:text-white text-sm">
                    Feature requests
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-zinc-400 hover:text-white text-sm">
                    Online events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-white text-sm">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-zinc-400 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/advertise" className="text-zinc-400 hover:text-white text-sm">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4 text-xs text-zinc-400">
              <span>© 2025 Azua.dev Ltd.</span>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/guidelines" className="hover:text-white">
                Guidelines
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-zinc-400 text-sm">Networking from all over the world</span>
              <div className="flex space-x-1">
                <span>🇳🇬</span>
                <span>🇺🇸</span>
                <span>🇨🇦</span>
                <span>🇮🇳</span>
                <span>🇨🇭</span>
                <span>🇩🇰</span>
                <span>🇩🇪</span>
                <span>🇪🇸</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

