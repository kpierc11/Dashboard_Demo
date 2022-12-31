import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LayersIcon from "@mui/icons-material/Layers";
import "../trendsPage/trendsPage.css";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function TrendsPage() {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "center",}}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <LayersIcon
            fontSize="large"
            style={{ color: "#505050" }}
          ></LayersIcon>
          <p>Chart View</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CalendarMonthIcon
            fontSize="large"
            style={{ color: "#505050" }}
          ></CalendarMonthIcon>
          <p>Time Period</p>
        </Box>
      </Box>
      <Box sx={{display:"flex", justifyContent:"center"}}>
        <FormControl sx={{width: 300, marginBottom:"29px", background:"white" }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Selected Parameters</em>;
              }

              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "72px",
          paddingRight: "72px",
        }}
      >
        <Paper
          sx={{
            height: "100%",
            border: "1px solid #919EAB",
            borderRadius: "15px",
            boxShadow: "none",
            padding: 5,
            maxWidth: "1008px",
            width: "100%",
          }}
        >
          <Line options={options} data={data} />
        </Paper>

        <Paper
          sx={{
            border: "1px solid #919EAB",
            borderRadius: "15px",
            boxShadow: "none",
            paddingTop: "20px",
            paddingLeft: "24px",
            paddingRight: "25px",
            maxWidth: "418px",
            width: "100%",
            marginLeft: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              background: "#F2F2F2",
              alignItems: "center",
              borderRadius: "15px",
              paddingLeft: "22px",
              paddingRight: "22px",
            }}
          >
            <h3 style={{ marginRight: "auto" }}>Notes</h3>
            <p>12/17/2022</p>
          </Box>
          <Box
            sx={{
              border: "1px solid #919EAB",
              borderRadius: "15px",
              height: "auto",
              marginTop: "20px",
              marginBottom: "20px",
              padding: "22px",
            }}
          >
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Box>
        </Paper>

        <Paper
          sx={{ boxShadow: "none", borderRadius: "15px" }}
          className="charts-toggle-card"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              height: "100%",
              marginTop: "28px",
            }}
          >
            <Box className="charts-toggle-column">
              <p>DPI multi probe (0/9)</p>
              <Box className="charts-toggle-wrapper">
                <Box className="chart-toggle-inner-wrapper">
                  <Switch />
                  <p>bg algae (ppm)</p>
                </Box>
                <Box className="chart-toggle-inner-wrapper">
                  <Switch />
                  <p>Chloro (µg/m³)</p>
                </Box>
              </Box>
            </Box>
            <Box className="charts-toggle-column">
              <p>NOAA Precipitation (0/1)</p>
              <Box className="charts-toggle-wrapper">
                <Box className="chart-toggle-inner-wrapper">
                  <Switch />
                  <p>battery (V)</p>
                </Box>
                <Box className="charts-toggle-switch">
                  <Switch />
                  <p>RSSI</p>
                </Box>
              </Box>
            </Box>
            <Box className="charts-toggle-column">
              <p>Statistics (0/1)</p>
              <Box className="charts-toggle-wrapper">
                <Box className="chart-toggle-inner-wrapper">
                  <Switch />
                  <p>DPA (in)</p>
                </Box>
                <Box className="charts-toggle-switch">
                  <Switch />
                  <p>Unknown %</p>
                </Box>
              </Box>
            </Box>
            <Box className="charts-toggle-column">
              <p>Michael Lamptey (0/2)</p>
              <Box className="charts-toggle-wrapper">
                <Box className="chart-toggle-inner-wrapper">
                  <Switch />
                  <p>Station Health</p>
                </Box>
                <Box className="charts-toggle-switch">
                  <Switch />
                  <p>Unknown %</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
