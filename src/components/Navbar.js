import React from "react";
import Image from "next/image";
import { AiOutlineMore } from "react-icons/ai";
import AppLink from "./AppLink";
import { VscCircleFilled } from "react-icons/vsc";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-6 border-b">
        <div className="flex justify-center items-center">
          <a href="/" className="relative">
            <Image
              alt="Vercel logo"
              src="/logo.svg"
              width={"55rem"}
              height="55rem"
            />
          </a>
          <div className="flex justify-center items-center ml-4">
            <AppLink href="/" label="Home" />
            <VscCircleFilled className="text-xs mt-1 mx-2" />
            <AppLink href="/About" label="About" />
          </div>
        </div>
        <div className="px-4 py-2 flex justify-center items-center cursor-pointer hover:bg-white-500 rounded">
          <AiOutlineMore className=" text-3xl" />
        </div>
      </nav>
    </>
  );
};
export default Nav;
