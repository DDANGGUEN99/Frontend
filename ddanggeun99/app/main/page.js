"use client"

import React from "react";
import Card from "../components/card/Card";
import Tabbar from "../components/tabbar/Tabbar";
import Navbar from "../components/navbar/Navbar";
import { useRouter } from "next/navigation";

function Main() {
  const router = useRouter();
  return (
    <>
      <Navbar page="main" />

      {/* 카드 반복 부분 */}
      <div className="mt-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* 글쓰기 버튼 */}
      <div className="sticky bottom-24 self-end mr-6">
        <div
          onClick={() => router.push("/createpost")}
          className="cursor-pointer text-center w-32 bg-orange-400 text-white text-xl rounded-full p-4 "
        >
          + 글쓰기
        </div>
      </div>

      <Tabbar page="main" />
    </>
  );
}

export default Main;
