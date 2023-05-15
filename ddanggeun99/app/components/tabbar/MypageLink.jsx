'use client'

import { useRouter } from "next/navigation"
import { FiUser } from "react-icons/fi";

export default function MypageLink() {
    const router = useRouter()
    return (
        <div onClick={() => { router.push('/mypage') }} className="flex flex-col justify-center items-center cursor-pointer">
            <FiUser />
            <div className="text-lg">나의 당근</div>
        </div>
    )
}