<template>
  <section id="kontakt" class="py-16">
    <div class="p-8 bg-white rounded-[2rem] border border-border">
      <div class="flex justify-between">
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
      <div class="flex justify-between mt-4">
        <div class="flex gap-4">
          <p
            class="font-bold cursor-pointer text-sm text-primary"
            @click="$router.replace({ query: { isImprintOpen: 'true' } })"
          >
            Impressum
          </p>
          <p
            class="font-bold cursor-pointer text-sm text-primary"
            @click="$router.replace({ query: { isPrivacyPolicyOpen: 'true' } })"
          >
            Datenschutzerklärung
          </p>
        </div>
        <small class="font-bold text-primary">2024 - Damian Moser</small>
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
