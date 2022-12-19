import { Box, Grid, MenuItem, Paper, styled, TextField } from "@mui/material";
import "./editReportPage.css";

export default function EditReportPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <div className="edit-report-main-container">
      <div className="edit-report-top-section">
        <h3>Edit Report</h3>
      </div>

      <Box>
        <Grid container>
          <Grid xs={12} md={12} lg={6}>
            <Item className="edit-report-column-one">
              <div
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
                    marginBottom: "22px",
                    maxWidth:355,
                  }}
                  required
                  id="outlined-required"
                  label="Report Name"
                  defaultValue="Sample Report"
                />
                <TextField
                  sx={{
                    backgroundColor: "#FAFAFA",
                    marginBottom: "22px",
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
                    marginBottom: "22px",
                    maxWidth: 355,
                  }}
                  id="outlined-select-currency"
                  select
                  label="Select"
                  helperText="Please select your currency"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  sx={{
                    backgroundColor: "#FAFAFA",
                    marginBottom: "22px",
                    maxWidth: 355,
                  }}
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                />
              </div>
            </Item>
          </Grid>
          <Grid xs={12} md={12} lg={6}>
            <Item className="edit-report-column-two"></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
