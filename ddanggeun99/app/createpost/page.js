"use client";


import Navbar from "../components/navbar/Navbar";
import useCreatePostInput from "../hooks/useCreatePostInput";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const animate = {
    initial: {
      transform: `translateY(50px)`,
      opacity: 0,
      transition: `transform 0.33s ease`
    },
    animate: {
      transform: `translateY(0px)`,
      opacity: 1,
      transition: `transform 0.33s ease`
    },
    exit: {
      transform: `translateY(50px)`,
      opacity: 0,
      transition: `transform 0.33s ease`
    }
  }
  
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

    <motion.div key={router.route} initial={animate.initial}
      animate={animate.animate}
      exit={animate.exit} >
      <Navbar page="createpost" />
      <div className="pt-16">
        <div className="flex justify-between px-8 border-b-2 py-8">
          <div className="h-[100px] w-[100px] border-2">사진1</div>
          <div className="h-[100px] w-[100px] border-2">사진2</div>
          <div className="h-[100px] w-[100px] border-2">사진3</div>
          <div className="h-[100px] w-[100px] border-2">사진4</div>
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
            value={createPostInput.price}
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
    </motion.div>

  );
}
