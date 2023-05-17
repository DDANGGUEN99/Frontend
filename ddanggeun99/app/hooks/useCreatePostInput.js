import { create } from "zustand";

const useCreatePostInput = create((set) => ({
  category_id: "",
  title: "",
  content: "",
  price: "",
  item_images: "",
  stringPrice: "",
  setCategory_Id: (payload) => set({ category_id: payload }),
  setTitle: (payload) => set({ title: payload }),
  setContent: (payload) => set({ content: payload }),
  setPrice: (payload) => {
    let onlyNum = Number(
      payload.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1")
    );
    let newNum = Number(onlyNum).toLocaleString("en");
    set({ stringPrice: newNum });
    set({ price: onlyNum });
  },
  setItem_images: (payload) => set({ item_images: payload }),
}));

export default useCreatePostInput;
