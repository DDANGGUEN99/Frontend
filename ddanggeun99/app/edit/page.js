"use client"
import React from 'react'
import { MdNavigateBefore } from "react-icons/md";
import BeforeLink from './BeforeLink';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Animate from '../components/animate';

function edit() {
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

    const router = useRouter();
    return (
        <Animate animate={animate}>
            <div className='h-full border-x '>
                {/* header */}
                <div className='flex items-center border-b p-2'>
                    <BeforeLink />
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
        </Animate>
    )
}

export default edit