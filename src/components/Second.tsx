import { useState } from "react";
import FormTitle from "./form-components/FormTitle";
import Card from "./form-components/Card";
import SwitchPlan from "./form-components/SwitchPlan";
import { planConstants } from "../constants/plan-constants";

const Second = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("monthly");
  const [activeId, setActiveId] = useState<number>(1);
  const monthlyPlans = planConstants.monthly;
  const yearlyPlans = planConstants.yearly;

  const handleActiveId = (id: number) => {
    setActiveId(id);
  };

  const handlePlanChange = () => {
    setSelectedPlan(selectedPlan === "monthly" ? "yearly" : "monthly");
  };

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
                id={plan.id}
                activeId={activeId}
                logo={plan.logo}
                plan={plan.plan}
                price={plan.price}
                per={plan.per}
                handleActiveId={handleActiveId}
              />
            ))}
          {selectedPlan === "yearly" &&
            yearlyPlans.map((plan) => (
              <Card
                key={plan.id}
                id={plan.id}
                activeId={activeId}
                logo={plan.logo}
                plan={plan.plan}
                price={plan.price}
                per={plan.per}
                free={plan.free}
                handleActiveId={handleActiveId}
              />
            ))}
        </div>
        <SwitchPlan handlePlanChange={handlePlanChange} />
      </div>
    </div>
  );
};

export default Second;
