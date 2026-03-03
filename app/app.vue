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
              <p>
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
[role="tab"]:focus,
[role="tab"]:focus-visible {
  outline: 3px solid #1256a3;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(18, 86, 163, 0.12);
}

[tabindex]:focus,
[tabindex]:focus-visible {
  outline: 3px solid #1256a3;
  outline-offset: 2px;
}

[role="tab"]:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}
</style>
