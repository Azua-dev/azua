"use client"

import { Header } from "../../../components/header";
import { Sidebar } from "../../../components/sidebar";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Lightbulb, Bug, Pencil, WavesIcon as Wave } from "lucide-react";
import { useState } from 'react';

export default function FeedbackPage() {
  const [reportPostLink, setReportPostLink] = useState('');
  const [reportPostReason, setReportPostReason] = useState('');
  const [selectedReason, setSelectedReason] = useState('');

  const handleReportPostSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add logic to submit the report to x.dev
    console.log('Report post link:', reportPostLink);
    console.log('Report post reason:', reportPostReason);
    console.log('Selected reason:', selectedReason);
  };

  const handleScheduleMeeting = () => {
    const schedulingUrl = 'https://cal.com/terfa-john/quick-chat';
    window.open(schedulingUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="max-w-4xl mx-auto py-12">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl font-bold text-white">How can we make Azua.dev better?</h1>
              <p className="text-zinc-400 text-lg">
                Below, you&apos;ll find all the options to directly communicate your needs to our team. In case your feedback includes sensitive personal information feel free to email us at{" "}
                <a href="mailto:support@azua.dev" className="text-blue-400 hover:text-blue-300">
                  support@azua.dev
                </a>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-zinc-900/50 border-zinc-800 p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                </div>
                <h2 className="text-xl font-semibold text-white">Feature request</h2>
                <p className="text-zinc-400 flex-1">Have an idea for a new feature? Click below to submit it</p>
                <Button className="w-full" variant="outline">
                  REQUEST
                </Button>
              </Card>
              <Card className="bg-zinc-900/50 border-zinc-800 p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Bug className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold text-white">Report a bug</h2>
                <p className="text-zinc-400 flex-1">Uh oh. Is something broken? Please help us fix it by submitting an issue</p>
                <Button className="w-full" variant="outline">
                  REPORT
                </Button>
              </Card>
              <Card className="bg-zinc-900/50 border-zinc-800 p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Pencil className="w-6 h-6 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold text-white">General Feedback</h2>
                <p className="text-zinc-400 flex-1">Anything else you&apos;d like us to know? We&apos;re listening!</p>
                <Button className="w-full" variant="outline">
                  SUBMIT
                </Button>
              </Card>
            </div>
            <Card className="bg-zinc-900/50 border-zinc-800 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Wave className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">Let&apos;s talk</h2>
                    <p className="text-zinc-400">
                      We love meeting devs from our community! In this session, we will talk about how we can help you get the most out of our product :)
                    </p>
                  </div>
                </div>
                <Button onClick={handleScheduleMeeting}>
                  SCHEDULE A MEETING
                </Button>
              </div>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">Report a post on Azua.dev</h2>
                    <p className="text-zinc-400">
                      If you see a post on Azua.dev that violates our community guidelines, please report it here.
                    </p>
                    <form onSubmit={handleReportPostSubmit}>
                      <div className="mb-4">
                        <label className="block text-zinc-400 text-sm mb-2" htmlFor="report-post-link">Post link:</label>
                        <input className="w-full p-2 bg-zinc-900/50 border-zinc-800 rounded-lg" id="report-post-link" type="text" value={reportPostLink} onChange={(e) => setReportPostLink(e.target.value)} />
                      </div>
                      <div className="mb-4">
                        <label className="block text-zinc-400 text-sm mb-2" htmlFor="report-post-reason">Reason for reporting:</label>
                        <select className="w-full p-2 bg-zinc-900/50 border-zinc-800 rounded-lg" id="report-post-reason" value={selectedReason} onChange={(e) => setSelectedReason(e.target.value)}>
                          <option value="">Select a reason</option>
                          <option value="spam">Spam</option>
                          <option value="harassment">Harassment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      {selectedReason === 'other' && (
                        <div className="mb-4">
                          <label className="block text-zinc-400 text-sm mb-2" htmlFor="report-post-reason-other">Please specify:</label>
                          <textarea className="w-full p-2 bg-zinc-900/50 border-zinc-800 rounded-lg" id="report-post-reason-other" value={reportPostReason} onChange={(e) => setReportPostReason(e.target.value)} />
                        </div>
                      )}
                      <Button className="w-full" variant="outline" type="submit">
                        REPORT POST
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
