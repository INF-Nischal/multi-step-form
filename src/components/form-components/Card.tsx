import { useContext } from "react";
import { MyContext } from "../MyContext";

interface cardProps {
  id: number;
  logo: string;
  plan: string;
  price: number;
  per: string;
  free?: string;
}

const Card = ({ id, logo, plan, price, per, free }: cardProps) => {
  const { planType, setPlanType } = useContext(MyContext);

  const handlePlanChange = () => {
    setPlanType(id);
  };

  return (
    <div
      className={`w-full border-2 p-2 flex items-center lg:items-start flex-row lg:flex-col gap-8 lg:w-[30%] rounded-lg hover:border-blue-300 hover:cursor-pointer ${
        id === planType ? "border-blue-300" : ""
      }`}
      onClick={handlePlanChange}
    >
      <img src={logo} alt="icon" className="w-[32px] h[32px]" />
      <div className="flex flex-col">
        <h1 className="font-bold text-primary-marine-blue">{plan}</h1>
        <p className="text-neutral-cool-gray">
          ${price}/{per}
        </p>
        {free ? <p className="text-primary-marine-blue">{free}</p> : ""}
      </div>
    </div>
  );
};

export default Card;
