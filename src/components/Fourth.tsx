import { useState } from "react";

import FormTitle from "./form-components/FormTitle";
import { planConstants, addonsConstants } from "../constants/plan-constants";

const Fourth = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("yearly");
  const [planName, setPlanName] = useState<string>("Arcade");
  const monthlyPlans = planConstants.monthly;
  const yearlyPlans = planConstants.yearly;
  const monthlyAddons = addonsConstants.monthly;
  const yearlyAddons = addonsConstants.yearly;

  return (
    <div>
      <FormTitle
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div>
        <div>
          {selectedPlan === "monthly" &&
            monthlyPlans
              .filter((plan) => plan.plan === planName)
              .map((plan) => (
                <div className="flex justify-between items-center">
                  <div>
                    <h1>{plan.plan}</h1>
                    <p className="underline">change</p>
                  </div>
                  <p>
                    {plan.price}/{plan.per}
                  </p>
                </div>
              ))}
          {selectedPlan === "yearly" &&
            yearlyPlans
              .filter((plan) => plan.plan === planName)
              .map((plan) => (
                <div className="flex justify-between items-center">
                  <div>
                    <h1>{plan.plan}</h1>
                    <p className="underline">change</p>
                  </div>
                  <p>
                    ${plan.price}/{plan.per}
                  </p>
                </div>
              ))}
        </div>
        <div>
          {selectedPlan === "monthly" &&
            monthlyAddons.map((addon) => (
              <div key={addon.id} className="flex justify-between items-center">
                <h1>{addon.title}</h1>
                <p>
                  ${addon.price}/{addon.per}
                </p>
              </div>
            ))}
          {selectedPlan === "yearly" &&
            yearlyAddons.map((addon) => (
              <div key={addon.id} className="flex justify-between items-center">
                <h1>{addon.title}</h1>
                <p>
                  ${addon.price}/{addon.per}
                </p>
              </div>
            ))}
        </div>
        <div className="flex justify-between items-center">
          <h1>Total</h1>
          <p>$120/mo</p>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
