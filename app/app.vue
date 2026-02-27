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
:focus {
  outline: 3px solid #0a84ff;
  outline-offset: 2px;
}

[role="tablist"]:focus-visible,
[role="tablist"]:focus {
  outline: 3px solid #0a84ff !important;
  outline-offset: 3px !important;
}
[role="tab"]:focus-visible,
[role="tab"]:focus {
  outline: 3px solid #0a84ff !important;
  outline-offset: 3px !important;
}
</style>
