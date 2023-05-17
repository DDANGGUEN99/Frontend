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

  console.log(item.item_images?.split(","));

  useEffect(() => {
    getDetailItems();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10">
        <Navbar page="detail" />
        <div className="w-full">
          <img width="100%" src={item.item_images?.split(",")[0]} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex border-y-2 w-full gap-2">
            <div>
              {item.profile_url === "123" || item.profile_url === "null" ? (
                <img className="w-20 h-20" width="100%"  src='/images/placeholder.png' />
              ) : (
                <img className="w-20 h-20" width="100%" src={item.profile_url} />
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
          <div className=" text-neutral-400">{item.createdAt} </div>
        </div>
        <div>{item.content}</div>
        <div className="flex gap-2">
          <div className=" text-neutral-400">관심</div>
          <div className=" text-neutral-400">조회</div>
        </div>
      </div>

      <Tabbar page="detail" detailItem={item} />
    </>
  );
}
