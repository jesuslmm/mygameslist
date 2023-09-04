"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    redirect("/");
  } else {
    return (
      <div className="bg-green-800 h-screen text-white">
        <div className="w-1/2 px-12 py-36">
          <p className="font-semibold text-6xl ">
            Track<span className="font-light">,</span> discover{" "}
            <span className="font-thin">and</span> share
          </p>
          <p className="mt-16 text-3xl font-medium">
            The best way to manage the way you play
          </p>
          <p className="mt-10 text-xl">
            Discover new games, keep track of the ones you want to play, and
            connect with friends
          </p>
        </div>
        <div>
          <div>
            <p>Log in with</p>
            <button
              className="border-2 bg-yellow-700 text-white rounded-lg p-4"
              onClick={() => signIn("google")}
            >
              Google
            </button>
          </div>
          <div>
            <p>Log in with Github:</p>
            <button
              className="border-2 bg-yellow-700 text-white rounded-lg p-4"
              onClick={() => signIn("github")}
            >
              Github
            </button>
          </div>
        </div>
      </div>
    );
  }
}
