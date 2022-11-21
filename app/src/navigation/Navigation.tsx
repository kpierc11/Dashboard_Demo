import { createBrowserRouter } from "react-router-dom";
import ChartPage from "../pages/ChartPage";
import StationsPage from "../pages/StationsPage";
import WidgetsPage from "../pages/WidgetsPage";
import UserSettingsPage from "../pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StationsPage />,
  },
  {
    path: "/users",
    element: <div>users page</div>,
  },
  {
    path: "/dashboard",
    element: <div>Dashboard page</div>,
  },
  {
    path: "/charts",
    element: <ChartPage></ChartPage>,
  },
  {
    path: "/widgets",
    element: <WidgetsPage />,
  },
  {
    path: "/user/settings",
    element: <UserSettingsPage />,
  },
]);
