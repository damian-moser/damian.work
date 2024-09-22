<template>
  <section id="kontakt" class="py-24">
    <div class="p-8 bg-white rounded-[2rem] border border-border animate-fade-in-right-slow">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h1 class="text-sm text-primary mb-4">Links</h1>
          <ul class="flex flex-col gap-4">
            <a href="#start" class="font-bold text-2xl hover-text">
              <li>Start</li>
            </a>
            <a href="#projekte" class="font-bold text-2xl hover-text">
              <li>Projekte</li>
            </a>
            <a href="#kontakt" class="font-bold text-2xl hover-text">
              <li>Kontakt</li>
            </a>
          </ul>
        </section>

        <section>
          <h1 class="text-sm text-primary mb-4">Kontakt</h1>
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <DaInput v-model="forename" placeholder="Vorname" />
              <DaInput v-model="surname" placeholder="Nachname" />
            </div>
            <DaInput v-model="email" type="email" placeholder="E-Mail Adresse" />
            <DaTextarea v-model="message" :rows="8" placeholder="Nachricht" />
            <button class="btn">
              <div class="flex items-center justify-center gap-2">
                <span>Abschicken</span>
                <LetterIcon />
              </div>
            </button>
          </div>
        </section>
      </div>
      <div class="flex justify-between flex-wrap gap-4 mt-8 md:mt-4">
        <div class="flex gap-2">
          <small
            class="font-bold text-xs cursor-pointer text-primary hover:text-primary-hover transition-colors duration-300"
            @click="$router.replace({ query: { isImprintOpen: 'true' } })"
          >
            Impressum
          </small>
          <small class="font-bold text-xs select-none text-primary">|</small>
          <small
            class="font-bold text-xs cursor-pointer text-primary hover:text-primary-hover transition-colors duration-300"
            @click="$router.replace({ query: { isPrivacyPolicyOpen: 'true' } })"
          >
            Datenschutzerklärung
          </small>
        </div>
        <small class="font-bold text-xs text-primary">&copy;2024 by Damian</small>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DaInput = defineAsyncComponent(() => import('./DaInput.vue'))
const DaTextarea = defineAsyncComponent(() => import('./DaTextarea.vue'))
const LetterIcon = defineAsyncComponent(() => import('./LetterIcon.vue'))

const forename = defineModel<string>('forename')
const surname = defineModel<string>('surname')
const email = defineModel<string>('email')
const message = defineModel<string>('message')
</script>
