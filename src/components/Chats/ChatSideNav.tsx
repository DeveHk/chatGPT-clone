import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoIosCreate } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import ChatPanel from "./ChatPanel";
import { AiOutlineOpenAI } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

export default function ChaSideNav({ chatlog, setActivechat }: any) {
  const switchchat = (chat: any) => {
    //console.log(chat.id);
    setActivechat(chat.id);
  };
  const newchat = () => {};
  return (
    <div className="  h-screen flex flex-col border-r bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
      <div
        onClick={newchat}
        className="flex h-14 hover:bg-gray-300 items-center justify-between border-b px-4 dark:border-gray-800"
      >
        <div className="flex items-center gap-2">
          <Avatar>
            <AiOutlineOpenAI className="w-full h-full"></AiOutlineOpenAI>
          </Avatar>
          <div className="space-y-0.5">
            <h5 className="text-sm font-medium">New Chat</h5>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <IoIosCreate className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-scroll ">
        <nav className="space-y-2 p-4">
          {chatlog.map((chat: any, i: any) => (
            <Button
              onClick={() => switchchat(chat)}
              key={i}
              className=" flex justify-start rounded-md bg-gray-200 px-3 py-2 text-black dark:text-white w-full  text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {chat.title}
            </Button>
          ))}
        </nav>
      </div>
      <div className="flex h-14 items-center justify-between border-b px-4 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>Y</AvatarFallback>
          </Avatar>
          <div className="space-y-0.5">
            <h5 className="text-sm font-medium">Harsh</h5>
            <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <LuLogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
