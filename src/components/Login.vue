<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div v-if="loginError" class="text-red-500 text-sm mb-4">{{ loginError }}</div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const loginError = ref('');

const login = () => {
  // --- Simple Mock Authentication ---
  // In a real application, you would send these credentials to a backend API
  // and receive a token or session ID upon successful authentication.
  if (username.value === 'Admin' && password.value === 'password') {
    localStorage.setItem('isAuthenticated', 'true'); // Set the auth flag
    loginError.value = ''; // Clear any previous errors
    router.push('/home'); // Redirect to the protected home page
  } else {
    loginError.value = 'Invalid username or password.';
  }
};
</script>

<style scoped>
/* Add any specific styles for Login.vue here if needed */
</style>