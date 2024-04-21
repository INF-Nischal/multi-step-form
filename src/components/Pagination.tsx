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
    <div className="absolute bottom-4 left-0 px-16 w-full flex justify-between">
      {step === 1 ? (
        <span></span>
      ) : (
        <button
          className={`${step === 1 ? "hidden" : "block"}`}
          onClick={() => handleStepChange(step - 1)}
        >
          Go Back
        </button>
      )}
      {step !== length ? (
        <button
          className="px-6 py-1.5 rounded-md capitalize bg-blue-200"
          onClick={() => handleStepChange(step + 1)}
        >
          Next
        </button>
      ) : (
        <button className="px-6 py-1.5 rounded-md capitalize bg-blue-200">
          Confirm
        </button>
      )}
    </div>
  );
};

export default Pagination;
