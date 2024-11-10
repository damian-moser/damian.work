<template>
  <section id="kontakt" class="py-24">
    <div class="p-8 bg-white dark:bg-gray-dark rounded-default animate-fade-in-right-slow">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h1 class="text-sm !text-primary mb-4">Links</h1>
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
          <h1 class="text-sm !text-primary mb-4">Kontakt</h1>
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <DaInput v-model="forename" placeholder="Vorname" />
              <DaInput v-model="surname" placeholder="Nachname" />
            </div>
            <DaInput v-model="email" type="email" placeholder="E-Mail Adresse" />
            <DaTextarea v-model="message" :rows="8" placeholder="Nachricht" />
            <button
              class="btn"
              :class="{ 'btn-disabled': isLoading }"
              @click="send()"
              :disabled="isLoading"
            >
              <div v-if="!isLoading" class="flex items-center justify-center gap-2">
                <span>Abschicken</span>
                <LetterIcon />
              </div>
              <div class="flex justify-center" v-if="isLoading">
                <svg
                  version="1.1"
                  id="loader-1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0 0 50 50"
                  style="enable-background: new 0 0 50 50"
                  xml:space="preserve"
                >
                  <path
                    fill="#fff"
                    stroke="#fff"
                    stroke-width="2"
                    d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                  >
                    <animateTransform
                      attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="0 25 25"
                      to="360 25 25"
                      dur="0.6s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </path>
                </svg>
              </div>
            </button>
          </div>
        </section>
      </div>
      <div class="flex justify-between flex-wrap gap-4 mt-8 md:mt-4">
        <div class="flex gap-2">
          <small
            class="font-bold text-xs cursor-pointer !text-primary hover:!text-primary-hover transition-colors duration-300"
            @click="$router.replace({ query: { isImprintOpen: 'true' }, hash: '#kontakt' })"
          >
            Impressum
          </small>
          <small class="font-bold text-xs select-none !text-primary">|</small>
          <small
            class="font-bold text-xs cursor-pointer !text-primary hover:!text-primary-hover transition-colors duration-300"
            @click="
              $router.replace({
                query: { isPrivacyPolicyOpen: 'true' },
                hash: '#kontakt'
              })
            "
          >
            Datenschutzerklärung
          </small>
        </div>
        <small class="font-bold text-xs !text-primary">&copy;2024 by Damian</small>
      </div>
    </div>
    <DaPopup
      :title="title"
      :show-xmark="false"
      v-if="isPopupOpen"
      @close="isPopupOpen = false"
    ></DaPopup>
  </section>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
import api from '@/api'

const DaInput = defineAsyncComponent(() => import('./DaInput.vue'))
const DaTextarea = defineAsyncComponent(() => import('./DaTextarea.vue'))
const LetterIcon = defineAsyncComponent(() => import('./LetterIcon.vue'))
const DaPopup = defineAsyncComponent(() => import('./DaPopup.vue'))

const forename = defineModel<string>('forename')
const surname = defineModel<string>('surname')
const email = defineModel<string>('email')
const message = defineModel<string>('message')

const isLoading = ref<boolean>(false)
const isPopupOpen = ref<boolean>(false)
const title = ref<string>('')

const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const send = async () => {
  if (!forename.value || !surname.value || !email.value || !message.value) {
    title.value = 'Bitte füllen Sie alle Felder aus.'
    isPopupOpen.value = true
    return
  }

  if (!emailPattern.test(email.value)) {
    title.value = 'Bitte geben Sie eine gültige E-Mail Adresse an.'
    isPopupOpen.value = true
    return
  }

  try {
    isLoading.value = true
    await api.send(forename.value, surname.value, email.value, message.value)

    forename.value = ''
    surname.value = ''
    email.value = ''
    message.value = ''

    title.value = 'Ihre Nachricht wurde erfolgreich versendet.'
    isPopupOpen.value = true
  } catch (e: unknown) {
    title.value = 'Ein Fehler ist aufgetreten. Versuchen Sie erneut.'
    isPopupOpen.value = true
  } finally {
    isLoading.value = false
  }
}
</script>
