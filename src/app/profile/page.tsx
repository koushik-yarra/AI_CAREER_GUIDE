import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import PageHeader from "@/components/page-header";

export default function ProfilePage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <PageHeader
        title="Profile Builder"
        description="Complete your profile to get personalized career recommendations and power the AI tools."
      />
      <Card>
        <CardHeader>
          <CardTitle>Professional Profile</CardTitle>
          <CardDescription>This information will help us tailor suggestions for you across all tools.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Ada Lovelace" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="ada@example.com" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="education">Highest Level of Education</Label>
            <Select>
              <SelectTrigger id="education">
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high-school">High School Diploma</SelectItem>
                <SelectItem value="associates">Associate's Degree</SelectItem>
                <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                <SelectItem value="masters">Master's Degree</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
                 <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="skills">Skills</Label>
            <Textarea id="skills" placeholder="List your skills, separated by commas (e.g., React, Node.js, Project Management)" />
            <p className="text-sm text-muted-foreground">This will be used by the Career Path Navigator and other tools.</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interests">Interests</Label>
            <Textarea id="interests" placeholder="Describe your professional interests and passions..." />
             <p className="text-sm text-muted-foreground">This will help the Career Path Navigator find roles you'll love.</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="background">Professional Background Summary</Label>
            <Textarea id="background" placeholder="Summarize your career journey, key achievements, and experience..." className="min-h-32" />
             <p className="text-sm text-muted-foreground">This will be used by the Interview Prep Tool.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Profile</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
