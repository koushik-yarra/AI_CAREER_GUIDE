import PageHeader from "@/components/page-header";
import JobMatcherForm from "./job-matcher-form";
import { getProfile } from "../profile/actions";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function JobMatcherPage() {
  const profile = await getProfile();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Job Matcher"
        description="Paste a job description to see how your profile stacks up. The AI will analyze your skills and experience to provide a detailed match report."
      />
      {profile ? (
         <JobMatcherForm profile={profile} />
      ) : (
        <Card className="mt-8">
          <CardContent className="pt-6 flex flex-col items-center justify-center text-center">
             <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
             <h2 className="text-xl font-semibold">Profile Not Found</h2>
             <p className="text-muted-foreground mt-2 max-w-md">
                To use the Job Matcher, you need to create a professional profile first. This provides the AI with the necessary context to analyze job descriptions.
             </p>
             <Button asChild className="mt-6">
                <Link href="/profile">Create Your Profile</Link>
             </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
