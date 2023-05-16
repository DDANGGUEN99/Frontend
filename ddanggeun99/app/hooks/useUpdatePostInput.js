import { create } from "zustand";





const useUpdatePostInput = create((set) => ({
  category_id: "",
  title: "",
  content: "",
  price: "",
  item_images: "",
  setCategory_Id: (payload) => set({ category_id: payload }),
  setTitle: (payload) => set({ title: payload }),
  setContent: (payload) => set({ content: payload }),
  setPrice: (payload) => set({ price: payload }),
  setItem_images: (payload) => set({ item_images: payload }),
}));

export default useUpdatePostInput;
