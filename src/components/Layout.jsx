import React from "react";
import useAppContext from "../hooks/useAppContext";
import { Container, CssBaseline } from "@mui/material";
import MiniHeader from "./MiniHeader";
import MiniFooter from "./MiniFooter";

const Layout = ({ children }) => {
  const { step, setStep, setCompletedSteps, setPercentageCompleted, byValue } =
    useAppContext();
  return (
    <Container maxWidth="md" className="container">
      <Container className="">
        <CssBaseline />

        <MiniHeader />
        {children}
        <MiniFooter
          step={step}
          setStep={setStep}
          setCompletedSteps={setCompletedSteps}
          setPercentageCompleted={setPercentageCompleted}
          byValue={byValue}
        />
      </Container>
    </Container>
  );
};

export default Layout;
