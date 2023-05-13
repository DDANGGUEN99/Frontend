"use client";

import Input from "../components/inputs/Input";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useLoginInput from "../hooks/useLoginInput";
import axios from "axios";
import Header from "../components/header/Header";

export default function Login() {
  const { email, password } = useLoginInput();

  // 로그인 버튼 눌렀을때 실행되는 함수
  const onSubmitLogin = async () => {
    const user = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/signup`,
        user
      );
      console.log(response);
    } catch (error) {
      console.log(error.errorMessage);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col justify-center gap-8 ">
        <div className="flex justify-center items-center pt-20 pb-10">
          <img width="300px" src="/images/carrot.png" />
        </div>
        <div className="hidden md:block">
          <Header title="로그인" subtitle="어서오세요!" center />
        </div>
        <RegisterInput id="loginEmail" label="이메일" />
        <RegisterInput id="loginPassword" label="비밀번호" type="password" />
        <div className="flex  pr-10 border-black border-2 cursor-pointer gap-10 justify-center max-w-screen-md self-center w-4/5 bg-white text-black text-2xl rounded-lg py-5 ">
          <div>
            <AiFillGithub />
          </div>
          <div>깃헙 로그인 </div>
        </div>

        <div className="flex  pr-10 border-black border-2 cursor-pointer gap-10 justify-center max-w-screen-md self-center w-4/5 bg-white text-black text-2xl rounded-lg py-5 ">
          <div>
            <FcGoogle />
          </div>
          <div>구글 로그인</div>
        </div>

        <div
          onClick={onSubmitLogin}
          className=" cursor-pointer  text-center max-w-screen-md self-center w-4/5 mb-10 bg-orange-400 text-white text-2xl rounded-lg py-5 "
        >
          로그인
        </div>
      </div>
    </>
  );
}

function RegisterInput({ id, label, confirm, type }) {
  return (
    <div className="flex justify-center w-full">
      <div className="cursor-default pl-2 w-28 flex justify-start items-center">
        {label}
      </div>
      <Input id={id} label={label} type={type} outline />
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
