"use client";

import Navbar from "@/app/components/navbar/Navbar";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const [item,setItem] = useState("")
  const getDetailItems = async () => {
    const accessToken = Cookies.get('accesstoken');
    const refreshToken = Cookies.get('refreshtoken');
    try {
      const response = await axios.get(`${serverUrl}/api/items`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
        params: { item_id: Number(id) },
      });
      setItem(response.data.items);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(item)

  useEffect(() => {
    getDetailItems();
  }, []);



  return (
    <>
      <div className="flex flex-col">
        <Navbar page="detail" />
        <div className="w-full"> </div>
        <div className="flex justify-between">
          <div className="flex">
            <div>작성자 프로필</div>
            <div>
              <div>작성자 닉네임</div>
              <div>작성자 위치</div>
            </div>
          </div>

          <div>매너온도</div>
        </div>
        <div>내용</div>
        <div>작성자의 판매상품</div>
      </div>
    </>
  );
}
