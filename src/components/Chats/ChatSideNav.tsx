import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoIosCreate } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import ChatPanel from "./ChatPanel";

export default function ChaSideNav() {
  return (
    <div className="flex flex-col border-r bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex h-14 items-center justify-between border-b px-4 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-0.5">
            <h5 className="text-sm font-medium">John Doe</h5>
            <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <CiSearch className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <IoIosCreate className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="space-y-2 p-4">
          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            href="#"
          >
            General Chat
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
            href="#"
          >
            Team Chat
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
            href="#"
          >
            Project Updates
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
            href="#"
          >
            Client Discussions
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
            href="#"
          >
            Archived Chats
          </Link>
        </nav>
      </div>
    </div>
  );
}
