import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const mobileTutorials = [
  {
    id: 1,
    title: 'React Native Performance Optimization',
    excerpt: 'Learn advanced techniques for optimizing React Native apps, from memory management to render optimization.',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    date: 'Mar 16, 2024',
    readTime: '20 min read',
  },
  {
    id: 2,
    title: 'Native Module Development',
    excerpt: 'Create custom native modules for React Native to leverage platform-specific features.',
    category: 'Native Development',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb',
    date: 'Mar 15, 2024',
    readTime: '25 min read',
  },
  {
    id: 3,
    title: 'Cross-Platform UI Design',
    excerpt: 'Master the art of creating consistent UI/UX across iOS and Android platforms.',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    date: 'Mar 14, 2024',
    readTime: '15 min read',
  },
];

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">Mobile Development</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Build professional mobile applications for iOS and Android using modern cross-platform technologies. Learn best practices, optimization techniques, and native development.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {mobileTutorials.map((tutorial) => (
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
          <h2 className="text-2xl font-bold">Mobile Development Paths</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl font-semibold">React Native Development</h3>
              <p className="mt-2 text-muted-foreground">Master cross-platform mobile development with React Native from basics to advanced concepts.</p>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/path/react-native">Start Learning</Link>
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold">Native iOS & Android</h3>
              <p className="mt-2 text-muted-foreground">Learn platform-specific development for deeper integration and optimal performance.</p>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/path/native">Start Learning</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}