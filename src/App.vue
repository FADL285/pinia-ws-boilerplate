<script setup>
import { storeToRefs } from "pinia";
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";

const { fill } = useProductStore();
const { addToCart } = useCartStore();
const { products } = storeToRefs(useProductStore());
// Fill the store with data
fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart(product.id, $event)"
      />
    </ul>
  </div>
</template>
