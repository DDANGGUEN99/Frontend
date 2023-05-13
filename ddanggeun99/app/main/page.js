import React from 'react'
import Card from '../components/card/Card'
import Tabbar from '../components/tabbar/Tabbar'
import Navbar from '../components/navbar/Navbar'


function Main() {
    return (
        <>
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
                <div className="cursor-pointer text-center w-32 bg-orange-400 text-white text-xl rounded-2xl p-4 ">+ 글쓰기</div>
            </div>


            <Tabbar page="main" />
        </>
    )
}

export default Main