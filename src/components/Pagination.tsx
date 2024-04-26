import { useContext } from "react";
import { siderbarConstants } from "../constants/sidebar-constants";
import { MyContext } from "./MyContext";

const Pagination = () => {
  const length = siderbarConstants.length;

  const { step, setStep } = useContext(MyContext);

  const handleStepChange = (step: number) => {
    setStep(step);
  };

  return (
    <div className="absolute bottom-6 sm:bottom-4 left-0 px-4 sm:px-16 w-full flex justify-between">
      {step === 1 ? (
        <span></span>
      ) : (
        <button
          className={`${step === 1 ? "hidden" : "block"} font-bold`}
          onClick={() => handleStepChange(step - 1)}
        >
          Go Back
        </button>
      )}
      {step !== length ? (
        <button
          className="px-6 py-3 rounded-md capitalize bg-primary-marine-blue text-neutral-white text-sm"
          onClick={() => handleStepChange(step + 1)}
        >
          Next Step
        </button>
      ) : (
        <button
          className="px-6 py-3 rounded-md capitalize bg-primary-purplish-blue text-neutral-white text-sm"
          onClick={() => handleStepChange(step + 1)}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default Pagination;
