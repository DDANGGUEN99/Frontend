"use client";

import React from 'react'
import Card from '../components/card/Card'
import Tabbar from '../components/tabbar/Tabbar'
import Navbar from '../components/navbar/Navbar'


function salesHistory() {

    return (
        <>
            <Navbar page="salesHistory" />

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
        </>
    )
}

export default salesHistory