import { useContext } from "react";
import FormTitle from "./form-components/FormTitle";
import { planConstants, addonsConstants } from "../constants/plan-constants";
import { MyContext } from "./MyContext";

const Fourth = () => {
  const { plan, planType, addons } = useContext(MyContext);

  // Ensure TypeScript correctly infers the types for planConstants
  const typedPlanConstants = planConstants as {
    monthly: {
      id: number;
      logo: string;
      plan: string;
      price: number;
      per: string;
    }[];
    yearly: {
      id: number;
      logo: string;
      plan: string;
      price: number;
      per: string;
      free: string;
    }[];
  };

  const selectedPlan = typedPlanConstants[
    plan as keyof typeof typedPlanConstants
  ].find((p) => p.id === planType);

  const selectedAddonsData = addons.map((addonId) =>
    addonsConstants[plan as keyof typeof addonsConstants].find(
      (addon) => addon.id === addonId
    )
  );

  const totalPrice =
    (selectedPlan?.price ?? 0) +
    selectedAddonsData.reduce((acc, addon) => acc + (addon?.price ?? 0), 0);

  return (
    <div>
      <FormTitle
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h1>{selectedPlan?.plan}</h1>
              <p className="underline">Change</p>
            </div>
            <p>
              {selectedPlan?.price}/{selectedPlan?.per}
            </p>
          </div>
        </div>
        <div>
          {selectedAddonsData.map((addon) => (
            <div key={addon?.id} className="flex justify-between items-center">
              <h1>{addon?.title}</h1>
              <p>
                ${addon?.price}/{addon?.per}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <h1>Total</h1>
          <p>
            ${totalPrice}/{selectedPlan?.per}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
