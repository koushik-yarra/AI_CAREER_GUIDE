import PageHeader from "@/components/page-header";
import InterviewPrepForm from "./interview-prep-form";

export default function InterviewPrepPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Interview Prep Tool"
        description="Generate tailored interview questions and sample answers based on your background and the role you're targeting. Practice and build your confidence."
      />
      <InterviewPrepForm />
    </div>
  );
}
