import { useState } from "react";

import FormTitle from "./form-components/FormTitle";
import { addonsConstants } from "../constants/plan-constants";
import AddonsOption from "./form-components/AddonsOption";

const Third = () => {
  const [addonsPlan, setAddonsPlan] = useState<string>("yearly");
  const monthlyPlans = addonsConstants.monthly;
  const yearlyPlans = addonsConstants.yearly;

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
    </div>
  );
};

export default Third;
