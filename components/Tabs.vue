<template>
  <div>
    <v-tabs v-model="tabs" fixed-tabs>
      <v-tabs-slider color="green"></v-tabs-slider>
      <v-tab href="#mobile-tabs-5-1" class="primary--text">
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#mobile-tabs-5-2" class="primary--text">
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#mobile-tabs-5-3" class="primary--text">
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="i in 3" :key="i" :value="'mobile-tabs-5-' + i">
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>
