<template>
  <div class="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-2xl transform transition-all duration-300">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Cover Letter Form</h2>

    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Your Details (Sender)</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Your Full Name"
          v-model="letterData.senderName"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Your Address Line 1"
          v-model="letterData.senderAddressLine1"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Your Address Line 2 (Optional)"
          v-model="letterData.senderAddressLine2"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          v-model="letterData.senderEmail"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          v-model="letterData.senderPhone"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
      </div>
    </div>


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

    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Letter Content Sections</h3>

      <div class="mb-4">
        <label for="salutation" class="block text-gray-700 text-sm font-semibold mb-2">Salutation:</label>
        <input
          type="text"
          id="salutation"
          placeholder="e.g., Dear Mr. Smith,"
          v-model="letterData.salutation"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div
        v-for="(section, index) in letterData.contentSections"
        :key="section.id"
        class="mb-6 p-4 border border-gray-200 rounded-md bg-white shadow-sm"
      >
        <div class="flex justify-between items-center mb-3">
          <input
            type="text"
            :placeholder="`Section Title ${index + 1}`"
            v-model="section.title"
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 flex-grow mr-2 text-lg font-medium"
          />
          <button
            @click="removeContentSection(index)"
            class="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors duration-200"
            aria-label="Remove section"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1H9a1 1 0 00-1 1v3m-2 2h10"></path></svg>
          </button>
        </div>
        <textarea
          :id="`contentSection-${index}`"
          rows="4"
          :placeholder="section.defaultText"
          v-model="section.content"
          class="w-full p-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>

      <button
        @click="addContentSection"
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-4 flex items-center justify-center"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        Add New Section
      </button>

      <div class="mb-4 mt-6">
        <label for="closing" class="block text-gray-700 text-sm font-semibold mb-2">Closing:</label>
        <input
          type="text"
          id="closing"
          placeholder="e.g., Sincerely,"
          v-model="letterData.closing"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div class="mb-4">
        <label for="yourName" class="block text-gray-700 text-sm font-semibold mb-2">Your Name (for signature):</label>
        <input
          type="text"
          id="yourName"
          placeholder="Your Name"
          v-model="letterData.yourName"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        @click="generateFullLetterBody"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full mt-4"
      >
        Generate Full Letter Content
      </button>

      <div v-if="fullBodyPreview" class="mt-6 p-4 border border-gray-300 rounded-md bg-white shadow-inner">
        <h4 class="text-lg font-semibold text-gray-700 mb-2">Full Letter Content Preview:</h4>
        <p class="whitespace-pre-line text-gray-800">{{ fullBodyPreview }}</p>
      </div>
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
import { reactive, ref } from 'vue';

const emit = defineEmits(['save-letter']);

const fullBodyPreview = ref('');
let sectionIdCounter = 0; // To ensure unique keys for dynamic sections

const initialLetterData = {
  senderName: '',
  senderAddressLine1: '',
  senderAddressLine2: '',
  senderEmail: '',
  senderPhone: '',
  recipientName: '',
  recipientTitle: '',
  recipientCompany: '',
  recipientAddress: '',
  date: new Date().toISOString().slice(0, 10),
  salutation: 'Dear [Recipient Name],',
  // Replaced individual content fields with a dynamic array
  contentSections: [
    {
      id: sectionIdCounter++,
      title: 'Position & Source',
      content: 'I am writing to express my keen interest in the [Job Title] position at [Company Name], as advertised on [Platform where you saw the job, e.g., LinkedIn, company website, university bulletin board].',
      defaultText: 'e.g., I am writing to express my keen interest in the [Job Title] position at [Company Name], as advertised on [Platform].'
    },
    {
      id: sectionIdCounter++,
      title: 'Motivation',
      content: 'My motivation for applying stems from [explain your interest in the role and company, what attracts you to them, and how your values align].',
      defaultText: 'e.g., My motivation for applying stems from [explain your interest in the role and company, what attracts you to them, and how your values align].'
    },
    {
      id: sectionIdCounter++,
      title: 'Education & Skills',
      content: 'Through my academic journey at [Your University/Institution], I have gained a solid foundation in [mention key relevant academic areas or projects]. My skills include [list 2-3 key skills, e.g., problem-solving, specific software, communication, teamwork].',
      defaultText: 'e.g., Through my academic journey at [Your University/Institution], I have gained a solid foundation in [mention key relevant academic areas or projects]. My skills include [list 2-3 key skills].'
    },
    {
      id: sectionIdCounter++,
      title: 'Work Experience',
      content: 'In my previous role as [Your Previous Role] at [Previous Company] for [duration], I [describe 1-2 key achievements or responsibilities that are relevant to the new role]. I demonstrated [specific skill] by [quantifiable result].',
      defaultText: 'e.g., In my previous role as [Your Previous Role] at [Previous Company] for [duration], I [describe 1-2 key achievements or responsibilities].'
    },
    {
      id: sectionIdCounter++,
      title: 'Willingness to Interview & Call to Action',
      content: 'I am confident that my qualifications and enthusiasm make me a strong candidate for this position. I am available for an interview at your convenience and would be honored to discuss how I can contribute to your team.\n\nThank you for considering my application.',
      defaultText: 'e.g., I am confident that my qualifications and enthusiasm make me a strong candidate... Thank you for considering my application.'
    }
  ],
  closing: 'Sincerely,',
  yourName: '',
};

const letterData = reactive({ ...initialLetterData });

// This block now populates both recipient and sender details for the RUPP example.
// Also updates the content sections using the new structure.
Object.assign(letterData, {
  senderName: 'Phit Sofa',
  senderAddressLine1: '# 773, St 29MC, Stueng MeanChey,',
  senderAddressLine2: 'Mean Chey, Phnom Penh, Cambodia',
  senderEmail: 'vansofa709@gmail.com',
  senderPhone: '099 705 577',
  recipientName: 'Mr. Chi Kong',
  recipientTitle: 'Head of Computer Science Department',
  recipientCompany: 'Royal University of Phnom Penh',
  recipientAddress: 'Room 101, Russian Blvd, Phnom Penh, Cambodia',
  date: '2025-08-01',
  salutation: 'Dear Mr. Chi Kong,',
  contentSections: [ // Update this to match the new structure
    {
      id: sectionIdCounter++,
      title: 'Position & Source',
      content: 'I am writing to express my interest in the position of Part-time Computer Lab Assistant in the Computer Science Department at the Royal University of Phnom Penh, as announced on the bulletin board dated July 19, 2025.',
      defaultText: 'e.g., I am writing to express my keen interest in the [Job Title] position at [Company Name], as advertised on [Platform].'
    },
    {
      id: sectionIdCounter++,
      title: 'Motivation',
      content: 'My motivation for applying stems from a strong desire to contribute to the university\'s learning environment and to gain hands-on experience in computer lab management while applying my technical skills.',
      defaultText: 'e.g., My motivation for applying stems from [explain your interest in the role and company, what attracts you to them, and how your values align].'
    },
    {
      id: sectionIdCounter++,
      title: 'Education & Skills',
      content: 'Currently, I am a second-year student in the Bachelor of Science in Computer Science program at RUPP. Through my academic journey, I have gained a solid foundation in computer operations, basic networking, and various software tools commonly used in computer labs.',
      defaultText: 'e.g., Through my academic journey at [Your University/Institution], I have gained a solid foundation in [mention key relevant academic areas or projects]. My skills include [list 2-3 key skills].'
    },
    {
      id: sectionIdCounter++,
      title: 'Work Experience',
      content: 'I have frequently supported my classmates during lab sessions, helping troubleshoot system errors and assisting them with programming tasks—experiences that have strengthened both my technical and interpersonal skills. I am confident working under pressure and have strong communication skills in both Khmer and English. My approachable and supportive nature allows me to assist others effectively, making me well-suited for this position.',
      defaultText: 'e.g., In my previous role as [Your Previous Role] at [Previous Company] for [duration], I [describe 1-2 key achievements or responsibilities].'
    },
    {
      id: sectionIdCounter++,
      title: 'Willingness to Interview & Call to Action',
      content: 'Although I am still a student, I am highly motivated, adaptable, and eager to contribute to the university’s learning environment while gaining valuable hands-on experience. I am confident I can contribute significantly to your team.\n\nThank you for considering my application. I am available for an interview at your convenience and would be honored to contribute to the success of the Computer Science Department.',
      defaultText: 'e.g., I am confident that my qualifications and enthusiasm make me a strong candidate... Thank you for considering my application.'
    }
  ],
  yourName: 'Phit Sofa',
});

// Function to add a new content section
const addContentSection = () => {
  letterData.contentSections.push({
    id: sectionIdCounter++,
    title: `Custom Section ${letterData.contentSections.length + 1}`,
    content: '',
    defaultText: 'Enter content for this custom section here.'
  });
};

// Function to remove a content section
const removeContentSection = (index) => {
  letterData.contentSections.splice(index, 1);
};


// Function to assemble all content sections into a single string
const assembleFullBody = () => {
  // Join the content of all dynamic sections
  return letterData.contentSections
    .map(section => section.content)
    .filter(content => content.trim() !== '')
    .join('\n\n'); // Use two newlines for paragraph breaks
};

const generateFullLetterBody = () => {
  fullBodyPreview.value = assembleFullBody();
};


const handleSave = () => {
  emit('save-letter', { ...letterData, fullBody: assembleFullBody() });
  console.log('Cover Letter Data Saved:', { ...letterData, fullBody: assembleFullBody() });
};

const createNewLetter = () => {
  // Reset sectionIdCounter for a fresh start when creating a new letter
  sectionIdCounter = 0;
  // Deep copy initialLetterData including contentSections
  Object.assign(letterData, JSON.parse(JSON.stringify(initialLetterData)));
  // Re-generate IDs for initial sections if needed after reset
  letterData.contentSections.forEach(section => {
    section.id = sectionIdCounter++;
  });
  fullBodyPreview.value = '';
  console.log('Cover Letter form reset to new.');
};

const downloadLetterAsWord = () => {
  const finalBodyContent = assembleFullBody();

  const senderAddressHtml = [];
  if (letterData.senderAddressLine1) {
    senderAddressHtml.push(`<p>${letterData.senderAddressLine1}</p>`);
  }
  if (letterData.senderAddressLine2) {
    senderAddressHtml.push(`<p>${letterData.senderAddressLine2}</p>`);
  }

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
            <p>${letterData.senderName || ''}</p>
            ${senderAddressHtml.join('')}
            <p>${letterData.senderEmail || ''}</p>
            <p>${letterData.senderPhone || ''}</p>
            <p>${letterData.date || ''}</p>
        </div>

        <div class="recipient-info">
            <p>${letterData.recipientName || ''}</p>
            <p>${letterData.recipientTitle || ''}</p>
            <p>${letterData.recipientCompany || ''}</p>
            <p>${letterData.recipientAddress || ''}</p>
        </div>

        <p class="salutation">${letterData.salutation || 'Dear Sir/Madam,'}</p>

        <p class="body-content pre-line">${finalBodyContent || ''}</p>
        <p class="closing">${letterData.closing || 'Sincerely,'}</p>
        <p>${letterData.yourName || ''}</p>
    </body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${letterData.yourName || 'Cover_Letter'}_${new Date().toISOString().slice(0, 10)}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
</script>

<style lang="scss" scoped>
/* Specific styles for CoverLetterForm.vue */
</style>