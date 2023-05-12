import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

function Tabbar() {
  return (
    <div className="fixed h-20 bottom-0 w-full bg-white z-10 shadow-sm text-5xl text-center text-black flex justify-around max-w-screen-md mx-auto border-t-[2px] pt-2" >
      <div className="flex flex-col justify-center items-center">
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
      <div className="flex flex-col justify-center items-center">
        <FiUser />
        <p className="text-lg">나의 당근</p>
      </div>
    </div>
  );
}

export default Tabbar;
