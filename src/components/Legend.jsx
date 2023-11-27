import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

/**
 * Legend component to display step information.
 * @param {Object} props - React component props.
 * @param {number} props.step - The step number.
 * @param {string} props.title - The title of the legend.
 * @param {string} props.description - The description of the legend.
 * @returns {React.ReactNode} - Rendered legend component.
 */
const Legend = ({ step, title, description }) => {
  return (
    <Typography variant="h4" gutterBottom>
      <div className="text-center">
        <p className="text-disabled">Step {step}</p>
        <p className="text-bold">{title}</p>
        <p className="text-small">{description}</p>
      </div>
    </Typography>
  );
};

Legend.propTypes = {
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Legend;
