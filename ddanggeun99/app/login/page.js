"use client";

import Input from "../components/inputs/Input";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useLoginInput from "../hooks/useLoginInput";
import axios from "axios";

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
      <div className="mt-12 mb-32 h-full flex flex-col justify-around">
        <div className="flex justify-center items-center pt-20 pb-10">
          <img width="300px" src="/images/carrot.png" />
        </div>

        <div className="flex flex-col h-full justify-center mb-10 items-center">
          <RegisterInput id="loginEmail" label="이메일" />
          <RegisterInput id="loginPassword" label="비밀번호" type="password" />
        </div>

        <div className="flex pr-10 border-black border-2 cursor-pointer gap-10 mb-5 justify-center max-w-screen-md self-center w-4/5 bg-white text-black text-2xl rounded-lg py-5 ">
          <div>
            <AiFillGithub />
          </div>
          <div>깃헙 로그인 </div>
        </div>

        <div className="flex pr-10 border-black border-2 cursor-pointer gap-10 mb-5 justify-center max-w-screen-md self-center w-4/5 bg-white text-black text-2xl rounded-lg py-5 ">
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
    <div className="flex mt-10 w-full pl-28">
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
