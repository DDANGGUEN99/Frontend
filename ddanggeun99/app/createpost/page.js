"use client";

import axios from "axios";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import useCloudinaryUrl from "../hooks/useCloudinaryUrl";
import useCreatePostInput from "../hooks/useCreatePostInput";
import { useRouter } from 'next/navigation';
import Animate from "../components/animate";
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
  }

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

  const router = useRouter()

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
        </div>
        <div className="border-b-2 py-3 pl-2">
          <input
            name="price"
            onChange={handleChangeInput}
            value={createPostInput.stringPrice}
            placeholder="W 가격 (선택사항)"
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
        <div className="border-b-2 h-40 py-3 pl-2">
          <input
            name="category_id"
            onChange={handleChangeInput}
            value={createPostInput.category_id}
            placeholder="상품의 카테고리를 선택해주세요."
          />
        </div>
      </div>
    </Animate>

  );
}
