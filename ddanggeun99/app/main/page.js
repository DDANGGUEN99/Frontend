"use client"

import React, { useState, useEffect } from 'react'
import Tabbar from '../components/tabbar/Tabbar'
import Navbar from '../components/navbar/Navbar'
import { useRouter } from 'next/navigation';
import Animate from '../components/Animate';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useInView } from 'react-intersection-observer';
import useLoading from '../hooks/useLoading';


function Main() {

  // 무한 스크롤 
  const [ref, inView] = useInView(false);
  const [page, setPage] = useState(1)

  const router = useRouter()
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const [items, setItems] = useState([]);
  const loading = useLoading()
  const isLoading = useLoading()
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


  const getItems = async () => {
    const accessToken = Cookies.get('accesstoken');
    const refreshToken = Cookies.get('refreshtoken');
    loading.onLoading()
    try {
      const response = await axios.get(`${serverUrl}/api/items`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
        params: { page: page },
      });
      setItems((prevItems) => [...prevItems, ...response.data.items]);
      setPage((prevPage) => prevPage + 1);
      loading.offLoading()
    } catch (error) {
      console.log(error.response.data.errorMessage);
      loading.offLoading()
    }
  };

  const getNewItems = async () => {
    const accessToken = Cookies.get('accesstoken');
    const refreshToken = Cookies.get('refreshtoken');
    loading.onLoading()

    try {
      const response = await axios.get(`${serverUrl}/api/items`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
        params: { page: page + 1 },
      });
      setItems((prevItems) => [...prevItems, ...response.data.items]);
      setPage((prevPage) => prevPage + 1);
      loading.offLoading()
    } catch (error) {
      console.log(error.response.data.errorMessage);
      loading.offLoading()
    }
  };

  useEffect(() => {
    // inView가 true 일때만 실행한다.
    if (inView) {
      console.log(inView, '무한 스크롤 요청 ')

      getNewItems();
    }
  }, [inView]);

  // 게시글 작성 시간 
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
    getItems();
    getTimeDifference();
  }, []);

  return (

    <Animate animate={animate}>
      <>
        <Navbar page="main" />

        {/* 카드 반복 부분 */}
        <div className="mt-16">
          {items.map((item) => (
            <div key={item.item_id}
              onClick={() => router.push(`/detail/${item.item_id}`)}
              className="flex items-center border-b p-[10px] border-x" >
              <div className="w-[130px] ml-[10px]">
                <img src={item.thumbnail_url}
                  style={{ borderRadius: "10px" }} />
              </div>
              <div className="ml-[10px] mb-[10px]">
                <div className="mb-2">{item.title}</div>
                <div className="text-[12px] mb-2">{item.location} ・ {getTimeDifference(item.createdAt)}</div>
                <div>{item.price.toLocaleString()}원</div>
              </div>
            </div>
          ))}
          {/* 글쓰기 버튼  */}

          {
            isLoading.isLoading === false && <div className="sticky bottom-24 self-end mr-6 flex justify-end">
              <div
                onClick={() => router.push("/createpost")}
                className="cursor-pointer text-center w-32 bg-orange-400 text-white text-xl rounded-full p-4 "
              >
                + 글쓰기
              </div>
            </div>
          }


        </div>
        <Tabbar page="main" />
        <div ref={ref} className='h-5'></div>
      </>
    </Animate>

  )
}

export default Main;
