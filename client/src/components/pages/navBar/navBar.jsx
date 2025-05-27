import React, { useState } from "react";
import { AppBar, Toolbar, Box, InputBase } from "@mui/material";
import Calculator from "../calculator/calculator";
import TwoSumChecker from "../twoSumChecker/twoSumChecker";

const Navbar = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showChecker, setShowChecker] = useState(false);

  const handleCalculatorClick = () => {
    setShowCalculator((prev) => !prev);
    setShowChecker(false);
  };

  const handleTwoSumChecker = () => {
    setShowChecker((prev) => !prev);
    setShowCalculator(false);
  };

  const menuItems = [
    { label: "Showcase", href: "/" },
    { label: "Docs", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Analytics", href: "/" },
    { label: "Templates", href: "/" },
    { label: "TwoSumChecker", href: "#", onClick: handleTwoSumChecker },
    { label: "Calculator", href: "#", onClick: handleCalculatorClick },
  ];

  return (
    <>
      <AppBar position='static' elevation={0} sx={{ backgroundColor: "#fff", color: "#000", px: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left: Logo */}
          <a href='/' style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "14px" }}>
            ASCENDION
          </a>

          {/* Center: Menu Items */}
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

          {/* Right: Search Field */}
          <InputBase
            placeholder='Search documentation...'
            sx={{
              backgroundColor: "#f5f5f5",
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: 14,
              width: 200,
            }}
          />
        </Toolbar>
      </AppBar>
      {showCalculator && <Calculator />}
      {showChecker && <TwoSumChecker />}
    </>
  );
};

export default Navbar;
