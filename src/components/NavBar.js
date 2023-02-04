import React from "react";
import { Button, Typography, Menu, MenuItem, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { useState } from "react";

import KeyBoardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavBar = () => {
  const catList = [
    "all",
    "strategy",
    "hidden-roles",
    "dexterity",
    "push-your-luck",
    "roll-and-write",
    "deck-building",
    "engine-building",
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Reviews
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-around"
        spacing={2}
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/">
          <Button> Home </Button>
        </Link>

        <Button
          id="cat-button"
          onClick={handleClick}
          aria-controls={open ? "categories-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          endIcon={<KeyBoardArrowDownIcon />}
        >
          categories
        </Button>
        <Menu
          id="categories-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
            {catList.map(item => {
                return (<MenuItem onClick={handleClose}>{item}</MenuItem>)
            })}
          
        </Menu>
        <Button>Users</Button>
      </Stack>
    </Toolbar>
  );
};

export default NavBar; //
