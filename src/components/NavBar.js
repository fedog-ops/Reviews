import React from "react";
import { Button, Menu, MenuItem, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { useState } from "react";
import KeyBoardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DarkMode, LightMode } from "@mui/icons-material";

const NavBar = ({ callback, updateTheme, light }) => {
  const navigate =useNavigate()
  const catList = [
    { i: "", o: "All" },
    { i: "strategy", o: "Strategy" },
    { i: "hidden-roles", o: "Hidden roles" },
    { i: "dexterity", o: "Dexterity" },
    { i: "push-your-luck", o: "Push your luck" },
    { i: "roll-and-write", o: "Roll and write" },
    { i: "deck-building", o: "Deck  building" },
    { i: "engine-building", o: "Engine building" },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.target);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    const { myValue } = e.currentTarget.dataset;
    if (myValue !== undefined) {
      callback(myValue);
      navigate('/')
    }
  };

  return (
    <Toolbar >
      {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Reviews
      </Typography> */}

      <Stack
        direction="row"
        justifyContent="space-around"
        spacing={2}
        sx={{
          gap: { sm: 12, xs: 4 },
          mt: { sm: 12, xs: 3 },
          justifyContent: "center",
        }}
        px="20px"
      >
        <Button onClick={updateTheme}>{light? <DarkMode/>:<LightMode/> }</Button>
   

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
          {catList.map((item, i) => {
            return (
              <MenuItem
                data-my-value={item.i}
                onClick={handleClose}
                key={i}
              >
                {item.o}
              </MenuItem>
            );
          })}
        </Menu>
        <Link to="login">
          <Button >Users</Button>
        </Link>
      </Stack>
    </Toolbar>
  );
};

export default NavBar; //
