<template>
  <div class="not-found-container flex flex-col items-center justify-center h-screen">
    <h1 class="text-5xl font-bold mb-4 text-red-500">404 - Page Non Trouvée</h1>
    <p class="text-lg mb-6 text-gray-600">Oups ! La page que vous recherchez n'existe pas.</p>
    <router-link to="/" class="btn btn-primary">Retourner à la page d'accueil</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found-container {
  text-align: center;
}
</style>
