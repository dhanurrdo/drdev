import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const devopsTutorials = [
  {
    id: 1,
    title: 'Kubernetes in Production',
    excerpt: 'Learn how to deploy, manage, and scale containerized applications in production using Kubernetes.',
    category: 'Container Orchestration',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9',
    date: 'Mar 16, 2024',
    readTime: '25 min read',
  },
  {
    id: 2,
    title: 'CI/CD Pipeline Automation',
    excerpt: 'Build robust CI/CD pipelines using GitHub Actions, Jenkins, and other modern tools.',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb',
    date: 'Mar 15, 2024',
    readTime: '20 min read',
  },
  {
    id: 3,
    title: 'Infrastructure as Code',
    excerpt: 'Master infrastructure automation using Terraform, CloudFormation, and Ansible.',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    date: 'Mar 14, 2024',
    readTime: '22 min read',
  },
];

export default function DevOpsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">DevOps & Cloud</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Master modern DevOps practices and cloud technologies. Learn infrastructure automation, containerization, CI/CD, and cloud-native development.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {devopsTutorials.map((tutorial) => (
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
          <h2 className="text-2xl font-bold">DevOps Learning Paths</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl font-semibold">Cloud Native Development</h3>
              <p className="mt-2 text-muted-foreground">Learn to build and deploy applications using cloud-native technologies and practices.</p>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/path/cloud-native">Start Learning</Link>
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold">DevOps Engineering</h3>
              <p className="mt-2 text-muted-foreground">Master the tools and practices for modern DevOps and SRE roles.</p>
              <Button variant="outline" asChild className="mt-4">
                <Link href="/path/devops">Start Learning</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}