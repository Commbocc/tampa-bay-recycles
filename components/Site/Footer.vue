<template>
  <v-footer tile color="#76c0f5" class="text-center pt-8">
    <v-card-text>
      <v-img
        :src="require(`~/assets/recycleLogo.png`)"
        max-width="100px"
        class="mx-auto"
      >
      </v-img>
    </v-card-text>

    <v-card-text class="white--text pt-0">
      <v-btn color="white" text rounded class="my-2">
        Español
        <!-- <nuxt-link :to="localePath('index', 'es')">Español</nuxt-link> -->
      </v-btn>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="white--text">
      &copy;
      {{ new Date().getFullYear() }} — <strong>Tampa Bay Recycles</strong>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
}
</script>

<style lang="scss" scoped></style>
