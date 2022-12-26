import Box from "@mui/material/Box";
import Station from "../../interfaces/Stations";
import "../stationCard/stationCard.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import TimerIcon from "@mui/icons-material/Timer";
import Paper from "@mui/material/Paper/Paper";

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
      sx={{
        marginBottom: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
          marginRight: "13px",
          color: "#DA5F5F",
        }}
      ></Box>
      <Paper
        sx={{
          borderRadius: "15px",
          border: "1px solid #919EAB",
          boxShadow:"none",
        }}
        className="station-card-container"
      >
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
        <div className={"station-card-icons"}>
          <a href={"/station-data-page"}>
            <BarChartIcon fontSize="large"></BarChartIcon>
          </a>
          <a>
            <MapIcon fontSize="large"></MapIcon>
          </a>
          <a>
            <TimerIcon fontSize="large"></TimerIcon>
          </a>
        </div>
      </Paper>
    </Box>
  );
}
