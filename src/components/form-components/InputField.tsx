import { useState } from "react";

interface InputFieldProps {
  label: string;
  inputType: string;
  placeholder: string;
}

const InputField = ({ label, inputType, placeholder }: InputFieldProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue.trim() === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label htmlFor={label} className="capitalize">
          {label}
        </label>
        <p className="text-red-500 text-sm">{error}</p>
      </div>
      <input
        type={inputType}
        id={label}
        className="outline-none border-2 rounded-md px-3 py-1.5"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
