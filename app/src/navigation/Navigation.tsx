import { createBrowserRouter } from "react-router-dom";
import ChartPage from "../pages/ChartPage";
import StationsDirectoryPage from "../pages/StationsDirectoryPage";
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
    path: "/stations-directory-page",
    element: <StationsDirectoryPage />
  }
]);
