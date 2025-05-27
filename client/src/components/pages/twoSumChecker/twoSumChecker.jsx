import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

// twoSum function (two-pointer approach for sorted array)
const twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]; // Convert to 1-indexed
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; // No match found
};

const TwoSumChecker = () => {
  const [numbersInput, setNumbersInput] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    try {
      const parsedNumbers = numbersInput.split(",").map((num) => Number(num.trim()));
      const parsedTarget = Number(target);

      const res = twoSum(parsedNumbers, parsedTarget);
      setResult(res.length > 0 ? res : "No solution found");
    } catch (error) {
      setResult("Invalid input");
    }
  };

  return (
    <div className='calculate-container'>
      <div className='calculate-form'>
        <Typography sx={{ fontSize: "24px", color: "black", fontWeight: "bold", mb: 2 }}>
          Two Sum Checker (Sorted Array)
        </Typography>
        <Typography sx={{ fontSize: "18px", color: "black" }} align='left'>
          Numbers (comma separated)
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          value={numbersInput}
          onChange={(e) => setNumbersInput(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Typography sx={{ fontSize: "18px", color: "black", mt: 2 }} align='left'>
          Target Sum
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          type='number'
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant='contained' onClick={handleCheck} fullWidth>
          Check Two Sum
        </Button>

        {result !== null && (
          <Typography mt={3} fontWeight='bold'>
            Result: {Array.isArray(result) ? `[${result.join(", ")}]` : result}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default TwoSumChecker;
