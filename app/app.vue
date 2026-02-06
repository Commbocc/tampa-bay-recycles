<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <UMain>
      <NuxtPage />

      <UFooter class="h-50 bg-sky-400 w-screen">
        <template #default>
          <div class="flex flex-col items-center">
            <div>
              <img src="/images/brand/recycleLogo.png" alt="recycle logo" />
            </div>

            <div>
              <p>&copy; Tampa Bay Recycles, 2026</p>
            </div>
          </div>
        </template>
      </UFooter>
    </UMain>
  </UApp>
</template>
