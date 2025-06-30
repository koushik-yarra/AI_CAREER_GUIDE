import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FileText, Route, MessageSquare, User, Library } from "lucide-react";

const tools = [
  {
    title: "Resume Refiner",
    description: "Get AI-powered feedback to improve your resume's impact, clarity, and ATS compatibility.",
    href: "/resume-refiner",
    icon: FileText
  },
  {
    title: "Career Path Navigator",
    description: "Discover career paths tailored to your skills, interests, and educational background.",
    href: "/career-path-navigator",
    icon: Route
  },
  {
    title: "Interview Prep Tool",
    description: "Generate mock interview questions and sample answers for your target role.",
    href: "/interview-prep",
    icon: MessageSquare
  },
  {
    title: "Profile Builder",
    description: "Build a comprehensive professional profile to power your career development.",
    href: "/profile",
    icon: User
  },
  {
    title: "Resource Hub",
    description: "Explore a curated list of resources to help you learn, grow, and find opportunities.",
    href: "/resources",
    icon: Library
  }
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome to CareerCompass AI</h1>
        <p className="text-muted-foreground">Your central hub for AI-powered career development tools.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.title} className="flex flex-col transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                   <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-headline text-lg">{tool.title}</CardTitle>
                  <CardDescription className="mt-1">{tool.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="mt-auto bg-slate-50/50 dark:bg-zinc-800/50 p-4 rounded-b-lg">
              <Button asChild className="w-full" variant="secondary">
                <Link href={tool.href}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
