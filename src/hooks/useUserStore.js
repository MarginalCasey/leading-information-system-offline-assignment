import { create } from "zustand";

const useUserStore = create((set) => ({
  user: sessionStorage.getItem("user") || null,
  setUser: (user) => {
    sessionStorage.setItem("user", user);
    set({ user });
  },
  resetUser: () => {
    sessionStorage.removeItem("user");
    set({ user: null });
  },
}));

export default useUserStore;
