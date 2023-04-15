import ProfileSkillSet from "~/components/ProfileSkillSet/ProfileSkillSet";
import EmploymentHistory from "~/components/profile-employment-history/profile-employment-history";
import ProfileIntroduction from "~/components/profile-introduction/profile-introduction";
import { ProfileSideBar } from "~/components/profile-sidebar/profile-sidebar";
import ProfileShowCase from "~/components/showcase/profile-showcase";
import styles from "~/styles/profile.css";

export function links() {
  return [{
    rel: "stylesheet",
    href: styles
  }];
}

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="flex grow h-full">
        <div className="flex profile-content lift-effect bg-amber-100 px-2 pt-8">
          <ProfileSideBar />
        </div>
        <div className="flex profile-content lift-effect bg-green-200 px-2 pt-8">
          <ProfileIntroduction />
          <ProfileSkillSet />
          <EmploymentHistory />
          <ProfileShowCase />
        </div>
      </div>
    </div>
  );
}