"use client";

import Navbar from "../components/navbar/Navbar";
import Animate from "../components/Animate";
import Modal from 'react-modal';
import { useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { useRouter } from "next/navigation";
import { cookies } from "next/dist/client/components/headers";

function logout() {
    const router = useRouter()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const modalHandler = () => {
        setModalIsOpen(true)
    }
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

    const logoutHandler = async () => {
        const accessToken = Cookies.get('accesstoken');
        const refreshToken = Cookies.get('refreshtoken');

        try {
            const response = await axios.post(`${serverUrl}/api/logout`,{},{
                headers: {
                    accesstoken: `Bearer ${accessToken}`,
                    refreshtoken: `Bearer ${refreshToken}`,
                }
            });
            console.log(response)
            Cookies.remove('accesstoken')
            Cookies.remove('refreshtoken')
            router.push('/')
            ;
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Animate animate={animate}>
            <Navbar page="logout" />
            <div>
                <div className="border-x border-b p-3 cursor-pointer" onClick={() => { modalHandler() }}>로그아웃</div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    ariaHideApp={false}
                    style={{
                        content: {
                            width: '30%', height: '30%',
                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '15px'
                        }
                    }}>
                    <div className="p-2">
                        <div className="text-2xl">
                            로그아웃
                        </div>
                        <div className="text-sm mt-2">
                            정말 로그아웃 하시겠나요?
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-6">
                        <button className="my-2 bg-orange-400 rounded-md w-56 h-10" onClick={() => { logoutHandler() }}>로그아웃</button>
                        <button className="border border-gray-400 rounded-md w-56 h-10" onClick={() => { setModalIsOpen(false) }} >닫기</button>
                    </div>

                </Modal>
            </div>
        </Animate>
    )
}

export default logout;