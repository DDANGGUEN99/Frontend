"use client";

import React from 'react'
import Card from '../components/card/Card'
import Tabbar from '../components/tabbar/Tabbar'
import Navbar from '../components/navbar/Navbar'
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";


function Main() {
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

    const router = useRouter()

    return (

        <motion.div key={router.route} initial={animate.initial}
            animate={animate.animate}
            exit={animate.exit} >
            <Navbar page="main" />

            {/* 카드 반복 부분 */}
            <div className='mt-16'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            {/* 글쓰기 버튼 */}
            <div className='sticky bottom-24 self-end mr-6'>
                <div onClick={() => { router.push('/createpost') }} className="cursor-pointer text-center w-32 bg-orange-400 text-white text-xl rounded-full p-4">+ 글쓰기</div>
            </div>


            <Tabbar page="main" />
        </motion.div>

    )
}

export default Main