import React from 'react'
import { MdNavigateBefore } from "react-icons/md";
import BeforeLink from './BeforeLink';

function edit() {
    return (
        <div className='h-full border-x '>
            {/* header */}
            <div className='flex items-center border-b p-2'>
            <BeforeLink/>
                <div className='text-xl text-center flex-1 mr-5'>프로필 수정</div>
                <button className='mr-2'>완료</button>
            </div>

            {/* 프로필 사진 */}
            <div className='flex justify-center mt-20'>
                <img className="w-[200px] rounded-full" src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-yellow-carrot-illustration-image_1295171.jpg"></img>
            </div>

            {/* 닉네임 인풋 */}
            <div className='flex justify-center mt-20'>      
                    <input className='w-80 h-10 border-orange-500 rounded-md pl-2 border-2' placeholder='닉네임을 입력해주세요.'></input>
            </div>
        </div>
    )
}

export default edit