import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useTheme from "@mui/material/styles/useTheme";
import { Station } from "../../interfaces/Stations";
import "../stationCard/stationCard.css";

export default function StationCard(props: Station) {
  const theme = useTheme();
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
      <Paper elevation={0} className="station-card-container">
        <div className="station-card-col">
          <h2 style={{ fontSize: theme.typography.h4.fontSize }}>
            {props.deviceName}
          </h2>
          <div>
            <img src="/HBS-logo 1.png" />
          </div>
        </div>
        <div className="station-card-col">
          <h2>Location</h2>
          <div>{props.stationLocation}</div>
        </div>
        <div className="station-card-col">
          <h2>Last Reported</h2>
          <div>{props.lastReported}</div>
        </div>
        <div className="station-card-col">
          <h2>Station Type</h2>
          <div>{props.stationType}</div>
        </div>
      </Paper>
    </Box>
  );
}
