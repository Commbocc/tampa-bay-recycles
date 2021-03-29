<template>
  <v-img
    id="css-carousel"
    :aspect-ratio="-1"
    :src="imgSrc"
    x-gradient="to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.25)"
    position="center center"
  >
    <v-container class="py-16 my-16 text-center text-shadow">
      <v-img src="/recycleLogo.png" max-width="100px" class="mx-auto"> </v-img>

      <div id="page-title" class="primary--text text--lighten-2">
        <slot name="heading"> Tampa Bay Recycles </slot>
      </div>

      <div class="white--text text-h5 font-weight-medium mt-5">
        <slot></slot>
      </div>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      deafult: () => [],
    },
  },

  data: () => ({
    imgSrc: '',
    interval: null,
  }),

  beforeMount() {
    this.imgSrc = this.images[0]

    // interval
    let activeIndex = 0
    this.interval = setInterval(() => {
      activeIndex++

      if (activeIndex === this.images.length) {
        activeIndex = 0
      }

      this.imgSrc = this.images[activeIndex]
    }, 5500)
  },

  beforeDestroy() {
    // clear interval
    clearInterval(this.interval)
  },
}
</script>

<style lang="scss">
#css-carousel > .v-image__image.v-image__image--cover {
  -webkit-transition: all 1.5s ease-in-out;
  -moz-transition: all 1.5s ease-in-out;
  -o-transition: all 1.5s ease-in-out;
  transition: all 1.5s ease-in-out;
}

.text-shadow {
  text-shadow: 2px 2px 4px #333;
}
</style>
