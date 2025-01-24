import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Book, PenTool as Tool, Users } from 'lucide-react';

const resources = [
  {
    title: 'Developer Tools',
    description: 'Essential tools and utilities for modern development workflows.',
    icon: Tool,
    items: [
      {
        name: 'VS Code Extensions',
        description: 'Must-have extensions for productive development.',
        link: '/resources/tools#vscode',
      },
      {
        name: 'CLI Tools',
        description: 'Command-line tools to enhance your workflow.',
        link: '/resources/tools#cli',
      },
      {
        name: 'Development Environments',
        description: 'Setup guides for optimal development environments.',
        link: '/resources/tools#environments',
      },
    ],
  },
  {
    title: 'Cheat Sheets',
    description: 'Quick reference guides for languages and frameworks.',
    icon: Code2,
    items: [
      {
        name: 'React Hooks',
        description: 'Complete guide to React hooks with examples.',
        link: '/resources/cheatsheets#react-hooks',
      },
      {
        name: 'TypeScript Types',
        description: 'Common TypeScript patterns and types.',
        link: '/resources/cheatsheets#typescript',
      },
      {
        name: 'Git Commands',
        description: 'Essential git commands and workflows.',
        link: '/resources/cheatsheets#git',
      },
    ],
  },
  {
    title: 'Book Recommendations',
    description: 'Curated list of technical books for developers.',
    icon: Book,
    items: [
      {
        name: 'Frontend Development',
        description: 'Books for mastering frontend technologies.',
        link: '/resources/books#frontend',
      },
      {
        name: 'Software Architecture',
        description: 'Essential reads for software architects.',
        link: '/resources/books#architecture',
      },
      {
        name: 'Career Development',
        description: 'Books for growing your tech career.',
        link: '/resources/books#career',
      },
    ],
  },
  {
    title: 'Community',
    description: 'Connect with fellow developers and experts.',
    icon: Users,
    items: [
      {
        name: 'Discussion Forums',
        description: 'Engage in technical discussions.',
        link: '/resources/community#forums',
      },
      {
        name: 'Code Reviews',
        description: 'Get feedback on your code.',
        link: '/resources/community#reviews',
      },
      {
        name: 'Mentorship',
        description: 'Find mentors or become one.',
        link: '/resources/community#mentorship',
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">Developer Resources</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive collection of tools, guides, and resources to enhance your development journey.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {resources.map((section) => (
            <Card key={section.title} className="p-6">
              <div className="flex items-center gap-x-3">
                <section.icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="mt-2 text-muted-foreground">{section.description}</p>
              <div className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="rounded-lg border p-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    <Button variant="link" asChild className="mt-2 px-0">
                      <Link href={item.link}>Learn More →</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-primary p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold">Join Our Developer Community</h2>
            <p className="mt-2">
              Connect with fellow developers, share knowledge, and grow together. Get access to exclusive resources and expert guidance.
            </p>
            <Button variant="secondary" size="lg" asChild className="mt-6">
              <Link href="/resources/community">Join Community</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}