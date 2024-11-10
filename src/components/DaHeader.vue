<template>
  <section
    class="fixed top-0 left-0 w-screen h-12 z-10"
    :class="{
      blurring: !isDarkModeActive
    }"
  ></section>
  <header
    class="w-[calc(100%-4rem)] animate-fade-in-top-slow max-w-size fixed top-4 z-10 bg-white dark:bg-header-dark rounded-[2rem] py-2 px-4 transition-all duration-300 flex items-center justify-between border border-border dark:border-border-dark"
    :class="{ 'py-4': !isLargeScreen }"
  >
    <router-link
      :to="{ path: '/' }"
      class="font-logo font-[900] !text-primary text-3xl select-none transition-colors duration-300 hover:!text-primary-hover"
      >D
    </router-link>

    <nav class="flex gap-4" v-show="isLargeScreen">
      <DaHeaderNavLink label="Start" hash="#start" />
      <DaHeaderNavLink label="Projekte" hash="#projekte" />
      <DaHeaderNavLink label="Kontakt" hash="#kontakt" />
    </nav>

    <div
      v-show="!isLargeScreen"
      class="self-end flex flex-col flex-wrap justify-between w-8 cursor-pointer"
      :class="{ 'mobile-active': isMobileMenuOpen && !isClosing }"
      @click="openMobileMenu()"
    >
      <div
        class="h-[5px] bg-primary rounded-[5px] my-[3px] transform-origin-left transition-all duration-500"
      ></div>
      <div
        class="h-[5px] bg-primary rounded-[5px] my-[3px] transform-origin-left transition-all duration-500"
      ></div>
      <div
        class="h-[5px] bg-primary rounded-[5px] my-[3px] transform-origin-left transition-all duration-500"
      ></div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/stores/user.store'
import { defineAsyncComponent, toRefs } from 'vue'

const DaHeaderNavLink = defineAsyncComponent(() => import('./DaHeaderNavLink.vue'))

const userStore = useUserStore()
const { isLargeScreen, isMobileMenuOpen, isClosing, openMobileMenu, isDarkModeActive } =
  toRefs(userStore)
</script>
<style scoped>
.blurring {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 10;
}
</style>
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
