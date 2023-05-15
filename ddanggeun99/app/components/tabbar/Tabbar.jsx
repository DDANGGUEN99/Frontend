"use client";

import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

function Tabbar() {
  const router = useRouter();
  return (
    <div className=" w-full fixed border-x-[2px] py-2 h-20 bottom-0 bg-white z-10 shadow-sm text-5xl text-center text-black flex justify-around  max-w-screen-md mx-auto">
      <div
        onClick={() => router.push("/main")}
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <BiHomeAlt />
        <p className="text-lg">홈</p>
      </div>
      
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <MdLocationCity />
        <p className="text-lg">동네생활</p>
      </div>
      
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <TiLocationOutline />
        <p className="text-lg">내 근처</p>
      </div>
      
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <BsChat />
        <p className="text-lg"> 채팅</p>
      </div>
      
      <div
        onClick={() => router.push("/mypage")}
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <FiUser />
        <p className="text-lg">나의 당근</p>
      </div>
    </div>
  );
}

export default Tabbar;
