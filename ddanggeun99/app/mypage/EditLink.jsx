'use client'

import { useRouter } from "next/navigation"
import { MdNavigateNext } from "react-icons/md";


export default function EditLink() {
    const router = useRouter()
    return (
        <button onClick={()=>{router.push('/edit')}}><MdNavigateNext size={"40px"} /></button>
    )
}