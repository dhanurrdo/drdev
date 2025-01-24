import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const tutorials = {
    '1': {
        id: 1,
        title: 'Building Modern Web Apps with Next.js 14',
        content: `
# Building Modern Web Apps with Next.js 14

Next.js 14 introduces groundbreaking features that revolutionize web development. In this comprehensive tutorial, we'll explore how to build modern, performant web applications using the latest features of Next.js 14.

## Prerequisites
- Basic knowledge of React
- Familiarity with JavaScript/TypeScript
- Node.js installed on your machine

## What You'll Learn
- Server Components and when to use them
- Streaming and Progressive Rendering
- The new App Router
- Data Fetching patterns
- SEO optimization techniques

## Getting Started

### 1. Setting Up Your Development Environment

First, create a new Next.js 14 project:

\`\`\`bash
npx create-next-app@latest my-next-app --typescript --tailwind --app
cd my-next-app
\`\`\`

### 2. Understanding Server Components

Server Components are a game-changing feature in Next.js 14. They allow you to:
- Reduce client-side JavaScript
- Improve initial page load
- Better SEO performance

Here's a basic example:

\`\`\`tsx
// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  
  return (
    <main>
      <h1>Server Component Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
\`\`\`

### 3. Implementing Streaming

Streaming allows you to progressively render UI components:

\`\`\`tsx
import { Suspense } from 'react';
import Loading from './loading';

export default function Page() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

## Best Practices

1. **Route Organization**
   - Group related routes in folders
   - Use loading.tsx for suspense boundaries
   - Implement error.tsx for error handling

2. **Data Fetching**
   - Utilize server components for initial data fetch
   - Implement caching strategies
   - Use revalidation when needed

3. **Performance Optimization**
   - Implement proper code splitting
   - Use Image component for optimized images
   - Leverage static generation where possible

## Common Pitfalls to Avoid

1. Overusing client components
2. Ignoring metadata for SEO
3. Not implementing proper error boundaries

## Conclusion

Next.js 14 provides powerful tools for building modern web applications. By following these patterns and best practices, you can create fast, SEO-friendly, and maintainable applications.

## Next Steps

- Explore advanced routing patterns
- Implement authentication
- Add database integration
- Deploy your application

Stay tuned for more tutorials in our Next.js series!
    `,
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
        date: 'Mar 15, 2024',
        readTime: '15 min read',
        author: {
            name: 'Sarah Johnson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            title: 'Senior Frontend Developer',
        },
    },
    '2': {
        id: 2,
        title: 'Complete Guide to React Native Development',
        content: `
# Complete Guide to React Native Development

A comprehensive guide to building cross-platform mobile applications with React Native. Learn how to create native mobile experiences using your React knowledge.

## Prerequisites
- Solid understanding of React
- Basic JavaScript/TypeScript knowledge
- Node.js development environment

## Core Concepts

### 1. Setting Up React Native
- Installation and configuration
- Development environment setup
- Creating your first project

### 2. Core Components
- View and Text
- Image handling
- TouchableOpacity and Pressable
- ScrollView and FlatList

### 3. Styling in React Native
- Using StyleSheet
- Flexbox layouts
- Platform-specific styling
- Responsive design

### 4. Navigation
- React Navigation setup
- Stack navigation
- Tab navigation
- Drawer navigation

## Best Practices
- Component organization
- State management
- Performance optimization
- Testing strategies

More content coming soon...
    `,
        category: 'Mobile Development',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
        date: 'Mar 14, 2024',
        readTime: '20 min read',
        author: {
            name: 'Michael Chen',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
            title: 'Mobile Development Lead',
        },
    },
};

// Generate static params for all tutorial IDs
export async function generateStaticParams() {
    return Object.keys(tutorials).map((id) => ({
        id,
    }));
}

export default function TutorialPage({ params }: { params: { id: string } }) {
    const tutorial = tutorials[params.id as keyof typeof tutorials];

    if (!tutorial) {
        notFound();
    }

    return (
        <div className="min-h-screen py-12">
            <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link href="/tutorials" className="text-primary hover:underline">
                        ← Back to Tutorials
                    </Link>
                </div>

                <header className="mb-12">
                    <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
                        <span>{tutorial.category}</span>
                        <span>•</span>
                        <time>{tutorial.date}</time>
                        <span>•</span>
                        <span>{tutorial.readTime}</span>
                    </div>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight">{tutorial.title}</h1>

                    <div className="mt-6 flex items-center gap-x-4">
                        <img
                            src={tutorial.author.avatar}
                            alt={tutorial.author.name}
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                            <div className="font-medium">{tutorial.author.name}</div>
                            <div className="text-sm text-muted-foreground">{tutorial.author.title}</div>
                        </div>
                    </div>
                </header>

                <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="mb-12 aspect-video w-full rounded-lg object-cover"
                />

                {/* Ad Space */}
                <div className="my-8">
                    <div className="rounded-lg bg-muted p-6">
                        <div className="flex items-center justify-center">
                            <p className="text-muted-foreground">Advertisement</p>
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {tutorial.content.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>

                {/* Ad Space */}
                <div className="mt-12">
                    <div className="rounded-lg bg-muted p-6">
                        <div className="flex items-center justify-center">
                            <p className="text-muted-foreground">Advertisement</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8">
                    <h2 className="text-2xl font-bold">Share this tutorial</h2>
                    <div className="mt-4 flex gap-4">
                        <Button variant="outline">Twitter</Button>
                        <Button variant="outline">LinkedIn</Button>
                        <Button variant="outline">Facebook</Button>
                    </div>
                </div>
            </article>
        </div>
    );
}