<template>
  <div v-if="!hasAcceptedCookies" class="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
    <div class="text-sm">
      Nous utilisons des cookies pour améliorer votre expérience. En cliquant sur "Accepter", vous acceptez notre
      <a href="/about" class="text-blue-500 underline">politique de cookies</a>.
    </div>

    <div>
<!--      <button @click="acceptCookies" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-->
<!--        Accept-->
<!--      </button>-->
      <CTAButtonPrimary @click="acceptCookies" text="Accepter" />
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user'
import CTAButtonPrimary from '@/components/CTAButtonPrimary.vue'

export default {
  components: { CTAButtonPrimary },
  setup() {
    const userStore = useUserStore();

    const acceptCookies = () => {
      userStore.acceptCookies();
    }

    return {
      hasAcceptedCookies: userStore.hasAcceptedCookies,
      acceptCookies
    }
  }
}
</script>

<style scoped>
.fixed {
  z-index: 1000;
}
</style>
