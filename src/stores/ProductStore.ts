import { defineStore, acceptHMRUpdate } from "pinia";
import type { Product } from "@/types";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {},
  actions: {
    async fill() {
      const res = await fetch("/products.json");
      this.products = await res.json();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
