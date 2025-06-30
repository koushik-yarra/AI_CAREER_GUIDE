import PageHeader from "@/components/page-header";
import { getProfile } from "./actions";
import ProfileForm from "./profile-form";

export default async function ProfilePage() {
  const profile = await getProfile();

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <PageHeader
        title="Profile Builder"
        description="Complete your profile to get personalized career recommendations and power the AI tools."
      />
      <ProfileForm profile={profile} />
    </div>
  );
}
