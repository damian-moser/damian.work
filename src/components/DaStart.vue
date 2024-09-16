<template>
  <section id="start" class="text-center pt-96 pb-32">
    <h1 class="hello font-black text-secondary leading-4 animate-fadeIn">Hallo, ich bin</h1>
    <h1 class="damian my-4 font-black animate-fadeIn">Damian</h1>
    <a href="#kontakt" class="btn animate-fadeIn">Kontakt</a>
  </section>
</template>
<script lang="ts" setup></script>
<style scoped>
.hello,
.damian {
  font-size: clamp(3rem, 8vw, 5rem);
}

.damian {
  background-image: linear-gradient(90deg, theme('colors.primary'), theme('colors.primary-hover'));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100%;
}
</style>
