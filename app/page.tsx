import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredTutorials = [
  {
    id: 1,
    title: 'Building Modern Web Apps with Next.js 14',
    excerpt: 'Learn how to leverage the latest features of Next.js 14 to build fast, SEO-friendly web applications with server components and streaming.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    date: 'Mar 15, 2024',
    readTime: '15 min read',
  },
  {
    id: 2,
    title: 'Complete Guide to React Native Development',
    excerpt: 'Master cross-platform mobile development with React Native. From setup to deployment, learn best practices and advanced patterns.',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    date: 'Mar 14, 2024',
    readTime: '20 min read',
  },
  {
    id: 3,
    title: 'DevOps Pipeline Automation with GitHub Actions',
    excerpt: 'Implement a complete CI/CD pipeline using GitHub Actions. Automate testing, building, and deployment of your applications.',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
    date: 'Mar 13, 2024',
    readTime: '12 min read',
  },
];

const latestArticles = [
  {
    id: 4,
    title: 'Understanding TypeScript Generic Types',
    excerpt: 'Deep dive into TypeScript generics and how they can make your code more reusable and type-safe.',
    category: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: 'Mar 12, 2024',
    readTime: '10 min read',
  },
  {
    id: 5,
    title: 'Microservices with Node.js and Docker',
    excerpt: 'Learn how to build and deploy scalable microservices using Node.js, Express, and Docker containers.',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890',
    date: 'Mar 11, 2024',
    readTime: '18 min read',
  },
  {
    id: 6,
    title: 'Advanced CSS Layout Techniques',
    excerpt: 'Master modern CSS layouts with Grid, Flexbox, and Container Queries for responsive designs.',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2',
    date: 'Mar 10, 2024',
    readTime: '15 min read',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Level Up Your Development Skills
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tutorials, in-depth guides, and practical solutions for modern software development. Join thousands of developers learning and growing with DrDev.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/tutorials">Start Learning</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resources">Browse Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Tutorials</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTutorials.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-sm text-muted-foreground">• {post.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                  <Button variant="link" asChild className="mt-4 px-0">
                    <Link href={`/tutorial/${post.id}`}>Read Tutorial →</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-32 rounded-lg bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Advertisement Space</p>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-accent/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm text-primary">{post.category}</span>
                    <span className="text-sm text-muted-foreground">• {post.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                  <Button variant="link" asChild className="mt-4 px-0">
                    <Link href={`/article/${post.id}`}>Read Article →</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Join Our Developer Community
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Get weekly tutorials, tips, and resources delivered straight to your inbox.
                Join over 10,000 developers who are already learning with us.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md px-4 py-2 text-sm border-0"
                />
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}