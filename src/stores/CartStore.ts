import { defineStore, acceptHMRUpdate } from "pinia";
import type { CartItem } from "@/types";
import items from "@/data/cart.json";

export const useCartStore = defineStore("CartStore", {
  state: () => ({
    items: items as CartItem[],
  }),
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
