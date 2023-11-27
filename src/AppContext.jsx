import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({
    one: true,
    two: false,
    three: false,
  });
  const byValue = 100 / 3;
  const [percentageCompleted, setPercentageCompleted] = useState(byValue);

  return (
    <AppContext.Provider
      value={{
        step,
        setStep,
        completedSteps,
        setCompletedSteps,
        percentageCompleted,
        setPercentageCompleted,
        byValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
