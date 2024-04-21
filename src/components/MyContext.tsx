import { createContext, Dispatch, SetStateAction } from "react";

interface MyContextProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  plan: string;
  setPlan: Dispatch<SetStateAction<string>>;
  planType: number;
  setPlanType: Dispatch<SetStateAction<number>>;
  addons: number[];
  setAddons: Dispatch<SetStateAction<number[]>>;
}

export const MyContext = createContext<MyContextProps>({
  step: 0,
  setStep: () => {},
  plan: "",
  setPlan: () => {},
  planType: 0,
  setPlanType: () => {},
  addons: [],
  setAddons: () => {},
});
