"use client";

import React from 'react'
import Card from '../components/card/Card'
import Tabbar from '../components/tabbar/Tabbar'
import Navbar from '../components/navbar/Navbar'
import Animate from '../components/animate';

const interestAnimate = {
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
};

function Interest() {
  return (
    <Animate animate={interestAnimate}>
      <Navbar page="interest" />

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
    </Animate>
  );
}

export default Interest;
