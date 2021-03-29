<template>
  <v-img
    :aspect-ratio="-1"
    :src="imgSrc"
    gradient="to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.25)"
    position="center center"
  >
    <v-container class="py-16 text-center">
      <v-img
        :src="require(`~/assets/recycleLogo.png`)"
        max-width="100px"
        class="mx-auto"
      >
      </v-img>
      <h1 id="page-title" class="text-h2 primary--text font-weight-bold">
        Tampa Bay Recycles
      </h1>

      <p class="white--text text-h5 font-weight-medium mt-5">
        Together We Have Made Tampa Bay one of the Top Recycling Regions in
        Florida
      </p>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    imgSrc:
      'http://tampabayrecycles.org/assets/images/carousel/Pinellas Family at Collection.JPG',
  }),
}
</script>

<style lang="scss">
#page-title {
  text-shadow: 1px 1px 2px #ccc;
}
</style>
