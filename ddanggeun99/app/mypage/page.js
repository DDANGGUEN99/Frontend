"use client";

import { BsList } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import Navbar from "../components/navbar/Navbar";
import Tabbar from "../components/tabbar/Tabbar";
import EditLink from "./EditLink";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


function Mypage() {
  const router = useRouter()

  const animate = {
    initial: {
      transform: `translateY(50px)`,
      opacity: 0,
      transition: `transform 0.33s ease`
    },
    animate: {
      transform: `translateY(0px)`,
      opacity: 1,
      transition: `transform 0.33s ease`
    },
    exit: {
      transform: `translateY(50px)`,
      opacity: 0,
      transition: `transform 0.33s ease`
    }
  }


  return (
    <motion.div key={router.route} initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit} >
      <div className="h-full border-x">
        <Navbar page="mypage" />
        <div className="p-3">
          <div className="flex justify-between items-center">
            <img className="w-[50px] rounded-full" src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-yellow-carrot-illustration-image_1295171.jpg"></img>
            <div className="mr-[530px] text-xl">닉네임</div>
            <EditLink />
          </div>

          <div className="p-3  border rounded-lg border-dashed border-orange-500 mt-6 mb-10">
            <div className="flex justify-between items-center">
              <img className="w-[100px]" src="https://img.etnews.com/photonews/2111/1469640_20211102084651_398_0001.jpg"></img>
              <div className="mr-4 flex items-center">당근하는 새로운 방법, 당근페이!<MdOutlineNavigateNext className="ml-2" size={"25px"} /></div>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gray-200 w-[350px] rounded-lg  h-10">충전</button>
              <button className="bg-gray-200 w-[350px] rounded-lg  h-10">계좌송금</button>
            </div>
          </div>

          <div className="border-b">
            <div className="text-2xl font-bold mt-5 pl-2">나의 거래</div>
            <div className="p-2 text-xl mt-5">
              <button onClick={() => { router.push('/interest') }} className="flex items-center mb-7"><AiOutlineHeart className="mr-3" />관심목록</button>
              <button onClick={() => { router.push('/salesHistory') }} className="flex items-center mb-7"><BsList className="mr-3" />판매내역</button>
              <button onClick={() => { router.push('/orderHistory') }} className="flex items-center mb-7"><AiOutlineShopping className="mr-3" />구매내역</button>
            </div>
          </div>
        </div>
        <Tabbar />
      </div>
    </motion.div>
  )
}


export default Mypage;