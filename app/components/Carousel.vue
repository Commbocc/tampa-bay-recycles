<script setup lang="ts">
const items = [
  "/images/carousel/Hillsborough Family at Home.JPG",
  "/images/carousel/Hillsborough Family at Tampa Park.JPG",
  "/images/carousel/Pinellas Family at Collection.JPG",
  "/images/carousel/Pinellas Family at Store.JPG",
];
</script>

<template>
  <div class="">
    <UCarousel v-slot="{ item }" :items="items" :autoplay="{ delay: 5000 }">
      <div class="flex items-center justify-center size-max">
        <img :src="item" class="" alt="Tampa Bay Recycles" />
      </div>
    </UCarousel>
  </div>
</template>
