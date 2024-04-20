interface addonsOptionProps {
  title: string;
  description: string;
  price: number;
  per: string;
}

const AddonsOption = ({
  title,
  description,
  price,
  per,
}: addonsOptionProps) => {
  return (
    <div className="flex justify-between items-center border-2 p-4">
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p>
          +{price}/{per}
        </p>
      </div>
    </div>
  );
};

export default AddonsOption;
