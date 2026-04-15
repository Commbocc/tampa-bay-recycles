<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <UMain>
      <NuxtPage />

      <UFooter class="h-50 bg-sky-400 w-screen h-full">
        <template #default>
          <div class="flex flex-col items-center">
            <div>
              <img src="/images/brand/recycleLogo.png" alt="recycle logo" />
            </div>

            <div>
              <p class="footer">
                &copy; Tampa Bay Recycles,
                <ClientOnly>{{ new Date().getFullYear() }}</ClientOnly>
              </p>
            </div>
          </div>
        </template>
      </UFooter>
    </UMain>
  </UApp>
</template>

<style>
.footer {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
