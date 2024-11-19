import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import Form from "./components/Form";
import { FormSchema } from "./types/FormSchema";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Access dark mode state and toggle function
  const { theme, toggleTheme } = useTheme();

  const handleJSONChange = (json: string) => {
    try {
      const parsed = JSON.parse(json) as FormSchema;
      setSchema(parsed);
      setError(null);
    } catch (err) {
      setError("Invalid JSON format");
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="flex justify-between items-center p-4 shadow">
        <h1 className="text-lg font-bold">Json Form App</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-yellow-700"
        >
          Switch {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Editor */}
        <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-md p-4 shadow">
          <div className={`w-full h-full ${theme === 'dark' ? 'text-black bg-gray-700' : 'text-gray-900 bg-white'}`}>
            <JSONEditor onChange={handleJSONChange} error={error} />
          </div>
        </div>

        {/* Form Preview */}
        <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md p-4 shadow">
          <h2 className="text-lg font-semibold">Genearted Form</h2>
          {schema ? (
            <Form schema={schema} theme={theme} /> 
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              Provide the JSON Schema
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
