import React from "react";
import useAppContext from "../hooks/useAppContext";
import { TextField, Grid, Box } from "@mui/material";
import Layout from "./Layout";
import Legend from "./Legend";

const Signup = () => {
  const { step, formData, updateFormData } = useAppContext();

  const handleInputChange = (e) => {
    updateFormData("step1", { [e.target.name]: e.target.value });
  };

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
                type="password"
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
                type="password"
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

export default Signup;
