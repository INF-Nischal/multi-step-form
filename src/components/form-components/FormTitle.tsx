interface FormTitleProps {
  title: string;
  description: string;
}

const FormTitle = ({ title, description }: FormTitleProps) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h1 className="text-3xl font-bold text-primary-marine-blue">{title}</h1>
      <p className="text-sm text-neutral-cool-gray">{description}</p>
    </div>
  );
};

export default FormTitle;
