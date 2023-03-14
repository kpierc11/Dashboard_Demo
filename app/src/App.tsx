import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useMemo, useEffect, createContext } from "react";
import "./App.css";
import NavigationDrawer from "./components/navigationDrawer/NavigationDrawer";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {

  const [mode, setMode] = useState<"light" | "dark">(() => {
    // getting stored value
    const themeMode: any = localStorage.getItem("theme-mode");
    const initialValue = JSON.parse(themeMode);
    return initialValue;
  });
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  useEffect(() => {
    localStorage.setItem("theme-mode", JSON.stringify(mode));
  }, [mode]);

  const theme = createTheme({palette:{mode:"light"}});

  let loggedIn: boolean = true;
  if (loggedIn) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <NavigationDrawer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  } else {
    return <div>Login Page</div>;
  }
}

export default App;
