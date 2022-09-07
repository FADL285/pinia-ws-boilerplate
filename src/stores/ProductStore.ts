import { defineStore, acceptHMRUpdate } from "pinia";
import type { Product } from "@/types";
import products from "@/data/products.json";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: products as Product[],
  }),
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
