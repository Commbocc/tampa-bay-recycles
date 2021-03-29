<template>
  <article>
    <v-img
      :aspect-ratio="-1"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
      <v-container class="py-16 text-center">
        <h1 class="text-h2 blue--text darken-2">Tampa Bay Recycles</h1>
      </v-container>
    </v-img>
    <v-container class="py-16">
      <Logos />
      <Content />
      <Tabs />
    </v-container>
  </article>
</template>

<script>
export default {}
</script>
