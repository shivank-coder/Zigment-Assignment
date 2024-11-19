JSON Form Generator
A website that can generates dynamic forms based on JSON schemas. The application provides real-time form generation, form validation, and a dark mode toggle for better user experience.

Features
Real-time form generation from user-provided JSON schema.
Validation for form inputs and JSON schema.
Toggle between light and dark themes.
Responsive design for mobile and desktop devices.
Setup Instructions
Prerequisites
Node.js 
npm or Yarn
Clone the Repository
bash
Copy code
git clone https://github.com/shivank-coder/Zigment-Assignment.git  

Install Dependencies
bash
npm install  
Start the Development Server
bash
npm start  
This will start the application at http://localhost:3000.

Example JSON Schemas :- 

 {

  "formTitle": "Project Requirements Survey",

  "formDescription": "Please fill out this survey about your project needs",

  "fields": [

    {

      "id": "name",

      "type": "text",

      "label": "Full Name",

      "required": true,

      "placeholder": "Enter your full name"

    },

    {

      "id": "email",

      "type": "email",

      "label": "Email Address",

      "required": true,

      "placeholder": "you@example.com",

      "validation": {

        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",

        "message": "Please enter a valid email address"

      }

    },

    {

      "id": "companySize",

      "type": "select",

      "label": "Company Size",

      "required": true,

      "options": [

        { "value": "1-50", "label": "1-50 employees" },

        { "value": "51-200", "label": "51-200 employees" },

        { "value": "201-1000", "label": "201-1000 employees" },

        { "value": "1000+", "label": "1000+ employees" }

      ]

    },

    {

      "id": "industry",

      "type": "radio",

      "label": "Industry",

      "required": true,

      "options": [

        { "value": "tech", "label": "Technology" },

        { "value": "healthcare", "label": "Healthcare" },

        { "value": "finance", "label": "Finance" },

        { "value": "retail", "label": "Retail" },

        { "value": "other", "label": "Other" }

      ]

    },

    {

      "id": "timeline",

      "type": "select",

      "label": "Project Timeline",

      "required": true,

      "options": [

        { "value": "immediate", "label": "Immediate (within 1 month)" },

        { "value": "short", "label": "Short-term (1-3 months)" },

        { "value": "medium", "label": "Medium-term (3-6 months)" },

        { "value": "long", "label": "Long-term (6+ months)" }

      ]

    },

    {

      "id": "comments",

      "type": "textarea",

      "label": "Additional Comments",

      "required": false,

      "placeholder": "Any other details you'd like to share..."

    }

  ]

}




Local Development Guide for running the project :- 
Project Structure
src/components - Contains the main components like Form and JSONEditor.
src/types - Contains TypeScript types and interfaces, such as FormSchema.
src/ThemeContext.ts - Provides context and hooks for managing the theme (light/dark).
src/App.tsx - Entry point of the application.
Adding a New Feature
Create a new component in the src/components folder if necessary.
Define types for the new feature in src/types/FormSchema.ts.
Update Form or JSONEditor components to support the new feature.
Test the feature by running the development server and providing a sample JSON schema.
Scripts
Start the development server:
bash
npm start  
Build for production:
bash
npm run build  


My live project URL  :-  https://genuine-mandazi-a3e8ec.netlify.app/
