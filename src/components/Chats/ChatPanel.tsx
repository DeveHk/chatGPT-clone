import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoIosCreate } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";

export default function ChatPanel() {
  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-900">
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
            <IoIosCreate className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="rounded-lg bg-gray-200 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-50">
              Hey there! How&apos;s it going?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900">
              I&apos;m doing great, thanks for asking!
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="rounded-lg bg-gray-200 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-50">
              Awesome, I&apos;m glad to hear that. Did you catch the game last
              night?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900">
              No, I missed it. I was working late. How was it?
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="rounded-lg bg-gray-200 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-50">
              It was a close game, but our team pulled through in the end.
              I&apos;ll have to fill you in on the details later.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900">
              Sounds good, I&apos;d love to hear about it. I&apos;m free later
              if you want to grab a coffee.
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-14 items-center border-t px-4 dark:border-gray-800">
        <Input
          className="flex-1"
          placeholder="Type your message..."
          type="text"
        />
        <Button className="ml-2" size="icon" variant="ghost">
          <FaArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
