"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  /* handleLogout */
  const handleLogout = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
