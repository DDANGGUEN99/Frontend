'use client'

import { useRouter } from "next/navigation"
import { MdNavigateBefore } from "react-icons/md";


export default function BeforeLink() {
    const router = useRouter()
    return (
        <button onClick={()=>{router.push('/mypage')}}><MdNavigateBefore size={"40px"} /></button>
    )
}