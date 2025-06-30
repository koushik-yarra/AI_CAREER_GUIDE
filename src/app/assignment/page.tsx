import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Target, Package, BookText, ClipboardList, Search, Lightbulb, FileText } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

          <Separator />

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold font-headline">Submission Format</h2>
            </div>
            <p className="italic text-muted-foreground mb-6">
              Note: This document is both your journal and artifact of thought. We&apos;re evaluating how you think, build, and debug, not just what you build.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">SECTION 1: BASIC DETAILS</h3>
                <div className="space-y-4 text-muted-foreground mt-4 ml-4">
                    <p><strong>Name:</strong></p>
                    <p><strong>AI Agent Title / Use Case:</strong> (e.g., AI Agent to help college students generate daily journaling prompts)</p>
                </div>
              </div>
              
              <div>
                  <h3 className="text-xl font-semibold mb-3 border-b pb-2">SECTION 2: PROBLEM FRAMING</h3>
                  <ul className="list-none space-y-4 mt-4 ml-4">
                      <li>
                          <strong>1.1. What problem does your AI Agent solve?</strong>
                          <p className="pl-6 text-sm text-muted-foreground">(Write 2-3 lines to describe the user problem and context)</p>
                      </li>
                      <li>
                          <strong>1.2. Why is this agent useful?</strong>
                          <p className="pl-6 text-sm text-muted-foreground">(Describe the core value delivered to the user)</p>
                      </li>
                      <li>
                          <strong>1.3. Who is the target user?</strong>
                          <p className="pl-6 text-sm text-muted-foreground">(Be specific - &quot;college student revising for an exam&quot;, &quot;freelance writer&quot;, etc.)</p>
                      </li>
                      <li>
                          <strong>1.4. What not to include?</strong>
                          <p className="pl-6 text-sm text-muted-foreground">(Optional, but useful. Mention features you consciously avoided for scope discipline)</p>
                      </li>
                  </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">SECTION 3: 4-LAYER PROMPT DESIGN</h3>
                <p className="text-muted-foreground my-4">Create a subsection for each of the 4 components of the agent architecture:</p>
                <div className="space-y-6 ml-4">
                  <div>
                    <h4 className="font-semibold text-lg">3.1 Input Understanding</h4>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground pl-4">
                      <li><strong>Prompt:</strong> (What did you write in ChatGPT?)</li>
                      <li><strong>What is this prompt responsible for?</strong> (1-2 lines)</li>
                      <li><strong>Example Input + Output:</strong> (Optional if tested)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">3.2 State Tracker</h4>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground pl-4">
                      <li><strong>Prompt:</strong></li>
                      <li>How does this help the agent &quot;remember&quot;?</li>
                      <li>Did you simulate memory with variables / system messages? If yes, how?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">3.3 Task Planner</h4>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground pl-4">
                      <li><strong>Prompt:</strong></li>
                      <li>What steps does your agent take internally to solve the problem?</li>
                      <li>Did you use chaining? Branching? How did you manage complexity?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">3.4 Output Generator</h4>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground pl-4">
                      <li><strong>Prompt:</strong></li>
                      <li>What kind of output formatting or phrasing did you aim for?</li>
                      <li>Any special behavior? (e.g., examples, markdown formatting, tone control, etc.)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">SECTION 4: CHATGPT EXPLORATION LOG</h3>
                <p className="text-muted-foreground my-4">You may structure this as a table or bullet list. Minimum 3 meaningful iterations recommended.</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Attempt #</TableHead>
                      <TableHead>Prompt Variant</TableHead>
                      <TableHead>What Happened</TableHead>
                      <TableHead>What You Changed</TableHead>
                      <TableHead>Why You Changed It</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell className="font-mono text-xs">&quot;Generate journaling prompts&quot;</TableCell>
                      <TableCell>Output too generic</TableCell>
                      <TableCell>Added user context</TableCell>
                      <TableCell>To make prompts more personal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>...</TableCell>
                      <TableCell>...</TableCell>
                      <TableCell>...</TableCell>
                      <TableCell>...</TableCell>
                    </TableRow>
                     <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>...</TableCell>
                      <TableCell>...</TableCell>
                      <TableCell>...</TableCell>
                      <TableCell>...</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">SECTION 5: OUTPUT TESTS (Optional but Recommended)</h3>
                <p className="text-muted-foreground my-4">Include 2-3 sample outputs from your agent. Try edge cases.</p>
                <ul className="list-disc list-inside space-y-4 mt-4 ml-4 text-muted-foreground">
                    <li>
                        <strong>Test 1: Normal input</strong>
                        <p className="pl-6">Input: &quot;I want a journaling prompt about career confusion&quot;<br />Output: (Paste output)</p>
                    </li>
                    <li>
                        <strong>Test 2: Vague input</strong>
                        <p className="pl-6">Input: &quot;Give me something to think about&quot;<br />Output: (Paste output)</p>
                    </li>
                    <li>
                        <strong>Test 3: Invalid input or challenge</strong>
                        <p className="pl-6">Input: &quot;&quot;<br />Output: (Paste output)</p>
                    </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">SECTION 6: REFLECTION</h3>
                <p className="text-muted-foreground my-4">Respond to each question briefly (3-5 sentences each):</p>
                <ol className="list-decimal list-inside space-y-4 mt-4 ml-4 text-muted-foreground">
                    <li>What was the hardest part of this assignment?</li>
                    <li>What part did you enjoy the most?</li>
                    <li>If given more time, what would you improve or add?</li>
                    <li>What did you learn about ChatGPT or prompt design?</li>
                    <li>Did you ever feel stuck? How did you handle it?</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 border-b pb-2">SECTION 7: HACK VALUE (Optional)</h3>
                <p className="text-muted-foreground my-4">Did you go beyond the brief in any way? If yes, explain in 2-3 lines.</p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-muted-foreground">
                    <li>Simulated multiple users?</li>
                    <li>Added logic for memory or role play?</li>
                    <li>Explored chaining multiple agents?</li>
                </ul>
              </div>
            </div>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
