import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./userSettings.css";
import Divider from '@mui/material/Divider';

const roles = [
  {
    value: "Phone Call",
    label: "Phone Call",
  },
  {
    value: "Text Message",
    label: "Text Message",
  },
  {
    value: "Disabled",
    label: "Disabled",
  },
];

export default function AuthenticationForm() {
  const [role, setRole] = React.useState("Disabled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        height: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch", },
          border: "solid #919EAB",
          borderWidth: 1,
          borderRadius: "15px",
          height: 300,
          width: 350,
          padding: "25px",
          marginRight: "50px",
        }}
      >
        <Box sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
          }}>
            <Divider textAlign="left">Password</Divider>
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined-password"
            label="Old Password"
            type="password"
          />
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined-password"
            label="New Password"
            type="password"
          />
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined-password"
            label="Confirm New Password"
            type="password"
          />
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            border: "solid #919EAB",
            borderWidth: 1,
            borderRadius: "15px",
            height: 300,
            width: 350,
            padding: "20px",
          }}
          noValidate
          autoComplete="off"
        >
             <Divider textAlign="left">Two Factor Authentication</Divider>
             <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined-select-role"
            select
            label="Enable"
            value={role}
            onChange={handleChange}
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            </TextField>
            
          <TextField
            sx={{ backgroundColor: "#FAFAFa" }}
            id="outlined"
            label="Phone Number"
            type="integer"
          />
          
          
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <button>hello</button>
      </Box>
    </Box>
  );
}
