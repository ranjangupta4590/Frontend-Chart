"use client"
import React from "react";
import { useSession } from "next-auth/react";
import Dashboard from "./Dashboard";
import Singin from "./Signin";
import { BeatLoader } from "react-spinners";


const home = () => {
  const { session}= useSession;

  if (session.status === "loading") {
    return (
      <div className="flex  h-[100vh] justify-center items-center">
        <BeatLoader color="#36d7b7" />
      </div>
    );
  }
  if (session.status === "authenticated") {
    return (
      <div className="py-2 lg:px-10 lg:py-10">
        <Dashboard />
      </div>
    );
  }
  if (session.status === "unauthenticated") {
    return <Singin />;
  }

  return <Singin />;
};

export default home;
