import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Target, Package, BookText, ClipboardList, Search, Lightbulb } from 'lucide-react';
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
            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="text-lg font-bold text-primary pt-1">1.</div>
                    <div>
                        <h3 className="text-lg font-semibold">Choose a Use Case</h3>
                        <p className="mt-1 text-muted-foreground">Pick a simple problem that an AI Agent can help with. Example:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-muted-foreground">
                            <li>&quot;AI Agent to suggest daily writing prompts for bloggers.&quot;</li>
                            <li>&quot;AI Agent to help students revise for an exam.&quot;</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="text-lg font-bold text-primary pt-1">2.</div>
                    <div>
                        <h3 className="text-lg font-semibold">Design the 4 Layers of Prompts</h3>
                        <p className="mt-1 text-muted-foreground">For your use case, create prompts for:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-muted-foreground">
                            <li><strong>Input Understanding</strong> (What is the user asking?)</li>
                            <li><strong>State Tracker</strong> (What context/state is remembered?)</li>
                            <li><strong>Task Planner</strong> (What steps does the agent take?)</li>
                            <li><strong>Output Generator</strong> (How does it respond clearly?)</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="text-lg font-bold text-primary pt-1">3.</div>
                    <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-yellow-400" />
                            Use Reference Documents
                        </h3>
                        <p className="mt-1 text-muted-foreground">Use the reference documents to guide you. You can modify the prompts or create your own.</p>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="text-lg font-bold text-primary pt-1">4.</div>
                    <div>
                        <h3 className="text-lg font-semibold">Iterate & Build with ChatGPT</h3>
                        <p className="mt-1 text-muted-foreground">Use your prompts inside ChatGPT.</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-muted-foreground">
                            <li>Ask follow-up questions if the output is not as expected.</li>
                            <li>Keep improving your prompts and logic step-by-step.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="text-lg font-bold text-primary pt-1">5.</div>
                    <div>
                        <h3 className="text-lg font-semibold">Submit an Approach Document</h3>
                        <p className="mt-1 text-muted-foreground">This is the most important part. Your document should include:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-muted-foreground">
                            <li>Your chosen use case.</li>
                            <li>Prompts for each of the 4 steps.</li>
                            <li>Snapshots or text logs of your ChatGPT interactions.</li>
                            <li>What you learned, where you got stuck, and how you overcame it.</li>
                            <li>Any code samples or system messages if generated.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="text-lg font-bold text-primary pt-1">6.</div>
                    <div>
                        <h3 className="text-lg font-semibold">Journal Your Journey</h3>
                        <p className="mt-1 text-muted-foreground">Think of this as a journal of your journey with ChatGPT.</p>
                    </div>
                </div>
            </div>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
