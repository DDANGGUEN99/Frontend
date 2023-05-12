import { create } from "zustand";


const useRegisterInput = create((set) => ({
  nickname: null,
  email:null,
  password:null,
  confirmPassword:null,
  locationId:null,
  setNickname: (payload) => set({nickname: payload}),
  setEmail: (payload) => set({email: payload}),
  setPassword: (payload) => set({password: payload}),
  setConfirmPassword: (payload) => set({confirmPassword: payload}),
  setLocationId: (payload) => set({locationId: payload}),
}));

export default useRegisterInput;
