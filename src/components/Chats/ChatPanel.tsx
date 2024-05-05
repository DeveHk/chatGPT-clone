import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoIosCreate } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ChatPanel({ activechat }: any) {
  const [chats, setChats] = useState([{}]);
  useEffect(() => {
    const get = async () => {
      const res = await fetch(
        `http://localhost:4000/api/getchats?id=${activechat}`,
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
    console.log(activechat);
    if (activechat != undefined || activechat != "0") get();
  }, [activechat]);
  const chathandel = (e: any) => {
    e.preventDefault();
    console.dir(e.target[0].value);
  };
  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex h-14 items-center justify-between border-b px-4 dark:border-gray-800">
        <div className="font-semibold w-full text-center">ChatGPT 3.5</div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <IoIosCreate className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {chats &&
            chats.map((chat: any, i) => (
              <div className=" space-y-4" key={i}>
                <div className="flex flex-col items-start">
                  <div className="flex gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>HK</AvatarFallback>
                    </Avatar>{" "}
                    <div className="flex items-center">You</div>
                  </div>
                  <div className="rounded-lg bg-gray-200 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-50">
                    {chat.query}
                  </div>
                </div>

                <div className="flex flex-col  items-start">
                  <div className="flex gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback className="bg-gray-700 text-white">
                        AI
                      </AvatarFallback>
                    </Avatar>{" "}
                    <div className="flex items-center">chatGPT</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                      {chat.response}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <form
        onSubmit={chathandel}
        className="flex h-14 items-center border-t px-4 dark:border-gray-800"
      >
        <Input className="flex-1" placeholder="Message ChatGPT" type="text" />
        <Button type="submit" className="ml-2" size="icon" variant="ghost">
          <FaArrowUp className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
