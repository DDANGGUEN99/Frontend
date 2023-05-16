import Navbar from "../components/navbar/Navbar";

export default function Detail() {
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
