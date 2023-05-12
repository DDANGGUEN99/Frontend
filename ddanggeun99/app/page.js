

export default function Home() {
  return (
    <>

      <div className="mt-[50px]">
        <div
          className="flex justify-between items-center p-4 border-b">
          <div className="text-[20px]">서울</div>
          <div className="flex items-center">
            <div className="mr-4">검색</div>
            <div className="mr-4">카테고리</div>
            <div>알림</div>
          </div>
        </div>

        {/* 글쓰기 버튼 */}
        <button className="fixed right-[130px] top-[650px] m-4 bg-orange-500 text-white h-[50px] w-[150px] rounded-3xl" >+ 글쓰기 </button>

        {/* 카드 반복 부분 */}
        <div className="h-[150px] mt-2 flex items-center" >
          <div className="w-[130px] ml-[10px]" >
            <img src="https://mcafethumb-phinf.pstatic.net/MjAyMTA0MThfMjM2/MDAxNjE4NzA1MDk0MTI4.wcKUvg5WFihAqaFQ2VJdcZwZTpv44Az3fuESE_aWCoQg.RWb4KGUHvbXQwCmMIvR1ZXQ285maRoDpPKc0683xOZsg.JPEG/1C206A79-4EE4-40E0-B6C4-5EB34731E84E.jpeg?type=w800"
              style={{ borderRadius: "10px" }} />
          </div>
          <div className="ml-[10px] mb-[10px]">
            <div className="mb-2">제목 : 닌텐도 스위치 팝니다</div>
            <div className="text-[12px] mb-2">서울 ・ 24분 전</div>
            <div>300,000원</div>
          </div>
        </div>

        <div className="h-[150px flex items-center" >
          <div div className="w-[130px] ml-[10px]">
            <img src="https://dnvefa72aowie.cloudfront.net/origin/article/202303/a5f3c2dd4ec8fbb6fcdc90596062659bc7f1dfa78f8ad6b72c8f704a8be8a08e.jpg?q=82&s=300x300&t=crop"
              style={{ borderRadius: "10px" }} />
          </div>
          <div className="ml-[10px]">
            <div className="mb-2">제목 : 에어팟 프로 팝니다</div>
            <div className="text-[12px] mb-2">서울 ・ 24분 전</div>
            <div>150,000원</div>
          </div>
        </div>
      </div>

      <div className="h-[150px] mt-2 flex items-center" >
        <div className="w-[130px] ml-[10px]" >
          <img src="https://mcafethumb-phinf.pstatic.net/MjAyMTA0MThfMjM2/MDAxNjE4NzA1MDk0MTI4.wcKUvg5WFihAqaFQ2VJdcZwZTpv44Az3fuESE_aWCoQg.RWb4KGUHvbXQwCmMIvR1ZXQ285maRoDpPKc0683xOZsg.JPEG/1C206A79-4EE4-40E0-B6C4-5EB34731E84E.jpeg?type=w800"
            style={{ borderRadius: "10px" }} />
        </div>
        <div className="ml-[10px] mb-[10px]">
          <div className="mb-2">제목 : 닌텐도 스위치 팝니다</div>
          <div className="text-[12px] mb-2">서울 ・ 24분 전</div>
          <div>300,000원</div>
        </div>
      </div>
      <div className="h-[150px] mt-2 flex items-center" >
        <div className="w-[130px] ml-[10px]" >
          <img src="https://mcafethumb-phinf.pstatic.net/MjAyMTA0MThfMjM2/MDAxNjE4NzA1MDk0MTI4.wcKUvg5WFihAqaFQ2VJdcZwZTpv44Az3fuESE_aWCoQg.RWb4KGUHvbXQwCmMIvR1ZXQ285maRoDpPKc0683xOZsg.JPEG/1C206A79-4EE4-40E0-B6C4-5EB34731E84E.jpeg?type=w800"
            style={{ borderRadius: "10px" }} />
        </div>
        <div className="ml-[10px] mb-[10px]">
          <div className="mb-2">제목 : 닌텐도 스위치 팝니다</div>
          <div className="text-[12px] mb-2">서울 ・ 24분 전</div>
          <div>300,000원</div>
        </div>
      </div>
      <div className="h-[150px] mt-2 flex items-center" >
        <div className="w-[130px] ml-[10px]" >
          <img src="https://mcafethumb-phinf.pstatic.net/MjAyMTA0MThfMjM2/MDAxNjE4NzA1MDk0MTI4.wcKUvg5WFihAqaFQ2VJdcZwZTpv44Az3fuESE_aWCoQg.RWb4KGUHvbXQwCmMIvR1ZXQ285maRoDpPKc0683xOZsg.JPEG/1C206A79-4EE4-40E0-B6C4-5EB34731E84E.jpeg?type=w800"
            style={{ borderRadius: "10px" }} />
        </div>
        <div className="ml-[10px] mb-[10px]">
          <div className="mb-2">제목 : 닌텐도 스위치 팝니다</div>
          <div className="text-[12px] mb-2">서울 ・ 24분 전</div>
          <div>300,000원</div>
        </div>
      </div>
      <div className="h-[150px] mt-2 flex items-center" >
        <div className="w-[130px] ml-[10px]" >
          <img src="https://mcafethumb-phinf.pstatic.net/MjAyMTA0MThfMjM2/MDAxNjE4NzA1MDk0MTI4.wcKUvg5WFihAqaFQ2VJdcZwZTpv44Az3fuESE_aWCoQg.RWb4KGUHvbXQwCmMIvR1ZXQ285maRoDpPKc0683xOZsg.JPEG/1C206A79-4EE4-40E0-B6C4-5EB34731E84E.jpeg?type=w800"
            style={{ borderRadius: "10px" }} />
        </div>
        <div className="ml-[10px] mb-[10px]">
          <div className="mb-2">제목 : 닌텐도 스위치 팝니다</div>
          <div className="text-[12px] mb-2">서울 ・ 24분 전</div>
          <div>300,000원</div>
        </div>
      </div>
    </>

  );
}
