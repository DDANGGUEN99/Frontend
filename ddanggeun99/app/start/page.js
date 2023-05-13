"use client";

import { useRouter } from "next/navigation";
export default function Start() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col h-full gap-10 justify-center ">
        <div className="flex flex-col items-center pt-12">
          <div className="text-6xl pb-10">당신 근처의 당근마켓</div>
          <div className="text-3xl pb-2">중고 거래부터 동네 정보까지,</div>
          <div className="text-3xl">지금 내 동네를 선택하고 시작해보세요!</div>
        </div>

        <div className="flex justify-center flex-col gap-8 ">
          <div
            onClick={() => {
              router.push("/register");
            }}
            className=" cursor-pointer text-center self-center w-4/5 max-w-screen-md bg-orange-400 text-white text-2xl rounded-lg py-5 "
          >
            시작하기
          </div>

          <div
            onClick={() => {
              router.push("/login");
            }}
            className=" cursor-pointer flex gap-2 justify-center text-center self-center w-4/5 max-w-screen-md  mb-10 bg-black text-white text-2xl rounded-lg py-5 "
          >
            <div>이미 계정이 있나요? </div>
            <div className="text-orange-400"> 로그인</div>
          </div>
        </div>
      </div>
    </>
  );
}
