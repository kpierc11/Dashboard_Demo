import {
  Box,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  Grid,
  SelectChangeEvent,
  Paper,
  styled,
} from "@mui/material";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
  borderRadius: "15px",
  height: "100%",
}));

export default function AlarmsPage() {
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
    "Station One",
    "Station One",
    "Station One",
    "Station One",
    "Station One",
    "Station One",
    "Station One",
    "Station One",
    "Station One",
    "Station One",
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
        <h3>Selected Station: </h3>
        <FormControl sx={{ m: 1, width: 300, background: "white" }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
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
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Item sx={{ marginRight: "27px" }}>
            <Box sx={{width:"100%",padding:"17px"}}>
              <Box sx={{ display: "flex", alignItems:"center", width: "100%" }}>
                <h2 style={{ marginRight: "auto" }}>Alarm Battery</h2>
                <MoreVertIcon style={{color:"#DA5F5F"}}></MoreVertIcon>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Trigger Threshold:</h3>
                <p>Low Value Trigger</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Clear Threshold:</h3>
                <p> 10 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Current Reading:</h3>
                <p>≥ 11.5 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Subscribers:</h3>
                <p>11.59 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Type:</h3>
                <p>User 1</p>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item sx={{ marginRight: "27px" }}>
          <Box sx={{width:"100%",padding:"17px"}}>
              <Box sx={{ display: "flex", alignItems:"center", width: "100%" }}>
                <h2 style={{ marginRight: "auto" }}>Alarm Battery</h2>
                <MoreVertIcon style={{color:"#DA5F5F"}}></MoreVertIcon>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Trigger Threshold:</h3>
                <p>Low Value Trigger</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Clear Threshold:</h3>
                <p> 10 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Current Reading:</h3>
                <p>≥ 11.5 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Subscribers:</h3>
                <p>11.59 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Type:</h3>
                <p>User 1</p>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item>
          <Box sx={{width:"100%",padding:"17px"}}>
              <Box sx={{ display: "flex", alignItems:"center", width: "100%" }}>
                <h2 style={{ marginRight: "auto" }}>Alarm Battery</h2>
                <MoreVertIcon style={{color:"#DA5F5F"}}></MoreVertIcon>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Trigger Threshold:</h3>
                <p>Low Value Trigger</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Clear Threshold:</h3>
                <p> 10 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Current Reading:</h3>
                <p>≥ 11.5 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Subscribers:</h3>
                <p>11.59 V</p>
              </Box>
              <Box sx={{display:"flex", alignItems:"center"}}>
                <h3 style={{marginRight:"auto"}}>Type:</h3>
                <p>User 1</p>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} md={12}>
          <Item sx={{ marginTop: "38px" }}>
          <Box sx={{width:"100%",padding:"17px"}}>
              <Box sx={{ display: "flex", alignItems:"center", width: "100%" }}>
                <h2 style={{ marginRight: "auto" }}>History</h2>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
