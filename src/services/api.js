import axios from 'axios';

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const token = localStorage.getItem('token') || null;

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}/`,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-CSRF-TOKEN': csrfToken,
  },
});

export default api;
