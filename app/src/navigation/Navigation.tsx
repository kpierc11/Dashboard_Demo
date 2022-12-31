import { createBrowserRouter } from "react-router-dom";
import ReportsPage from "../pages/ReportsPage";
import StationDataPage from "../pages/stationDataPage/StationDataPage";
import StationsDirectoryPage from "../pages/StationsDirectoryPage";
import StationsPage from "../pages/stationsPage/StationsPage";
import NavTabs from "../components/UserSettings/NavTabs";
import TrendsPage from "../pages/trendsPage/TrendsPage";
import WidgetsPage from "../pages/WidgetsPage";
import EditReportPage from "../pages/editReportsPage/EditReportPage";
import AddonsPage from "../pages/AddonsPage";
import AddAlarmPage from "../pages/addAlarmPage/AddAlarmPage";

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
    element: <AddonsPage />,
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
    path: "/station-data-page",
    element: <StationDataPage></StationDataPage>,
  },
  {
    path: "/edit-report-page",
    element: <EditReportPage/>,
  },
  {
    path: "/widgets",
    element: <WidgetsPage/>
  },
  {
    path: "/add-alarm-page",
    element: <AddAlarmPage/>
  },
]);
