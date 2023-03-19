import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconMenu from "../../components/iconMenu/IconMenu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  boxShadow: "none",
  border: "1px solid #919EAB",
  textAlign: "center",
  borderRadius: "15px",
  minHeight: "800px",
}));

export default function AddonsPage() {
  let layouts = [];

  for (let i = 0; i < 12; i++) {
    const element = (
      <Paper
        sx={{
          height: 250,
          width: 400,
          borderRadius: 5,
        
          marginRight: "10px",
          marginLeft: "10px",
          marginBottom: "20px",
          flex: "0 0 20%",
          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
          padding: "2px",
        }}
      >
      </Paper>
    );

    layouts.push(element);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Box
              sx={{
                borderBottom: "1px solid gray",
                height: 110,
                width: "100%",
                display: "flex",
              }}
            >
              <h2 style={{ paddingLeft: "30px" }}>Custom Layouts</h2>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop:5
                
              }}
            >
              {layouts.map((element) => {
                return element;
              })}
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
