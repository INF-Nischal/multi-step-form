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
      className={`border-2 p-3 flex flex-col gap-8 w-[30%] hover:border-blue-300 hover:cursor-pointer ${
        id === planType ? "border-blue-300" : ""
      }`}
      onClick={handlePlanChange}
    >
      <img src={logo} alt="icon" className="w-[32px] h[32px]" />
      <div>
        <h1 className="font-bold">{plan}</h1>
        <h2>
          ${price}/{per}
        </h2>
        {free && <p>{free}</p>}
      </div>
    </div>
  );
};

export default Card;
