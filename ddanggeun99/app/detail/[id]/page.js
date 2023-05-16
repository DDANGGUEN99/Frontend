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
  const getDetailItems = async () => {
    const accessToken = Cookies.get("accesstoken");
    const refreshToken = Cookies.get("refreshtoken");
    try {
      const response = await axios.get(`${serverUrl}/api/items/${id}`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
      });
      setItem(response.data.item);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(item);

  useEffect(() => {
    getDetailItems();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <Navbar page="detail" />
        <div className="w-full">
          <img width="100%" src={item.item_images} />{" "}
        </div>
        <div className="flex justify-between">
          <div className="flex border-y-2 w-full">
            <div>작성자 프로필사진</div>
            <div>
              <div>{item.nickname}</div>
              <div>{item.location}</div>
            </div>
          </div>

          <div></div>
        </div>
        <div>{item.title}</div>
        <div className="flex">
          <div className=" text-neutral-400">{item.category} </div>
          <div className=" text-neutral-400">{item.createdAt} </div>
        </div>
        <div>{item.content}</div>
      </div>
      <Tabbar page="detail"/>
    </>
  );
}
