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

  return (
    <Container maxWidth="sm">
      <CssBaseline />

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>

        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Repeat Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                style={{ textTransform: "none" }}
              >
                Sign up &gt;
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

const App = () => (
  <>
    <section>
      <Signup />
      <div className="curve" />
    </section>
  </>
);

export default App;
