import Navbar from "../components/navbar/Navbar";

export default function CreatePost() {
  return (
    <>
      <Navbar page="createpost" />
      <div className="pt-16">
        <div className="flex justify-between px-8 border-b-2 py-8">
          <div className="h-[100px] w-[100px] border-2">사진1</div>
          <div className="h-[100px] w-[100px] border-2">사진2</div>
          <div className="h-[100px] w-[100px] border-2">사진3</div>
          <div className="h-[100px] w-[100px] border-2">사진4</div>
        </div>
        <div className="border-b-2 pt-6 pb-3 pl-2"><input placeholder="글 제목"/></div>
        <div className="border-b-2 py-3 pl-2"><input placeholder="W 가격 (선택사항)"/></div>
        <div className="border-b-2 h-40 py-3 pl-2"><input placeholder="게시글 내용을 작성해주세요."/></div>
      </div>
    </>
  );
}
