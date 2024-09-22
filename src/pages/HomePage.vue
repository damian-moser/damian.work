<template>
  <div class="w-screen max-w-full min-h-screen flex justify-center px-8 overflow-x-hidden bg-bg">
    <DaHeader />
    <main class="max-w-size w-size">
      <DaStart />
      <DaProjects />
      <DaContact />
    </main>
    <DaImprint v-if="isImprintOpen === 'true'" @close="$router.replace({ query: {} })" />
    <DaPrivacyPolicy
      v-if="isPrivacyPolicyOpen === 'true'"
      @close="$router.replace({ query: {} })"
    />
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
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const DaHeader = defineAsyncComponent(() => import('../components/DaHeader.vue'))
const DaStart = defineAsyncComponent(() => import('../components/DaStart.vue'))
const DaProjects = defineAsyncComponent(() => import('../components/DaProjects.vue'))
const DaContact = defineAsyncComponent(() => import('../components/DaContact.vue'))
const DaImprint = defineAsyncComponent(() => import('../components/DaImprint.vue'))
const DaPrivacyPolicy = defineAsyncComponent(() => import('../components/DaPrivacyPolicy.vue'))

const route = useRoute()
const userStore = useUserStore()

const isImprintOpen = computed(() => route.query.isImprintOpen)
const isPrivacyPolicyOpen = computed(() => route.query.isPrivacyPolicyOpen)
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
