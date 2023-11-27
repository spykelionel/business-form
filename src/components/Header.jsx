import React from "react";
import { Grid } from "@mui/material";
import cat from "../assets/cat.jpeg";

/**
 * Header component for displaying the header of the application.
 * @returns {React.ReactNode} - Rendered Header component.
 */
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

Header.propTypes = {};

export default Header;
