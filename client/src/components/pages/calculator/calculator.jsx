import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import "./calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState(null);

  const calculateSum = () => {
    const sum = Number(num1) + Number(num2);
    setTotal(sum);
  };

  return (
    <div className='calculate-container'>
      <div className='calculate-form'>
        <Typography sx={{ fontSize: "24px", color: "black", fontWeight: "bold", mb: 2 }}>Sum Calculator</Typography>

        <Box mb={2}>
          <Typography sx={{ fontSize: "18px", color: "black" }} align='left'>
            First Number
          </Typography>
          <TextField type='number' value={num1} onChange={(e) => setNum1(e.target.value)} fullWidth />
          <Typography sx={{ fontSize: "18px", color: "black", mt: 2 }} align='left'>
            Second Number
          </Typography>
          <TextField type='number' value={num2} onChange={(e) => setNum2(e.target.value)} fullWidth />
        </Box>

        <Button variant='contained' onClick={calculateSum}>
          Calculate
        </Button>

        <Typography sx={{ fontSize: "18px", color: "black", fontWeight: "bold" }} mt={3}>
          Total: <strong>{total !== null ? total : "-"}</strong>
        </Typography>
      </div>
    </div>
  );
};

export default Calculator;
