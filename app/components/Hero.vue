<template>
  <section
    class="relative w-full h-full overflow-hidden"
  >
    <div class="object-cover absolute inset-0">
      <Carousel />

      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <div class="relative">
      <UCard
        variant="solid"
        class="flex flex-col items-center bg-transparent text-shadow-lg"
      >
        <template #header>
          <img src="/images/brand/recycleLogo.png" alt="" class="mx-auto" />
        </template>

        <div class="[&_h1]:text-6xl [&_h1]:font-bold [&_h1]:text-sky-400 text-center">
          <slot name="title" />
        </div>

        <template #footer>
          <div class="text-2xl text-center">
            <slot name="description" />
          </div>
        </template>
      </UCard>
    </div>
  </section>
</template>
