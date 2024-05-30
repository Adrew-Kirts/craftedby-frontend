<template>
  <div class="flex flex-col h-full">
    <div class="flex-grow overflow-auto">
      <div v-for="item in cart.items" :key="item.id" class="p-2 border-b border-gray-200">
        <div class="flex items-center space-x-2">
          <button @click="removeFromCart(item.id, $event)" class="ml-auto btn btn-ghost btn-xs text-primary">X</button>
          <div class="flex-shrink-0">
            <img :src="imageUrl(item)" alt="Product Image" class="w-16 h-16 object-cover">
          </div>
          <div class="flex-grow">
            <p class="text-sm font-semibold">{{ item.name }}</p>
            <p class="text-xs">€{{ item.price }}</p>
          </div>
          <div class="flex items-center">
            <button @click="decreaseQuantity(item)" class="btn btn-ghost btn-xs">-</button>
            <span class="text-sm px-3">{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="btn btn-ghost btn-xs">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky bottom-0 bg-white w-full shadow-top">
      <div class="mt-4 p-2 border-t border-gray-200">
        <p class="text-sm font-semibold">Prix total: €{{ cart.totalPrice }}</p>
      </div>
      <CTAButtonBase class="w-full mt-2" label="Voir le panier" text="Voir le panier" @click="goToCart" />
    </div>
  </div>
</template>


<script setup>
import { useCartStore } from '@/stores/cart.js'
import CTAButtonBase from '@/components/CTAButtonBase.vue'
import router from '@/router/index.js'

const cart = useCartStore()

function imageUrl(item) {
  return `${import.meta.env.VITE_IMAGE_BASE_URL}/${item.image_path}`
}

function removeFromCart(id) {
  event.stopPropagation()
  cart.removeFromCart(id)
}

function increaseQuantity(item) {
  cart.addToCart({ ...item, quantity: 1 })
}

function decreaseQuantity(item) {
  if (item.quantity > 1) {
    cart.updateQuantity(item.id, item.quantity - 1)
  } else {
    removeFromCart(item.id)
  }
}

function goToCart() {
  router.push('/cart')
}

</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 640px) {
  .btn {
    padding: 0.375rem 0.75rem;
  }

  .btn-xs {
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
  }
}

</style>
