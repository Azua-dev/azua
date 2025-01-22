/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Trophy } from "lucide-react";
import Image from "next/image";
import { Card } from "../../components/ui/card";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";

interface LeaderboardUser {
  name: string;
  username: string;
  avatar: string;
  score: string | number;
  badge?: number;
}

interface Company {
  name: string;
  logo: string;
  rank: number;
}

const leaderboardSections = [
  {
    title: "Highest reputation",
    users: [
      { name: "kaytay", username: "k3t3r", avatar: "/placeholder.svg", score: "1.56K", badge: 1560 },
      { name: "kaytay", username: "@kramer", avatar: "/placeholder.svg", score: "500", badge: 500 },
    ],
  },
  {
    title: "Longest streak",
    users: [
      { name: "Ole-Martin", username: "@ombratteng", avatar: "/placeholder.svg", score: "734", badge: 46700 },
      { name: "Do Hoang Dinh Tien", username: "@tiendo152", avatar: "/placeholder.svg", score: "678", badge: 10 },
    ],
  },
  {
    title: "Most verified employees",
    companies: [
      { name: "Google", logo: "/placeholder.svg", rank: 1 },
      { name: "Amazon", logo: "/placeholder.svg", rank: 2 },
      { name: "Github", logo: "/placeholder.svg", rank: 3 },
    ],
  },
];

const LeaderboardRow = ({ user, rank }: { user: LeaderboardUser; rank: number }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary">
    <div className="w-16 text-right font-mono text-muted-foreground">{user.score}</div>
    <div className="flex items-center gap-2 flex-1 min-w-0">
      {rank <= 3 && <div className="text-lg">{["🏆", "🥈", "🥉"][rank - 1]}</div>}
      <Image src={user.avatar || "/placeholder.svg"} alt={user.name} width={32} height={32} className="rounded-full" />
      <div className="truncate">
        <div className="flex items-center gap-1">
          <span className="font-medium text-foreground">{user.name}</span>
          {user.badge && (
            <>
              <Trophy className="h-3 w-3 text-primary fill-primary" />
              <span className="text-xs text-primary">{user.badge}</span>
            </>
          )}
        </div>
        <div className="text-xs text-muted-foreground">{user.username}</div>
      </div>
    </div>
  </div>
);

const CompanyRow = ({ company, rank }: { company: Company; rank: number }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary">
    <div className="w-8 text-right font-mono text-muted-foreground">{rank}</div>
    <div className="flex items-center gap-2">
      {rank <= 3 && <div className="text-lg">{["🏆", "🥈", "🥉"][rank - 1]}</div>}
      <Image src={company.logo || "/placeholder.svg"} alt={company.name} width={24} height={24} className="rounded-sm" />
      <span className="font-medium text-foreground">{company.name}</span>
    </div>
  </div>
);

const LeaderboardSection = ({
  title,
  users,
  companies,
}: {
  title: string;
  users?: LeaderboardUser[];
  companies?: Company[];
}) => (
  <Card className="bg-card border-border">
    <div className="p-4 border-b border-border">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
    </div>
    <div className="p-2">
      {users &&
        users.map((user, index) => <LeaderboardRow key={user.username} user={user} rank={index + 1} />)}
      {companies &&
        companies.map((company, index) => <CompanyRow key={company.name} company={company} rank={index + 1} />)}
    </div>
  </Card>
);

const LeaderboardPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Leaderboard</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaderboardSections.slice(0, 2).map(({ title, users }) => (
              <LeaderboardSection key={title} title={title} users={users} />
            ))}
            <LeaderboardSection
              title="Most verified employees"
              companies={leaderboardSections[2].companies}
            />
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default LeaderboardPage;

