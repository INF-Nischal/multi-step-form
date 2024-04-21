import { useContext } from "react";
import { MyContext } from "../MyContext";

interface addonsOptionProps {
  id: number;
  title: string;
  description: string;
  price: number;
  per: string;
}

const AddonsOption = ({
  id,
  title,
  description,
  price,
  per,
}: addonsOptionProps) => {
  const { addons, setAddons } = useContext(MyContext);

  const handleAddonsChange = (id: number) => {
    if (!addons.includes(id)) {
      setAddons([...addons, id]);
    } else {
      setAddons(addons.filter((addonId) => addonId !== id));
    }
  };

  return (
    <div className="flex justify-between items-center border-2 p-4">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          onChange={() => handleAddonsChange(id)}
          checked={addons.includes(id)}
        />
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
