<script setup lang="ts">
const items = [
  "/images/carousel/Hillsborough Family at Home.JPG",
  "/images/carousel/Hillsborough Family at Tampa Park.JPG",
  "/images/carousel/Pinellas Family at Collection.JPG",
  "/images/carousel/Pinellas Family at Store.JPG",
];
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :autoplay="{ delay: 7000 }"
    :ui="{
      root: 'h-full',
      viewport: 'h-full',
      container: 'h-full',
      item: 'h-full',
    }"
    loop
    role="presentation"
  >
    <NuxtImg
      :src="item"
      class="w-full h-full object-cover"
      alt="Tampa Bay Recycles"
      sizes="100vw sm:50vw md:400px"
    />
  </UCarousel>
</template>
