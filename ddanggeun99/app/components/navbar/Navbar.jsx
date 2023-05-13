"use client"


import React from 'react'
import {ImCancelCircle} from "react-icons/im"

function Navbar({page}) {
  switch (page) {
    case "createpost":
      return (
        <div className='cursor-default flex items-center justify-between px-4 fixed w-full rounded-b-lg pt-1 bg-white z-10 shodow-sm text-3xl text-center text-black max-w-screen-md mx-auto h-16 border-2'>
          <div> <ImCancelCircle size={28}/> </div>
          <div>내 물건 팔기</div>
          <div className='text-orange-400 text-xl'>완료</div>
        </div>
      )
      break;
  }
}

export default Navbar