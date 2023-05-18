import { create } from 'zustand';

 const useLoading = create((set) =>({
  isLoading: false,
  onLoading: () => set({isLoading: true}),
  offLoading: () => set({isLoading: false})
 }))

 export default useLoading;