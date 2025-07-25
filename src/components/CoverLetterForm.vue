<template>
  <div class="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-2xl transform transition-all duration-300">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Cover Letter Form</h2>

    <!-- Recipient Details -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Recipient Details</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Recipient Name"
          v-model="letterData.recipientName"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Recipient Title"
          v-model="letterData.recipientTitle"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Recipient Company"
          v-model="letterData.recipientCompany"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Recipient Address"
          v-model="letterData.recipientAddress"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
      </div>
      <input
        type="date"
        v-model="letterData.date"
        class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
      />
    </div>

    <!-- Letter Content -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Letter Content</h3>
      <input
        type="text"
        placeholder="Salutation (e.g., Dear Mr. Smith,)"
        v-model="letterData.salutation"
        class="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <textarea
        placeholder="Cover Letter Body"
        rows="10"
        v-model="letterData.body"
        class="w-full p-3 mb-4 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
      ></textarea>
      <input
        type="text"
        placeholder="Closing (e.g., Sincerely,)"
        v-model="letterData.closing"
        class="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="text"
        placeholder="Your Name"
        v-model="letterData.yourName"
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <div class="text-center flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <button
        @click="handleSave"
        class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full sm:w-auto"
      >
        Save Cover Letter
      </button>
      <button
        @click="downloadLetterAsWord"
        class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full sm:w-auto"
      >
        Download as Word
      </button>
      <button
        @click="createNewLetter"
        class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 w-full sm:w-auto"
      >
        Create New
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['save-letter']);

const initialLetterData = { // Define initial state to easily reset
  recipientName: '',
  recipientTitle: '',
  recipientCompany: '',
  recipientAddress: '',
  date: new Date().toISOString().slice(0, 10), // Default to current date
  salutation: 'Dear [Recipient Name],',
  body: 'I am writing to express my keen interest in the [Job Title] position at [Company Name], as advertised on [Platform]. With my background in [relevant experience/skills], I am confident I can contribute significantly to your team...',
  closing: 'Sincerely,',
  yourName: '',
};

const letterData = reactive({ ...initialLetterData }); // Initialize with a copy of initial state

// Initialize with some default data based on the provided image for demonstration
Object.assign(letterData, {
  recipientName: 'Mr. Chi Kong',
  recipientTitle: 'Head of Computer Science Department',
  recipientCompany: 'Royal University of Phnom Penh',
  recipientAddress: 'Room 101, Russian Blvd, Phnom Penh, Cambodia',
  date: '2025-08-01', // August 1, 2025
  salutation: 'Dear Mr. Chi Kong,',
  body: `I am writing to express my interest in the position of Part-time Computer Lab Assistant in the Computer Science Department at the Royal University of Phnom Penh, as announced on the bulletin board dated July 19, 2025.

Currently, I am a second-year student in the Bachelor of Science in Computer Science program at RUPP. Through my academic journey, I have gained a solid foundation in computer operations, basic networking, and various software tools commonly used in computer labs. I have also frequently supported my classmates during lab sessions, helping troubleshoot system errors and assisting them with programming tasks—experiences that have strengthened both my technical and interpersonal skills.

I am confident working under pressure and have strong communication skills in both Khmer and English. My approachable and supportive nature allows me to assist others effectively, making me well-suited for this position.

Although I am still a student, I am highly motivated, adaptable, and eager to contribute to the university’s learning environment while gaining valuable hands-on experience. I am confident I can contribute significantly to your team.

Thank you for considering my application. I am available for an interview at your convenience and would be honored to contribute to the success of the Computer Science Department.`,
  closing: 'Yours sincerely,',
  yourName: 'Phit Sofa',
});

const handleSave = () => {
  emit('save-letter', { ...letterData }); // Emit a copy of the data
};

// Function to reset the form to its initial empty state
const createNewLetter = () => {
  // Clear all reactive properties by assigning a new empty object
  Object.assign(letterData, { ...initialLetterData });
  console.log('Cover Letter form reset to new.');
};

// Function to generate and download Cover Letter as a Word document
const downloadLetterAsWord = () => {
  // Construct HTML content for the Word document
  let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Cover Letter - ${letterData.yourName || 'Untitled'}</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 40px; }
            p { margin-bottom: 10px; }
            .header-info { text-align: right; margin-bottom: 30px; }
            .recipient-info { margin-bottom: 20px; }
            .salutation { margin-bottom: 15px; }
            .body-content { margin-bottom: 20px; }
            .closing { margin-top: 20px; }
            .pre-line { white-space: pre-line; } /* For preserving newlines in textarea content */
        </style>
    </head>
    <body>
        <div class="header-info">
            <p>Phit Sofa</p>
            <p># 773, St 29MC, Stueng MeanChey,</p>
            <p>Mean Chey, Phnom Penh, Cambodia</p>
            <p>vansofa709@gmail.com</p>
            <p>099 705 577</p>
            <p>${letterData.date || ''}</p>
        </div>

        <div class="recipient-info">
            <p>${letterData.recipientName || ''}</p>
            <p>${letterData.recipientTitle || ''}</p>
            <p>${letterData.recipientCompany || ''}</p>
            <p>${letterData.recipientAddress || ''}</p>
        </div>

        <p class="salutation">${letterData.salutation || 'Dear Sir/Madam,'}</p>

        <p class="body-content pre-line">${letterData.body || ''}</p>

        <p class="closing">${letterData.closing || 'Sincerely,'}</p>
        <p>${letterData.yourName || ''}</p>
    </body>
    </html>
  `;

  // Create a Blob from the HTML content
  const blob = new Blob([htmlContent], { type: 'application/msword' });

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a temporary link element
  const a = document.createElement('a');
  a.href = url;
  a.download = `${letterData.yourName || 'Cover_Letter'}_${new Date().toISOString().slice(0, 10)}.doc`; // Suggest a filename

  // Append to body, click, and remove
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Revoke the object URL to free up memory
  URL.revokeObjectURL(url);
};
</script>

<style lang="scss" scoped>
/* Specific styles for CoverLetterForm.vue */
</style>
