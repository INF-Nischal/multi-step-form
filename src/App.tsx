import { useState } from "react";
import { MyContext } from "./components/MyContext";
import Sidebar from "./components/Sidebar";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Pagination from "./components/Pagination";

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [plan, setPlan] = useState<string>("monthly");
  const [planType, setPlanType] = useState<number>(1);
  const [addons, setAddons] = useState<number[]>([]);

  return (
    <main className="h-screen flex justify-center items-center bg-slate-100">
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
        <div className="h-[600px] p-4 w-[60%] flex gap-4 bg-white rounded-2xl">
          <Sidebar step={step} />
          <div className="relative h-full w-full px-16 pt-8">
            {step === 1 && <First />}
            {step === 2 && <Second />}
            {step === 3 && <Third />}
            {step === 4 && <Fourth />}
            <Pagination />
          </div>
        </div>
      </MyContext.Provider>
    </main>
  );
};

export default App;
