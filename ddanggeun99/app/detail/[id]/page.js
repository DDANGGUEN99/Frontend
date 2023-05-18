"use client";

import Navbar from "@/app/components/navbar/Navbar";
import Tabbar from "@/app/components/tabbar/Tabbar";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const [item, setItem] = useState("");
  const [like, setLike] = useState([]);
  const [likeNum, setLikeNum] = useState(item.likes);
  const accessToken = Cookies.get("accesstoken");
  const refreshToken = Cookies.get("refreshtoken");

  const getDetailItems = async () => { 
    try {
      const response = await axios.get(`${serverUrl}/api/items/${id}`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
      });
      setItem(response.data.item);
      setLikeNum(response.data.item.likes);
    } catch (error) {
      console.log(error);
    }
  };

  const getLikedItems = async () => {
    try {
      const response = await axios.get(`${serverUrl}/api/items/like`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
      });
      setLike(response.data.items.map((v) => v.item_id).includes(Number(id)));
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeDifference = (createdAt) => {
    const serverTime = new Date(createdAt);
    const currentTime = new Date();

    const timeDiff = Math.floor((currentTime - serverTime) / (1000 * 60)); // 분 단위로 시간 차이 계산

    if (timeDiff < 60) {
      return `${timeDiff}분 전`;
    } else {
      const hoursDiff = Math.floor(timeDiff / 60);
      return `${hoursDiff}시간 전`;
    }
  };

  useEffect(() => {
    getDetailItems();
    getLikedItems();
  }, []);

  const handleLike = (updatedLikeNum) => {
    setLikeNum(updatedLikeNum);
  };

  console.log(like)
  return (
    <>
      <div className="flex flex-col gap-10 pb-32">
        <Navbar page="detail" />
        <div className="w-full">
          <img width="100%" src={item.item_images?.split(",")[0]} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex border-y-2 w-full gap-2">
            <div>
              {item.profile_url === "" || item.profile_url === "null" ? (
                <img
                  className="w-20 h-20"
                  width="100%"
                  src="/images/placeholder.png"
                />
              ) : (
                <img
                  className="w-20 h-20"
                  width="100%"
                  src={item.profile_url}
                />
              )}
            </div>
            <div className="flex flex-col justify-center items-start">
              <div>{item.nickname}</div>
              <div>{item.location}</div>
            </div>
          </div>

          <div></div>
        </div>
        <div>{item.title}</div>
        <div className="flex gap-2">
          <div className=" text-neutral-400">{item.category} </div>
          <div className=" text-neutral-400">
            {getTimeDifference(item.createdAt)}
          </div>
        </div>
        <div>{item.content}</div>
        <div className="flex gap-2">
          <div className=" text-neutral-400">관심{likeNum}</div>
          <div className=" text-neutral-400">조회{item.views}</div>
        </div>
      </div>

      <Tabbar
        page="detail"
        detailItem={item}
        id={id}
        like={like}
        likeNum={likeNum}
        handleLike={handleLike}
      />
    </>
  );
}
