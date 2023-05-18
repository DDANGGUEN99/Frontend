"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Animate from "@/app/components/Animate";
import Navbar from "@/app/components/navbar/Navbar";
import useUpdatePostInput from "@/app/hooks/useUpdatePostInput";
import Cookies from "js-cookie";
import useUpdateCloudinaryUrl from "@/app/hooks/useUpdateCloudinaryUrl";
import useCloudinaryUrl from "@/app/hooks/useCloudinaryUrl";
export default function UpdatePost() {
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
  const updateCloudinaryUrl = useUpdateCloudinaryUrl();
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
      console.log(response.data.url);
      updateCloudinaryUrl.setCloudinaryUrl(response.data.url);
      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  // 수정할 게시글 불러오기 및 기본값 세팅
  const { id } = useParams();
  const updatePostInput = useUpdatePostInput();
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const [item, setItem] = useState("");
  const cloudinaryUrl = useCloudinaryUrl();

  const getDetailItems = async () => {
    const accessToken = Cookies.get("accesstoken");
    const refreshToken = Cookies.get("refreshtoken");
    try {
      const response = await axios.get(`${serverUrl}/api/items/${id}`, {
        headers: {
          accesstoken: `Bearer ${accessToken}`,
          refreshtoken: `Bearer ${refreshToken}`,
        },
      });
      console.log(response);
      setItem(response.data.item);
      updatePostInput.setCategory_Id(response.data.item.category);
      updatePostInput.setTitle(response.data.item.title);
      updatePostInput.setContent(response.data.item.content);
      updatePostInput.setPrice(response.data.item.price);
      updateCloudinaryUrl.setCloudinaryUrl(response.data.item.item_images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailItems();
  }, []);

  // 이미지 업로드하는 핸들러
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImageSelected(selectedFile);
    uploadImage(selectedFile);
  };

  const router = useRouter();
  const handleChangeInput = (e) => {
    switch (e.target.name) {
      case "title":
        updatePostInput.setTitle(e.target.value);
        break;
      case "price":
        updatePostInput.setPrice(e.target.value);
        break;
      case "content":
        updatePostInput.setContent(e.target.value);
        break;
      case "category_id":
        updatePostInput.setCategory_Id(e.target.value);
        break;
    }
  };
  console.log(item);
  return (
    <Animate animate={animate}>
      <Navbar page="updatepost" />
      <div className="pt-16">
        {/* <div className="flex flex-col items-center justify-between px-8 border-b-2 py-8">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-[200px] h-[200px] "
              src={updateCloudinaryUrl.updateCloudinaryUrl}
            />
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
        </div> */}
        <div
          onClick={() => document.getElementById("fileInput").click()} // onClick 이벤트 핸들러 추가
          className="cursor-pointer flex flex-col items-center justify-between px-8 py-8"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-[200px] h-[200px] "
              src={
                cloudinaryUrl.cloudinaryUrl === ""
                  ? item.item_images?.split(",")[0]
                  : cloudinaryUrl.cloudinaryUrl
              }
            />
          </div>
          <input
            id="fileInput"
            onChange={handleImageChange}
            type="file"
            className="hidden w-full text-sm text-slate-500
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
            value={updatePostInput.updateTitle}
            placeholder="글 제목"
          />
          {updatePostInput.title !== "" && (
            <div className="flex gap-2 mt-2">
              <div
                onClick={() => {
                  updatePostInput.setCategory_Id(0);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${
                updatePostInput.updateCategory_id === 0
                  ? "border-2"
                  : "border-2"
              }  
              ${
                updatePostInput.updateCategory_id === 0
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                updatePostInput.updateCategory_id === 0
                  ? "bg-orange-400"
                  : "bg-white"
              }  
              ${
                updatePostInput.updateCategory_id === 0
                  ? "text-white"
                  : "text-black"
              }
              `}
              >
                디지털/전자기기
              </div>
              <div
                onClick={() => {
                  updatePostInput.setCategory_Id(1);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${
                updatePostInput.updateCategory_id === 1
                  ? "border-2"
                  : "border-2"
              }  
              ${
                updatePostInput.updateCategory_id === 1
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                updatePostInput.updateCategory_id === 1
                  ? "bg-orange-400"
                  : "bg-white"
              }  
              ${
                updatePostInput.updateCategory_id === 1
                  ? "text-white"
                  : "text-black"
              }
              `}
              >
                건강/헬스
              </div>
              <div
                onClick={() => {
                  updatePostInput.setCategory_Id(2);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${
                updatePostInput.updateCategory_id === 2
                  ? "border-2"
                  : "border-2"
              }  
              ${
                updatePostInput.updateCategory_id === 2
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                updatePostInput.updateCategory_id === 2
                  ? "bg-orange-400"
                  : "bg-white"
              }  
              ${
                updatePostInput.updateCategory_id === 2
                  ? "text-white"
                  : "text-black"
              }
              `}
              >
                의류/생활용품
              </div>
              <div
                onClick={() => {
                  updatePostInput.setCategory_Id(3);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${
                updatePostInput.updateCategory_id === 3
                  ? "border-2"
                  : "border-2"
              }  
              ${
                updatePostInput.updateCategory_id === 3
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                updatePostInput.updateCategory_id === 3
                  ? "bg-orange-400"
                  : "bg-white"
              }  
              ${
                updatePostInput.updateCategory_id === 3
                  ? "text-white"
                  : "text-black"
              }
              `}
              >
                가공식품
              </div>
              <div
                onClick={() => {
                  updatePostInput.setCategory_Id(4);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${
                updatePostInput.updateCategory_id === 4
                  ? "border-2"
                  : "border-2"
              }  
              ${
                updatePostInput.updateCategory_id === 4
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                updatePostInput.updateCategory_id === 4
                  ? "bg-orange-400"
                  : "bg-white"
              }  
              ${
                updatePostInput.updateCategory_id === 4
                  ? "text-white"
                  : "text-black"
              }
              `}
              >
                가구/인테리어
              </div>
              <div
                onClick={() => {
                  updatePostInput.setCategory_Id(5);
                }}
                className={`cursor-pointer px-3 rounded-lg 
              ${
                updatePostInput.updateCategory_id === 5
                  ? "border-2"
                  : "border-2"
              }  
              ${
                updatePostInput.updateCategory_id === 5
                  ? "border-orange-400"
                  : "border-black"
              }  
              ${
                updatePostInput.updateCategory_id === 5
                  ? "bg-orange-400"
                  : "bg-white"
              }  
              ${
                updatePostInput.updateCategory_id === 5
                  ? "text-white"
                  : "text-black"
              }
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
            value={updatePostInput.stringPrice}
            placeholder="₩ 가격 (선택사항)"
          />
        </div>
        <div className="border-b-2 h-40 py-3 pl-2">
          <input
            name="content"
            onChange={handleChangeInput}
            value={updatePostInput.updateContent}
            placeholder="게시글 내용을 작성해주세요."
          />
        </div>
      </div>
    </Animate>
  );
}
