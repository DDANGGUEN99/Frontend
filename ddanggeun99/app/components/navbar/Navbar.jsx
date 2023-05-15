"use client"


import React from 'react'
import { ImCancelCircle } from "react-icons/im"
import { AiOutlineSearch } from "react-icons/ai"
import { BsList, BsBell } from "react-icons/bs"
import { RxCaretDown } from "react-icons/rx"
import { MdOutlineNavigateBefore } from "react-icons/md"
import { useRouter } from 'next/navigation'



function Navbar({ page }) {
  const router = useRouter()
  switch (page) {
    case "createpost":
      return (
        <div className='cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-3xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center'>
          <div> <ImCancelCircle size={28} /> </div>
          <div>내 물건 팔기</div>
          <div className='text-orange-400 text-xl'>완료</div>
        </div>
      )
    case "main":
      return (
        <div className='cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center'>
          <div className="text-[20px] flex items-center ml-2">서울<RxCaretDown size={"30px"} /></div>
          <div className="flex items-center">
            <button className="mr-4"><AiOutlineSearch size={"25px"} /></button>
            <button className="mr-4"><BsList size={"25px"} /></button>
            <button><BsBell size={"22px"} /></button>
          </div>
        </div>
      )
    case "interest":
      return (
        <div className="cursor-default flex items-center px-4 fixed w-full bg-white z-10 shadow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <button onClick={() => { router.push('/mypage') }}><MdOutlineNavigateBefore size={"35px"} /></button>
          <div className="flex items-center justify-center w-full">
            <div className="text-2xl ml-2">관심목록</div>
          </div>
        </div>
      )
    case "orderHistory":
      return (
        <div className="cursor-default flex items-center px-4 fixed w-full bg-white z-10 shadow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <button onClick={() => { router.push('/mypage') }}><MdOutlineNavigateBefore size={"35px"} /></button>
          <div className="flex items-center justify-center w-full">
            <div className="text-2xl ml-2">구매내역</div>
          </div>
        </div>
      )
      case "salesHistory":
      return (
        <div className="cursor-default flex items-center px-4 fixed w-full bg-white z-10 shadow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <button onClick={() => { router.push('/mypage') }}><MdOutlineNavigateBefore size={"35px"} /></button>
          <div className="flex items-center justify-center w-full">
            <div className="text-2xl ml-2">판매내역</div>
          </div>
        </div>
      )
      break;
  }
}

export default Navbar