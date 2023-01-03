import "./App.css";
import NavigationDrawer from "./components/navigationDrawer/NavigationDrawer";

function App() {
  let loggedIn: boolean = true;
  if (loggedIn) {
    return <NavigationDrawer />;
  } else {
    return <div>Login Page</div>;
  }
}

export default App;
