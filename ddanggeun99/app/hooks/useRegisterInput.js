import { create } from "zustand";

const useRegisterInput = create((set) => ({
  nickname: null,
  email: null,
  password: null,
  confirmPassword: null,
  locationId: "거주지",
  locationNum: 0,
  setNickname: (payload) => set({ nickname: payload }),
  setEmail: (payload) => set({ email: payload }),
  setPassword: (payload) => set({ password: payload }),
  setConfirmPassword: (payload) => set({ confirmPassword: payload }),
  setLocationId: (payload) => set({ locationId: payload }),
  setLocationNum:(payload) => set({ locationNum: payload })
}));

export default useRegisterInput;
