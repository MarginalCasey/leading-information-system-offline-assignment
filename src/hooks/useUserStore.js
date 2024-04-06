import { create } from "zustand";

const useUserStore = create((set) => {
  const user = sessionStorage.getItem("user") || null;

  return {
    user: user ? JSON.parse(user) : null,
    setUser: (user) => {
      sessionStorage.setItem("user", JSON.stringify(user));
      set({ user });
    },
    resetUser: () => {
      sessionStorage.removeItem("user");
      set({ user: null });
    },
  };
});

export default useUserStore;
