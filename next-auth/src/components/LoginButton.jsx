"use client";
import { useSession, signIn, signOut } from "next-auth/react";

import React from "react";

const LoginButton = () => {
  return (
    <div className="btn" onClick={() => signIn()}>
      {" "}
      Login Now
    </div>
  );
};

export default LoginButton;
