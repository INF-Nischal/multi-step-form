import { useState, useEffect } from "react";
import { siderbarConstants } from "../constants/sidebar-constants";
import Button from "./pagination-components/Button";

interface PaginationProps {
  handleNextStep: () => void;
  handleBackStep: () => void;
  step: number;
}

const Pagination = ({
  handleNextStep,
  handleBackStep,
  step,
}: PaginationProps) => {
  const length = siderbarConstants.length;
  const [page, setPage] = useState<number>(step);

  useEffect(() => {
    setPage(step);
  }, [step]);

  return (
    <div className="absolute bottom-4 left-0 px-16 w-full flex justify-between">
      <button
        className={`${page === 1 ? "opacity-0" : "opacity-100"}`}
        onClick={handleBackStep}
      >
        Go Back
      </button>
      {page !== length ? (
        <Button name={"next step"} handleNextStep={handleNextStep} />
      ) : (
        <Button name={"confirm"} />
      )}
    </div>
  );
};

export default Pagination;
