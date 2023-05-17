"use client";

import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { BsList, BsBell, BsThreeDotsVertical } from "react-icons/bs";
import { RxCaretDown, RxCaretLeft } from "react-icons/rx";
import Cookies from "js-cookie";
import axios from "axios";
import useCloudinaryUrl from "../../hooks/useCloudinaryUrl";
import useCreatePostInput from "../../hooks/useCreatePostInput";
import { useParams, useRouter } from "next/navigation";
import { BiHomeAlt } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import useUpdatePostInput from "@/app/hooks/useUpdatePostInput";
import useUpdateCloudinaryUrl from "@/app/hooks/useUpdateCloudinaryUrl";
import { MdNavigateBefore } from "react-icons/md";

function Navbar({ page }) {
  const router = useRouter();
  const { id } = useParams();
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const accessToken = Cookies.get("accesstoken");
  const refreshToken = Cookies.get("refreshtoken");
  switch (page) {
    case "createpost":
      const cloudinaryUrl = useCloudinaryUrl();
      const {
        category_id,
        title,
        content,
        price,
        setCategory_Id,
        setTitle,
        setContent,
        setPrice,
        setItem_images,
      } = useCreatePostInput();

      const submitCreatePost = async () => {
        try {
          const newPost = {
            category_id: category_id,
            title,
            content,
            price: Number(price),
            item_images: cloudinaryUrl.cloudinaryUrl,
          };
          console.log(newPost);
          const response = await axios.post(`${serverUrl}/api/items`, newPost, {
            headers: {
              accesstoken: `Bearer ${Cookies.get("accesstoken")}`,
              refreshtoken: `Bearer ${Cookies.get("refreshtoken")}`,
            },
          });
          console.log(response);
          setCategory_Id("");
          setTitle("");
          setContent("");
          setPrice("");
          setItem_images("");
          alert("게시글 작성 완료!");
          router.push(`/main`);
        } catch (err) {
          console.log(err);
        }
      };
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-3xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <div onClick={() => router.push("/main")} className="cursor-pointer">
            <ImCancelCircle size={28} />
          </div>
          <div>내 물건 팔기</div>
          <div
            onClick={submitCreatePost}
            className="cursor-pointer text-orange-400 text-xl"
          >
            완료
          </div>
        </div>
      );
    case "main":
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <div className="text-[20px] flex items-center ml-2">
            서울
            <RxCaretDown size={"30px"} />
          </div>
          <div className="flex items-center">
            <button className="mr-4">
              <AiOutlineSearch size={"25px"} />
            </button>
            <button className="mr-4">
              <BsList size={"25px"} />
            </button>
            <button>
              <BsBell size={"22px"} />
            </button>
          </div>
        </div>
      );
    case "detail":
      const { id } = useParams();
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
      const [item, setItem] = useState("");
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
          setItem(response.data.item);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getDetailItems();
      }, []);
      let user = null;
      if (localStorage.getItem("user") !== "undefined") {
        user = JSON.parse(localStorage.getItem("user"))?.nickname;
      }
      const [isOpen, setIsOpen] = useState(false);
      // 게시글 삭제
      const deletePost = async () => {
        try {
          const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
          const newPost = {
            status: "D",
          };
          const response = await axios.put(
            `${serverUrl}/api/items/${id}`,
            newPost,
            {
              headers: {
                accesstoken: `Bearer ${Cookies.get("accesstoken")}`,
                refreshtoken: `Bearer ${Cookies.get("refreshtoken")}`,
              },
            }
          );
          console.log(response);
          alert("게시글 수정 완료!");
          router.push(`/main`);
        } catch (err) {
          console.log(err);
        }
      };
      return (
        <div className="cursor-default flex items-center justify-between px-2 fixed w-full bg-transparent z-10 shodow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 self-center">
          <div className="text-[20px] flex justify-center items-center ml-2 gap-6">
            <div
              className="cursor-pointer"
              onClick={() => router.push("/main")}
            >
              <RxCaretLeft size={"30px"} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => router.push("/main")}
            >
              <BiHomeAlt size={"30px"} />
            </div>
          </div>
          <div className="flex items-center gap-6 relative">
            <FiShare size={"30px"} />
            {item.nickname === user && (
              <div
                className="cursor-pointer"
                onClick={() => {
                  isOpen ? setIsOpen(false) : setIsOpen(true);
                }}
              >
                <BsThreeDotsVertical size={"30px"} />
              </div>
            )}

            <div
              className={`absolute cursor-pointer top-12 w-24 gap-5 pt-2 ${
                isOpen && "shadow-md"
              }  text-base rounded-lg py-1 justify-center items-center z-10 ${
                isOpen ? "bg-white" : "bg-transparent"
              } `}
            >
              {isOpen && (
                <>
                  <div onClick={() => router.push(`/updatepost/${id}`)}>
                    수정하기
                  </div>
                  <div onClick={() => deletePost()}>삭제하기</div>
                </>
              )}
            </div>
          </div>
        </div>
      );
    case "updatepost":
      const { updateCategory_id, updateTitle, updateContent, updatePrice } =
        useUpdatePostInput();
      const updateCloudinaryUrl = useUpdateCloudinaryUrl();
      const submitUpdatePost = async () => {
        try {
          const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
          const newPost = {
            category_id: updateCategory_id,
            title: updateTitle,
            content: updateContent,
            price: Number(updatePrice),
            item_images: updateCloudinaryUrl.updateCloudinaryUrl,
            status: "C",
            location_id: 2,
          };
          console.log(newPost);
          const response = await axios.put(
            `${serverUrl}/api/items/${id}`,
            newPost,
            {
              headers: {
                accesstoken: `Bearer ${Cookies.get("accesstoken")}`,
                refreshtoken: `Bearer ${Cookies.get("refreshtoken")}`,
              },
            }
          );
          console.log(response);
          alert("게시글 수정 완료!");
          router.push(`/main`);
        } catch (err) {
          console.log(err);
        }
      };
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-3xl text-center text-black max-w-screen-md mx-auto h-16 border-x-2 border-b-2 self-center">
          <div onClick={() => router.push("/main")} className="cursor-pointer">
            <ImCancelCircle size={28} />
          </div>
          <div>중고거래글 수정하기</div>
          <div
            onClick={submitUpdatePost}
            className="cursor-pointer text-orange-400 text-xl"
          >
            완료
          </div>
        </div>
      );
    case "mypage":
      return (
        <div className="cursor-default flex items-center justify-between px-4 fixed w-full bg-white z-10 shodow-sm text-3xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <button className="flex items-center justify-end w-full">
            <AiOutlineSetting onClick={() => { router.push('/logout') }} />
          </button>
        </div>
      )
    case "logout":
      return (
        <div className="cursor-default flex items-center justify-between px-4 w-full bg-white z-10 shodow-sm text-xl text-center text-black max-w-screen-md mx-auto h-16 border-2 self-center">
          <button className="flex items-center justify-start w-full ">
            <MdNavigateBefore onClick={() => { router.push('/mypage') }} size={"32px"} />
            <div className="flex justify-center w-full">
              <p>설정</p>
            </div>
          </button>
        </div>
      )

      break;
  }
}

export default Navbar;
