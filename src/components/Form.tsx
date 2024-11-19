import React, { useState } from "react";

interface Field {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  validation?: {
    pattern?: string;
    message?: string;
  };
  options?: { value: string; label: string }[];
}

interface Schema {
  formTitle: string;
  formDescription?: string;
  fields: Field[];
}

interface FormProps {
  schema: Schema;
  theme: string;
}

const Form: React.FC<FormProps> = ({ schema, theme }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <h1 className="text-xl font-bold mb-4">{schema.formTitle}</h1>
      {schema.formDescription && (
        <p className="text-white-600 mb-4">{schema.formDescription}</p>
      )}
      <form onSubmit={handleSubmit}>
        {schema.fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block text-white-700 font-semibold mb-2">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "text" || field.type === "email" ? (
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                pattern={field.validation?.pattern}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            ) : field.type === "select" ? (
              <select
                id={field.id}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full p-2 border border-black-300 rounded"
                style={{ color: "black" }}
              >
                <option value="">Select...</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "radio" ? (
              field.options?.map((option) => (
                <div key={option.value} className="mb-2">
                  <label>
                    <input
                      type="radio"
                      name={field.id}
                      value={option.value}
                      required={field.required}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                </div>
              ))
            ) : field.type === "textarea" ? (
              <textarea
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                style={{ color: "black" }}
              ></textarea>
            ) : null}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-black font-bold mb-2">Successful Submission!</h2>
            <p className="text-black font-bold mb-2">Thanks for filling the form</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
