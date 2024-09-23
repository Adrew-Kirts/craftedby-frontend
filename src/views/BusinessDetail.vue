<template>
  <div>
    <BackButtonComponent></BackButtonComponent>

    <div v-if="loading" class="flex justify-center items-center h-screen loading loading-infinity loading-lg">
      Chargement...
    </div>

    <div v-else-if="error" class="text-red-500 text-center mt-4">
      {{ error }}
    </div>

    <div v-else-if="business" class="container mx-auto p-4">
      <!-- Business Info -->
      <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 class="text-4xl font-bold mb-4 text-center">{{ business.name }}</h1>

        <!-- Business Details -->
        <div class="business-details mb-6 text-center">
          <!-- Website -->
          <p class="text-lg">
            <a :href="`https://${business.website}`" target="_blank" class="text-blue-500 hover:underline">
              Visitez notre site web: {{ business.website }}
            </a>
          </p>

          <!-- Contact Information -->
          <p class="text-sm">
            <strong>Email:</strong> <a :href="`mailto:${business.email}`" class="text-blue-500 hover:underline">{{ business.email }}</a>
          </p>
          <p class="text-sm mb-4">
            <strong>Téléphone:</strong> {{ business.phone_number }}
          </p>
        </div>

        <!-- Business Description -->
        <div class="text-center mb-8">
          <p class="text-lg">Découvrez notre entreprise et nos produits artisanaux uniques.</p>
        </div>
      </div>

      <div v-if="business.description" class="text-center mb-8">
        <p class="text-lg">Description</p>
        <p class="text-lg">{{ business.description }}</p>
      </div>

      <!-- Product List -->
      <div v-if="products.length > 0" class="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
          <!-- Product Image -->
          <figure class="mb-4">
<!--            <img :src="`/src/assets/images/${product.image_path}`" alt="Product image" class="h-auto rounded-lg">-->
            <img :src="getFullImagePath(product.image_path)" alt="Product image" class="h-auto rounded-lg">
          </figure>

          <!-- Product Info -->
          <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
          <p class="text-gray-700 mb-2">€{{ product.price }}</p>

          <!-- View Product Button -->
          <router-link :to="`/products/${product.id}`" class="btn btn-primary">Voir produit</router-link>
        </div>
      </div>

      <!-- No products message -->
      <div v-else class="text-center">
        <p class="text-lg">Cette entreprise n'a pas encore de produits à afficher.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/services/api';
import BackButtonComponent from '@/components/BackButtonComponent.vue';

const route = useRoute();
const business = ref(null);
const products = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    // Fetch business details
    const businessResponse = await api.get(`businesses/${route.params.id}`);
    business.value = businessResponse.data.business;

    // Fetch products for this business
    // const productsResponse = await api.get(`businesses/${route.params.id}/products`);
    // products.value = productsResponse.data.products;
    const productsResponse = await api.get('products', {
      params: {
        businessId: businessResponse.data.business.id,
      },
    });
    products.value = productsResponse.data;

  } catch (err) {
    console.error("Failed to fetch business or product details:", err);
    error.value = "Failed to load business details.";
  } finally {
    loading.value = false;
  }
});

function getFullImagePath(imagePath) {
  const apiBaseURL = `${import.meta.env.VITE_IMAGE_BASE_URL}/`
  return `${apiBaseURL}${imagePath}`
}
</script>

<style scoped>
.business-details {
  font-size: 1rem;
  color: #4b5563; /* Tailwind gray-700 */
}

.products img {
  max-width: 100%;
  max-height: 200px;
  object-fit: cover;
}
</style>
