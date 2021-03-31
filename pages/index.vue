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
      <div class="page-content mb-8 mx-auto prose prose-lg">
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

    const homeContent = await $content(`pages/home.${locale}`).fetch()
    const partners = await $content(`partners`).sortBy('position').fetch()
    const tabs = await $content(`tabs/${locale}`).sortBy('position').fetch()

    return { homeContent, partners, tabs }
  },
}
</script>
