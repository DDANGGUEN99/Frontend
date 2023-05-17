import { create } from 'zustand';

 const useUpdateCloudinaryUrl = create((set) =>({
  updateCloudinaryUrl: "",
  setCloudinaryUrl: (payload) => set({updateCloudinaryUrl: payload}),
 }))

 export default useUpdateCloudinaryUrl;