import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Container} from "@mui/system";
import { Typography } from '@mui/material';

const roles = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Viewer",
    label: "Viewer",
  },
];

export default function UserProfileForm() {
  const [role, setRole] = React.useState("Admin");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        border: "solid #919EAB",
        borderWidth: 1,
        borderRadius: "15px",
        height: 500,
        width: 650,
        padding: "50px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ backgroundColor: "#FAFAFa" }}
        required
        id="outlined-required"
        label="Required"
        defaultValue="Name"
      />
      <TextField
        sx={{ backgroundColor: "#FAFAFa" }}
        id="outlined"
        label="Phone Number"
        type="integer"
      />
      <TextField
        sx={{ backgroundColor: "#FAFAFa" }}
        id="outlined-select-role"
        select
        label="Role"
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
        label="Work Number"
        type="integer"
      />
      <TextField
        sx={{ backgroundColor: "#FAFAFa" }}
        required
        id="outlined-required"
        label="email"
        defaultValue="Email"
        style = {{width: 510}}
      />
      <TextField
        sx={{ backgroundColor: "#FAFAFa"}}
        id="outlined"
        label="Notes"
        type="string"
        style={{width: 510}}
        multiline
        rows={5}
        
      />
    </Box>
  );
}
