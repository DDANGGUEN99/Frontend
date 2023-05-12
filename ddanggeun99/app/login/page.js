"use client";

import Input from "../components/inputs/Input";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <>
      <div className="mt-12 mb-32 h-full flex flex-col justify-between">
        <div className="flex justify-center items-center pt-10 pb-20">
          <img width="300px" src="/images/carrot.png" />
        </div>
        <div className="flex flex-col h-full justify-start mb-10 items-center">
          <RegisterInput id="email" label="이메일" />
          <RegisterInput id="password" label="비밀번호" type="password" />
        </div>
        <div className="flex pr-10 border-black border-2 cursor-pointer gap-10 mb-5 justify-center max-w-screen-md self-center w-4/5 bg-white text-black text-2xl rounded-lg py-5 ">
          <div>
            <AiFillGithub />
          </div>
          <div>깃헙 로그인 </div>
        </div>
        <div className="flex pr-10 border-black border-2 cursor-pointer gap-10 mb-5 justify-center max-w-screen-md self-center w-4/5 bg-white text-black text-2xl rounded-lg py-5 ">
        <div>  <FcGoogle /></div>
        <div>구글 로그인</div>
        </div>
        <div className=" cursor-pointer  text-center max-w-screen-md self-center w-4/5 mb-10 bg-orange-400 text-white text-2xl rounded-lg py-5 ">
          로그인
        </div>
      </div>
    </>
  );
}

function RegisterInput({ id, label, confirm, type }) {
  return (
    <div className="flex mt-10 w-full pl-28">
      <div className="cursor-default pl-2 w-28 flex justify-start items-center">{label}</div>
      <Input id={id} label={label} type={type} />
      <div
        className={`flex ml-4 py-0 bg-orange-400 text-white ${
          confirm && "px-2"
        } rounded-lg text-center items-center justify-center cursor-pointer`}
      >
        {confirm}
      </div>
    </div>
  );
}
