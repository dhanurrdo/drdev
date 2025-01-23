import { Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:grid md:grid-cols-4 md:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8" />
              <span className="text-xl font-bold">DrDev</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering developers with expert tutorials, in-depth guides, and practical coding solutions.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold">Learning Paths</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/path/frontend" className="text-sm hover:text-primary">Frontend Development</Link>
              </li>
              <li>
                <Link href="/path/backend" className="text-sm hover:text-primary">Backend Development</Link>
              </li>
              <li>
                <Link href="/path/mobile" className="text-sm hover:text-primary">Mobile Development</Link>
              </li>
              <li>
                <Link href="/path/devops" className="text-sm hover:text-primary">DevOps & Cloud</Link>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/resources/tools" className="text-sm hover:text-primary">Developer Tools</Link>
              </li>
              <li>
                <Link href="/resources/cheatsheets" className="text-sm hover:text-primary">Cheat Sheets</Link>
              </li>
              <li>
                <Link href="/resources/books" className="text-sm hover:text-primary">Book Recommendations</Link>
              </li>
              <li>
                <Link href="/resources/community" className="text-sm hover:text-primary">Community</Link>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold">Join Our Community</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get weekly development tips and resources in your inbox.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DrDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}