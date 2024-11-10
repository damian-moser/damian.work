<template>
  <DaPopup title="Datenschutzerklärung" @close="$emit('close')">
    <div class="flex flex-col gap-4">
      <div>
        <h2>1. Allgemeine Informationen</h2>
        <p>
          Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der
          Erhebung und Verwendung personenbezogener Daten durch Damian Moser (nachfolgend "wir" oder
          "uns") auf der Website damian.work.
        </p>
      </div>

      <div>
        <h2>2. Verantwortliche Stelle</h2>
        <p>
          Verantwortliche Stelle im Sinne der Datenschutzgesetze ist Damian Moser, Ottisbergstrasse
          33, 3186 Düdingen, Schweiz. Bei Fragen zum Datenschutz können Sie uns unter
          hello@damian.work erreichen.
        </p>
      </div>

      <div>
        <h2>3. Arten der erhobenen Daten</h2>
        <p>
          Wir erheben und verarbeiten verschiedene Arten von personenbezogenen Daten,
          einschliesslich: <br />
          - Name, Vorname & E-Mail-Adresse <br />
          - Weitere Daten, die Sie uns freiwillig zur Verfügung stellen, z.B. durch das Ausfüllen
          von Formularen oder das Versenden von E-Mails.
        </p>
      </div>

      <div>
        <h2>4. Zwecke der Datenverarbeitung</h2>
        <p>
          Wir verwenden Ihre personenbezogenen Daten für folgende Zwecke: Zur Kommunikation mit
          Ihnen, einschliesslich der Beantwortung von Anfragen und der Bereitstellung von
          Unterstützung.
        </p>
      </div>

      <div>
        <h2>5. Weitergabe von Daten an Dritte</h2>
        <p>
          Wir geben Ihre Daten nur an Dritte weiter, wenn dies gesetzlich vorgeschrieben ist oder
          wenn Sie Ihre Einwilligung dazu gegeben haben.
        </p>
      </div>

      <div>
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht, Auskunft über die von uns gespeicherten Daten zu erhalten, diese zu
          korrigieren, zu löschen oder deren Verwendung einzuschränken. Bitte kontaktieren Sie uns
          dazu unter hello@damian.work.
        </p>
      </div>

      <div>
        <h2>7. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Die
          jeweils aktuelle Version wird auf unserer Website veröffentlicht.
        </p>
      </div>

      <div>
        <h2>8. Kontakt</h2>
        <p>
          Wenn Sie Fragen oder Bedenken bezüglich dieser Datenschutzerklärung haben, können Sie uns
          unter hello@damian.work erreichen.
        </p>
      </div>
    </div>
  </DaPopup>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DaPopup = defineAsyncComponent(() => import('./DaPopup.vue'))

defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped>
h2 {
  @apply text-sm;
}
</style>
