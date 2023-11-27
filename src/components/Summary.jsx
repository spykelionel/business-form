import React from "react";

import useAppContext from "../hooks/useAppContext";
import { Box, Grid } from "@mui/material";
import Legend from "./Legend";
import Layout from "./Layout";

const Summary = () => {
  const { step, formData } = useAppContext();
  console.clear();
  console.log(formData);
  return (
    <Layout>
      <Box sx={{ p: 3 }} className="form">
        <Legend step={step} title={"Information"} description="Your Data" />
        <Grid container>
          <pre className="text-info">{JSON.stringify(formData, null, 2)}</pre>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Summary;
