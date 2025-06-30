'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { careerPathNavigator, type CareerPathNavigatorOutput } from '@/ai/flows/career-path-navigator';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Compass } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  skills: z.string().min(5, 'Please list at least one skill.'),
  interests: z.string().min(10, 'Please describe your interests.'),
  education: z.string().min(5, 'Please enter your education level.'),
});

export default function CareerPathForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CareerPathNavigatorOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: '',
      interests: '',
      education: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const output = await careerPathNavigator(values);
      setResult(output);
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description: 'Failed to find career paths. Please try again.',
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
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Skills</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Python, Graphic Design, Public Speaking" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Interests</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Building mobile apps, analyzing data, creative writing" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Highest Level of Education</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Bachelor's in Computer Science" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading} className="w-full" size="lg">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Compass className="mr-2 h-4 w-4" />}
              Find My Career Path
            </Button>
          </form>
        </Form>
      </div>
      
      <div className="lg:col-span-2 space-y-6">
        <h2 className="text-xl font-semibold font-headline">Suggested Career Paths</h2>
        {loading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-2/3" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mt-2" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {!loading && !result && (
            <Card className="flex items-center justify-center h-96 border-dashed">
                <div className="text-center text-muted-foreground">
                    <p>Your recommended career paths will appear here.</p>
                </div>
            </Card>
        )}
        {result && (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {result.map((path, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
                <Card className="shadow-md">
                   <CardHeader>
                    <AccordionTrigger className="text-left hover:no-underline">
                        <CardTitle className="font-headline">{path.careerPath}</CardTitle>
                    </AccordionTrigger>
                   </CardHeader>
                    <AccordionContent>
                      <div className="px-6 pb-4">
                        <CardDescription className="text-base text-foreground whitespace-pre-wrap">{path.rationale}</CardDescription>
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
