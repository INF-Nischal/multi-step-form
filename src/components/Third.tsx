import { useState } from "react";

import FormTitle from "./form-components/FormTitle";
import { addonsConstants } from "../constants/plan-constants";
import AddonsOption from "./form-components/AddonsOption";

const Third = () => {
  const [addonsPlan, setAddonsPlan] = useState<string>("monthly");
  const monthlyPlans = addonsConstants.monthly;
  const yearlyPlans = addonsConstants.yearly;

  const handleAddonsPlanChange = () => {
    setAddonsPlan(addonsPlan === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div>
      <FormTitle
        title="Pick add-ons"
        description="Add-ons help enhance you gaming experience."
      />
      <div className="flex flex-col gap-4 mt-4">
        {addonsPlan === "monthly" &&
          monthlyPlans.map((item) => (
            <AddonsOption
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              per={item.per}
            />
          ))}
        {addonsPlan === "yearly" &&
          yearlyPlans.map((item) => (
            <AddonsOption
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              per={item.per}
            />
          ))}
      </div>
      <button
        className="bg-blue-300 px-6 py-1.5 capitalize mt-5 rounded-lg"
        onClick={handleAddonsPlanChange}
      >
        {addonsPlan}
      </button>
    </div>
  );
};

export default Third;
