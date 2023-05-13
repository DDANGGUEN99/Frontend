import { BsList } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import Navbar from "../components/navbar/Navbar";
import Tabbar from "../components/tabbar/Tabbar";
import EditLink from "./EditLink";

function Mypage() {
  return (
    <div className="h-full border-x">
      <Navbar page="mypage" />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <img className="w-[50px] rounded-full" src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-yellow-carrot-illustration-image_1295171.jpg"></img>
          <div className="mr-[530px] text-xl">닉네임</div>
          <EditLink/>
        </div>

        <div className="p-3 border rounded-lg border-dashed border-orange-500 mt-6 mb-10">
          <div className="flex justify-between items-center">
            <img className="w-[100px]" src="https://img.etnews.com/photonews/2111/1469640_20211102084651_398_0001.jpg"></img>
            <div className="mr-4">중고거래는 이제 당근페이로 해보세요!</div>
          </div>
          <div className="">
            <button className="bg-orange-500 w-40 rounded-lg">충전</button>
            <button className="bg-orange-500 w-40 rounded-lg">계좌송금</button>
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold mt-5 pl-2">나의 거래</div>
          <div className="p-2 text-xl mt-5">
            <div className="flex items-center mb-7"><AiOutlineHeart className="mr-3" />관심목록</div>
            <div className="flex items-center mb-7"><BsList className="mr-3" />판매내역</div>
            <div className="flex items-center mb-7"><AiOutlineShopping className="mr-3" />구매내역</div>
          </div>
        </div>
      </div>
      <Tabbar />
    </div>
  )
}


export default Mypage;