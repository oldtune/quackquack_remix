import React from "react";
import styles from "~/styles/ProfileSideBar.css";
import ProfileAvatar from "../profile-avatar/profile-avatar";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const ProfileSideBar: React.FC = () => {
  return (
    <div
      className={`profile-side-bar flex flex-1 flex-col flex-wrap ${"sticky top-0"}`}
    >
      <div className="profile-avatar-container flex flex-1">
        <ProfileAvatar />
      </div>
      <div className="personal-info font-mono px-2">
        {/* <p>
          <b>Name:</b> Do Tran
        </p>
        <p>
          <p>
            <b>Email:</b>sac@gmail.com
          </p>
          <b>Year of birth:</b> 1998
        </p>
        <p>
          <b>Gender:</b> Male
        </p>
        <p>
          <b>Location:</b> Ho Chi Minh, Viet Nam
        </p>
        <p>
          <b>Position:</b>Headline
        </p>
        <p className="break-words">
          <b>Introduction:</b> a little while ago, there's a duck. He said "Duck
          you!"
        </p> */}
      </div>
    </div>
  );
};
