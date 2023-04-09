import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Navbar from "~/components/navbar/navbar";
import styles from "~/styles/shared.css";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Index() {
  return (
    <div className="page-container flex grow flex-col h-full bg-stone-200">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="page-content flex grow">
        <Outlet />
      </div>
    </div>
  );
}
