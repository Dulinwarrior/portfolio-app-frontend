import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const CustomAppBar = ({ toggleDrawer }) => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#007acc" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          🏠 Personal Profile
        </Typography>
        <Button color="inherit" onClick={toggleDrawer}>
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
