<template>
  <form id="payment-form">
    <div id="payment-element">
      <!-- Stripe will create form elements here -->
    </div>
    <button type="submit" @click="handleSubmit">Pay via Stripe</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import api from '@/services/api.js'

const token = ref(null)
const stripe = ref(null)
const elements = ref(null)

onMounted(() => {
  api.post('payment/initiate', {
    amount: 150,
    currency: 'USD'
  }).then(response => {
    token.value = response.token // Use to identify the payment
    // stripe.value = Stripe(VITE_STRIPE_KEY);
    stripe.value = Stripe(import.meta.env.VITE_STRIPE_KEY)

    const options = {
      clientSecret: response.clientSecret
    }

    elements.value = stripe.value.elements(options)
    const paymentElement = elements.value.create('payment')
    paymentElement.mount('#payment-element')
  }).catch(error => {
    // throw error
  })
})

const handleSubmit = async (e) => {
  e.preventDefault()

  const { error } = await stripe.value.confirmPayment({
    elements: elements.value,
    redirect: 'if_required'
  })

  if (error === undefined) {
    axios.post('PAYMENT_SUCCESS_API', {
      token: token.value
    })
  } else {
    axios.post('PAYMENT_FAILURE_API', {
      token: token.value,
      code: error.code,
      description: error.message
    })
  }
}
</script>