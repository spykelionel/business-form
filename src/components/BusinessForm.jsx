import React from "react";
import Legend from "./Legend";
import Layout from "./Layout";

import { CloseSharp, QuestionMarkOutlined, Check } from "@mui/icons-material";
import {
  Box,
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

import useAppContext from "../hooks/useAppContext";

const BusinessForm = () => {
  const {
    step,
    setStep,
    completedSteps,
    setCompletedSteps,
    percentageCompleted,
    setPercentageCompleted,
    byValue,
    formData,
    updateFormData,
  } = useAppContext();

  const handleInputChange = (e) => {
    updateFormData("step2", { [e.target.name]: e.target.value });
  };

  const tooltipTitle = `
    Local: Brands with distribution in 3 divisions or less 
    OR multiple divisions or a total of 50 stores or less.\n
  
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
                defaultValue=""
                value={formData.brandType}
                onChange={handleInputChange}
                name="brandType"
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
                    id="outlined-adornment-input"
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
                    id="outlined-adornment-input-2"
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
                    id="outlined-adornment-input-3"
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

export default BusinessForm;
