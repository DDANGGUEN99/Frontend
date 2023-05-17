import { create } from "zustand";


const useLoginInput = create((set) => ({
  email:null,
  password:null,
  setEmail: (payload) => set({email: payload}),
  setPassword: (payload) => set({password: payload}),
}));

export default useLoginInput;