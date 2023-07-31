import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between text-xl border  border-[#9CAEC8]  rounded-[100px] self-stretch px-10 py-3"
      style={{
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(0, 0, 0, 0.48)",
      }}
    >
      <Link href="/" className="cursor-pointer">
        <Image
          src={logo}
          width={150}
          height={150}
          alt="logo"
          className="cursor-pointer"
        />
      </Link>
      <div>
        <ul className="list-none flex gap-6">
          <li>products</li>
          <li>dao</li>
          <li>build</li>
          <li>docs</li>
        </ul>
      </div>
      <div
        className="flex py-2 px-5 items-center justify-center rounded-[100px] bg-[#64AE9D] text-black font-semibold"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.24)",
          boxShadow:
            "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset",
        }}
      >
        <Link href="/auth/login" className="cursor-pointer">
          <button>launch app</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
