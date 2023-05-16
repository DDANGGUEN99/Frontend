"use client";

import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import { BsList, BsBell, BsThreeDotsVertical } from "react-icons/bs";
import { RxCaretDown, RxCaretLeft } from "react-icons/rx";
import Cookies from "js-cookie";

import axios from "axios";
import useCloudinaryUrl from "../../hooks/useCloudinaryUrl";
import useCreatePostInput from "../../hooks/useCreatePostInput";
import { useRouter } from "next/navigation";
import { BiHomeAlt } from "react-icons/bi";
import { FiShare } from "react-icons/fi";

function Navbar({ page }) {
  switch (page) {
    case "createpost":
      const router = useRouter();
      const cloudinaryUrl = useCloudinaryUrl();
      const { category_id, title, content, price } = useCreatePostInput();

      const submitCreatePost = async () => {
        try {
          const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
          const newPost = {
            category_id: 1,
            title,
            content,
            price: Number(price),
            item_images: cloudinaryUrl.cloudinaryUrl,
          };
          console.log(newPost);
          const response = await axios.post(`${serverUrl}/api/items`, newPost, {
            headers: {
              accesstoken: `Bearer ${Cookies.get("accesstoken")}`,
              refreshtoken: `Bearer ${Cookies.get("refreshtoken")}`,
            },
          });
          console.log(response);
          alert("게시글 작성 완료!");
          router.push(`/main`);
        } catch (err) {
          console.log(err);
        }
      };
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-3xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <div>
            <ImCancelCircle size={28} />
          </div>
          <div>내 물건 팔기</div>
          <div onClick={submitCreatePost} className="text-orange-400 text-xl">
            완료
          </div>
        </div>
      );
    case "main":
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <div className="text-[20px] flex items-center ml-2">
            서울
            <RxCaretDown size={"30px"} />
          </div>
          <div className="flex items-center">
            <button className="mr-4">
              <AiOutlineSearch size={"25px"} />
            </button>
            <button className="mr-4">
              <BsList size={"25px"} />
            </button>
            <button>
              <BsBell size={"22px"} />
            </button>
          </div>
        </div>
      );
    case "detail":
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <div className="text-[20px] flex justify-center items-center ml-2 gap-6">
            <RxCaretLeft size={"30px"} qqqqX/>
            <BiHomeAlt size={"30px"} />
          </div>
          <div className="flex items-center  gap-6">
            <FiShare size={"30px"} />
            <BsThreeDotsVertical size={"30px"} />
          </div>
        </div>
      );
      break;
  }
}

export default Navbar;
