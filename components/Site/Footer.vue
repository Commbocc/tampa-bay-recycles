<template>
  <v-footer dark tile color="primary" class="text-center pt-8">
    <v-card tile flat color="transparent" width="100%">
      <v-card-text>
        <v-img src="/recycleLogo.png" max-width="100px" class="mx-auto">
        </v-img>
      </v-card-text>

      <v-card-text class="pt-0">
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          :to="switchLocalePath('en')"
        >
          English
        </v-btn>
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          :to="switchLocalePath('es')"
        >
          Español
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;
        <strong>Tampa Bay Recycles</strong>, 2017 -
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
}
</script>

<style lang="scss" scoped></style>
