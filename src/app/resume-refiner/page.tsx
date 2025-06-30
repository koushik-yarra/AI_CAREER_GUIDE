import PageHeader from "@/components/page-header";
import ResumeRefinerForm from "./resume-refiner-form";

export default function ResumeRefinerPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Resume Refiner"
        description="Paste your resume and an optional job description to get AI-powered suggestions for improvement. The AI will analyze your text and provide a refined version along with actionable feedback."
      />
      <ResumeRefinerForm />
    </div>
  );
}
