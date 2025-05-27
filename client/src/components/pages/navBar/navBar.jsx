import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Calculator from "../calculator/calculator";
import TwoSumChecker from "../twoSumChecker/twoSumChecker";

const Navbar = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showChecker, setShowChecker] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleCalculatorClick = () => {
    setShowCalculator((prev) => !prev);
    setShowChecker(false);
    setDrawerOpen(false);
  };

  const handleTwoSumChecker = () => {
    setShowChecker((prev) => !prev);
    setShowCalculator(false);
    setDrawerOpen(false);
  };

  const menuItems = [
    { label: "Showcase", href: "/" },
    { label: "Docs", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Analyse", href: "/" },
    { label: "TwoSumChecker", href: "#", onClick: handleTwoSumChecker },
    { label: "Calculator", href: "#", onClick: handleCalculatorClick },
  ];

  return (
    <>
      <AppBar position='static' elevation={0} sx={{ backgroundColor: "#fff", color: "#000", px: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href='/' style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "14px" }}>
            ASCENDION
          </a>

          {/* Menu Items or Drawer Icon */}
          {isMobile ? (
            <IconButton onClick={toggleDrawer(!drawerOpen)} size='small'>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  style={{ textDecoration: "none", fontSize: "14px", color: "#555" }}
                >
                  {item.label}
                </a>
              ))}
            </Box>
          )}

          {/* Search */}
          {!isMobile && (
            <InputBase
              placeholder='Search document...'
              sx={{
                backgroundColor: "#f5f5f5",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: 14,
                width: 150,
              }}
            />
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  } else {
                    window.location.href = item.href;
                  }
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {showCalculator && <Calculator />}
      {showChecker && <TwoSumChecker />}
    </>
  );
};

export default Navbar;
