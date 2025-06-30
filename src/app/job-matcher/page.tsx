import PageHeader from "@/components/page-header";
import JobMatcherForm from "./job-matcher-form";

export default async function JobMatcherPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Job Matcher"
        description="Paste a job description and your profile information to see how you stack up. The AI will analyze your skills and experience to provide a detailed match report."
      />
      <JobMatcherForm />
    </div>
  );
}
