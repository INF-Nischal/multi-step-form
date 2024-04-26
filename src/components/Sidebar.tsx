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
    <div className="lg:bg-sidebar-texture bg-sidebar-texture-mobile bg-cover h-[240px] lg:h-full lg:w-[404px] flex justify-center lg:justify-start lg:flex-col lg:gap-8 gap-4 p-8">
      {siderbarConstants.map((item) => (
        <div key={item.id} className="flex lg:gap-4 h-[32px] lg:items-center">
          <span
            className={`h-full border-2 rounded-full w-[32px] lg:w-[32px] text-neutral-white flex justify-center items-center font-bold ${
              activeStep === item.id
                ? "bg-primary-light-blue border-none text-black"
                : ""
            }`}
          >
            {item.id}
          </span>
          <div className="hidden lg:block">
            <h3 className="text-neutral-light-gray uppercase text-[12px]">
              {item.title}
            </h3>
            <p className="text-white uppercase text-[12px] font-bold tracking-wider">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
