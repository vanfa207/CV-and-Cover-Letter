<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 flex flex-col items-center p-4 sm:p-6 lg:p-8 font-inter">
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
      <button
        @click="logout"
        class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Logout
      </button>
    </div>
    <div class="flex justify-center w-full max-w-4xl mx-auto">
      <ProfileCard v-if="currentPage === 'profile'" :profile="profile" @update-profile="updateProfile" />
      <CVForm v-if="currentPage === 'cv'" @save-cv="saveCvData" :profile-data="profile" />
      <CoverLetterForm v-if="currentPage === 'coverLetter'" @save-letter="saveCoverLetterData" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import CVForm from './CVForm.vue';
import CoverLetterForm from './CoverLetterForm.vue';
import ProfileCard from './ProfileCard.vue';

const router = useRouter();
const currentPage = ref('profile');

const profile = reactive(
  JSON.parse(localStorage.getItem('profile')) || {
    name: 'Phit Sofa',
    title: 'Web developer',
    bio: 'Passionate about building intuitive and performant web applications.',
    email: 'vansofa709@gmail.com',
    phone: '099705577',
    imageUrl: 'https://placehold.co/150x150/A78BFA/FFFFFF?text=PS',
    sex: 'Male',
    address: 'Phnom Penh',
  }
);

const updateProfile = (newProfileData) => {
  Object.assign(profile, newProfileData);
  localStorage.setItem('profile', JSON.stringify(profile));
  console.log('Profile updated:', newProfileData);
};

const saveCvData = (data) => {
  console.log('CV Data Saved:', data);
  localStorage.setItem('cvData', JSON.stringify(data));
};

const saveCoverLetterData = (data) => {
  console.log('Cover Letter Data Saved:', data);
  localStorage.setItem('coverLetterData', JSON.stringify(data));
};

const logout = () => {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('profile');
  localStorage.removeItem('cvData');
  localStorage.removeItem('coverLetterData');
  router.push('/login');
};
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>