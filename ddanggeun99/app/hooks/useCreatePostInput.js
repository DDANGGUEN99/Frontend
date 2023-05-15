import { create } from "zustand";

const useCreatePostInput = create((set) => ({
  category_id: 2,
  title: "",
  content: "",
  price: "",
  item_images: "123",
  setCategory_Id: (payload) => set({ category_id: payload }),
  setTitle: (payload) => set({ title: payload }),
  setContent: (payload) => set({ content: payload }),
  setPrice: (payload) => set({ price: payload }),
  setItem_images: (payload) => set({ item_images: payload }),
}));

export default useCreatePostInput;
