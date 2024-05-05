import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { createClient } from "@/lib/supabase/server";

export default function LoginForm({ message }: any) {
  const signIn = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return redirect("/sign-up?message=Could not authenticate user");
    }
    return redirect("/chats");
  };

  return (
    <div className="max-w-sm mx-auto min-h-screen  px-10 flex flex-col justify-center">
      <div className="relative w-full flex justify-center h-[100px] ">
        <AiOutlineOpenAI className="h-20 w-20"></AiOutlineOpenAI>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Welcome back</h1>
      <form>
        <div className="space-y-4 mb-4">
          <div className="flex items-center justify-between border border-gray-700 rounded-md">
            <Input
              className="flex-1 focus:outline-none"
              placeholder="Email*"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="flex items-center border  border-gray-700  rounded-md">
            <Input
              className="flex-1"
              placeholder="Password*"
              id="password"
              name="password"
              required
              type="password"
            />
            <IoEyeOutline className="w-5 h-5 text-gray-400 m-1" />
          </div>
        </div>
        <div className="text-center mb-4">
          <Link className="text-blue-600" href="#">
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          formAction={signIn}
          className="w-full bg-[#11A37E] hover:bg-[#0f9273] text-white mb-3"
        >
          Continue
        </Button>
      </form>
      {message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {message}
        </p>
      )}
      <div className="text-center mb-6">
        <p>
          Don&apos;t have an account?{" "}
          <Link href={"/sign-up"}>
            <Button
              className="text-blue-600 hover:bg-transparent hover:text-blue-600"
              variant="ghost"
            >
              Sign up
            </Button>
          </Link>
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <hr className="w-full" />
        <span className="px-4 text-gray-500">OR</span>
        <hr className="w-full" />
      </div>
      <div className="space-y-3">
        <Button className="w-full bg-white space-x-2 hover:bg-slate-300 text-black border shadow-sm">
          <FcGoogle className="w-5 h-5" />
          <span className="">Continue with Google</span>
        </Button>
      </div>
    </div>
  );
}
