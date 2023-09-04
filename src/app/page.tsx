import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PopularGames from "./components/principalPage/PopularGames/page";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import UpcomingReleases from "./components/principalPage/UpcomingReleases/page";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/components/auth/login");
  } else {
    return (
      <div>
        <UpcomingReleases />
      </div>
    );
  }
}
