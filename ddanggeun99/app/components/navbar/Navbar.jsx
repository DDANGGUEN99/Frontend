"use client";

import useCreatePostInput from "@/app/hooks/useCreatePostInput";
import { useRouter } from "next/navigation";
import React from "react";
import { ImCancelCircle } from "react-icons/im";

function Navbar({ page }) {
  const router = useRouter();

  switch (page) {
    // createpost에 들어가는 Navbar
    case "createpost":
      // 게시글 등록하는 함수
      const { title, content, price, category_id } = useCreatePostInput();
      const onSubmitPost = async () => {
        try {
          const newPost = {
            title,
            content,
            price,
            category_id,
            location_id: 0,
          };
          await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/items`,
            { newPost }, {}
          );
        } catch (error) {
          console.log(error);
        }
      };
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full rounded-b-lg pt-1 bg-white z-10 shodow-sm text-3xl text-center text-black max-w-screen-md mx-auto h-16">
          <div onClick={() => router.push("/main")}>
            <ImCancelCircle size={28} />
          </div>
          <div>내 물건 팔기</div>
          <div onClick={onSubmitPost} className="text-orange-400 text-xl">
            완료
          </div>
        </div>
      );
    // mypage에 들어가는 Navbar
    case "mypage":
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full rounded-b-lg pt-1 bg-orange-400 z-10 shodow-sm text-3xl text-center text-white max-w-screen-md mx-auto h-16 border-b-2"></div>
      );
  }
}

export default Navbar;
