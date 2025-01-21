import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function StatusPage() {
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
        <h1 className="text-4xl font-bold mb-8">Platform Status</h1>
        <div className="space-y-8">
          <div className="bg-green-500/10 border border-green-500 rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2 text-green-400">All Systems Operational</h2>
            <p className="text-zinc-400">Last updated: February 10, 2025 at 10:00 AM UTC</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Web Application</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">API</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Database</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Authentication Services</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Search Functionality</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Email Notification Service</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Subscription Payment Gateway</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Support Ticketing System</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Documentation and Knowledge Base</span>
              <span className="text-green-400">Operational</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg">
              <span className="text-lg">Security and Monitoring Systems</span>
              <span className="text-green-400">Operational</span>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-2">Incident History</h2>
            <div className="space-y-2">
              <div className="bg-zinc-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold">Downtime on January 10, 2025</h3>
                <p className="text-zinc-400">We experienced a downtime due to a database issue. Our team worked on resolving the issue and restored service at 3:00 PM UTC.</p>
                <p className="text-zinc-400">Status: Resolved</p>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4"></div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold">API Delay on January 5, 2025</h3>
                <p className="text-zinc-400">We experienced an API delay due to a network congestion issue. Our team worked on resolving the issue and restored normal service at 1:00 AM UTC.</p>
                <p className="text-zinc-400">Status: Resolved</p>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold">Database Maintenance on December 20, 2024</h3>
                <p className="text-zinc-400">We performed scheduled maintenance on our database to improve performance and security. The maintenance was completed successfully and all services were restored to normal operation.</p>
                <p className="text-zinc-400">Status: Completed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

