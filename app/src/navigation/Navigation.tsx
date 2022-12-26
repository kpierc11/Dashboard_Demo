import { createBrowserRouter } from "react-router-dom";
import ReportsPage from "../pages/ReportsPage";
import StationDataPage from "../pages/stationDataPage/StationDataPage";
import StationsDirectoryPage from "../pages/StationsDirectoryPage";
import StationsPage from "../pages/stationsPage/StationsPage";
import NavTabs from "../components/UserSettings/NavTabs";
import TrendsPage from "../pages/trendsPage/TrendsPage";
import WidgetsPage from "../pages/WidgetsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StationsPage />,
    children: [{}],
  },
  {
    path: "/directory",
    element: <div>Directory</div>,
  },
  {
    path: "/trends",
    element: <TrendsPage />,
  },
  {
    path: "/reports",
    element: <ReportsPage />,
  },
  {
    path: "/addons",
    element: <WidgetsPage />,
  },
  {
    path: "/user/profile",
    element: <NavTabs/>,
  },
  {
    path: "/stations-directory",
    element: <StationsDirectoryPage />,
  },

  {
    path: "station-data-page",
    element: <StationDataPage></StationDataPage>,
  },
]);
