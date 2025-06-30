import PageHeader from "@/components/page-header";
import ChatInterface from "./chat-interface";

export default function AiGuidePage() {
  return (
    <div className="flex flex-col h-[calc(100vh-10rem)]">
      <PageHeader
        title="AI Guide"
        description="Your personal AI career coach. Ask questions about job roles, resumes, and interview prep."
      />
      <ChatInterface />
    </div>
  );
}
