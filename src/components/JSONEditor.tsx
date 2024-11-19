import React, { useState } from "react";

interface JSONEditorProps {
  onChange: (json: string) => void;
  error: string | null;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ onChange, error }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const json = e.target.value;
    setValue(json);
    onChange(json);
  };

  return (
    <div>
<textarea
  className="w-full h-96 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
  value={value}
  onChange={handleChange}
  placeholder="Paste JSON schema here"
/>
{error && <p className="text-red-500 mt-2 text-sm font-semibold">{error}</p>}

    </div>
  );
};

export default JSONEditor;
