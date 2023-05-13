"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import Card from '../components/card/Card'
import Navbar from '../components/navbar/Navbar'
import Tabbar from '../components/tabbar/Tabbar'

function Main() {
  const router = useRouter()
  return (
    <>
  <Navbar/>
    {/* 상단바 */}
    <div className="pt-[50px]">
      <div
        className="flex justify-between items-center p-4 border-b">
        <div className="text-[20px]">서울</div>
        <div className="flex items-center">
          <button className="mr-4">검색</button>
          <button className="mr-4">카테고리</button>
          <button>알림</button>
        </div>
      </div>
    </div>


    {/* 글쓰기 버튼 */}
    <button 
    onClick={() => router.push("/createpost")}
    className="fixed right-[360px] top-[650px] m-4 bg-orange-500 text-white h-[50px] w-[150px] rounded-3xl" >+ 글쓰기 </button>

    {/* 카드 반복 부분 */}
    <Card />
    <Card />
    <Card />
    <Card />
    <Tabbar/>
  </>
  )
}

export default Main