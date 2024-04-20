import { useState, useEffect } from "react";
import { siderbarConstants } from "../constants/sidebar-constants";

interface SidebarProps {
  step: number;
}

const Sidebar = ({ step }: SidebarProps) => {
  const [activeStep, setActiveStep] = useState<number>(step);

  useEffect(() => {
    setActiveStep(step);
  }, [step]);

  return (
    <div className="bg-sidebar-texture h-full w-[404px] flex flex-col gap-4 p-8">
      {siderbarConstants.map((item) => (
        <div key={item.id} className="flex gap-2 h[48px]">
          <span
            className={`h-full border-2 rounded-full w-[48px] text-white flex justify-center items-center font-bold ${
              activeStep === item.id ? "bg-blue-400 border-none" : ""
            }`}
          >
            {item.id}
          </span>
          <div>
            <h3 className="text-white opacity-70 font-bold">{item.title}</h3>
            <p className="uppercase text-white">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
