import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/page-header";

const resources = [
  {
    title: "Coursera",
    description: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    href: "https://www.coursera.org",
    category: "Online Courses"
  },
  {
    title: "LinkedIn Learning",
    description: "Online courses to help you learn business, creative, and tech skills to achieve your personal and professional goals.",
    href: "https://www.linkedin.com/learning",
    category: "Online Courses"
  },
  {
    title: "edX",
    description: "Access 2000 free online courses from 140 leading institutions worldwide. Gain new skills and earn a certificate of completion.",
    href: "https://www.edx.org",
    category: "Online Courses"
  },
  {
    title: "LinkedIn Jobs",
    description: "Leverage the world’s largest professional network to connect with opportunity. Use LinkedIn Jobs to harness the power of your network.",
    href: "https://www.linkedin.com/jobs",
    category: "Job Boards"
  },
  {
    title: "Indeed",
    description: "Find jobs, salary tools, and company reviews. Search for full-time, part-time, and remote jobs.",
    href: "https://www.indeed.com",
    category: "Job Boards"
  },
  {
    title: "Glassdoor",
    description: "Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more.",
    href: "https://www.glassdoor.com",
    category: "Job Boards"
  },
  {
    title: "GitHub",
    description: "A platform for hosting and collaborating on code. A strong GitHub profile is essential for many tech roles.",
    href: "https://www.github.com",
    category: "Portfolio & Networking"
  },
  {
    title: "Medium",
    description: "Read, write, and share stories on any topic. A great place to learn from industry experts and build your own personal brand.",
    href: "https://medium.com",
    category: "Articles & Blogs"
  },
];

export default function ResourcesPage() {
  const categories = [...new Set(resources.map(r => r.category))];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Resource Hub"
        description="A curated collection of links to help you on your career journey. Explore courses, job boards, and more."
      />

      <div className="space-y-8">
        {categories.map(category => (
          <div key={category}>
            <h2 className="text-2xl font-bold font-headline mb-4">{category}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.filter(r => r.category === category).map(resource => (
                <Link href={resource.href} target="_blank" rel="noopener noreferrer" key={resource.title} className="block">
                  <Card className="h-full hover:border-primary hover:shadow-lg transition-all group">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-headline">{resource.title}</CardTitle>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <CardDescription className="pt-2">{resource.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
