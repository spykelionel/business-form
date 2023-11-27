import React from "react";
import useAppContext from "../hooks/useAppContext";
import { Container, Box, Grid } from "@mui/material";

const MiniHeader = () => {
  const { completedSteps, percentageCompleted } = useAppContext();
  return (
    <Container disableGutters className="relative">
      <Grid
        p={0}
        display={"flex"}
        justifyContent="space-between"
        width={"100%"}
        className="mini-header"
      >
        <Grid
          className={
            completedSteps?.one ? "step completed" : `` + " incomplete step"
          }
          display={"flex"}
          justifyContent="center"
          p="10px 0"
        >
          <Grid item xs={12} md={6} className="border-rounded done">
            1
          </Grid>
          <Box alignSelf="center" pl={2}>
            Your Profile
          </Box>
        </Grid>
        <Grid
          className={
            completedSteps?.two ? "step completed" : `` + " incomplete step"
          }
          display={"flex"}
          justifyContent="center"
          p="10px 0"
        >
          <Grid item xs={12} md={6} className={`border-rounded done pending`}>
            2
          </Grid>
          <Box alignSelf="center" pl={2}>
            Business Information
          </Box>
        </Grid>
        <Grid
          className={
            completedSteps?.three ? "step completed" : `` + " incomplete step"
          }
          display={"flex"}
          justifyContent="center"
          p="10px 0"
        >
          <Grid item xs={12} md={6} className="border-rounded done pending">
            3
          </Grid>
          <Box alignSelf="center" pl={2}>
            Additional Users
          </Box>
        </Grid>
      </Grid>
      {completedSteps?.three ? (
        <Box
          className="absolute onboarding-completed"
          width={`${percentageCompleted}%`}
        />
      ) : (
        <Box className="absolute" width={`${percentageCompleted}%`} />
      )}
      <Box
        className={
          `absolute ` + completedSteps?.three && " onboarding-completed"
        }
        width={`${percentageCompleted}%`}
      />
    </Container>
  );
};

export default MiniHeader;
