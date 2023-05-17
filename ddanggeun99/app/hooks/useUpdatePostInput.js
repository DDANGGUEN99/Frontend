import { create } from "zustand";

const useUpdatePostInput = create((set) => ({
  updateCategory_id: "",
  updateTitle: "",
  updateContent: "",
  updatePrice: "",
  item_images: "",
  stringPrice: "",
  setCategory_Id: (payload) => {
    let category_id = -1;
    switch (payload) {
      case "디지털/전자기기":
        category_id = 0;
        break;
      case "건강/헬스":
        category_id = 1;
        break;
      case "의류/생활용품":
        category_id = 2;
        break;
      case "가공식품":
        category_id = 3;
        break;
      case "가구/인테리어":
        category_id = 4;
        break;
      case "기타 중고물품":
        category_id = 5;
        break;
      default:
        category_id = payload;
    }
    set({ updateCategory_id: category_id });
  },
  setTitle: (payload) => set({ updateTitle: payload }),
  setContent: (payload) => set({ updateContent: payload }),
  setPrice: (payload) => {
    let onlyNum = Number(
      String(payload)
        .replace(/[^0-9.]/g, "")
        .replace(/(\..*)\./g, "$1")
    );
    let newNum = Number(onlyNum).toLocaleString("en");
    set({ stringPrice: newNum });
    set({ updatePrice: onlyNum });
  },
  setItem_images: (payload) => set({ item_images: payload }),
}));

export default useUpdatePostInput;
