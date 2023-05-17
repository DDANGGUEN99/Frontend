"use client";

import axios from "axios";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import useCloudinaryUrl from "../hooks/useCloudinaryUrl";
import useCreatePostInput from "../hooks/useCreatePostInput";
import { useRouter } from "next/navigation";
import Animate from "../components/Animate";
export default function CreatePost() {
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
  };

  //cloudinary
  const cloudinaryUrl = useCloudinaryUrl();
  const [imageSelected, setImageSelected] = useState(null);
  const [publicId, setPublicId] = useState(null);

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
      cloudinaryUrl.setCloudinaryUrl(response.data.url);
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

  const router = useRouter();

  const createPostInput = useCreatePostInput();

  const handleChangeInput = (e) => {
    switch (e.target.name) {
      case "title":
        createPostInput.setTitle(e.target.value);
        break;
      case "price":
        createPostInput.setPrice(e.target.value);
        break;
      case "content":
        createPostInput.setContent(e.target.value);
        break;
      case "category_id":
        createPostInput.setCategory_Id(e.target.value);
        break;
    }
  };
  return (
    <Animate animate={animate}>
      <Navbar page="createpost" />
      <div className="pt-16">
        <div className="flex flex-col items-center justify-between px-8 border-b-2 py-8">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-[200px] h-[200px] "
              src={cloudinaryUrl.cloudinaryUrl}
            />
            <div> 이미지를 등록해주세요!</div>
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
        <div className="border-b-2 pt-6 pb-3 pl-2">
          <input
            name="title"
            onChange={handleChangeInput}
            value={createPostInput.title}
            placeholder="글 제목"
          />
          {createPostInput.title !== "" && (
            <div className="flex gap-2 mt-2">
              <div
                onClick={() => {
                  createPostInput.setCategory_Id(0);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${createPostInput.category_id === 0 ? "border-2" : "border-2"}  
              ${
                createPostInput.category_id === 0
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                createPostInput.category_id === 0 ? "bg-orange-400" : "bg-white"
              }  
              ${createPostInput.category_id === 0 ? "text-white" : "text-black"}
              `}
              >
                디지털/전자기기
              </div>
              <div
                onClick={() => {
                  createPostInput.setCategory_Id(1);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${createPostInput.category_id === 1 ? "border-2" : "border-2"}  
              ${
                createPostInput.category_id === 1
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                createPostInput.category_id === 1 ? "bg-orange-400" : "bg-white"
              }  
              ${createPostInput.category_id === 1 ? "text-white" : "text-black"}
              `}
              >
                건강/헬스
              </div>
              <div
                onClick={() => {
                  createPostInput.setCategory_Id(2);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${createPostInput.category_id === 2 ? "border-2" : "border-2"}  
              ${
                createPostInput.category_id === 2
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                createPostInput.category_id === 2 ? "bg-orange-400" : "bg-white"
              }  
              ${createPostInput.category_id === 2 ? "text-white" : "text-black"}
              `}
              >
                의류/생활용품
              </div>
              <div
                onClick={() => {
                  createPostInput.setCategory_Id(3);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${createPostInput.category_id === 3 ? "border-2" : "border-2"}  
              ${
                createPostInput.category_id === 3
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                createPostInput.category_id === 3 ? "bg-orange-400" : "bg-white"
              }  
              ${createPostInput.category_id === 3 ? "text-white" : "text-black"}
              `}
              >
                가공식품
              </div>
              <div
                onClick={() => {
                  createPostInput.setCategory_Id(4);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${createPostInput.category_id === 4 ? "border-2" : "border-2"}  
              ${
                createPostInput.category_id === 4
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                createPostInput.category_id === 4 ? "bg-orange-400" : "bg-white"
              }  
              ${createPostInput.category_id === 4 ? "text-white" : "text-black"}
              `}
              >
                가구/인테리어
              </div>
              <div
                onClick={() => {
                  createPostInput.setCategory_Id(5);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${createPostInput.category_id === 5 ? "border-2" : "border-2"}  
              ${
                createPostInput.category_id === 5
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                createPostInput.category_id === 5 ? "bg-orange-400" : "bg-white"
              }  
              ${createPostInput.category_id === 5 ? "text-white" : "text-black"}
              `}
              >
                기타 중고물품
              </div>
            </div>
          )}
        </div>
        <div className="border-b-2 py-3 pl-2">
          <input
            name="price"
            onChange={handleChangeInput}
            value={createPostInput.stringPrice}
            placeholder="₩ 가격 (선택사항)"
          />
        </div>
        <div className="border-b-2 h-40 py-3 pl-2">
          <input
            name="content"
            onChange={handleChangeInput}
            value={createPostInput.content}
            placeholder="게시글 내용을 작성해주세요."
          />
        </div>
      </div>
    </Animate>
  );
}
