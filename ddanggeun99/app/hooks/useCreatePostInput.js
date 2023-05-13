import { create } from "zustand";


const useCreatePostInput = create((set) => ({
  category_id:null,
  title:null,
  content: null,
  price:null,
  setCategory_Id: (payload) => set({category_id: payload}),
  setTitle: (payload) => set({title: payload}),
  setContent: (payload) => set({content: payload}),
  setPrice: (payload) => set({price: payload}),
}));

export default useCreatePostInput;
