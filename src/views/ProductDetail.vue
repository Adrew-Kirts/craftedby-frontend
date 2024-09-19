<template>
  <div>
    <BackButtonComponent></BackButtonComponent>

    <div v-if="loading" class="flex justify-center items-center h-screen loading loading-infinity loading-lg">
      Chargement...
    </div>

    <div v-else-if="error" class="text-red-500 text-center mt-4">
      {{ error }}
    </div>

    <div v-else-if="product" class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Image -->
        <div class="product-image">
          <figure>
            <img :src="`https://fabriquepar.com/${product.image_path}`" alt="Product image" class="h-auto rounded-lg shadow-md">
          </figure>
        </div>

        <!-- Product info -->
        <div class="product-content">
          <h1 class="text-3xl font-bold mb-3 uppercase">{{ product.name }}</h1>

          <!-- Product meta -->
          <div class="product-meta mb-4">
            <div class="badge badge-secondary badge-outline price">€{{ product.price }}</div>
            <div class="badge badge-info badge-outline">Matériel: {{ product.material }}</div>
            <div class="badge badge-accent badge-outline">Couleur: {{ product.color }}</div>
            <div class="badge badge-accent badge-outline">{{ product.stock > 0 ? 'En stock' : 'Plus en stock' }}</div>
          </div>

          <!-- Product description -->
          <div class="product-description mb-4">
            <p>{{ product.description }}</p>
          </div>

          <!-- Quantity controls -->
          <div class="flex items-center mb-4">
            <button @click="decreaseQuantity(product)" class="btn btn-ghost btn-xs">-</button>
            <span class="text-sm mx-2">1</span>
            <button @click="increaseQuantity(product)" class="btn btn-ghost btn-xs">+</button>
          </div>

          <!-- Add to cart button -->
          <div class="pt-8">
            <CTAButtonBase v-if="product.stock > 0" @click="addToCart(product)" text="AJOUTER AU PANIER" />
            <CTAButtonBase v-else-if="product.stock <= 0" text="PLUS DISPONIBLE" />
          </div>
        </div>
      </div>

      <!-- Business Info Section -->
      <div class="business-info bg-gray-100 p-4 mt-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-3 text-secondary">Informations sur l'artisan</h2>

        <!-- Business name with router link -->
        <p class="text-lg mb-2">
          <router-link :to="`/businesses/${product.business.id}`" class="hover:underline font-bold">
            {{ product.business.name }}
          </router-link>
        </p>

        <!-- Business website -->
        <p class="text-sm">
          <a :href="`https://${product.business.website}`" target="_blank" class=" hover:underline">
            Visitez le site web de l'artisan : {{ product.business.website }}
          </a>
        </p>

        <!-- Business contact info -->
        <p class="text-sm">
          <strong>Email:</strong> <a :href="`mailto:${product.business.email}`" class="text-blue-500 hover:underline">{{ product.business.email }}</a>
        </p>
        <p class="text-sm">
          <strong>Téléphone:</strong> {{ product.business.phone_number }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/services/api';
import CTAButtonBase from '@/components/CTAButtonBase.vue'
import { useCartStore } from '@/stores/cart.js'
import BackButtonComponent from '@/components/BackButtonComponent.vue'

const route = useRoute();
const product = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await api.get(`products/${route.params.id}`);
    product.value = response.data.product;
  } catch (err) {
    console.error("Failed to fetch product details:", err);
    error.value = "Failed to load product details.";
  } finally {
    loading.value = false;
  }
});

const cartStore = useCartStore();
function addToCart(productToAdd) {
  cartStore.addToCart(productToAdd);
}

function increaseQuantity(item) {
  cartStore.addToCart({ ...item, quantity: 1 });
}

function decreaseQuantity(item) {
  cartStore.updateQuantity(item.id, item.quantity - 1);
}
</script>

<style scoped>
.business-info {
  background-color: #f9fafb;
  border-radius: 0.5rem;
}
</style>


<!--<template>-->
<!--  <div>-->
<!--&lt;!&ndash;    <router-link to="/boutique" class="back-button">Retour</router-link>&ndash;&gt;-->
<!--    <BackButtonComponent></BackButtonComponent>-->
<!--    <div v-if="loading" class="flex justify-center items-center h-screen loading loading-infinity loading-lg">-->
<!--      Loading...-->
<!--    </div>-->
<!--    <div v-else-if="error" class="text-red-500 text-center mt-4">-->
<!--      {{ error }}-->
<!--    </div>-->
<!--    <div v-else-if="product" class="container mx-auto p-4">-->
<!--      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">-->
<!--&lt;!&ndash;        image&ndash;&gt;-->
<!--        <div class="product-image">-->
<!--          <figure><img src="/src/assets/images/assiette.png" alt="Product image" class="h-auto rounded-lg shadow-md" ></figure>-->
<!--        </div>-->
<!--&lt;!&ndash;        product info&ndash;&gt;-->
<!--        <div class="product-content">-->
<!--          <h1 class="text-3xl font-bold mb-3 uppercase">{{ product.name }}</h1>-->
<!--          <div class="product-meta mb-4">-->
<!--            <div class="badge badge-secondary badge-outline price">€{{ product.price }}</div>-->
<!--            <div class="badge badge-info badge-outline">Matériel: {{ product.material }}</div>-->
<!--            <div class="badge badge-accent badge-outline">Couleur: {{ product.color }}</div>-->
<!--            <div class="badge badge-accent badge-outline">{{ product.stock > 0 ? 'En stock' : 'Plus en stock' }}</div>-->
<!--          </div>-->
<!--          <div class="product-description mb-4">-->
<!--            <p>{{ product.description }}</p>-->
<!--          </div>-->
<!--          <div class="flex items-center">-->
<!--            <button @click="decreaseQuantity(item)" class="btn btn-ghost btn-xs">-</button>-->
<!--            <span class="text-sm">1</span>-->

<!--            <button @click="increaseQuantity(item)" class="btn btn-ghost btn-xs">+</button>-->
<!--          </div>-->
<!--          <div class="pt-8">-->
<!--            <CTAButtonBase v-if="product.stock > 0" @click="addToCart(product)" text="AJOUTER AU PANIER" />-->
<!--            <CTAButtonBase v-else-if="product.stock <= 0" text="PLUS DISPONIBLE" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<!--<script setup>-->
<!--import { ref, onMounted } from 'vue';-->
<!--import { useRoute } from 'vue-router';-->
<!--import api from '@/services/api';-->
<!--import CTAButtonBase from '@/components/CTAButtonBase.vue'-->
<!--import { useCartStore } from '@/stores/cart.js'-->
<!--import BackButtonComponent from '@/components/BackButtonComponent.vue'-->

<!--const route = useRoute();-->
<!--const product = ref(null);-->
<!--const loading = ref(true);-->
<!--const error = ref(null);-->

<!--onMounted(async () => {-->
<!--  loading.value = true;-->
<!--  try {-->
<!--    const response = await api.get(`products/${route.params.id}`);-->
<!--    product.value = response.data.product;-->
<!--  } catch (err) {-->
<!--    console.error("Failed to fetch product details:", err);-->
<!--    error.value = "Failed to load product details.";-->
<!--  } finally {-->
<!--    loading.value = false;-->
<!--  }-->
<!--});-->

<!--const cartStore = useCartStore();-->
<!--function addToCart(productToAdd) {-->
<!--  cartStore.addToCart(productToAdd);-->
<!--}-->

<!--function increaseQuantity(item) {-->
<!--  cartStore.addToCart({ ...item, quantity: 1 });-->
<!--}-->

<!--function decreaseQuantity(item) {-->
<!--    cartStore.updateQuantity(item.id, item.quantity - 1);-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
