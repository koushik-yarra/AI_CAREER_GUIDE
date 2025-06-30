import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export interface Course {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  href: string;
};

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={course.imageUrl}
          alt={course.title}
          fill
          className="object-cover"
          data-ai-hint={course.imageHint}
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
            <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
            <Badge variant="outline" className="shrink-0">{course.category}</Badge>
        </div>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1" />
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={course.href}>
            View Course <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
