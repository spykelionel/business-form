import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({
    one: true,
    two: false,
    three: false,
  });
  const byValue = 100 / 3;
  const [percentageCompleted, setPercentageCompleted] = useState(byValue);

  const [formData, setFormData] = useState({
    "your-profile": {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    "business-information": {
      brandName: "",
      brandType: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      taxIdNumber: "",
    },
    step3: {},
  });

  const updateFormData = (step, data) => {
    console.log(data);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [step]: {
        ...prevFormData[step],
        ...data,
      },
    }));
  };

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
        formData,
        updateFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
