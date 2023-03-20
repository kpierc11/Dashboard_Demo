import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  boxShadow: "none",
  border: "1px solid #919EAB",
  textAlign: "center",
  borderRadius: "15px",
  minHeight: "1000px",
}));

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
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
              <div key="a" style={{background:"gray"}}>a</div>
              <div key="b" style={{background:"gray"}}>b</div>
              <div key="c" style={{background:"gray"}}>c</div>
            </GridLayout>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
