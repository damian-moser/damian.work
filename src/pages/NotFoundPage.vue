<template>
  <div class="w-screen max-w-full min-h-screen flex justify-center px-8 overflow-x-hidden bg-bg">
    <DaHeader />
    <main class="max-w-size w-size">
      <div class="flex flex-col items-center mt-52 animate-fade-in-top-slow">
        <h1 class="text-9xl font-black select-none">404</h1>
        <h4>Seite wurde nicht gefunden.</h4>
        <div class="flex gap-4 mt-4">
          <a class="btn flex items-center gap-2" href="javascript:history.back()">
            <ArrowLeftIcon />
            Zurück</a
          >
          <a class="btn flex items-center gap-2" href="/">
            <HouseIcon />
            Startseite</a
          >
        </div>
      </div>
    </main>
  </div>
  <div
    v-if="userStore.isMobileMenuOpen"
    class="fixed z-50 top-0 right-0 w-screen h-screen bg-primary animate-fade-in-top-right transition-all duration-300"
    :class="{
      'animate-fade-out-top-right': userStore.isClosing,
      'rounded-[4rem]': userStore.isOpening || userStore.isClosing
    }"
  >
    <div class="p-12 flex flex-col">
      <div
        class="self-end flex flex-col flex-wrap justify-between w-8 cursor-pointer mobile-active"
        @click="userStore.closeMobileMenu()"
      >
        <div
          class="h-[5px] bg-white rounded-[5px] my-[3px] transform-origin-left transition-all duration-500"
        ></div>
        <div
          class="h-[5px] bg-white rounded-[5px] my-[3px] transform-origin-left transition-all duration-500"
        ></div>
        <div
          class="h-[5px] bg-white rounded-[5px] my-[3px] transform-origin-left transition-all duration-500"
        ></div>
      </div>

      <nav class="mt-24">
        <ul class="flex flex-col gap-8 text-end">
          <router-link
            :to="'/#start'"
            @click="
              () => {
                userStore.closeMobileMenu()
                $router.replace({ path: '/', hash: '#start' })
              }
            "
          >
            <li
              class="text-white text-5xl font-bold transition-opacity duration-300 hover:opacity-50"
            >
              Start
            </li>
          </router-link>
          <router-link
            :to="'/#projekte'"
            @click="
              () => {
                userStore.closeMobileMenu()
                $router.replace({ path: '/', hash: '#projekte' })
              }
            "
          >
            <li
              class="text-white text-5xl font-bold transition-opacity duration-300 hover:opacity-50"
            >
              Projekte
            </li>
          </router-link>
          <router-link
            :to="'/#kontakt'"
            @click="
              () => {
                userStore.closeMobileMenu()
                $router.replace({ path: '/', hash: '#kontakt' })
              }
            "
          >
            <li
              class="text-white text-5xl font-bold transition-opacity duration-300 hover:opacity-50"
            >
              Kontakt
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store'
import { defineAsyncComponent } from 'vue'

const DaHeader = defineAsyncComponent(() => import('../components/DaHeader.vue'))
const ArrowLeftIcon = defineAsyncComponent(() => import('../components/ArrowLeftIcon.vue'))
const HouseIcon = defineAsyncComponent(() => import('../components/HouseIcon.vue'))

const userStore = useUserStore()
</script>
<style scoped>
.mobile-active div:first-child {
  transform: rotate(45deg);
}

.mobile-active div:nth-child(2) {
  transform: translateX(1rem);
  opacity: 0;
}

.mobile-active div:last-child {
  transform: rotate(-45deg);
}

.transform-origin-left {
  transform-origin: left;
}
</style>
