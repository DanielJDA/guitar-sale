import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

interface FooterPorps {}

const Footer: React.FC<FooterPorps> = () => {
  return (
    <footer className="bottom-0 w-full text-center bg-black pt-16 pb-6 px-6">
      <div className="flex justify-between items-end">
        <div className="flex-col flex justify-center items-start">
          <div className="flex justify-center items-center">
            <AiOutlineTwitter className=" text-white text-xl" />
            <AiFillInstagram className=" text-white  text-xl" />
            <FaLinkedinIn className=" text-white text-xl ml-1" />
          </div>
          <p className="text-white">WeaGuitar 2021</p>
        </div>
        <div className="bg-white w-20">
          <img src="/logo.png" alt=""/>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
