"use client";

import axios from "axios";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import useCloudinaryUrl from "../hooks/useCloudinaryUrl";
import useCreatePostInput from "../hooks/useCreatePostInput";
import Animate from "../components/Animate";
import { BsFillCameraFill } from "react-icons/bs";
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
  const [publicId, setPublicId] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

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

  //이미지 핸들러
  const handleImageChange = (e) => {
    const files = e.target.files;
    const addImageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    let newImageUrls = [...imageUrls, ...addImageUrls];
    setImageUrls(newImageUrls);
  };

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
        <div className="flex flex-col items-start justify-between px-8 border-b-2 py-8">
          <div className="flex flex-row justify-start items-start gap-3">
            <>
              <div
                className="cursor-pointer flex flex-col justify-center items-center w-20 h-20 border-2 rounded-md p-2"
                onClick={() => document.getElementById("fileInput").click()} // onClick 이벤트 핸들러 추가
              >
                <div>
                  <BsFillCameraFill size={32} />
                  <input
                    id="fileInput" // input 요소에 id 추가
                    onChange={handleImageChange}
                    type="file"
                    className="hidden"
                    multiple
                  />
                </div>
                <div>{imageUrls.length}/10</div>
              </div>
            </>
            {imageUrls.map((imageUrl, i) => (
              <div className="relative">
                <img
                  key={i}
                  className="w-20 h-20"
                  src={imageUrl}
                  alt="이미지 미리보기"
                />
                <div
                  onClick={() => {
                    const updatedImageUrls = [...imageUrls];
                    updatedImageUrls.splice(i, 1);
                    setImageUrls(updatedImageUrls);
                  }}
                  className="cursor-pointer absolute top-0 right-0"
                >
                  x
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b-2 pt-6 pb-3 pl-2">
          <input
            className="w-full"
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
            className="w-full"
            name="price"
            onChange={handleChangeInput}
            value={createPostInput.stringPrice}
            placeholder="₩ 가격 (선택사항)"
          />
        </div>
        <div className="border-b-2 h-40 py-3 pl-2">
          <input
            className="w-full"
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

const ImagePreview = ({ imageUrl }) => {
  return;
};
