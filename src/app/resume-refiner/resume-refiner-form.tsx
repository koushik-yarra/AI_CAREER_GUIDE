'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { refineResume, type RefineResumeOutput } from '@/ai/flows/resume-refiner';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  resumeText: z.string().min(100, 'Please enter a resume with at least 100 characters.'),
  jobDescription: z.string().optional(),
});

export default function ResumeRefinerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RefineResumeOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeText: '',
      jobDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const output = await refineResume(values);
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description: 'Failed to refine resume. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="resumeText"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Your Resume</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste your full resume text here..."
                    className="min-h-[300px] font-code text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Target Job Description (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste the job description here to tailor your resume..."
                    className="min-h-[150px] text-sm"
                    {...field}
                  />
                </FormControl>
                 <FormDescription>Providing a job description helps the AI tailor suggestions to a specific role.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} className="w-full" size="lg">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
            Refine My Resume
          </Button>
        </form>
      </Form>
      
      <div className="space-y-6">
        <h2 className="text-xl font-semibold font-headline">AI Suggestions</h2>
        {loading && (
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        )}
        {!loading && !result && (
            <Card className="flex items-center justify-center h-96 border-dashed">
                <div className="text-center text-muted-foreground">
                    <p>Your refined resume will appear here.</p>
                </div>
            </Card>
        )}
        {result && (
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Refinement Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm whitespace-pre-wrap">{result.suggestions}</p>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2 font-headline">Refined Resume</h3>
                <div className="text-sm whitespace-pre-wrap p-4 bg-secondary rounded-md font-code border">{result.refinedResume}</div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
