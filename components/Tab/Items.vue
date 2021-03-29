<template>
  <div>
    <v-tabs v-model="tabIndex" fixed-tabs>
      <v-tabs-slider color="green"></v-tabs-slider>

      <v-tab
        v-for="tab in tabs"
        :key="tab.slug"
        :href="`#${tab.slug}`"
        class="grey--text text--darken-2"
      >
        {{ tab.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items id="tab-items" v-model="tabIndex">
      <v-tab-item v-for="tab in tabs" :key="tab.slug" :value="tab.slug">
        <v-card flat>
          <v-card-text>
            <v-row justify="center">
              <v-col v-if="tab.media_src" cols="12" sm="5" md="4">
                <TabMedia :type="tab.media_type" :src="tab.media_src" />
              </v-col>

              <v-col cols="12" sm="7" md="8">
                <nuxt-content :document="tab" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: null,
      tabs: [],
    }
  },

  async fetch() {
    this.tabs = await this.$content('tabs').sortBy('position').fetch()
  },
}
</script>

<style lang="scss">
$color: #4ab848;

#tab-items {
  h1,
  h2,
  h3 {
    color: $color;
  }

  a {
    color: $color;
  }
}
</style>
