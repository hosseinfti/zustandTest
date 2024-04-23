import { create } from "zustand";

interface storeType {
  count: number;
  increament: () => void;
  decreament: () => void;
}

const useStore = create<storeType>((set) => ({
  count: 0,
  increament: () => set(({ count: prevCount }) => ({ count: prevCount + 1 })),
  decreament: () => set(({ count: prevCount }) => ({ count: prevCount - 1 })),
}));

export default useStore;
