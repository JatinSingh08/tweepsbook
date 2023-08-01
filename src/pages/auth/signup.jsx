import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/images/logo.png";
import { useRouter } from "next/router";
import supabase from "@/utils/supabase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Sign-up error:", error.message);
      return;
    }
    if (user) {
      console.log("Sign-up successful:", user);
    }
    router.push("/auth/login");
  };

  return (
    <form
      className=" fixed top-[0%] left-[40%]  md:mx-1 z-10"
      onSubmit={handleSignUp}
    >
      <div className="w-96  m-auto mt-24 md:mt-44 md:mx-auto h-auto p-4 rounded-lg drop-shadow-sm flex flex-col gap-3 ">
        <div>
          <div className="flex items-center justify-center m-auto">
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>
          <div className="flex items-start justify-center text-3xl mt-4 font-semibold">
            <p>Create new Account</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xl text-slate-300">Email</label>
          <input
            className="w-auto rounded-lg px-6 h-14 outline-none bg-[#222222] focus:bg-[#222222]"
            type="text"
            autoComplete="nope"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-xl text-slate-300">
            Password
          </label>
          <input
            className="w-auto rounded-lg px-6 h-14 outline-none bg-[#222222] focus:bg-[#222222]"
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className=" bg-slate-900 mt-2 text-xl font-semibold text-slate-100 shadow-2xl rounded-lg px-2 py-3 active:scale-90 transition-all duration-100 ease-in-out "
          type="submit"
          style={{
            background: "rgb(131,58,180)",
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
          }}
        >
          Create new Account
        </button>

        <div className="text-gray-600 m-auto">
          <p className="text-xl mb-0 text-slate-400">
            Already have an account?
            <Link href="/auth/login">
              <span className="text-slate-100 underline ml-2 font-medium">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
