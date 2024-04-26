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
    <div
      className={`flex justify-between items-center border-2 p-4 rounded-lg cursor-pointer ${
        addons.includes(id)
          ? "border-primary-purplish-blue bg-neutral-magnolia"
          : ""
      }`}
      onClick={() => handleAddonsChange(id)}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="cursor-pointer"
          onChange={() => handleAddonsChange(id)}
          checked={addons.includes(id)}
        />
        <div>
          <h1 className="font-semibold">{title}</h1>
          <p className="text-neutral-cool-gray text-sm">{description}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p
          className={`${
            addons.includes(id) ? "text-primary-purplish-blue" : ""
          }`}
        >
          +{price}/{per}
        </p>
      </div>
    </div>
  );
};

export default AddonsOption;
