"use client";
import { createClient } from "@/lib/supabase/client";
import ChatPanel from "./ChatPanel";
import ChaSideNav from "./ChatSideNav";

export default function Chat() {
  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr] overflow-hidden">
      <ChaSideNav></ChaSideNav>
      <ChatPanel></ChatPanel>
    </div>
  );
}
