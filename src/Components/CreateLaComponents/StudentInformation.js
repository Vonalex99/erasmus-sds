import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function StudentInformation() {
  return (
    <>
    <input>
    </input>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: "2%", width: "45%" }
        }}
        autoComplete="off"
      >
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "94%" }
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
                    <TextField
            required
            id="outlined-required"
            label="First Name"
            defaultValue="s"
          />
        </div>
      </Box>
    </>
  );
}
