import React from "react";
import { Typography } from "@mui/material";

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

export default Legend;
