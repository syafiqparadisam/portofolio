import { create } from "zustand";

export const useLoadingStore = create((set) => ({
	loading: false,
	setIsLoading: () => set((state) => ({ loading: !state.loading })),
}));
