import React from "react";
import useAppContext from "./hooks/useAppContext";
import Header from "./components/Header";
import BusinessForm from "./components/BusinessForm";
import Signup from "./components/Signup";
import Summary from "./components/Summary";

const App = () => {
  const { step } = useAppContext();

  switch (step) {
    case 1:
      return (
        <div className="wave-container">
          <Header />
          <Signup />
        </div>
      );
    case 2:
      return (
        <div className="wave-container">
          <Header />
          <BusinessForm />
        </div>
      );
    case 3:
      return (
        <div className="wave-container">
          <Header />
          <Summary />
        </div>
      );
    default:
      return (
        <div className="wave-container">
          <Header />
          <Signup />
        </div>
      );
  }
};

export default App;
