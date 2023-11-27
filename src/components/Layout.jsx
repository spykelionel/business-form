import React from "react";
import PropTypes from "prop-types";
import useAppContext from "../hooks/useAppContext";
import { Container, CssBaseline } from "@mui/material";
import MiniHeader from "./MiniHeader";
import MiniFooter from "./MiniFooter";

/**
 * Layout component for consistent structure.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @returns {React.ReactNode} - Rendered layout component.
 */
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
