'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Wand2, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';

import { matchJobDescription, type JobMatcherOutput } from '@/ai/flows/job-matcher-flow';
import { type Profile } from '@/app/profile/schema';

import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  jobDescription: z.string().min(100, 'Please enter a job description with at least 100 characters.'),
});

interface JobMatcherFormProps {
  profile: Profile;
}

export default function JobMatcherForm({ profile }: JobMatcherFormProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<JobMatcherOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const output = await matchJobDescription({
        jobDescription: values.jobDescription,
        userProfile: profile,
      });
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description: 'Failed to generate match report. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Target Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the full job description here..."
                      className="min-h-[400px] text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full" size="lg">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Analyze Match
            </Button>
          </form>
        </Form>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold font-headline">AI Analysis Report</h2>
        {loading && <AnalysisSkeleton />}
        {!loading && !result && (
          <Card className="flex items-center justify-center h-96 border-dashed">
            <div className="text-center text-muted-foreground">
              <p>Your job match report will appear here.</p>
            </div>
          </Card>
        )}
        {result && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overall Match: {result.matchPercentage}%</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={result.matchPercentage} className="h-3" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  Your Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {result.strengths.map((strength, i) => <li key={i}>{strength}</li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                  Identified Gaps
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    {result.gaps.map((gap, i) => <li key={i}>{gap}</li>)}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-500" />
                  Actionable Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {result.suggestions.map((suggestion, i) => <li key={i}>{suggestion}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

const AnalysisSkeleton = () => (
    <div className="space-y-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-3 w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-1/3" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
         <Card>
          <CardHeader>
            <Skeleton className="h-7 w-1/3" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
    </div>
)
