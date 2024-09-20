<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AcceptCookiesComponent from '@/components/AcceptCookiesComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
  <Header />
  <AcceptCookiesComponent />
    <main class="flex flex-grow md:flex md:items-center md:justify-center">
    <RouterView />
  </main>
  <FooterComponent />
  </div>
</template>

<style scoped>
</style>