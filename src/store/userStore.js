import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useStore = create()(
	persist(
		(set) => ({
			token: false,
			counter: 0,
			user: null,
			setToken: (value) => set({ token: value }),
			setCounter: (value) => set({ counter: value }),
			setUser: (value) => set({ user: value }),
		}),
		{ name: "store-user" }
	)
);
