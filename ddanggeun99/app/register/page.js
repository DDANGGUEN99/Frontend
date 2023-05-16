"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Input from "../components/inputs/Input";
import useRegisterInput from "../hooks/useRegisterInput";
import Animate from "../components/Animate";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

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
  };
  const [locationModal, setLocationModal] = useState(false);
  const router = useRouter();
  // nickname, email, password, confirmPassword, locationId를 가져옴.
  const {
    nickname,
    email,
    password,
    locationId,
    setLocationId,
    locationNum,
    setLocationNum,
  } = useRegisterInput();

  // 회원가입 버튼을 눌렀을때 작동하는 함수
  const onSubmitRegister = async () => {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const newUser = {
      nickname,
      email,
      password,
      location_id: locationNum,
      user_image: null,
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
        const response = await axios.get(`${serverUrl}/api/checkNickname`, {
          params: { nickname: nickname },
        });
        return console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Animate animate={animate}>
      <div className="flex flex-col h-full gap-10 justify-center  ">
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
        <div
          onClick={() => {
            locationModal ? setLocationModal(false) : setLocationModal(true);
          }}
          className="flex w-11/12 pl-20 items-center relative"
        >
          <div className="cursor-default pl-2 w-28 flex justify-start items-center ">
            거주지
          </div>
          <div>
            <div className="flex flex-col">
              <button className="w-[400px] flex justify-between text-md p-5 font-medium bt-white border-2 border-black rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed">
                {locationId}
                {locationModal ? (
                  <div className="pt-1">
                    <div>
                      <AiFillCaretDown />
                    </div>
                  </div>
                ) : (
                  <div className="pt-1">
                    <div>
                      <AiFillCaretRight />
                    </div>
                  </div>
                )}
              </button>
            </div>
            {locationModal && (
              <div className="flex flex-col justify-center items-center relative ">
                <div className="absolute top-1 py-2 flex flex-row items-center justify-start overflow-x-auto gap-2 bg-white px-6  rounded-t-xl z-10 border-x-2 border-t-2 border-black ">
                  <div
                    onClick={() => {
                      setLocationId("서울");
                      setLocationNum(0);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    서울
                  </div>
                  <div
                    onClick={() => {
                      setLocationId("경기도");
                      setLocationNum(1);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    경기도
                  </div>
                  <div
                    onClick={() => {
                      setLocationId("강원도");
                      setLocationNum(2);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    강원도
                  </div>
                  <div
                    onClick={() => {
                      setLocationId("충청북도");
                      setLocationNum(3);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    충청북도
                  </div>
                  <div
                    onClick={() => {
                      setLocationId("충청남도");
                      setLocationNum(4);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    충청남도
                  </div>
                </div>
                <div className="absolute top-8  py-2 flex flex-row items-center justify-start overflow-x-auto gap-2 bg-white rounded-b-xl px-6 z-10 border-x-2 border-b-2 border-black ">
                  <div
                    onClick={() => {
                      setLocationId("전라북도");
                      setLocationNum(5);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    전라북도
                  </div>
                  <div
                    onClick={() => {
                      setLocationId("전라남도");
                      setLocationNum(6);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    전라남도
                  </div>
                  <div
                    onClick={() => {
                      setLocationId("경상북도");
                      setLocationNum(7);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    경상북도
                  </div>
                  <div
                    onClick={() => {
                      setLocationId("경상남도");
                      setLocationNum(8);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    경상남도
                  </div>
                  <div
                    onClick={() => {
                      setLocationId("제주");
                      setLocationNum(9);
                      setLocationModal(false);
                    }}
                    className="w-16 text-center cursor-pointer"
                  >
                    제주
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

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
