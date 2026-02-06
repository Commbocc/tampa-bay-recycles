<script setup lang="ts">
const { data: tabs } = await useAsyncData("recycling-tabs", () => {
  return queryCollection("recyclingTabs").all();
});
</script>

<template>
  <section class="bg-white py-12">
    <div class="mx-auto max-w-5xl px-4">
      <UTabs
        v-if="tabs && tabs.length > 0"
        :items="
          tabs.map((tab) => ({ label: tab.title, value: tab.id, key: tab.id }))
        "
        :default-value="tabs[0].id"
        :unmount-on-hide="false"
        class="w-full"
      >
        <template #content="{ item }">
          <div class="mt-6">
            <ContentRenderer
              :value="tabs.find((tab) => tab.id === item.value)"
              class="prose prose-slate max-w-none"
            />
          </div>
        </template>
      </UTabs>
    </div>
  </section>
</template>

<style>
.prose iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.prose img {
  margin-top: 1rem;
}
</style>
