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
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" onChange={handlePlanChange} />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SwitchPlan;
