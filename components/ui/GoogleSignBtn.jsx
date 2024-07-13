"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleSignBtn = () => {
  /* handleGoogleSignIn */
  const handleGoogleSignIn = (evt) => {
    signIn("google", { callback: "http://localhost:3000/bookings" });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className=' w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center'
    >
      <Image src='/google.png' alt='google' width={40} height={40} />
      <span>Google</span>
    </button>
  );
};

export default GoogleSignBtn;
