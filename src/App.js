import React, { useState } from "react";
import {
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cat from "./cat.jpeg";
import { red } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "skyblue",
          backgroundImage:
            "linear-gradient(135deg, skyblue 60%, transparent 0%)",
          height: "100vh",
          width: "100vw",
        },
      },
    },
  },
});

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

const MiniHeader = ({ percentageCompleted, completedSteps }) => {
  console.log(JSON.stringify(completedSteps));
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

const Layout = ({
  percentageCompleted,
  completedSteps,
  step,
  setStep,
  setCompletedSteps,
  setPercentageCompleted,
  byValue,
  children,
}) => {
  return (
    <Container maxWidth="md" className="container">
      <Container className="">
        <CssBaseline />

        <MiniHeader
          percentageCompleted={percentageCompleted}
          completedSteps={completedSteps}
        />
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

/**
 *
 * @param {0} step The current step
 * @param {1} setStep Function to set the step
 * @param {2} setCompletedSteps Function to set the number of completed steps
 * @param {3} setPercentageCompleted Function to set the overall number of steps completed
 * @param {4} byValue Value in which the percentage completed in based upon (100/totalSteps)
 * @returns React.JSX.Element
 */
const MiniFooter = ({
  step,
  setStep,
  setCompletedSteps,
  setPercentageCompleted,
  byValue,
}) => {
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

function Signup({
  step,
  setStep,
  completedSteps,
  setCompletedSteps,
  percentageCompleted,
  setPercentageCompleted,
  byValue,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Layout
      step={step}
      setStep={setStep}
      completedSteps={completedSteps}
      setCompletedSteps={setCompletedSteps}
      percentageCompleted={percentageCompleted}
      setPercentageCompleted={setPercentageCompleted}
      byValue={byValue}
    >
      <Box sx={{ p: 3 }} className="form">
        <Legend
          step={step}
          title={"Your profile"}
          description="  Enter the login information for your account. You will be able to
          create additional users after registering."
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="firstName">First Name*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="lastName">Last Name*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="email">Email*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="phone">Phone Number*</label>
              </Box>
              <TextField
                type="tel"
                fullWidth
                placeholder="Input your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="password">Password*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="confirmPassword">Repeat Password*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>
  );
}

const BusinessForm = ({
  step,
  setStep,
  completedSteps,
  setCompletedSteps,
  percentageCompleted,
  setPercentageCompleted,
  byValue,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Layout
      step={step}
      setStep={setStep}
      completedSteps={completedSteps}
      setCompletedSteps={setCompletedSteps}
      percentageCompleted={percentageCompleted}
      setPercentageCompleted={setPercentageCompleted}
      byValue={byValue}
    >
      <Box sx={{ p: 3 }} className="form">
        <Legend
          step={step}
          title={"Business Information"}
          description="Please enter information about your company"
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="firstName">First Name*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="lastName">Last Name*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="email">Email*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="phone">Phone Number*</label>
              </Box>
              <TextField
                type="tel"
                fullWidth
                placeholder="Input your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="password">Password*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="confirmPassword">Repeat Password*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>
  );
};

const Header = () => {
  return (
    <Grid
      padding={3}
      container
      justifyContent="space-between"
      style={{ color: "#ffff", fontWeight: "bolder" }}
    >
      <div className="mue-cat">
        <img src={cat} />
      </div>
      <h2 className="self-center">Create new Account</h2>
      <div className="self-center">Contact us</div>
    </Grid>
  );
};

const App = () => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({
    one: true,
    two: false,
    three: false,
  });
  const byValue = 100 / 3;
  const [percentageCompleted, setPercentageCompleted] = useState(byValue);

  const props = {
    step,
    setStep,
    completedSteps,
    setCompletedSteps,
    percentageCompleted,
    setPercentageCompleted,
    byValue,
  };

  switch (step) {
    case 1:
      return (
        <div className="wave-container">
          <Header />
          <Signup {...props} />
        </div>
      );
    case 2:
      return (
        <div className="wave-container">
          <Header />
          <BusinessForm {...props} />
        </div>
      );
    case 3:
      return (
        <div className="wave-container">
          <Header />
          <BusinessForm {...props} />
        </div>
      );
    default:
      return (
        <div className="wave-container">
          <Header />
          <Signup {...props} />
        </div>
      );
  }
};

export default App;
