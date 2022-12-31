import {
  Box,
  Grid,
  MenuItem,
  Paper,
  styled,
  Switch,
  TextField,
} from "@mui/material";
import { fontSize } from "@mui/system";
import { any } from "prop-types";
import "../addAlarmPage/addAlarmPage.css";
import SearchIcon from "@mui/icons-material/Search";

export default function AddAlarmPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  const type = [
    {
      value: "N/A",
      label: "N/A",
    },
    {
      value: "low",
      label: "Low Value Trigger",
    },
    {
      value: "medium",
      label: "Medium Value Trigger",
    },
    {
      value: "high",
      label: "High Value Trigger",
    },
  ];
  const threshold = [
    {
      value: "N/A",
      label: "N/A",
    },
    {
      value: "th1",
      label: "> 10 V",
    },
    {
      value: "th2",
      label: "> 15 V",
    },
    {
      value: "th3",
      label: "> 20 V",
    },
  ];

  return (
    <div className="add-alarm-main-container">
      <div className="add-alarm-top-section">
        <h3 className="add-alarm-title">Add Alarm</h3>
      </div>

      <Box>
        <Grid container>
          <Grid xs={12} md={12} lg={6}>
            <Item className="add-alarm-column-one">
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  paddingLeft: "47px",
                  paddingTop: "34px",
                }}
              >
                <TextField
                  sx={{
                    backgroundColor: "#FAFAFA",
                    marginBottom: "26px",
                    maxWidth: 355,
                    paddingBottom: "20px",
                  }}
                  required
                  id="outlined-required"
                  label="Name"
                  defaultValue="Alarm Name"
                />
                <TextField
                  sx={{
                    backgroundColor: "#FAFAFA",
                    marginBottom: "26px",
                    maxWidth: 355,
                    paddingBottom: "20px",
                  }}
                  id="outlined-select-currency"
                  select
                  label="Type"
                  defaultValue="N/A"
                >
                  {type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  sx={{
                    backgroundColor: "#FAFAFA",
                    marginBottom: "26px",
                    maxWidth: 355,
                    paddingBottom: "20px",
                  }}
                  id="outlined-select-currency"
                  select
                  label="Trigger Threshold"
                  defaultValue="N/A"
                >
                  {threshold.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  sx={{
                    backgroundColor: "#FAFAFA",
                    marginBottom: "26px",
                    maxWidth: 355,
                  }}
                  id="outlined-select-currency"
                  select
                  label="Clear Threshhold"
                  defaultValue="N/A"
                >
                  {threshold.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Item>
          </Grid>
          <Grid xs={12} md={12} lg={6}>
            <Item className="add-alarm-column-two">
              <div className="column-two-top-section">
                <h4 className="column-two-title">Notify Users</h4>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
