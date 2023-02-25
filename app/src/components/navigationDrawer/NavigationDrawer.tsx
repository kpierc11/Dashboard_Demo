import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import { useState, useMemo, createContext, useEffect } from "react";
import { Link, ThemeProvider } from "@mui/material";
import "../navigationDrawer/navigationDrawer.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AccountTree from "@mui/icons-material/AccountTree";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import NavigationRoutes from "../../navigationRoutes/NavigationRoutes";

const drawerWidth = 240;
const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const handleThemeState = () => {
  // getting stored value
  const themeMode: any = localStorage.getItem("theme-mode");
  const initialValue = JSON.parse(themeMode);
  return initialValue || "";
};

export default function NavigationDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mode, setMode] = useState(handleThemeState);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: any) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    localStorage.setItem("theme-mode", JSON.stringify(mode));
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                topBar: {
                  color: "#747474",
                  background: "#e6f7fc",
                },
              }
            : {}),
        },
      }),
    [mode]
  );

  const iconBackground =
    theme.palette.mode === "dark"
      ? { background: "rgba(255, 255, 255, 0.08)" }
      : { background: "#E6F7FC", color: "#747474" };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img
          src={"/HBS-TM-logo-400px.webp"}
          height={100}
          width={150}
          alt="hydrobioscience logo"
        ></img>
      </Box>
      <h1 style={{ paddingLeft: 27, marginTop: 27, fontSize: 20 }}>General</h1>
      <List className={"sidebar-navigation"}>
        <ListItem key={1} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `sidebar-link-active-${theme.palette.mode}`
                : "sidebar-link"
            }
            to="/"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <SatelliteAltIcon />
              </ListItemIcon>
              <ListItemText primary={<>MyH2Oinfo &trade;</>} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={2} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `sidebar-link-active-${theme.palette.mode}`
                : "sidebar-link"
            }
            to="/stations-directory"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <AccountTree />
              </ListItemIcon>
              <ListItemText primary={"Directory"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={3} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `sidebar-link-active-${theme.palette.mode}`
                : "sidebar-link"
            }
            to="/trends"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Trends"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={4} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `sidebar-link-active-${theme.palette.mode}`
                : "sidebar-link"
            }
            to="/reports"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <ContentPasteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Reports"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={5} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `sidebar-link-active-${theme.palette.mode}`
                : "sidebar-link"
            }
            to="/addons"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <DashboardCustomizeOutlinedIcon className={"sidebar-icon"} />
              </ListItemIcon>
              <ListItemText primary={"Addons"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <h1 style={{ paddingLeft: 27, marginTop: 30, fontSize: 20 }}>Admin</h1>

        <ListItem key={6} disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `sidebar-link-active-${theme.palette.mode}`
                : "sidebar-link"
            }
            to="/users"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <PeopleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"users"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              backgroundColor: `${
                theme.palette.mode === "dark"
                  ? "#121212"
                  : theme.palette.background.default
              }`,
              backgroundImage: `${
                theme.palette.mode === "dark"
                  ? "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));"
                  : theme.palette.background.default
              }`,
              boxShadow: "none",
              borderRight: "none",
              marginRight: "auto",
            }}
          >
            <Toolbar
              sx={{
                justifyContent: "flex-end",
                borderRight: 0,
                paddingTop: "39px",
                paddingBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <div className={"topbar-search-container"}>
                <form>
                  <div style={{ position: "relative" }}>
                    <input
                      id="topbar-search"
                      type="search"
                      placeholder="search..."
                    ></input>
                    <SearchIcon
                      sx={{
                        position: "absolute",
                        right: 0,
                        marginTop: "5%",
                        top: 0,
                        marginRight: 2,
                      }}
                      color="primary"
                    ></SearchIcon>
                  </div>
                </form>
              </div>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={"mobile-hamburger"}
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                  marginRight: "auto",
                  background: "#e6f7fc",
                  borderRadius: "10px",
                  color: "#747474",
                }}
              >
                <MenuIcon />
              </IconButton>
              <LogoutIcon
                className={"topbar-icon"}
                fontSize={"large"}
                style={iconBackground}
              ></LogoutIcon>
              <IconButton
                onClick={colorMode.toggleColorMode}
                color="inherit"
                className={"topbar-button"}
                sx={{ padding: 0 }}
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness4Icon
                    className={"topbar-icon"}
                    fontSize={"large"}
                    style={iconBackground}
                  />
                ) : (
                  <DarkModeIcon
                    className={"topbar-icon"}
                    fontSize={"large"}
                    style={iconBackground}
                  />
                )}
              </IconButton>
              <SettingsIcon
                className={"topbar-icon"}
                fontSize={"large"}
                style={iconBackground}
              ></SettingsIcon>
              <NotificationsNoneOutlinedIcon
                className={"topbar-icon"}
                fontSize={"large"}
                style={iconBackground}
              ></NotificationsNoneOutlinedIcon>
              <Link sx={{ height: 35 }} href="/user/profile">
                <AccountCircleOutlinedIcon
                  className={"topbar-icon"}
                  fontSize={"large"}
                  sx={{ marginRight: 0 }}
                  style={iconBackground}
                ></AccountCircleOutlinedIcon>
              </Link>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  borderWidth: 0,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            className={"blue-background"}
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },

              background: `${
                theme.palette.mode === "dark"
                  ? theme.palette.background.default
                  : "#e6f7fc"
              }`,
            }}
          >
            {/**Pages will be rendered here through react router */}
            <NavigationRoutes />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
