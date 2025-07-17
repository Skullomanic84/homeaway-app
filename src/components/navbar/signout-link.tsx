"use client"

import { SignOutButton } from "@clerk/nextjs"
import { toast } from "sonner"


function SignoutLink() {
  const handleSignOut = () => {
    toast("You have been signed out");
  }

  return (
   <SignOutButton redirectUrl="/">
    <button className="w-full text-left cursor-pointer" onClick={handleSignOut}>Logout</button>
   </SignOutButton>
  )
}

export default SignoutLink