import { BsList } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import Navbar from "../components/navbar/Navbar";
import Tabbar from "../components/tabbar/Tabbar";

function Mypage() {
  return ( 
    <>
    <Navbar page="mypage"/>
    <div className="pt-12 p-3">
      <div className="pt-[30px] flex justify-between items-center">
        <img className="w-[50px] rounded-full" src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-yellow-carrot-illustration-image_1295171.jpg"></img>
        <div className="mr-[530px] text-xl">닉네임</div>
        <button><MdNavigateNext size={"40px"}/></button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center p-3 border rounded-lg border-dashed border-orange-500">
          <img className="w-[100px]" src="https://img.etnews.com/photonews/2111/1469640_20211102084651_398_0001.jpg"></img>
          <div className="mr-4">중고거래는 이제 당근페이로 해보세요!</div>
        </div>
      </div>

      <div>
        <div className="text-2xl font-bold mt-5">나의 거래</div>
        <div className="p-1 text-xl mt-7">
          <div className="flex items-center mb-7"><AiOutlineHeart />관심목록</div>
          <div className="flex items-center mb-7"><BsList />판매내역</div>
          <div className="flex items-center mb-7"><AiOutlineShopping />구매내역</div>
        </div>
      </div>
    </div>
    <Tabbar/>
    </>
  )
}


export default Mypage;