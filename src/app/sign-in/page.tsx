import LoginForm from "@/components/Login/LoginForm";
import SignupForm from "@/components/Login/SignupForm";
import React from "react";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

async function page({ searchParams }: { searchParams: { message: string } }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/chats");
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-50-900">
      <div className="">
        <LoginForm message={searchParams.message}></LoginForm>
      </div>
    </div>
  );
}

export default page;
