import React from "react";
import useAppContext from "../hooks/useAppContext";

import { Container, Grid, Button } from "@mui/material";

/**
 *
 * @param {0} step The current step
 * @param {1} setStep Function to set the step
 * @param {2} setCompletedSteps Function to set the number of completed steps
 * @param {3} setPercentageCompleted Function to set the overall number of steps completed
 * @param {4} byValue Value in which the percentage completed in based upon (100/totalSteps)
 * @returns React.JSX.Element
 */
const MiniFooter = () => {
  const { step, setStep, setCompletedSteps, setPercentageCompleted, byValue } =
    useAppContext();
  const handleNextButtonClicked = () => {
    setStep((prev) => prev + 1);
    console.log(step);
    setCompletedSteps((prev) => {
      switch (step) {
        case 1:
          setCompletedSteps({ ...prev, two: true });
          break;
        case 2:
          setCompletedSteps({ ...prev, three: true });
          break;
        default:
          setStep(1);
          setCompletedSteps({
            one: true,
            two: false,
            three: false,
          });
          break;
      }
    });
    setPercentageCompleted((prev) => (prev < 100 ? prev + byValue : byValue));
  };

  const handlePrevButtonClicked = () => {
    setStep((prev) => (prev === 1 ? 1 : prev - 1));
    console.log(step);
    setCompletedSteps((prev) => {
      switch (step) {
        case 3:
          setCompletedSteps({ ...prev, three: false });
          break;
        case 2:
          setCompletedSteps({ ...prev, two: false });
          break;
        default:
          setStep(1);
          setCompletedSteps({
            one: true,
            two: false,
            three: false,
          });
          break;
      }
    });
    setPercentageCompleted((prev) => (step === 1 ? byValue : prev - byValue));
  };

  return (
    <Container disableGutters>
      <Grid
        p={0}
        display={"flex"}
        justifyContent="space-between"
        width={"100%"}
        displayPrint="flex"
        style={{
          margin: "10px 0",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            fontWeight: "bolder",
          }}
        >
          <Button
            type="button"
            variant="outlined"
            style={{ textTransform: "none", border: "none" }}
          >
            &lt; Back to Login
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display={"flex"}
          justifyContent="space-between"
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{
              fontWeight: "bolder",
              marginRight: "10px",
            }}
          >
            <Button
              type="button"
              variant="outlined"
              disabled={step === 1}
              onClick={handlePrevButtonClicked}
              style={{ textTransform: "none" }}
            >
              &lt; Previous Step
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            style={{
              fontWeight: "bolder",
            }}
          >
            <Button
              type="button"
              variant="contained"
              disabled={step === 3}
              style={{ textTransform: "none", backgroundColor: "#261eb6" }}
              onClick={handleNextButtonClicked}
            >
              Next Step &gt;
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MiniFooter;
