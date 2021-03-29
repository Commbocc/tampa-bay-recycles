<template>
  <div>
    <v-img v-if="type == 'image'" :src="src" contain></v-img>

    <v-responsive
      v-else-if="type == 'video'"
      :aspect-ratio="16 / 9"
      content-class="ratio"
    >
      <iframe :src="src" frameborder="0"></iframe>
    </v-responsive>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    src: String,
  },
}
</script>

<style lang="scss">
.ratio > * {
  width: 100%;
  height: 100%;
}
</style>
