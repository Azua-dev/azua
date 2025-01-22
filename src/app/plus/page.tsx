/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { ArrowLeft, ChevronDown, Info, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { cn } from "../../lib/utils"

export default function PlusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0B1E] via-[#1A1033] to-[#0F0B1E]">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/feed">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="16" r="8" className="fill-zinc-200" fillOpacity="0.9" />
            <circle cx="22" cy="16" r="8" className="fill-zinc-300" fillOpacity="0.9" />
          </svg>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-2 text-pink-500 mb-6">
              <Sparkles className="h-5 w-5" />
              <span className="text-xl font-semibold">Plus</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Unlock more with Plus</h1>
            <p className="text-lg text-zinc-400 mb-8">
              Upgrade to Azua.dev Plus for an enhanced, ad-free experience with exclusive features and perks to level
              up your game.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium text-zinc-400 mb-4">Billing cycle</h2>
                <RadioGroup defaultValue="monthly-special" className="space-y-3">
                  <Card className="border border-purple-500/50 bg-purple-500/5">
                    <label className="flex items-center justify-between p-4 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="monthly-special" className="border-purple-500" />
                        <div>
                          <div className="font-medium text-white">Monthly Special Rate</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                              Early adopters
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-medium">$1.99 USD</div>
                    </label>
                  </Card>

                  <Card className="border-zinc-800 bg-zinc-900/50">
                    <label className="flex items-center justify-between p-4 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="monthly" />
                        <div className="font-medium text-white">Monthly</div>
                      </div>
                      <div className="text-white font-medium">$2.99 USD</div>
                    </label>
                  </Card>

                  <Card className="border-zinc-800 bg-zinc-900/50">
                    <label className="flex items-center justify-between p-4 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="annual" />
                        <div>
                          <div className="font-medium text-white">Annual</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                              2 Months Free
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-white font-medium">$20.99 USD</div>
                    </label>
                  </Card>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                {[
                  "No ads experience",              
                  "Organize bookmarks in folders",
                  "Advanced custom feeds",
                  "Block posts with unwanted words",
                  "Exclusive Plus badge",
                  "Private geng for Plus members",
                  "Support the team and make us smile",
                ].map((feature) => (
                  <div key={feature} className="flex items-center justify-between text-zinc-300">
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 text-purple-500"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.75 12.75L10 15.25L16.25 8.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-zinc-900/50 border-zinc-800">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">Please enter your details</h2>
                <p className="text-sm text-zinc-400 mb-6">
                  We collect this information to help combat fraud, and to keep your payment secure.
                </p>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">
                      Email address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      className="bg-zinc-800/50 border-zinc-700"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-zinc-400 mb-1.5">
                      Country
                    </label>
                    <Select>
                      <SelectTrigger className="bg-zinc-800/50 border-zinc-700">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ng">Nigeria</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Continue »</Button>

                  <p className="text-xs text-zinc-500">
                    This order process is conducted by our online reseller & Merchant,
                  </p>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <Link href="/terms" className="hover:text-zinc-300">
                      Terms & Conditions
                    </Link>
                    <Link href="/privacy" className="hover:text-zinc-300">
                      Privacy Policy
                    </Link>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

