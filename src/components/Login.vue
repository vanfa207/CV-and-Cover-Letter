<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-6">
          <label for="username" class="block text-gray-700 text-sm font-semibold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
            placeholder="Username"
            required
          >
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
          <input
            type="password"
            id="Password"
            v-model="password"
            class="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
            placeholder="password"
            required
          >
        </div>
        <div v-if="errorMessage" class="mb-4 text-red-600 text-center text-sm font-medium">
          {{ errorMessage }}
        </div>
        <button
          type="submit"
          class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter for navigation

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter(); // Initialize router

const handleLogin = () => {
  errorMessage.value = ''; // Clear previous errors

  // Hardcoded credentials for demonstration
  if (username.value === 'Admin' && password.value === 'password') {
    console.log('Login successful!');
    // In a real app, you'd set a flag (e.g., in localStorage or a Vuex/Pinia store)
    localStorage.setItem('isAuthenticated', 'true'); // Simple auth flag

    // Navigate to the home form (Dashboard)
    router.push('/home');
  } else {
    errorMessage.value = 'Invalid username or password.';
    console.warn('Login failed: Invalid credentials');
  }
};
</script>

<style scoped>
/* Scoped styles for the login form */
</style>