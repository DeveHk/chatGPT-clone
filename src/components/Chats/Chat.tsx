"use client";
import { useEffect, useState } from "react";
import ChatPanel from "./ChatPanel";
import ChaSideNav from "./ChatSideNav";

export default function Chat({ user }: any) {
  const [chats, setChats] = useState([]);
  const [activechat, setActivechat] = useState("0");
  useEffect(() => {
    const get = async () => {
      const res = await fetch(
        `http://localhost:4000/api/getlog?id=${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await res.json();
      console.log(result);
      setChats(result);
    };
    get();
  }, []);
  console.log(user);
  return (
    <div className=" grid h-screen w-full grid-cols-[300px_1fr] ">
      <ChaSideNav chatlog={chats} setActivechat={setActivechat}></ChaSideNav>
      <ChatPanel activechat={activechat}></ChatPanel>
    </div>
  );
}
