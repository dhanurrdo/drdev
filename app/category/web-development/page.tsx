import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const webDevTutorials = [
  {
    id: 1,
    title: 'Modern Frontend Architecture',
    excerpt: 'Learn about micro-frontends, module federation, and modern architectural patterns for scalable web applications.',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b',
    date: 'Mar 16, 2024',
    readTime: '18 min read',
  },
  {
    id: 2,
    title: 'Advanced State Management',
    excerpt: 'Deep dive into state management solutions like Redux Toolkit, Zustand, and Jotai with practical examples.',
    category: 'State Management',
    image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085',
    date: 'Mar 15, 2024',
    readTime: '15 min read',
  },
  {
    id: 3,
    title: 'Web Performance Optimization',
    excerpt: 'Master techniques for optimizing web performance, from code splitting to resource loading strategies.',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    date: 'Mar 14, 2024',
    readTime: '20 min read',
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">Web Development</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Master modern web development with our comprehensive guides and tutorials. From frontend frameworks to backend architecture, we cover everything you need to know.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {webDevTutorials.map((tutorial) => (
            <Card key={tutorial.id} className="flex flex-col overflow-hidden">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="h-48 w-full object-cover"
              />
              <div className="flex-1 p-6">
                <div className="flex items-center gap-x-2">
                  <span className="text-sm text-primary">{tutorial.category}</span>
                  <span className="text-sm text-muted-foreground">• {tutorial.readTime}</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold">{tutorial.title}</h2>
                <p className="mt-2 text-muted-foreground">{tutorial.excerpt}</p>
                <Button asChild className="mt-4">
                  <Link href={`/tutorial/${tutorial.id}`}>Read Tutorial</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Learning Paths</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <p className="mt-2 text-muted-foreground">Master modern frontend development with React, Next.js, and related technologies.</p>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/path/frontend">Start Learning</Link>
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold">Full Stack Development</h3>
              <p className="mt-2 text-muted-foreground">Learn to build complete web applications from frontend to backend.</p>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/path/fullstack">Start Learning</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}