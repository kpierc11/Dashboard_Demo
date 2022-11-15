import {
  createBrowserRouter,
  RouterProvider,
  Route,
  RouteObject,
} from "react-router-dom";
import ChartPage from "../pages/ChartPage";
import DashboardPage from "../pages/DashboardPage";
import WidgetsPage from "../pages/WidgetsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
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
    element: <WidgetsPage/>,
  },
]);
