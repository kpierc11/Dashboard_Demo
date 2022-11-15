import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { User } from "../../interfaces/User";


interface Station {
  stationID: number;
  stationName:string;
}

export default function StationCard(props:Station) {

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 263,
          border: 1,
          borderColor: "#919EAB",
        },
      }}
    >
      <Paper elevation={0}>
        {props.stationName}
      </Paper>
    </Box>
  );
}
