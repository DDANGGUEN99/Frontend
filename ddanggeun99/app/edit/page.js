"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import Animate from '../components/animate';
import { MdNavigateBefore } from "react-icons/md";
import axios from 'axios';
import Cookies from 'js-cookie';
import useCloudinaryUrl from "../hooks/useCloudinaryUrl";

function edit() {
    const router = useRouter();
    const [userData, setUserData] = useState()
    const [nickname, setNickname] = useState('')
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

    const cloudinaryUrl = useCloudinaryUrl();
    const [imageSelected, setImageSelected] = useState(null);
    const [publicId, setPublicId] = useState(null);

    const nicknameInputHandler = (e) => {
        setNickname(e.target.value)
    }

    // 화면 전환 애니메이션
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

    const uploadImage = async (file) => {
        const formData = new FormData();
        console.log(file);
        formData.append("file", file);
        formData.append("upload_preset", "tuwroqix");

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dsav9fenu/image/upload",
                formData
            );
            console.log(response);
            setPublicId(response.data.public_id);
            console.log(response.data.url)
            cloudinaryUrl.setCloudinaryUrl(response.data.url)
            return response.data.url;
        } catch (error) {
            console.log(error);
        }
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setImageSelected(selectedFile);
        uploadImage(selectedFile);
    };

    // 유저 정보 수정
    const submitCreatePost = async () => {
        try {
            const newUserData = {
                "nickname" : nickname,
                user_image: cloudinaryUrl.cloudinaryUrl,
            };
            console.log(newUserData);
            const response = await axios.put(`${serverUrl}/api/mypage`, newUserData, {
                headers: {
                    accesstoken: `Bearer ${Cookies.get("accesstoken")}`,
                    refreshtoken: `Bearer ${Cookies.get("refreshtoken")}`,
                },
            });
            console.log(response);
            alert("회원 정보가 변경 되었습니다.");
            router.push(`/mypage`);
            setUserData(response.data.userData);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <Animate animate={animate}>
            <div className='h-full border-x '>
                {/* header */}
                <div className='flex items-center border-b p-2'>
                    <button onClick={() => { router.push('/mypage') }}><MdNavigateBefore size={"40px"} /></button>
                    <div className='text-xl text-center flex-1 mr-5'>프로필 수정</div>
                    {/* <button className='mr-2' onClick={() => { updateUserData() }}>완료</button> */}
                    <button className='mr-2' onClick={() => {submitCreatePost()}}>완료</button>
                </div>

                {/* 프로필 사진 */}
                <div className="flex flex-col items-center justify-between px-8 py-8">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="w-[200px] h-[200px] "
                            src={cloudinaryUrl.cloudinaryUrl}
                        />
                        <div> 프로필 사진을 등록해주세요!</div>
                    </div>
                    <input
                        onChange={handleImageChange}
                        type="file"
                        className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                  "
                    />
                </div>

                {/* 닉네임 인풋 */}
                <div className='flex justify-center mt-20'>
                    <input value={nickname} onChange={nicknameInputHandler} className='w-80 h-10 border-orange-500 rounded-md pl-2 border-2' placeholder='변경할 닉네임을 입력해주세요.'></input>
                </div>


            </div>
        </Animate>
    )
}

export default edit