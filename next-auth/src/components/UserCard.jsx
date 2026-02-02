"use client";
import { useSession } from "next-auth/react";
import React from "react";

const UserCard = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <h1>client </h1>
      <div className="border-2">{JSON.stringify(session)}</div>
    </div>
  );
};

export default UserCard;
