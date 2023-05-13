import React from 'react'

function Card() {
    return (
            <div className="flex items-center border-b p-[10px] border-x" >
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
    )
}

export default Card