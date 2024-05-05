import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";

export default function SignupForm({ message }: any) {
  const signUp = async (formData: FormData) => {
    "use server";
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();
    console.log(password);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });
    console.log(data, error);
    if (error) {
      return redirect("/sign-up?message=Could not authenticate user");
    }

    return redirect("/sign-up?message=Check email to continue sign in process");
  };

  const handelauth = (e: any) => {
    console.log(e);
    const formData = new FormData(e.target);
    signUp(formData);
  };

  return (
    <div className="max-w-sm mx-auto min-h-screen  px-10 flex flex-col justify-center">
      <div className="relative w-full flex justify-center h-[100px] ">
        <AiOutlineOpenAI className="h-20 w-20"></AiOutlineOpenAI>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Create an account</h1>
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
            {/*(
              <Button
                variant="ghost"
                onClick={() => {
                  eactive = !eactive;
                }}
              >
                Edit
              </Button>
            )*/}
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
          formAction={signUp}
          className="w-full bg-[#11A37E] hover:bg-[#0f9273] text-white mb-3"
        >
          Continue
        </Button>
        {message && (
          <p className="text-sm text-foreground text-center">{message}</p>
        )}
      </form>
      <div className="text-center mb-6">
        <p>
          Already have an account?{" "}
          <Link href={"/sign-in"}>
            <Button
              className="text-blue-600 hover:bg-transparent hover:text-blue-600"
              variant="ghost"
            >
              Sign in
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
