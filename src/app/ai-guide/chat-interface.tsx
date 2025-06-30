'use client';

import { aiGuide } from '@/ai/flows/ai-guide-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { Message } from 'genkit/experimental/ai';
import { Bot, Loader2, Send, User } from 'lucide-react';
import { FormEvent, useEffect, useRef, useState } from 'react';

// A simple markdown renderer
const SimpleMarkdown = ({ text }: { text: string }) => {
    const lines = text.split('\n').map((line, index) => {
        // Bold
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Bullet points
        if (line.trim().startsWith('- ')) {
            return `<li class="ml-4 list-disc">${line.substring(2)}</li>`;
        }
        return line;
    }).join('<br />');

    return <div dangerouslySetInnerHTML={{ __html: lines }} />;
};


export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: [
        {
          text: "Hi! I'm your AI Career Coach. I can help you figure out job roles, improve your resume, and prepare for interviews. To start, could you tell me a bit about your background, skills, and interests?",
        },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const userMessage: Message = { role: 'user', content: [{ text: input }] };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await aiGuide({ history: newMessages });
      const modelMessage: Message = { role: 'model', content: [{ text: response }] };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description: 'Failed to get a response from the AI. Please try again.',
        variant: 'destructive',
      });
      // remove the user message if the call fails
       setMessages(messages);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);


  return (
    <div className="flex flex-col h-full mt-4">
      <ScrollArea className="flex-1 p-4 border rounded-lg bg-muted/20" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start gap-3',
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.role === 'model' && (
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Bot className="h-6 w-6" />
                </div>
              )}
              <div
                className={cn(
                  'max-w-xl p-3 rounded-lg',
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background'
                )}
              >
                <SimpleMarkdown text={msg.content[0].text!} />
              </div>
              {msg.role === 'user' && (
                 <div className="p-2 rounded-full bg-secondary text-secondary-foreground">
                  <User className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
           {loading && (
             <div className="flex items-start gap-3 justify-start">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Bot className="h-6 w-6" />
                </div>
                <div className="max-w-xl p-3 rounded-lg bg-background flex items-center">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
             </div>
            )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your career coach..."
          disabled={loading}
          className="flex-1"
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}
