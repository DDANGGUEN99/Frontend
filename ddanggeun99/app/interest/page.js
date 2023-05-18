"use client";

import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import Animate from "../components/Animate";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";

function Interest() {
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
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const router = useRouter()

  const [items, setItems] = useState([]);

  const getLikedItems = async () => {
    const accessToken = Cookies.get("accesstoken");
    const refreshToken = Cookies.get("refreshtoken");
    try {
      const response = await axios.get(`${serverUrl}/api/items/like`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
      });
      console.log(response);
      setItems(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLikedItems();
  }, []);

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
  console.log(items)

  return (
    <Animate animate={animate}>
      <Navbar page="interest" />

      {/* 카드 반복 부분 */}
      <div className="mt-16">
        {items.map((item) => 
        (
          <div
            onClick={() => router.push(`/detail/${item.item_id}`)}
            key={item.item_id}
            className="flex items-center border-b p-[10px] border-x"
          >
            <div className="w-[130px] ml-[10px]">
              <img src={item.item_images.split(",")[0]} style={{ borderRadius: "10px" }} />
            </div>
            <div className="ml-[10px] mb-[10px]">
              <div className="mb-2">{item.title}</div>
              <div className="text-[12px] mb-2">
                {item.location} ・ {getTimeDifference(item.createdAt)}
              </div>
              <div>{item.price.toLocaleString()}원</div>
            </div>
          </div>
        ))}
      </div>
    </Animate>
  );
}

export default Interest;
