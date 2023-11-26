import React, { useState } from "react";
import {
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
  Button,
  TextField,
  AppBar,
  Toolbar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

function Signup() {
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
    <Container maxWidth="md" className="container">
      <Container className="">
        <CssBaseline />

        <Box sx={{ p: 3 }} className="signup">
          <Typography variant="h4" gutterBottom>
            <div className="text-center">
              <p>Step 1</p>
              <p>Your profile</p>
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
                  <label htmlFor="Email">Email*</label>
                </Box>
                <TextField
                  fullWidth
                  placeholder="Input your email"
                  name="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Box my={1}>
                  <label htmlFor="PhoneNumber">Phone Number*</label>
                </Box>
                <TextField
                  fullWidth
                  placeholder="Input your phone number"
                  name="PhoneNumber"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box my={1}>
                  <label htmlFor="Password">Password*</label>
                </Box>
                <TextField
                  fullWidth
                  placeholder="Input your password"
                  name="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Box my={1}>
                  <label htmlFor="RepeatPassword">Repeat Password*</label>
                </Box>
                <TextField
                  fullWidth
                  placeholder="Confirm your password"
                  name="RepeatPassword"
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
                type="submit"
                variant="outlined"
                style={{ textTransform: "none" }}
              >
                &lt; Back to Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                style={{ textTransform: "none", backgroundColor: "#261eb6" }}
              >
                Sign up &gt;
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
      padding={5}
      container
      justifyContent="space-between"
      style={{ color: "#ffff", fontWeight: "bolder" }}
    >
      <div> </div>
      <h2>Create new Account</h2>
      <div>Contact us</div>
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
