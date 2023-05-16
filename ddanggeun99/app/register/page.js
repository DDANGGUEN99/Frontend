"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Input from "../components/inputs/Input";
import useRegisterInput from "../hooks/useRegisterInput";
import { motion, AnimatePresence } from "framer-motion"
import Animate from "../components/Animate";

export default function Register() {
  // 화면 전환 애니메이션 설정
  const animate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  const router = useRouter();
  // nickname, email, password, confirmPassword, locationId를 가져옴.
  const { nickname, email, password, confirmPassword, locationId } =
    useRegisterInput();

  // 회원가입 버튼을 눌렀을때 작동하는 함수
  const onSubmitRegister = async () => {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

    const newUser = {
      nickname,
      email,
      password,
      location_id: 1,
      user_image: "123",
    };
    try {
      const response = await axios.post(`${serverUrl}/api/signup`, newUser);
      console.log(response);
      router.push("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // 중복 체크 함수
  const onSubmitConfirm = async (e, id) => {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    if (id === "registerEmail") {
      // 이메일 중복 체크
      try {
        const response = await axios.get(`${serverUrl}/api/checkEmail`, {
          params: { email: email },
        });
        return console.log(response);
      } catch (error) {
        return console.log(error);
      }
    } else {
      // 닉네임 중복 체크
      try {
        const response = await axios.get(
          `${serverUrl}/api/checkNickname`,
          { params: { nickname: nickname } }
        );
        return console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Animate animate={animate}>
      <div className="flex flex-col h-full gap-10 justify-center ">
        <div className="flex justify-center items-center">
          <img width="300px" src="/images/carrot.png" />
        </div>
        <RegisterInput
          id="registerEmail"
          name="email"
          label="이메일"
          confirm="중복 확인"
          onSubmitConfirm={onSubmitConfirm}
        />
        <RegisterInput
          id="registerPassword"
          name="password"
          label="비밀번호"
          type="password"
        />
        <RegisterInput
          id="registerConfirmPassword"
          name="confirmpassword"
          label="비밀번호 확인"
          type="password"
        />
        <RegisterInput
          id="registerNickname"
          name="nickname"
          label="닉네임"
          confirm="중복 확인"
          onSubmitConfirm={onSubmitConfirm}
        />
        <RegisterInput id="locationId" label="거주지" />
        <div
          onClick={onSubmitRegister}
          className=" cursor-pointer mb-10 text-center self-center w-4/5 max-w-screen-md bg-orange-400 text-white text-2xl rounded-lg py-5 "
        >
          회원가입
        </div>
      </div>
    </Animate>
  );
}

function RegisterInput({ id, label, confirm, type, onSubmitConfirm }) {
  return (
    <>
      <div className="flex w-11/12 pl-20 items-center">
        <div className="cursor-default pl-2 w-28 flex justify-start items-center">
          {label}
        </div>
        <Input id={id} label={label} type={type} outline location={true} />
        <div
          onClick={(e) => onSubmitConfirm(e, id)}
          className={`flex ml-4 py-0 bg-orange-400 text-white 
          ${confirm && "px-2"
            } py-2 rounded-lg text-center items-center justify-center cursor-pointer`}
        >
          {confirm}
        </div>
      </div>
    </>
  );
}
