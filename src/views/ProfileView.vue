<template>
  <div class="profile-view mx-auto w-full lg:w-1/2">
    <div class="mt-6">
      <div v-if="userObject">
        <a>Coucou, {{userObject.first_name}} !</a>
      </div>
      <!--User info collapse box-->
      <div class="collapse border-2 rounded-none mt-12 collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          Mettre à jour vos coordonnées
        </div>
        <div class="collapse-content">

          <p class="text-lg mb-4">Informations personnelles</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Prénom *</span>
              </label>
              <input v-model="userObject.first_name"
                     class="input input-bordered w-full p-2 border-black border rounded-none" placeholder="Prénom"
                     type="text" @input="markFieldAsChanged('first_name')" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Nom *</span>
              </label>
              <input v-model="userObject.last_name"
                     class="input input-bordered w-full p-2 border-black border rounded-none" placeholder="Nom"
                     type="text" @input="markFieldAsChanged('last_name')" />
            </div>
            <div class="form-control col-span-2">
              <label class="label">
                <span class="label-text">Adresse *</span>
              </label>
              <input v-model="userObject.address"
                     class="input input-bordered w-full p-2 border-black border rounded-none" placeholder="Adresse"
                     type="text" @input="markFieldAsChanged('address')" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Code postal *</span>
              </label>
              <input v-model="userObject.postal_code"
                     class="input input-bordered w-full p-2 border-black border rounded-none" placeholder="Code Postal"
                     type="text"
                     @input="markFieldAsChanged('postal_code')" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Ville *</span>
              </label>
              <input v-model="userObject.city" class="input input-bordered w-full p-2 border-black border rounded-none"
                     placeholder="Ville" type="text"
                     @input="markFieldAsChanged('city')" />
            </div>
            <div class="form-control col-span-2">
              <label class="label">
                <span class="label-text">Email *</span>
              </label>
              <input v-model="userObject.email" class="input input-bordered w-full p-2 border-black border rounded-none"
                     placeholder="Email" type="email"
                     @input="markFieldAsChanged('email')" />
            </div>
          </div>
          <div class="flex justify-center mt-10">
            <CTAButtonPrimary customClass="btn btn-primary" text="Mettre à jour les informations"
                              @click="updateProfile"></CTAButtonPrimary>
          </div>
        </div>
      </div>
      <notification-component :key="notificationKey" :message="notificationMessage" :type="notificationType" />

    </div>
    <!--Review collapse box-->
    <div class="collapse border-2 rounded-none mt-2 collapse-arrow">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        Vos derniers avis
      </div>
      <div class="collapse-content">
        <div class="mt-8">
          <p class="text-lg mb-4">Vos derniers avis</p>
          <div v-if="currentUser && currentUser.reviews && currentUser.reviews.length > 0"
               class="space-y-4">
            <router-link v-for="(review, index) in currentUser.reviews" :key="index"
                         :to="`/products/${review.product_id}`" class="block">
              <div class="p-4 shadow hover:bg-accent">
                <p class="open-sans-regular text-lg">Evaluation: {{ review.rating }}/5</p>
                <p class="open-sans-regular text-gray-600">Commentaire: {{ review.comment }}</p>
                <div class="text-right text-sm open-sans-regular text-gray-500">Avis laissé le:
                  {{ new Date(review.created_at).toLocaleDateString() }}
                </div>
              </div>
            </router-link>
          </div>
          <div v-else class="p-4 bg-red-100 rounded-lg shadow text-center">
            <p>No reviews yet.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="collapse border-2 rounded-none mt-2 collapse-arrow">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">
        Commandes
      </div>
      <div class="collapse-content">
        <div class="mt-8">
          <p class="text-lg mb-4">Vos dernières commandes</p>
          <div v-if="currentUser && currentUser.orders && currentUser.orders.length > 0"
               class="space-y-4">

            <div class="join join-vertical w-full">

              <div v-for="(order, index) in currentUser.orders" :key="index">
                <div class="collapse collapse-arrow join-item border border-base-300">
                  <input checked="checked" name="my-accordion-4" type="radio" />
                  <div class="collapse-title text-xl font-medium">
                    <!--                        Click to open this one and close others-->
                    <div class="text-right text-sm open-sans-regular text-gray-500">Date de commande:
                      {{ new Date(order.created_at).toLocaleDateString() }}
                    </div>
                    <p class="open-sans-regular text-lg">Numéro de commande : {{ order.order_number }}</p>
                  </div>
                  <div class="collapse-content">
                    <pre>{{ order }}</pre>
                    <div class="text-right text-sm open-sans-regular text-gray-500">Commandé le:
                      {{ new Date(order.created_at).toLocaleDateString() }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-2 mt-10">
      <router-link :to="`/boutique`">
        <CTAButtonBase customClass="btn-secondary" text="Déconnexion" @click="logout"></CTAButtonBase>
      </router-link>

        <router-link v-if="checkBusinessOwnerRights()" :to="`/business-home`">
          <CTAButtonPrimary customClass="btn-secondary" text="Ma page boutique"></CTAButtonPrimary>
        </router-link>

<!--      <router-link v-if="checkAdminRights()" :to="`/admin`">-->
<!--        <CTAButtonPrimary customClass="btn-secondary" text="Admin"></CTAButtonPrimary>-->
<!--      </router-link>-->
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
import CTAButtonBase from '@/components/CTAButtonBase.vue'
import { onMounted, ref } from 'vue'
import api from '@/services/api.js'
import CTAButtonPrimary from '@/components/CTAButtonPrimary.vue'
import router from '@/router/index.js'
import NotificationComponent from '@/components/NotificationComponent.vue'
import { checkAdminRights, checkBusinessOwnerRights } from '@/router/middleware.js'

const user = useUserStore()
const userObject = user.userObject
const changedFields = {}

const notificationMessage = ref('')
const notificationType = ref('success')
const notificationKey = ref(0);

const markFieldAsChanged = (field) => {
  changedFields[field] = true
}

// const getFullImagePath = (imagePath) => {
//   const apiBaseURL = 'http://localhost:8000/images/products/'
//   return `${apiBaseURL}${imagePath}`
// }
// const orders = ref([])

onMounted(() => {
  getCurrentUSer()
})

const currentUser = ref([])

const getCurrentUSer = async () => {
  currentUser.value = await user.getCurrentUser(userObject)
}

const updateProfile = async () => {
  try {
    const updatedData = Object.keys(changedFields).reduce((acc, key) => {
      if (changedFields[key]) {
        acc[key] = userObject[key]
      }
      return acc
    }, {})

    const response = await api.patch(`/users/${userObject.id}`, updatedData)
    if (response.data) {
      notificationMessage.value = `Informations mis à jour`
      notificationType.value = 'success'
      notificationKey.value++
      user.storeUser(response.data.user)
    }
  } catch (error) {
    console.error(error)
  }
}

const logout = () => {
  user.logout()
  router.push('/boutique')

}
</script>

<style scoped>
.profile-view {
  align-self: flex-start;
}
</style>
