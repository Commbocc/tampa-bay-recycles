<template>
  <v-row class="mb-8" justify="center" align="center">
    <v-col
      v-for="{ slug, title, logo, url } in partners"
      :key="slug"
      sm="6"
      md="3"
    >
      <a :href="url" target="_blank" :title="title">
        <v-img :src="logo" :alt="title" max-height="75" contain></v-img>
      </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    partners: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>
