import React from 'react'
import { MdNavigateBefore } from "react-icons/md";

function edit() {
    return (
        <div className='pt-12'>
            {/* header */}
            <div className='flex items-center border-b p-2 '>
                <button ><MdNavigateBefore size={"40px"} /></button>
                <div className='text-xl text-center flex-1'>프로필 수정</div>
            </div>

            {/* 프로필 사진 */}
            <div className='flex justify-center mt-20'>
                <img className="w-[200px] rounded-full" src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-yellow-carrot-illustration-image_1295171.jpg"></img>
            </div>

            {/* 버튼 */}
            <div className='flex justify-center mt-20'>
                <button>닉네임 변경</button>
            </div>
        </div>
    )
}

export default edit