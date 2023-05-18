"use client";

import React, { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { BsChat } from "react-icons/bs";
import MypageLink from "./MypageLink";
import { useRouter } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import Cookies from "js-cookie";

function Tabbar({ id, page, like, detailItem, handleLike, likeNum }) {
  const router = useRouter();
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const accessToken = Cookies.get("accesstoken");
  const refreshToken = Cookies.get("refreshtoken");
  const [isLiked, setIsLiked] = useState(like);


  useEffect(() => {
    setIsLiked(like)
  },[])


  if (page === "detail") {
    // 좋아요 처리 로직
    const toggleLike = async () => {
      let updatedLikeNum;
      if (isLiked) {
        setIsLiked(false);
        updatedLikeNum = likeNum - 1;
        try {
          const response = await axios.put(
            `${serverUrl}/api/items/${Number(id)}/like`,
            {},
            {
              headers: {
                accesstoken: `Bearer ${accessToken}`,
                refreshtoken: `Bearer ${refreshToken}`,
              },
            }
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      } else {
        setIsLiked(true);
        updatedLikeNum = likeNum + 1;
        try {
          const response = await axios.put(
            `${serverUrl}/api/items/${Number(id)}/like`,
            {},
            {
              headers: {
                accesstoken: `Bearer ${accessToken}`,
                refreshtoken: `Bearer ${refreshToken}`,
              },
            }
          );

          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
      handleLike(updatedLikeNum);
    };
    console.log(isLiked);
    return (
      <>
        <div className=" w-full fixed border-t-[2px] py-2 h-20 bottom-0 bg-white z-10 shadow-sm text-center text-black flex justify-between items-center max-w-screen-md mx-auto self-center border-x">
          <div className="flex items-center justify-center h-full">
            <div
              onClick={toggleLike}
              className="relative hover:opacity-80 transiton cursor-pointer border-r-2 px-2"
            >
              <AiOutlineHeart
                size={28}
                className={`${
                  isLiked ? "fill-orange-400" : "fill-neutral-500/70"
                } absolute -top-[2px] left-[6px]`}
              />
              <AiFillHeart
                size={24}
                className={isLiked ? "fill-orange-400" : "fill-white"}
              />
            </div>
            <div className="flex flex-col ml-4">
              <div>{detailItem?.price?.toLocaleString("en")}원</div>
            </div>
          </div>
          <div>
            <div className="bg-orange-400 text-white px-3 py-2 rounded-md mr-3">
              채팅하기
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className=" w-full fixed border-t-[2px] py-2 h-20 bottom-0 bg-white z-10 shadow-sm text-5xl text-center text-black flex justify-around  max-w-screen-md mx-auto self-center border-x">
          <div
            onClick={() => router.push("/main")}
            className="cursor-pointer flex flex-col justify-center items-center"
          >
            <BiHomeAlt />
            <p className="text-lg">홈</p>
          </div>
          <div className="cursor-pointer flex flex-col justify-center items-center">
            <MdLocationCity />
            <p className="text-lg">동네생활</p>
          </div>
          <div className="cursor-pointer flex flex-col justify-center items-center">
            <TiLocationOutline />
            <p className="text-lg">내 근처</p>
          </div>
          <div className="cursor-pointer flex flex-col justify-center items-center">
            <BsChat />
            <p className="text-lg"> 채팅</p>
          </div>
          <MypageLink />
        </div>
      </>
    );
  }
}

export default Tabbar;
