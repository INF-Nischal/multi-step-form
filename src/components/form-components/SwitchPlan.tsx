import { useContext, useState } from "react";
import { MyContext } from "../MyContext";

const SwitchPlan = () => {
  const { plan, setPlan } = useContext(MyContext);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handlePlanChange = () => {
    setPlan(plan === "monthly" ? "yearly" : "monthly");
    setIsActive(!isActive);
  };

  return (
    <div className="flex justify-center items-center py-4 border-2 rounded-lg">
      <div className="flex items-center gap-4">
        <p className={`${plan !== "monthly" ? "text-slate-500" : ""}`}>
          Monthly
        </p>

        <div
          className={`bg-gray-800 w-[32px] h-[18px] rounded-xl py-[2.5px] px-[4px] flex ${
            isActive ? "justify-end" : "justify-start"
          } `}
        >
          <div
            className="h-[12px] w-[12px] bg-white rounded-full hover:cursor-pointer shadow-black shadow-lg"
            onClick={handlePlanChange}
          ></div>
        </div>

        <p className={`${plan !== "yearly" ? "text-slate-500" : ""}`}>Yearly</p>
      </div>
    </div>
  );
};

export default SwitchPlan;
