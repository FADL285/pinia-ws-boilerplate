import { defineStore, acceptHMRUpdate } from "pinia";
import type { CartItem } from "@/types";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    count: (state) =>
      state.items.reduce((prevVal, current) => prevVal + current.count, 0),
    isEmpty: (state) => !state.items.length,
  },
  actions: {
    addToCart(itemId: string, count: number) {
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        item.count += count;
      } else if (count > 0) {
        this.items.push({ id: itemId, count });
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
