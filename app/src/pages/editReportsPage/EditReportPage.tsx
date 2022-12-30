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
import "./editReportPage.css";

export default function EditReportPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  const stations = [
    {
      value: "st1",
      label: "Station 1",
    },
    {
      value: "st2",
      label: "Station 2",
    },
    {
      value: "st3",
      label: "Station 3",
    },
    {
      value: "st4",
      label: "Station 4",
    },
  ];
  const TimeZone = [
    {
      value: "tm1",
      label: "HST",
    },
    {
      value: "tm2",
      label: "AKST",
    },
    {
      value: "tm3",
      label: "PST",
    },
    {
      value: "tm4",
      label: "MST",
    },
    {
      value: "tm5",
      label: "CST",
    },
    {
      value: "tm6",
      label: "EST",
    },
  ];

  return (
    <div className="edit-report-main-container">
      <div className="edit-report-top-section">
        <h3 className="edit-report-title">Edit Report</h3>
      </div>

      <Box>
        <Grid container>
          <Grid xs={12} md={12} lg={6}>
            <Item className="edit-report-column-one">
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
                  }}
                  required
                  id="outlined-required"
                  label="Report Name"
                  defaultValue="Sample Report"
                />
                <TextField
                  sx={{
                    backgroundColor: "#FAFAFA",
                    marginBottom: "26px",
                    maxWidth: 355,
                  }}
                  id="outlined-select-currency"
                  select
                  label="Data Source"
                  defaultValue="st1"
                >
                  {stations.map((option) => (
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
                  required
                  id="outlined-required"
                  label="User"
                  defaultValue="Sample Report"
                />
                <TextField
                  sx={{
                    backgroundColor: "#FAFAFA",
                    marginBottom: "26px",
                    maxWidth: 500,
                  }}
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  defaultValue="This is an example description"
                />
              </Box>
              
            </Item>
          </Grid>
          <Grid xs={12} md={12} lg={6}>
            <Item className="edit-report-column-two">
              <p className="report-paragraph">
                Do you want to create a scheduled or a On-Demand report?
              </p>
              <Switch className="switch-editreport" />
              <p className="report-paragraph">
                Do you want the report's timestamps converted to a different
                time zone?
              </p>
              <Switch className="switch-editreport" />
              <p className="report-paragraph">
                Select a new time zone for the report data.
              </p>
              <TextField
                sx={{
                  backgroundColor: "#FAFAFA",
                  marginBottom: "22px",
                  maxWidth: 350,
                  width: "189px",
                  marginLeft: "33px",
                }}
                id="outlined-select-currency"
                select
                label="Time Zone"
                defaultValue="tm1"
              >
                {TimeZone.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className="edit-reports-bottom">
        <button
          className="bottom-section-buttons"
          onClick={(event) => {
            alert("Going Back");
          }}
        >
          Go Back
        </button>
      
      </div>
    </div>
  );
}
