"use client";

import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { BsChat } from "react-icons/bs";
import MypageLink from "./MypageLink";
import { useRouter } from "next/navigation";

function Tabbar() {
  const router = useRouter()
  return (
    <>
      <div className=" w-full fixed border-t-[2px] py-2 h-20 bottom-0 bg-white z-10 shadow-sm text-5xl text-center text-black flex justify-around  max-w-screen-md mx-auto self-center border-x">
        <div 
        onClick={() => router.push("/main")}
        className="flex flex-col justify-center items-center">
          <BiHomeAlt />
          <p className="text-lg">홈</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdLocationCity />
          <p className="text-lg">동네생활</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <TiLocationOutline />
          <p className="text-lg">내 근처</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <BsChat />
          <p className="text-lg"> 채팅</p>
        </div>
        <MypageLink />
      </div>
    </>
  );
}

export default Tabbar;
