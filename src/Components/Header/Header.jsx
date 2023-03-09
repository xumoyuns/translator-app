import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { SiGoogletranslate } from "react-icons/si";
// import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"

const Header = () => {
  return (
    <div className="">
      <Box  sx={{ flexGrow: 1 }}>
        <AppBar className="app-bar"  position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SiGoogletranslate />
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Translatory
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
