import { useState } from "react";
import { MyContext } from "./components/MyContext";
import Sidebar from "./components/Sidebar";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Confirmation from "./components/Confirmation";
import Pagination from "./components/Pagination";

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [plan, setPlan] = useState<string>("monthly");
  const [planType, setPlanType] = useState<number>(1);
  const [addons, setAddons] = useState<number[]>([]);

  return (
    <main className="h-screen flex justify-center lg:py-4 lg:items-center bg-slate-100 font-ubuntu">
      <MyContext.Provider
        value={{
          step,
          setStep,
          plan,
          setPlan,
          planType,
          setPlanType,
          addons,
          setAddons,
        }}
      >
        <div className="lg:h-[600px] lg:p-4 w-full flex flex-col lg:flex-row gap-4 lg:w-[60%] bg-neutral-light-gray md:bg-neutral-white rounded-2xl">
          <Sidebar step={step} />
          <div className="relative h-full w-full px-4 lg:px-16 lg:py-8">
            <div className="absolute -top-20 sm:relative sm:top-0 sm:h-full w-calc-width transition-all ease-in-out p-6 sm:p-0 rounded-xl bg-neutral-white">
              {step === 1 && <First />}
              {step === 2 && <Second />}
              {step === 3 && <Third />}
              {step === 4 && <Fourth />}
              {step === 5 && <Confirmation />}
            </div>
            {step !== 5 && <Pagination />}
          </div>
        </div>
      </MyContext.Provider>
    </main>
  );
};

export default App;
