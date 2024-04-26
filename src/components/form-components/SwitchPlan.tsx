import { useContext } from "react";
import { MyContext } from "../MyContext";

const SwitchPlan = () => {
  const { plan, setPlan } = useContext(MyContext);

  const handlePlanChange = () => {
    setPlan(plan === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="flex justify-center items-center py-4 border-2 rounded-lg">
      <div className="flex items-center gap-4">
        <p className={`${plan !== "monthly" ? "text-slate-500" : ""}`}>
          Monthly
        </p>

        <div
          className={`relative bg-gray-800 w-[36px] h-[18px] rounded-xl py-[2.5px] px-[4px] flex `}
        >
          <div
            className={`absolute h-[12px] w-[12px] bg-white rounded-full hover:cursor-pointer transition-all ease-in-out shadow-black shadow-lg ${
              plan === "yearly" ? "translate-x-4" : "translate-x-0"
            }`}
            onClick={handlePlanChange}
          ></div>
        </div>

        <p className={`${plan !== "yearly" ? "text-slate-500" : ""}`}>Yearly</p>
      </div>
    </div>
  );
};

export default SwitchPlan;
