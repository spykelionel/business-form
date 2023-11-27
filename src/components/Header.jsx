import React from "react";
import { Grid } from "@mui/material";
import cat from "../assets/cat.jpeg";

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

export default Header;
