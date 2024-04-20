interface ButtonProps {
  name: string;
  handleNextStep?: () => void;
}

const Button = ({ name, handleNextStep }: ButtonProps) => {
  return (
    <button
      className="px-6 py-1.5 rounded-md capitalize bg-blue-200"
      onClick={handleNextStep}
    >
      {name}
    </button>
  );
};

export default Button;
