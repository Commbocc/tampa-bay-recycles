<template>
  <section class="relative w-full h-full overflow-hidden">
    <div class="object-cover absolute inset-0">
      <Carousel />

      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <div class="relative">
      <UCard
        variant="solid"
        class="flex flex-col items-center bg-transparent text-shadow-lg"
      >
        <img src="/images/brand/recycleLogo.png" alt="" class="mx-auto" />
        <div
          class="[&_h1]:text-6xl [&_h1]:font-bold [&_h1]:text-sky-400 text-center [&_h1]:font-medium [&_h1]:text-shadow-lg"
        >
          <slot name="title" />
        </div>
        <div class="text-2xl text-center font-medium text-shadow-lg">
          <slot name="description" />
        </div>
      </UCard>
    </div>
  </section>
</template>
