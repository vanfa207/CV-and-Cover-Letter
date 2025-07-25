<template>
  <div class="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md transform transition-all duration-300 hover:scale-105">
    <div class="flex flex-col items-center text-center">
      <!-- Profile Image -->
      <img
        :src="profile.imageUrl"
        :alt="`${profile.name}'s profile`"
        class="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-lg mb-6"
        @error="handleImageError"
      />

      <div v-if="isEditing">
        <!-- Editing mode -->
        <input
          type="text"
          v-model="editableProfile.name"
          class="text-3xl font-bold text-gray-800 mb-2 w-full text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          v-model="editableProfile.title"
          class="text-lg text-purple-600 mb-4 w-full text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          v-model="editableProfile.bio"
          rows="4"
          class="text-gray-700 leading-relaxed mb-6 w-full text-center p-2 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <input
          type="email"
          v-model="editableProfile.email"
          class="text-gray-600 flex items-center justify-center mb-2 w-full text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="tel"
          v-model="editableProfile.phone"
          class="text-gray-600 flex items-center justify-center mb-6 w-full text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          v-model="editableProfile.sex"
          class="text-gray-600 flex items-center justify-center mb-2 w-full text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          v-model="editableProfile.address"
          class="text-gray-600 flex items-center justify-center mb-6 w-full text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <div class="flex space-x-4">
          <button
            @click="handleSave"
            class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Save
          </button>
          <button
            @click="handleCancel"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </div>
      <div v-else>
        <!-- Display mode -->
        <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ profile.name }}</h1>
        <p class="text-lg text-purple-600 mb-4">{{ profile.title }}</p>
        <p class="text-gray-700 leading-relaxed mb-6">{{ profile.bio }}</p>

        <div class="w-full text-left border-t border-gray-200 pt-6 mt-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
          <div class="flex items-center text-gray-600 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-purple-500">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>{{ profile.email }}</span>
          </div>
          <div class="flex items-center text-gray-600 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-purple-500">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{{ profile.phone }}</span>
          </div>
          <div class="flex items-center text-gray-600 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-purple-500">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
            <span>{{ profile.sex }}</span>
          </div>
          <div class="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-purple-500">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <span>{{ profile.address }}</span>
          </div>
        </div>

        <button
          @click="isEditing = true"
          class="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Edit Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';

const props = defineProps({
  profile: Object, // Prop to receive profile data from parent
});

const emit = defineEmits(['update-profile']); // Emit event to update parent

const isEditing = ref(false);
const editableProfile = reactive({}); // Use reactive for an object

// Watch for changes in the 'profile' prop to initialize editableProfile
watch(() => props.profile, (newProfile) => {
  if (!isEditing.value) { // Only update if not currently editing
    Object.assign(editableProfile, newProfile);
  }
}, { immediate: true }); // Run immediately on component creation

// Watch for isEditing to reset editableProfile when entering edit mode
watch(isEditing, (newValue) => {
  if (newValue) {
    Object.assign(editableProfile, props.profile);
  }
});

const handleSave = () => {
  emit('update-profile', { ...editableProfile }); // Emit a copy of editableProfile
  isEditing.value = false;
};

const handleCancel = () => {
  isEditing.value = false;
  // Revert editableProfile to original profile data if needed, or simply let watch handle it
};

const handleImageError = (event) => {
  event.target.onerror = null;
  event.target.src = "https://placehold.co/150x150/A78BFA/FFFFFF?text=Error";
};
</script>

<style lang="scss" scoped>
/* Specific styles for ProfileCard.vue */
</style>