import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code2, Users, BookOpen, Trophy } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Active Users', value: '10,000+' },
    { label: 'Tutorials', value: '500+' },
    { label: 'Expert Authors', value: '50+' },
    { label: 'Learning Paths', value: '20+' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Technical Writer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Former senior developer turned technical educator with 10+ years of industry experience.',
    },
    {
      name: 'Michael Chen',
      role: 'Mobile Development Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'Specialist in React Native and native mobile development with a passion for teaching.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'Cloud infrastructure expert focusing on modern deployment practices and automation.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">About DrDev</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering developers worldwide with expert-led tutorials, comprehensive guides, and practical insights into modern software development.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center">Our Mission</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <div className="flex items-center gap-x-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Quality Education</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Provide comprehensive, up-to-date learning resources for developers at all skill levels.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-x-3">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Community Growth</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Foster a supportive community where developers can learn, share, and grow together.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-x-3">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Professional Development</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                Help developers advance their careers through practical, industry-relevant content.
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center">Our Team</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold">{member.name}</h3>
                  <div className="text-sm text-primary">{member.role}</div>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-primary p-8 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold">Start Your Learning Journey</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Join thousands of developers who are already learning and growing with DrDev. Get access to our comprehensive tutorials, expert guidance, and supportive community.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/tutorials">Browse Tutorials</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent">
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}