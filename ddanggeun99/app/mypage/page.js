"use client";

import { BsList } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import Navbar from "../components/navbar/Navbar";
import Tabbar from "../components/tabbar/Tabbar";
import { MdOutlineNavigateNext, MdNavigateNext } from "react-icons/md";
import { useRouter } from "next/navigation";
import Animate from "../components/animate";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";

function Mypage() {
  const router = useRouter()
  const [userData, setUserData] = useState(null)
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
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

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    const accessToken = Cookies.get('accesstoken');
    const refreshToken = Cookies.get('refreshtoken');

    try {
      const response = await axios.get(`${serverUrl}/api/mypage`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        }
      });

      setUserData(response.data.userData)
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <Animate animate={animate}>
      <Navbar page="mypage" />
      <div className="h-full border-x mt-16">
        <div className="p-3">
          <div className="flex justify-between items-center ml-1">
            {userData && userData.nickname && userData.user_image && (<>
              <img className="w-[60px] h-[60px] rounded-full" src={userData.user_image}></img>
              <div className="mr-[470px] text-xl">{userData.nickname}</div>
            </>
            )}
            <button onClick={() => { router.push('/edit') }} className="rounded-md w-28 h-8 bg-slate-300">프로필 보기</button>
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
    </Animate >
  )
}


export default Mypage;