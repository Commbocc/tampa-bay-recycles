<script setup lang="ts">
const { data: partners } = await useAsyncData("partners", () => {
  return queryCollection("partners").all();
});
</script>

<template>
  <section class="bg-slate-50 py-12">
    <div class="mx-auto max-w-5xl px-4">
      <div class="flex justify-center content-center flex-wrap">
        <UCard
          v-for="partner in partners"
          variant="solid"
          class="m-2 bg-transparent"
        >
          <a
            :key="partner.id"
            :href="partner.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="partner.logo" :alt="partner.name" />
          </a>
        </UCard>
      </div>

      <slot name="description" />

      <slot name="quote" />
    </div>
  </section>
</template>
