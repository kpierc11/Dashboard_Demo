import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { MenuItem, TextField } from "@mui/material";
import UserProfileForm, { UserPhotoForm } from "./ProfileForms/UserProfileForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function UserProfilePage() {
  

  return (
    <Box sx={{ flexGrow: 1, margin: "30px 0px 70px 0px"}}>
      <Grid container spacing={4}>
        <Grid xs={12} md={4}>
          <UserPhotoForm></UserPhotoForm>
        </Grid>
        <Grid xs={12} md={6}>
          <UserProfileForm></UserProfileForm>
        </Grid>

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button className="save-button">Save</button>
        </Box>
      </Grid>
    </Box>
  );
}
