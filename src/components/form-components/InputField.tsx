interface InputFieldProps {
  label: string;
  inputType: string;
  placeholder: string;
}

const InputField = ({ label, inputType, placeholder }: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="capitalize">
        {label}
      </label>
      <input
        type={inputType}
        id={label}
        className="outline-none border-2 rounded-md px-3 py-1.5"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
