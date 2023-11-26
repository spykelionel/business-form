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

const MiniHeader = ({
  isActive,
  isComplete,
  currentStep,
  percentageCompleted,
  completedSteps,
}) => {
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

function Signup({ isActive, isComplete }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState({
    one: true,
    two: false,
    three: false,
  });
  const byValue = 100 / 3;
  const [percentageCompleted, setPercentageCompleted] = useState(byValue);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container maxWidth="md" className="container">
      <Container className="">
        <CssBaseline />

        <MiniHeader
          isActive={isActive}
          percentageCompleted={percentageCompleted}
          completedSteps={completedSteps}
        />
        <Box sx={{ p: 3 }} className="signup">
          <Typography variant="h4" gutterBottom>
            <div className="text-center">
              <p className="text-disabled">Step 1</p>
              <p className="text-bold">Your profile</p>
              <p className="text-small">
                Enter the login information for your account. You will be able
                to create additional users after registering.
              </p>
            </div>
          </Typography>

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
        <Container disableGutters>
          <Grid
            p={0}
            display={"flex"}
            justifyContent="space-between"
            width={"100%"}
            displayPrint="flex"
          >
            <Grid
              item
              xs={12}
              md={6}
              style={{
                margin: "10px 0",
                fontWeight: "bolder",
              }}
            >
              <Button
                type="button"
                variant="outlined"
                style={{ textTransform: "none" }}
              >
                &lt; Back to Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                type="button"
                variant="contained"
                style={{
                  textTransform: "none",
                  backgroundColor: "#261eb6",
                }}
                onClick={() => {
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
                  setPercentageCompleted((prev) =>
                    prev < 100 ? prev + byValue : byValue
                  );
                }}
              >
                Next step &gt;
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
}

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
  return (
    <div className="wave-container">
      <Header />
      <Signup />
    </div>
  );
};

export default App;
