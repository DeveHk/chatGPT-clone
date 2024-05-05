import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/chats");
  } else {
    return redirect("/sign-in");
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="">HOME</div>
    </div>
  );
}
