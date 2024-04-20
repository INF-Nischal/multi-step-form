import { useState } from "react";
import FormTitle from "./form-components/FormTitle";
import Card from "./form-components/Card";
import SwitchPlan from "./form-components/SwitchPlan";
import { planConstants } from "../constants/plan-constants";

const Second = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("monthly");
  const monthlyPlans = planConstants.monthly;
  const yearlyPlans = planConstants.yearly;

  return (
    <div>
      <div>
        <FormTitle
          title="Select you plan"
          description="You have the option of montly or yearly billing"
        />
        <div className="flex justify-between my-4">
          {selectedPlan === "monthly" &&
            monthlyPlans.map((plan) => (
              <Card
                key={plan.id}
                logo={plan.logo}
                plan={plan.plan}
                price={plan.price}
                per={plan.per}
              />
            ))}
          {selectedPlan === "yearly" &&
            yearlyPlans.map((plan) => (
              <Card
                key={plan.id}
                logo={plan.logo}
                plan={plan.plan}
                price={plan.price}
                per={plan.per}
                free={plan.free}
              />
            ))}
        </div>
        <SwitchPlan />
      </div>
    </div>
  );
};

export default Second;