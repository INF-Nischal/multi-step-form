interface FormTitleProps {
  title: string;
  description: string;
}

const FormTitle = ({ title, description }: FormTitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default FormTitle;
