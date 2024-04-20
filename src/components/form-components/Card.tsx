interface cardProps {
  logo: string;
  plan: string;
  price: number;
  per: string;
  free?: string;
}

const Card = ({ logo, plan, price, per, free }: cardProps) => {
  return (
    <div className="border-2 p-3 flex flex-col gap-8 w-[30%]">
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
