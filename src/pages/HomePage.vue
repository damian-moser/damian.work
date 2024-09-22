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
</template>
<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const DaHeader = defineAsyncComponent(() => import('../components/DaHeader.vue'))
const DaStart = defineAsyncComponent(() => import('../components/DaStart.vue'))
const DaProjects = defineAsyncComponent(() => import('../components/DaProjects.vue'))
const DaContact = defineAsyncComponent(() => import('../components/DaContact.vue'))
const DaImprint = defineAsyncComponent(() => import('../components/DaImprint.vue'))
const DaPrivacyPolicy = defineAsyncComponent(() => import('../components/DaPrivacyPolicy.vue'))

const route = useRoute()

const isImprintOpen = computed(() => route.query.isImprintOpen)
const isPrivacyPolicyOpen = computed(() => route.query.isPrivacyPolicyOpen)
</script>
