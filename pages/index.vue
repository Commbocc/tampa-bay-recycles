<template>
  <article>
    <PageHeader :images="homeContent.images">
      <h1 slot="heading" class="text-h2 font-weight-bold">
        {{ homeContent.title }}
      </h1>

      {{ homeContent.leadIn }}
    </PageHeader>

    <v-container class="py-16">
      <PartnerLogos :partners="partners" />

      <!-- page content -->
      <div class="page-content mb-8 text-body-1">
        <nuxt-content :document="homeContent" />
      </div>

      <TabItems :tabs="tabs" />
    </v-container>
  </article>
</template>

<script>
export default {
  async asyncData({ app, $content }) {
    const locale = app.localePath('index').replace('/', '') || 'en'

    const homeContent = await $content(`${locale}/home`).fetch()
    const partners = await $content(`partners`).sortBy('position').fetch()
    const tabs = await $content(`${locale}/tabs`).sortBy('position').fetch()

    return { homeContent, partners, tabs }
  },
}
</script>

<style lang="scss">
.page-content {
  blockquote {
    padding: 16px 0 16px 24px;
    font-size: 18px;
    font-weight: 300;
  }
}
</style>
