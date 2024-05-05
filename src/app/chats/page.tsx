import Chat from "@/components/Chats/Chat";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

async function page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Chat></Chat>
    </div>
  );
}

export default page;
