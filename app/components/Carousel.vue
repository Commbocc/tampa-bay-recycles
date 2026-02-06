<script setup lang="ts">
const items = [
  "/images/carousel/Hillsborough Family at Home.JPG",
  "/images/carousel/Hillsborough Family at Tampa Park.JPG",
  "/images/carousel/Pinellas Family at Collection.JPG",
  "/images/carousel/Pinellas Family at Store.JPG",
];
</script>

<template>
  <div class="w-full h-full">
    <UCarousel v-slot="{ item }" :items="items" :autoplay="{ delay: 5000 }">
      <div class="h-full w-full">
        <img :src="item" class="block w-full h-full" alt="Tampa Bay Recycles" />
      </div>
    </UCarousel>
  </div>
</template>
