import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  const disablWheel = (e) => {
    e.target.blur();
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 5, width: "70ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type="number" onWheel={(e) => disablWheel(e)} />

      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        type="number"
        onWheel={(e) => disablWheel(e)}
      />

      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        type="number"
        onWheel={(e) => e.target.blur()}
      />
    </Box>
  );
}
