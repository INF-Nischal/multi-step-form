import { useContext } from "react";

import FormTitle from "./form-components/FormTitle";
import { addonsConstants } from "../constants/plan-constants";
import AddonsOption from "./form-components/AddonsOption";
import { MyContext } from "./MyContext";

const Third = () => {
  const { plan } = useContext(MyContext);
  const monthlyPlans = addonsConstants.monthly;
  const yearlyPlans = addonsConstants.yearly;

  return (
    <div>
      <FormTitle
        title="Pick add-ons"
        description="Add-ons help enhance you gaming experience."
      />
      <div className="flex flex-col gap-4 mt-4">
        {plan === "monthly" &&
          monthlyPlans.map((item) => (
            <AddonsOption
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              per={item.per}
            />
          ))}
        {plan === "yearly" &&
          yearlyPlans.map((item) => (
            <AddonsOption
              key={item.id}
              id={item.id}
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
