<template>
  <div>
    <v-responsive
      v-if="tab.iframeSrc"
      :aspect-ratio="16 / 9"
      content-class="ratio"
    >
      <iframe :src="tab.iframeSrc" frameborder="0"></iframe>
    </v-responsive>

    <v-img v-else-if="tab.imageSrc" :src="tab.imageSrc" contain></v-img>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss">
.ratio > * {
  width: 100%;
  height: 100%;
}
</style>
