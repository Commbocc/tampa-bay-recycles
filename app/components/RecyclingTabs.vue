<script setup lang="ts">
const { data: tabs } = await useAsyncData("recycling-tabs", () => {
  return queryCollection("recyclingTabs").all();
});
</script>

<template>
  <section class="bg-white py-12">
    <div class="mx-auto max-w-5xl px-4">
      <UTabs
        v-if="tabs?.length"
        :items="
          tabs.map((tab) => ({ label: tab.title, value: tab.id, key: tab.id }))
        "
        :default-value="tabs?.[0]?.id"
        :unmount-on-hide="false"
        variant="link"
        class="w-full"
        :ui="{ list: 'overflow-x-auto', trigger: 'min-w-auto' }"
      >
        <template #content="{ item }">
          <ContentRenderer
            v-for="tab in tabs.filter((tab) => tab.id === item.value)"
            :value="tab"
            class="mt-6 prose prose-slate max-w-none tabs"
          />
        </template>
      </UTabs>
    </div>
  </section>
</template>

<style>
.tabs iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.tabs img {
  margin-top: 1rem;
  width: auto;
}

p:has(img) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p > a, li > a {
  text-decoration: underline;
}
</style>
