import {
  createBrowserRouter,
  RouterProvider,
  Route,
  RouteObject,
} from "react-router-dom";
import ChartPage from "../pages/ChartPage";
import DashboardPage from "../pages/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/Users",
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
]);
