import Box from "@mui/material/Box";
import { Grid, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./addUser.css";
import AddUserForm, {
  AddUserPhotoForm,
} from "../../components/addUserForm/AddUserForm";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AddUserPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexWrap: "wrap",
        backgroundColor: "#ffffff",
        border: "1px solid #919eab",
        borderRadius: "15px",
      }}
    >
      <Toolbar
        sx={{
          borderBottom: "1px solid #919EAB",
          width: "100%",
        }}
      >
        <Box className="edit-users-title-column">
          <h2>Add User</h2>
        </Box>
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          border: "1px solid #919eab",
          borderRadius: "15px",
          margin: "30px 0px 30px 18px",
        }}
      >
        <AddUserForm />
        <AddUserPhotoForm />
      </Box>
      <Box className="e-button-bg">
        <button
          className="cancel-button"
          onClick={() => {
            navigate("/users");
          }}
        >
          Cancel
        </button>

        <button className="edit-sb">Add User</button>
      </Box>
    </Box>
  );
}
