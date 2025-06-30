import PageHeader from "@/components/page-header";
import CareerPathForm from "./career-path-form";

export default function CareerPathNavigatorPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Career Path Navigator"
        description="Tell us about your skills, interests, and education to discover potential career paths tailored just for you. The AI will provide three suggestions with rationale."
      />
      <CareerPathForm />
    </div>
  );
}
