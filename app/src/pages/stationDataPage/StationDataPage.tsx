import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "../stationDataPage/stationDataPage.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Switch from "@mui/material/Switch/Switch";
import "../trendsPage/trendsPage.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Station One Data",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "bg algae (ppm)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#1F78B4",
      backgroundColor: "#1F78B4",
    },
  ],
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  border: "1px solid #919EAB",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
}));

export default function StationDataPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item
            sx={{
              minHeight: "198px",
              justifyContent: "center",
              padding: "0 100px 0 100px",
              alignItems: "center",
            }}
          >
            <Box className="station-data-unit-info">
              <h2>Unit Name</h2>
              <p>H2infO</p>
            </Box>
            <Box className="station-data-unit-info">
              <h2>Battery Life</h2>
              <p>83.4%</p>
            </Box>
            <Box className="station-data-unit-info">
              <h2>LastReported</h2>
              <p>June 3rd 2022</p>
            </Box>
            <Box className="station-data-unit-info">
              <h2>Location</h2>
              <p>Piney Flats TN</p>
            </Box>
            <Box className="station-data-unit-info">
              <h2>Station Health</h2>
              <p>Excellent 92.5%</p>
            </Box>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item sx={{ padding: "30px 30px 30px 30px" }}>
            <h1>Primary Alarm</h1>
            <Box
              className={"station-data-primary-alarm-topbar"}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <p>Name</p>
              <p>Type</p>
              <p>Threshold</p>
              <p>Clear Warning</p>
              <p>Reading</p>
            </Box>
            <Box
              className={"station-data-primary-alarm-topbar-second"}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <p>Low Battery</p>
              <p>Low Value T</p>
              <p> {">"} 10 V</p>
              <p>{">"} 11.5 V</p>
              <p>11.59 V</p>
            </Box>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <h1>DPI Mult Probe</h1>
          </Item>
        </Grid>
        <Grid xs={4} sx={{ height: "100%" }}>
          <Item sx={{ padding:"30px"}}>
            <h1>NOAA Precipitation</h1>
            <Line options={options} data={data} />
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
