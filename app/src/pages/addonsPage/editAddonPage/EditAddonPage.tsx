import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { faker } from "@faker-js/faker";
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
  boxShadow: "none",
  border: "1px solid #919EAB",
  textAlign: "center",
  borderRadius: "15px",
  minHeight: "1000px",
}));

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: false },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 4, maxW: 8 },
  { i: "c", x: 4, y: 0, w: 1, h: 2 },
];

export default function EditAddonPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
            <Box
              sx={{
                borderBottom: "1px solid gray",
                height: 110,
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2 style={{ paddingLeft: "30px" }}>Addons</h2>
            </Box>
            <Box>
              <h3>Charts</h3>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Box
              sx={{
                borderBottom: "1px solid gray",
                height: 110,
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2 style={{ paddingLeft: "30px" }}>Custom Layouts</h2>
            </Box>
            <GridLayout
              className="layout"
              layout={layout}
              cols={12}
              rowHeight={100}
              width={1200}
            >
              <Paper key="a" style={{ border:"1px solid #919EAB", borderRadius:10, boxShadow:"none"  }}>
                <Line options={options} data={data} />
              </Paper>
              <Paper key="b" style={{ border:"1px solid #919EAB", borderRadius:10, boxShadow:"none"  }}>
                <Line options={options} data={data} />
              </Paper>
              <Paper key="c" style={{ border:"1px solid #919EAB", borderRadius:10, boxShadow:"none" }}>
                <Line options={options} data={data} />
              </Paper>
            </GridLayout>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
