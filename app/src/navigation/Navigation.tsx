import { createBrowserRouter } from "react-router-dom";
import ChartPage from "../pages/chartPage/ChartPage";
import EditReportPage from "../pages/reportsPage/EditReportPage";
import StationsPage from "../pages/StationsPage";
import WidgetsPage from "../pages/WidgetsPage";

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
    path: "/report/edit",
    element: <EditReportPage></EditReportPage>,
  },
]);
