'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { interviewPrepTool, type InterviewPrepToolOutput } from '@/ai/flows/interview-prep-tool';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, MessagesSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';

const formSchema = z.object({
  userBackground: z.string().min(50, 'Please describe your background in at least 50 characters.'),
  targetRole: z.string().min(5, 'Please enter a target role.'),
  questionCount: z.number().min(1).max(10).default(3),
});

export default function InterviewPrepForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InterviewPrepToolOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userBackground: '',
      targetRole: '',
      questionCount: 3,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const output = await interviewPrepTool(values);
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description: 'Failed to generate questions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="userBackground"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Background</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your experience, skills, and education..." className="min-h-36" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Role</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Senior Frontend Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="questionCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Questions: {field.value}</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      defaultValue={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full" size="lg">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <MessagesSquare className="mr-2 h-4 w-4" />}
              Generate Questions
            </Button>
          </form>
        </Form>
      </div>

      <div className="lg:col-span-2 space-y-6">
         <h2 className="text-xl font-semibold font-headline">Generated Questions & Answers</h2>
        {loading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-20 w-full" />)}
          </div>
        )}
        {!loading && !result && (
            <Card className="flex items-center justify-center h-96 border-dashed">
                <div className="text-center text-muted-foreground">
                    <p>Your interview questions will appear here.</p>
                </div>
            </Card>
        )}
        {result && (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {result.questionsAndAnswers.map((qa, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
                <Card className="shadow-md">
                    <AccordionTrigger className="text-left p-6 hover:no-underline">
                        <span className="font-semibold font-headline">{qa.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-4 space-y-4">
                        <h4 className="font-semibold text-muted-foreground">Sample Answer:</h4>
                        <p className="whitespace-pre-wrap text-sm">{qa.sampleAnswer}</p>
                      </div>
                    </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
