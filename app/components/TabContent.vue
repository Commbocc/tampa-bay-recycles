<template>
  <section class="md:grid grid-cols-2 gap-4 sm:cols-1">
    <div class="">
      <slot name="left" />
    </div>

    <div class="">
      <slot name="right" />
    </div>
  </section>
</template>
