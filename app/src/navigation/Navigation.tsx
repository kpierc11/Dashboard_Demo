import { createBrowserRouter } from "react-router-dom";
import ReportsPage from "../pages/ReportsPage";
import StationsDirectoryPage from "../pages/StationsDirectoryPage";
import StationsPage from "../pages/stationsPage/StationsPage";
import TrendsPage from "../pages/trendsPage/TrendsPage";
import UsersPage from "../pages/UsersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StationsPage />,
  },
  {
    path: "/directory",
    element: <div>Directory</div>,
  },
  {
    path: "/trends",
    element: <TrendsPage/>,
  },
  {
    path: "/reports",
    element: <ReportsPage />,
  },
  {
    path: "/addons",
    element: <div>addons page</div>,
  },
  {
    path: "/users",
    element: <UsersPage/>,
  },
  {
    path: "/stations-directory",
    element: <StationsDirectoryPage />,
  },
]);
