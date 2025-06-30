import PageHeader from "@/components/page-header";
import CourseCard from "./course-card";
import type { Course } from "./course-card";

const courses: Course[] = [
  {
    title: "Introduction to AI Engineering",
    description: "Learn the fundamentals of building and deploying AI-powered applications.",
    category: "AI & ML",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "abstract network",
    href: "/courses/ai-engineering"
  },
  {
    title: "Advanced React Patterns",
    description: "Deep dive into advanced React concepts like hooks, context, and performance optimization.",
    category: "Web Dev",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "code editor",
    href: "/courses/advanced-react"
  },
  {
    title: "UI/UX Design for Developers",
    description: "Understand the principles of user interface and user experience design to build better products.",
    category: "Design",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "wireframe sketch",
    href: "/courses/ui-ux-design"
  },
   {
    title: "Data Structures & Algorithms",
    description: "Master the essential data structures and algorithms for technical interviews and beyond.",
    category: "CS",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "flow chart",
    href: "/courses/dsa"
  },
  {
    title: "Cloud Computing with GCP",
    description: "Get hands-on experience with Google Cloud Platform services like Compute Engine and BigQuery.",
    category: "Cloud",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "cloud servers",
    href: "/courses/gcp"
  },
   {
    title: "Project Management Essentials",
    description: "Learn the basics of project management, from planning and execution to monitoring projects.",
    category: "Business",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "gantt chart",
    href: "/courses/project-management"
  }
];

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Courses"
        description="Explore our catalog of courses to enhance your skills and advance your career."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
}
