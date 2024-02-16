// import { defineStore } from 'pinia';
//
// export const useCartStore = defineStore('cart', {
//   state: () => ({
//     items: JSON.parse(localStorage.getItem('cart')) || [],
//   }),
//   actions: {
//     addToCart(product) {
//       const existingItem = this.items.find(item => item.id === product.id);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         this.items.push({ ...product, quantity: 1 });
//       }
//       this.saveCart();
//     },
//     removeFromCart(productId) {
//       this.items = this.items.filter(item => item.id !== productId);
//       this.saveCart();
//     },
//     clearCart() {
//       this.items = [];
//       this.saveCart();
//     },
//     saveCart() {
//       localStorage.setItem('cart', JSON.stringify(this.items));
//     },
//     loadCart() {
//       const cart = localStorage.getItem('cart');
//       if (cart) {
//         this.items = JSON.parse(cart);
//       }
//     }
//   },
//   getters: {
//     itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
//     totalPrice: (state) => state.items.reduce((total, item) => total + item.price * item.quantity, 0),
//   },
// });

import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      this.saveCart();
    },
    updateQuantity(productId, quantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          this.removeFromCart(productId); // Remove item if quantity is 0 or less
        } else {
          this.saveCart();
        }
      }
    },
    increaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity++;
        this.saveCart();
      }
    },
    decreaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
        this.saveCart();
      } else {
        this.removeFromCart(productId); //  Remove the item if its quantity would drop below 1
      }
    },
    clearCart() {
      this.items = [];
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },
  },
  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price * item.quantity, 0),
  },
});
