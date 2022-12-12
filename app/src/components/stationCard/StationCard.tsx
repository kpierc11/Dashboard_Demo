import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Station } from "../../interfaces/Stations";
import "../stationCard/stationCard.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function StationCard(props: Station) {

  let statusElement = <div></div>;

  if (props.status) {
    statusElement = (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginRight: "5px",
        }}
      >
        <FiberManualRecordIcon sx={{ color: "#81e78b" }} />
        Active
      </div>
    );
  } else {
    statusElement = (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginRight: "5px",
        }}
      >
        <FiberManualRecordIcon sx={{ color: "#ff0000" }} />
        Inactive
      </div>
    );
  }

  return (
    <Box
      className="station-card-main-container"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          border: 1,
          borderColor: "#919EAB",
        },
      }}
    >
      <Paper elevation={0} className="station-card-container">
        <Box className="station-card-col">
          <h2 className={"station-card-heading"}>{props.deviceName}</h2>
          <div>
            <img src="/station-image.png" alt="Hydrobioscience logo" />
          </div>
        </Box>
        <div className="station-card-col">
          <h2 className={"station-card-heading"}>Location</h2>
          <div>{props.stationLocation}</div>
        </div>
        <div className="station-card-col">
          <h2 className={"station-card-heading"}>Last Reported</h2>
          <div>{props.lastReported}</div>
        </div>
        <div className="station-card-col">
          <h2 className={"station-card-heading"}>Station Type</h2>
          <div>{props.stationType}</div>
        </div>
        <div className="station-card-col">
          <h2 className={"station-card-heading"}>Status</h2>
          {statusElement}
        </div>
      </Paper>
    </Box>
  );
}
