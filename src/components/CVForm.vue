
<template>
  <div class="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-2xl transform transition-all duration-300">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">CV Form</h2>

    <!-- Personal Data -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Personal Data</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          v-model="cvData.personalData.name"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Address"
          v-model="cvData.personalData.address"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          v-model="cvData.personalData.phone"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="email"
          placeholder="Email Address"
          v-model="cvData.personalData.email"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Nationality"
          v-model="cvData.personalData.nationality"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Marital Status"
          v-model="cvData.personalData.maritalStatus"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Sex"
          v-model="cvData.personalData.sex"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          v-model="cvData.personalData.dateOfBirth"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
        <input
          type="text"
          placeholder="Place of Birth"
          v-model="cvData.personalData.placeOfBirth"
          class="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        />
      </div>
    </div>

    <!-- Education -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Education</h3>
      <div v-for="(edu, index) in cvData.education" :key="index" class="mb-4 p-3 border border-gray-200 rounded-md bg-white relative">
        <input
          type="text"
          placeholder="Degree/Field of Study"
          v-model="edu.degree"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Institution"
          v-model="edu.institution"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Years (e.g., 2023-Present)"
          v-model="edu.years"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <button
          @click="removeEntry('education', index)"
          class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
        >
          &times;
        </button>
      </div>
      <button
        @click="addEntry('education')"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
      >
        Add Education
      </button>
    </div>

    <!-- Work Experience -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Work Experience</h3>
      <div v-for="(exp, index) in cvData.workExperience" :key="index" class="mb-4 p-3 border border-gray-200 rounded-md bg-white relative">
        <input
          type="text"
          placeholder="Years (e.g., 2024-Present)"
          v-model="exp.years"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <textarea
          placeholder="Description (Job Title, Company, Responsibilities)"
          rows="3"
          v-model="exp.description"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-1 focus:ring-blue-400"
        ></textarea>
        <button
          @click="removeEntry('workExperience', index)"
          class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
        >
          &times;
        </button>
      </div>
      <button
        @click="addEntry('workExperience')"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
      >
        Add Work Experience
      </button>
    </div>

    <!-- Languages -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Languages</h3>
      <div v-for="(lang, index) in cvData.languages" :key="index" class="mb-4 p-3 border border-gray-200 rounded-md bg-white relative">
        <input
          type="text"
          placeholder="Language"
          v-model="lang.name"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Proficiency (e.g., Excellent, Good)"
          v-model="lang.proficiency"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <button
          @click="removeEntry('languages', index)"
          class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
        >
          &times;
        </button>
      </div>
      <button
        @click="addEntry('languages')"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
      >
        Add Language
      </button>
    </div>

    <!-- Other Skills -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Other Skills</h3>
      <textarea
        placeholder="List your skills, separated by commas (e.g., Microsoft Word, Excel, PowerPoint, HTML, CSS, Vue, JavaScript, C++, Java, SQL, Web developer Front-End, Database Administrator)"
        rows="4"
        v-model="cvData.otherSkills"
        class="w-full p-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
      ></textarea>
    </div>

    <!-- Interests -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">Interests</h3>
      <textarea
        placeholder="List your interests (e.g., Math, English, technology)"
        rows="2"
        v-model="cvData.interests"
        class="w-full p-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
      ></textarea>
    </div>

    <!-- References -->
    <div class="mb-8 p-4 border rounded-lg shadow-sm bg-gray-50">
      <h3 class="text-xl font-semibold text-purple-700 mb-4">References</h3>
      <div v-for="(ref, index) in cvData.references" :key="index" class="mb-4 p-3 border border-gray-200 rounded-md bg-white relative">
        <input
          type="text"
          placeholder="Reference Name"
          v-model="ref.name"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Title/Company"
          v-model="ref.titleCompany"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          v-model="ref.phone"
          class="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <button
          @click="removeEntry('references', index)"
          class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
        >
          &times;
        </button>
      </div>
      <button
        @click="addEntry('references')"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
      >
        Add Reference
      </button>
    </div>


    <div class="text-center flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <button
        @click="handleSave"
        class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full sm:w-auto"
      >
        Save CV
      </button>
      <button
        @click="downloadCvAsWord"
        class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full sm:w-auto"
      >
        Download CV as Word
      </button>
      <button
        @click="createNewCv"
        class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 w-full sm:w-auto"
      >
        Create New CV
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['save-cv']);

const initialCvData = { // Define initial state to easily reset
  personalData: {
    name: '',
    address: '',
    phone: '',
    email: '',
    nationality: '',
    maritalStatus: '',
    sex: '',
    dateOfBirth: '',
    placeOfBirth: ''
  },
  education: [],
  workExperience: [],
  languages: [],
  otherSkills: '',
  interests: '',
  references: [],
};

const cvData = reactive({ ...initialCvData }); // Initialize with a copy of initial state

// Initialize with some default data based on the provided image for demonstration
Object.assign(cvData.personalData, {
  name: 'PHIT SOFA',
  address: '# 773, St 29MC, Stueng Mean Chey, Mean Chey, Phnom Penh',
  phone: '(099) 70 55 77',
  email: 'vansofa709@gmail.com',
  nationality: 'Cambodian',
  maritalStatus: 'Single',
  sex: 'Male',
  dateOfBirth: '2005-04-03', // YYYY-MM-DD format for date input
  placeOfBirth: 'Banteay Meanchey'
});

cvData.education.push(
  { degree: 'Student in Computer Science', institution: 'Royal University of Phnom Penh', years: '2023-Present' },
  { degree: 'Students', institution: 'Mongkol Borey High School', years: '2020-2023' },
  { degree: 'Students', institution: 'Koy Meng Secondary School', years: '2017-2020' }
);

cvData.workExperience.push(
  { years: '2024-Present', description: 'Website developer at a company, Database administrator.' },
  { years: '18-June 2025', description: 'Ceremony to support the Cambodian government in submitting documents to the International Court of Justice (ICJ).' },
  { years: '15-March 2025', description: 'Participate in events to share experiences, knowledge, and skills with children.' }
);

cvData.languages.push(
  { name: 'Khmer', proficiency: 'Excellent' },
  { name: 'English', proficiency: 'Good' },
  { name: 'China', proficiency: 'Good comprehension, fair communication' }
);

cvData.otherSkills = 'Microsoft Word, Excel, PowerPoint, and Access\nHTML, CSS, Vue, Java Script, C, C++, Java, and SQL\nWeb developer Front-End, and Database Administrator';
cvData.interests = 'Math, English, technology, HTML, CSS, java, C, C++, C#.';

cvData.references.push(
  { name: 'Sean SunDe', titleCompany: 'Shopkeeper, 988 TECH CO, LTD Company', phone: '(077) 554 881' },
  { name: 'Mr. Chan Saramphong', titleCompany: 'Teacher English, Royal University of Phnom Penh', phone: '(011) 951 470' }
);


const addEntry = (section) => {
  if (section === 'education') {
    cvData.education.push({ degree: '', institution: '', years: '' });
  } else if (section === 'workExperience') {
    cvData.workExperience.push({ years: '', description: '' });
  } else if (section === 'languages') {
    cvData.languages.push({ name: '', proficiency: '' });
  } else if (section === 'references') {
    cvData.references.push({ name: '', titleCompany: '', phone: '' });
  }
};

const removeEntry = (section, index) => {
  cvData[section].splice(index, 1);
};

const handleSave = () => {
  emit('save-cv', { ...cvData }); // Emit a copy of the data
};

// Function to reset the form to its initial empty state
const createNewCv = () => {
  // Clear all reactive properties by assigning a new empty object
  Object.assign(cvData, {
    personalData: {
      name: '',
      address: '',
      phone: '',
      email: '',
      nationality: '',
      maritalStatus: '',
      sex: '',
      dateOfBirth: '',
      placeOfBirth: ''
    },
    education: [],
    workExperience: [],
    languages: [],
    otherSkills: '',
    interests: '',
    references: [],
  });
  console.log('CV form reset to new.');
};

// Function to generate and download CV as a Word document
const downloadCvAsWord = () => {
  // Construct HTML content for the Word document
  let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CV - ${cvData.personalData.name || 'Untitled'}</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 40px; }
            h1, h2, h3 { color: #4A0E7B; margin-bottom: 10px; }
            h1 { font-size: 2em; text-align: center; border-bottom: 2px solid #ddd; padding-bottom: 10px; }
            h2 { font-size: 1.5em; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 20px; }
            h3 { font-size: 1.2em; margin-top: 15px; }
            p { margin-bottom: 5px; }
            ul { list-style-type: disc; margin-left: 20px; }
            li { margin-bottom: 5px; }
            .section { margin-bottom: 20px; }
            .contact-info { text-align: center; margin-bottom: 20px; }
            .contact-info p { display: inline-block; margin: 0 10px; }
            .entry-title { font-weight: bold; }
            .entry-company { font-style: italic; }
            .entry-duration { font-size: 0.9em; color: #666; }
            .pre-line { white-space: pre-line; } /* For preserving newlines in textarea content */
        </style>
    </head>
    <body>
        <h1>CURRICULUM VITAE</h1>
        <p><strong>${cvData.personalData.name || 'Your Name'}</strong></p>
        <p>${cvData.personalData.address || ''}</p>
        <p>Tel : ${cvData.personalData.phone || ''}</p>
        <p>Email : ${cvData.personalData.email || ''}</p>

        <div class="section">
            <h2>PERSONAL DATA</h2>
            <p>Nationality : ${cvData.personalData.nationality || ''}</p>
            <p>Marital Status : ${cvData.personalData.maritalStatus || ''}</p>
            <p>Sex : ${cvData.personalData.sex || ''}</p>
            <p>Date of Birth : ${cvData.personalData.dateOfBirth || ''}</p>
            <p>Place of Birth : ${cvData.personalData.placeOfBirth || ''}</p>
        </div>

        ${cvData.education.length > 0 ? `
        <div class="section">
            <h2>EDUCATION</h2>
            ${cvData.education.map(edu => `
                <p>${edu.years || ''} ${edu.degree || ''}, ${edu.institution || ''}</p>
            `).join('')}
        </div>
        ` : ''}

        ${cvData.workExperience.length > 0 ? `
        <div class="section">
            <h2>WORK EXPERIENCE</h2>
            ${cvData.workExperience.map(exp => `
                <p>${exp.years || ''} ${exp.description || ''}</p>
            `).join('')}
        </div>
        ` : ''}

        ${cvData.languages.length > 0 ? `
        <div class="section">
            <h2>LANGUAGES</h2>
            ${cvData.languages.map(lang => `
                <p>${lang.name || ''} : ${lang.proficiency || ''}</p>
            `).join('')}
        </div>
        ` : ''}

        ${cvData.otherSkills ? `
        <div class="section">
            <h2>OTHER SKILLS</h2>
            <p class="pre-line">${cvData.otherSkills}</p>
        </div>
        ` : ''}

        ${cvData.interests ? `
        <div class="section">
            <h2>INTERESTS</h2>
            <p class="pre-line">${cvData.interests}</p>
        </div>
        ` : ''}

        ${cvData.references.length > 0 ? `
        <div class="section">
            <h2>REFERENCES</h2>
            ${cvData.references.map(ref => `
                <p>${ref.name || ''}</p>
                <p>${ref.titleCompany || ''}</p>
                <p>Tel : ${ref.phone || ''}</p>
            `).join('')}
        </div>
        ` : ''}
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
  a.download = `${cvData.personalData.name || 'CV'}_${new Date().toISOString().slice(0, 10)}.doc`; // Suggest a filename

  // Append to body, click, and remove
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Revoke the object URL to free up memory
  URL.revokeObjectURL(url);
};
</script>

<style lang="scss" scoped>
/* Specific styles for CVForm.vue */
</style>
