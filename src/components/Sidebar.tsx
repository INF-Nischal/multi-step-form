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
    <div className="sm:bg-sidebar-texture bg-sidebar-texture-mobile bg-cover h-[240px] sm:h-full sm:w-[404px] flex justify-center sm:justify-start sm:flex-col gap-4 p-8">
      {siderbarConstants.map((item) => (
        <div key={item.id} className="flex sm:gap-2 h-[32px] sm:h-[48px]">
          <span
            className={`h-full border-2 rounded-full w-[32px] sm:w-[48px] text-white flex justify-center items-center font-bold ${
              activeStep === item.id ? "bg-blue-400 border-none" : ""
            }`}
          >
            {item.id}
          </span>
          <div className="hidden sm:block">
            <h3 className="text-white opacity-70 font-bold">{item.title}</h3>
            <p className="uppercase text-white">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
