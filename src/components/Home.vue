<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
    <div class="mb-8 flex flex-col justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 w-full max-w-4xl mx-auto">
      <button
        @click="currentPage = 'profile'"
        :class="{ 'bg-purple-600 text-white shadow-md': currentPage === 'profile', 'bg-gray-200 text-gray-800 hover:bg-gray-300': currentPage !== 'profile' }"
        class="py-3 px-6 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full md:w-auto"
      >
        My Profile
      </button>
      <button
        @click="currentPage = 'cv'"
        :class="{ 'bg-purple-600 text-white shadow-md': currentPage === 'cv', 'bg-gray-200 text-gray-800 hover:bg-gray-300': currentPage !== 'cv' }"
        class="py-3 px-6 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full md:w-auto"
      >
        CV Form
      </button>
      <button
        @click="currentPage = 'coverLetter'"
        :class="{ 'bg-purple-600 text-white shadow-md': currentPage === 'coverLetter', 'bg-gray-200 text-gray-800 hover:bg-gray-300': currentPage !== 'coverLetter' }"
        class="py-3 px-6 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full md:w-auto"
      >
        Cover Letter Form
      </button>
    </div>

    <ProfileCard v-if="currentPage === 'profile'" :profile="profile" @update-profile="updateProfile" />
    <CVForm v-if="currentPage === 'cv'" @save-cv="saveCvData" />
    <CoverLetterForm v-if="currentPage === 'coverLetter'" @save-letter="saveCoverLetterData" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// FIX IS HERE:
import CVForm from './CVForm.vue'; // Changed from './components/CVForm.vue'
import CoverLetterForm from './CoverLetterForm.vue'; // Changed from './components/CoverLetterForm.vue'
import ProfileCard from './ProfileCard.vue'; // Changed from './components/ProfileCard.vue'

const currentPage = ref('profile'); // Reactive state for current page

// Reactive state for user profile data
const profile = reactive({
  name: 'Phit Sofa',
  title: 'Web developer',
  bio: 'Passionate about building intuitive and performant web applications. Always learning new technologies and improving existing skills.',
  email: 'vansofa709@gmail.com',
  phone: '099705577',
  imageUrl: 'https://placehold.co/150x150/A78BFA/FFFFFF?text=PS',
  sex: 'Male',
  address: 'Phnom Penh',
});

// Functions to handle data updates from child components
const updateProfile = (newProfileData) => {
  Object.assign(profile, newProfileData);
  console.log('Profile updated:', newProfileData);
  // In a real app, save to backend/local storage
};

const saveCvData = (data) => {
  console.log('CV Data Saved:', data);
  // In a real app, save to backend/local storage
};

const saveCoverLetterData = (data) => {
  console.log('Cover Letter Data Saved:', data);
  // In a real app, save to backend/local storage
};
</script>

<style lang="scss" scoped>
/* Global styles or specific App.vue styles */
/* The 'body' style should ideally be in a global CSS file, not scoped here. */
/* For example, in src/assets/main.css or src/style.css */
</style>