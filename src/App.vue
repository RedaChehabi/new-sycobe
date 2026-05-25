<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue';
  import FooterSection from './components/FooterSection.vue';
  import { Analytics } from "@vercel/analytics/vue"
</script>
<template>
  <div>
    <Analytics/>
    <NavBar/>
    <RouterView />
    <FooterSection />
  </div>

</template>
