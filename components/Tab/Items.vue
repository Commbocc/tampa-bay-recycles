<template>
  <div>
    <v-tabs v-model="tabIndex" show-arrows center-active centered grow>
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

    <v-divider />

    <v-tabs-items v-model="tabIndex">
      <v-tab-item v-for="tab in tabs" :key="tab.slug" :value="tab.slug">
        <v-card flat>
          <v-card-text>
            <v-row justify="center" align="center">
              <v-col v-if="tab.media_src" cols="12" sm="5">
                <TabMedia :type="tab.media_type" :src="tab.media_src" />
              </v-col>

              <v-col cols="12" sm="7">
                <div class="mx-auto prose prose-sm">
                  <nuxt-content :document="tab" />
                </div>
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
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data: () => ({
    tabIndex: null,
  }),
}
</script>
