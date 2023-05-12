"use client";

import Input from "../components/inputs/Input";

export default function Register() {

  return (
    <>
      <div className="mt-12 mb-32 h-full flex flex-col justify-between">
        <div className="flex justify-center items-center">
          <img width="300px" src="/images/carrot.png" />
        </div>
        <div className="flex flex-col h-full justify-center mb-10">
          <RegisterInput id="email" label="이메일" confirm="중복 확인" />
          <RegisterInput id="password" label="비밀번호" type="password" />
          <RegisterInput
            id="confirmpassword"
            label="비밀번호 확인"
            type="password"
          />
          <RegisterInput
            id="nickname"
            label="닉네임"
            confirm="중복 확인"
          />
          <RegisterInput id="location" label="거주지" />
         
        </div>
        <div className=" cursor-pointer text-center self-center w-4/5 max-w-screen-md  mb-10 bg-orange-400 text-white text-2xl rounded-lg py-5 ">
            회원가입
          </div>
      </div>
    </>
  );
}

function RegisterInput({ id, label, confirm, type }) {
  return (
    <>
      <div className="flex mt-10 w-11/12 pl-20">
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
    </>
  );
}
