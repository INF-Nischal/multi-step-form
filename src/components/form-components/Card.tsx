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
      className={`border-2 p-2 flex flex-col gap-8 w-[30%] rounded-lg hover:border-blue-300 hover:cursor-pointer ${
        id === planType ? "border-blue-300" : ""
      }`}
      onClick={handlePlanChange}
    >
      <img src={logo} alt="icon" className="w-[32px] h[32px]" />
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">{plan}</h1>
        <h2>
          ${price}/{per}
        </h2>
        <p>{free && free}</p>
      </div>
    </div>
  );
};

export default Card;
