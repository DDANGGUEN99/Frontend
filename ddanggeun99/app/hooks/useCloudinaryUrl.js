import { create } from 'zustand';

 const useCloudinaryUrl = create((set) =>({
  cloudinaryUrl: "",
  setCloudinaryUrl: (payload) => set({cloudinaryUrl: payload}),
 }))

 export default useCloudinaryUrl;