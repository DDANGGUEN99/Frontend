"use client"

import React, { useState, useEffect } from 'react'
import Tabbar from '../components/tabbar/Tabbar'
import Navbar from '../components/navbar/Navbar'
import { useRouter } from 'next/navigation';
import Animate from '../components/Animate';
import axios from 'axios';
import Cookies from 'js-cookie';

function Main() {
  //화면 전환 애니메이션
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
  }

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const accessToken = Cookies.get('accesstoken');
    const refreshToken = Cookies.get('refreshtoken');

    try {
      const response = await axios.get(`${serverUrl}/api/items`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
        params: { page: 1 },
      });
      setItems(response.data.items);
    } catch (error) {
      console.log(error.response.data.errorMessage);
    }
  }

  console.log(items)

  useEffect(() => {
    getItems();
  }, []);

  const router = useRouter()

  return (

    <Animate animate={animate}>
      <>
      <Navbar page="main" />

      {/* 카드 반복 부분 */}
      <div className="mt-16">
        {items.map((item) => (
          <div key={item.item_id} className="flex items-center border-b p-[10px] border-x" >
            <div className="w-[130px] ml-[10px]" >
              <img src={item.item_images}
                style={{ borderRadius: "10px" }} />
            </div>
            <div className="ml-[10px] mb-[10px]">
              <div className="mb-2">{item.title}</div>
              <div className="text-[12px] mb-2">{item.location} ・ {item.createdAt}</div>
              <div>{item.price}원</div>
            </div>
          </div>
        ))}
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
    </Animate>

  )
}

export default Main;
