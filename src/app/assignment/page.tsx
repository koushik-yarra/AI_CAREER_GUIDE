import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Target, Package, BookText, ClipboardList, Search } from 'lucide-react';
import Link from 'next/link';

export default function AssignmentPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Search className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-bold font-headline">
              Assignment: Build a Simple AI Agent
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-destructive" />
              <h2 className="text-2xl font-semibold font-headline">Objective</h2>
            </div>
            <p className="text-muted-foreground">
              To assess your curiosity, learning agility, and problem-solving approach, not just your technical skills.
            </p>
            <p className="mt-2">
              Even if you&apos;re new to coding or AI, this is your chance to show how you think, explore, and work with AI tools like ChatGPT to build something meaningful.
            </p>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold font-headline">What You&apos;ll Build</h2>
            </div>
            <p>
              Design a simple AI Agent (like a chatbot or a task assistant) using the 4-step architecture model. You don&apos;t need to code everything perfectly. Instead, show how far you can go by:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
              <li>Asking the right questions</li>
              <li>Iterating on prompts</li>
              <li>Learning through ChatGPT</li>
            </ul>
          </section>
          
          <Separator />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <BookText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold font-headline">Reference Materials</h2>
            </div>
            <p className="mb-4">
              Use these resources to understand how AI Agents are designed and prompted:
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <span>Thread on AI Architecture (ChatGPT Share Link)</span>
                <Link href="#" className="ml-2 text-primary hover:underline">Read Here</Link>
              </li>
              <li>
                <span>4-Step AI Agent Design Approach (Google Doc)</span>
                <Link href="#" className="ml-2 text-primary hover:underline">View Here</Link>
              </li>
              <li>
                <span>Sample Prompts for Each Step (Web Development Use Case)</span>
                <Link href="#" className="ml-2 text-primary hover:underline">Reference Here</Link>
              </li>
            </ol>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold font-headline">Your Task</h2>
            </div>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Choose a Use Case:</strong>
                <p className="pl-6">Pick a simple problem that an AI Agent can help with. Example:</p>
                 <ul className="list-disc list-inside mt-2 space-y-1 pl-10">
                    <li>&quot;AI Agent to suggest daily writing prompts for bloggers.&quot;</li>
                    <li>&quot;AI Agent to help students revise for an exam.&quot;</li>
                 </ul>
              </li>
            </ol>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
