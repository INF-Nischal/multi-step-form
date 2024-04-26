import { useContext } from "react";
import FormTitle from "./form-components/FormTitle";
import { planConstants, addonsConstants } from "../constants/plan-constants";
import { MyContext } from "./MyContext";

const Fourth = () => {
  const { plan, setStep, planType, addons } = useContext(MyContext);

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

  const handleAddonsChange = () => {
    setStep(3);
  };

  return (
    <div>
      <FormTitle
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div className="flex flex-col px-6 py-4 bg-neutral-magnolia rounded-lg">
        <div className="pb-4 border-b-2 mb-3">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold">{selectedPlan?.plan}</h1>
              <button
                className="text-sm underline text-neutral-cool-gray"
                onClick={handleAddonsChange}
              >
                Change
              </button>
            </div>
            <p className="font-bold">
              ${selectedPlan?.price}/{selectedPlan?.per}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {selectedAddonsData.map((addon) => (
            <div key={addon?.id} className="flex justify-between items-center">
              <h1 className="text-sm text-neutral-cool-gray">{addon?.title}</h1>
              <p className="text-sm">
                ${addon?.price}/{addon?.per}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center px-6 pt-6">
        <h1 className="text-neutral-cool-gray text-sm">
          Total (per {plan === "monthly" ? "month" : "year"})
        </h1>
        <p className="text-xl font-bold text-primary-purplish-blue">
          ${totalPrice}/{selectedPlan?.per}
        </p>
      </div>
    </div>
  );
};

export default Fourth;
