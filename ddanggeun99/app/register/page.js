"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Input from "../components/inputs/Input";
import useRegisterInput from "../hooks/useRegisterInput";

export default function Register() {
  const router = useRouter()
  // nickname, email, password, confirmPassword, locationId를 가져옴.
  const { nickname, email, password, confirmPassword, locationId } =
    useRegisterInput();


  // 회원가입 버튼을 눌렀을때 작동하는 함수
  const onSubmitRegister = async () => {
    const newUser = {
      nickname,
      email,
      password,
      location_id: locationId,
    };
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/signup`, newUser)
      console.log(response)
      router.push('/main')

    } catch (error) {
      console.log(error.data.errorMessage)
    }
  };

  return (
    <>
      <div className="mt-12 mb-32 h-full flex flex-col justify-between">
        <div className="flex justify-center items-center">
          <img width="300px" src="/images/carrot.png" />
        </div>
        <div className="flex flex-col h-full justify-center mb-10">
          <form>
            <RegisterInput
              id="registerEmail"
              name="email"
              label="이메일"
              confirm="중복 확인"
              outline
            />
            <RegisterInput
              id="registerPassword"
              name="password"
              label="비밀번호"
              type="password"
              outline
            />
            <RegisterInput
              id="registerConfirmPassword"
              name="confirmpassword"
              label="비밀번호 확인"
              type="password"
              outline
            />
            <RegisterInput
              id="registerNickname"
              name="nickname"
              label="닉네임"
              confirm="중복 확인"
              outline
            />
            <RegisterInput id="locationId" label="거주지" outline />
          </form>
        </div>
        <div
          onClick={() => onSubmitRegister}
          className=" cursor-pointer text-center self-center w-4/5 max-w-screen-md  mb-10 bg-orange-400 text-white text-2xl rounded-lg py-5 "
        >
          회원가입
        </div>
      </div>
    </>
  );
}

function RegisterInput({ id, label, confirm, type }) {
  return (
    <>
      <div className="flex mt-10 w-11/12 pl-20 items-center">
        <div className="cursor-default pl-2 w-28 flex justify-start items-center">
          {label}
        </div>
        <Input id={id} label={label} type={type} outline />
        <div
          className={`flex ml-4 py-0 bg-orange-400 text-white 
          ${
            confirm && "px-2"
          } py-2 rounded-lg text-center items-center justify-center cursor-pointer`}
        >
          {confirm}
        </div>
      </div>
    </>
  );
}
