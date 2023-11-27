import React, { useState } from "react";
import {
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
  Button,
  TextField,
  Tooltip,
  IconButton,
  OutlinedInput,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import cat from "./cat.jpeg";
import {
  Cancel,
  CancelOutlined,
  Check,
  CloseSharp,
  QuestionMarkOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { useAppContext } from "./AppContext";

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

const Layout = ({ children }) => {
  const {
    step,
    setStep,
    completedSteps,
    setCompletedSteps,
    percentageCompleted,
    setPercentageCompleted,
    byValue,
  } = useAppContext();
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

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const { step } = useAppContext();

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Layout>
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
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIdNumber: "",
  });

  const tooltipTitle = `
  Local: Brands with distribution in 3 divisions or less 
  OR multiple divisions or a total of 50 stores or less.\n\n

  National: Brands with distributions with in 4 or more 
  divisions or in more than 150 stores.
  `;
  const brands = [
    {
      value: "Apple",
      label: "Apple",
    },
    {
      value: "Google",
      label: "Google",
    },
    {
      value: "BTC",
      label: "฿",
    },
  ];
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
        <Typography>
          <p className="text-info">General Information</p>
        </Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="brandName">Brand Name*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your first name"
                name="brandName"
                value={formData.brandName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="brandType">Brand Type*</label>
                <Tooltip
                  title={tooltipTitle}
                  arrow
                  style={{ position: "relative" }}
                >
                  <IconButton size="small">
                    <QuestionMarkOutlined
                      fontSize="7px"
                      style={{
                        position: "absolute",
                        top: "-5px",
                        left: "10px",
                        color: "#fff",
                        backgroundColor: "grey",
                        borderRadius: "50%",
                        padding: "2px",
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                defaultValue="Apple"
              >
                {brands.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="streetAddress">Street Address*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your Street Address"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="phone">City *</label>
              </Box>
              <TextField
                type="tel"
                fullWidth
                placeholder="Input your City"
                name="city"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="zipCode">Zip Code*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your Zip code"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box my={1}>
                <label htmlFor="taxIdNumber">Tax ID Number*</label>
              </Box>
              <TextField
                fullWidth
                placeholder="Input your Tax ID Number"
                name="taxIdNumber"
                value={formData.taxIdNumber}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid>
            <Typography>
              <p className="text-info">Documents</p>
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={12} mt={1}>
                <label htmlFor="brandName">
                  Once the following Documents are signed you will be able to
                  get started
                </label>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                width={100}
                display={"flex"}
                justifyContent="space-between"
                container
                spacing={2}
              >
                <Grid item md={10}>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    // disabled
                    value="Electronically signed the agreement(s)"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="">
                          <Check
                            style={{ color: "green", fontWeight: "bold" }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>

                <Grid
                  item
                  md={2}
                  container
                  justifyContent={"flex-end"}
                  style={{ height: "100%" }}
                >
                  <Button
                    type="button"
                    variant="contained"
                    // disabled={step === 3}
                    style={{
                      textTransform: "none",
                      backgroundColor: "#261eb6",
                      height: "100%",
                      fontWeight: "bold",
                    }}
                    // onClick={handleNextButtonClicked}
                  >
                    &gt;
                  </Button>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                width={"100%"}
                display={"flex"}
                justifyContent="space-between"
                container
                spacing={2}
              >
                <Grid item md={10}>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    // disabled
                    value="No Adult Beverage Kroger market supplier waiver and release"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="">
                          <CloseSharp
                            style={{ color: "red", fontWeight: "bold" }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>

                <Grid
                  item
                  md={2}
                  style={{ height: "100%" }}
                  justifyContent={"flex-end"}
                  container
                >
                  <Button
                    type="button"
                    variant="contained"
                    // disabled={step === 3}
                    style={{
                      textTransform: "none",
                      backgroundColor: "#261eb6",
                      height: "100%",
                      fontWeight: "bold",
                    }}
                    // onClick={handleNextButtonClicked}
                  >
                    &gt;
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography>
              <p className="text-info">COI PDF Upload</p>
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={12} mt={1}>
                <label htmlFor="brandName">
                  Once the following Documents are signed you will be able to
                  get started
                </label>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                width={100}
                display={"flex"}
                justifyContent="space-between"
                container
                spacing={2}
              >
                <Grid item md={10}>
                  <OutlinedInput
                    fullWidth
                    id="outlined-adornment-password"
                    // disabled
                    value="Electronically signed the agreement(s)"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="">
                          <Check
                            style={{ color: "green", fontWeight: "bold" }}
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>

                <Grid
                  item
                  md={2}
                  container
                  justifyContent={"flex-end"}
                  style={{ height: "100%" }}
                >
                  <Button
                    type="button"
                    variant="contained"
                    // disabled={step === 3}
                    style={{
                      textTransform: "none",
                      backgroundColor: "#261eb6",
                      height: "100%",
                      fontWeight: "bold",
                    }}
                    // onClick={handleNextButtonClicked}
                  >
                    &gt;
                  </Button>
                </Grid>
              </Grid>
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
  const {
    step,
    setStep,
    completedSteps,
    setCompletedSteps,
    percentageCompleted,
    setPercentageCompleted,
    byValue,
  } = useAppContext();

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
          <BusinessForm />
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
