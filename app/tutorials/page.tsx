import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tutorials = [
  {
    id: 1,
    title: 'Building Modern Web Apps with Next.js 14',
    content: `
      Next.js 14 introduces groundbreaking features that revolutionize web development. In this comprehensive tutorial, we'll cover:

      ## What You'll Learn
      - Server Components and when to use them
      - Streaming and Progressive Rendering
      - The new App Router
      - Data Fetching patterns
      - SEO optimization techniques

      ## Prerequisites
      - Basic knowledge of React
      - Familiarity with JavaScript/TypeScript
      - Node.js installed on your machine

      ## Getting Started
      First, let's create a new Next.js 14 project...
    `,
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    date: 'Mar 15, 2024',
    readTime: '15 min read',
  },
  // More tutorials...
];

export default function TutorialsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">Development Tutorials</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            In-depth, practical tutorials to help you master modern development technologies and techniques.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="flex flex-col overflow-hidden">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="h-64 w-full object-cover"
              />
              <div className="flex-1 p-6">
                <div className="flex items-center gap-x-2">
                  <span className="text-sm text-primary">{tutorial.category}</span>
                  <span className="text-sm text-muted-foreground">• {tutorial.readTime}</span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold">{tutorial.title}</h2>
                <p className="mt-4 text-muted-foreground line-clamp-3">
                  {tutorial.content.split('\n')[0]}
                </p>
                <Button asChild className="mt-6">
                  <Link href={`/tutorial/${tutorial.id}`}>Read Full Tutorial</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Ad Space */}
        <div className="mt-16">
          <div className="rounded-lg bg-muted p-6">
            <div className="flex items-center justify-center">
              <p className="text-muted-foreground">Advertisement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}