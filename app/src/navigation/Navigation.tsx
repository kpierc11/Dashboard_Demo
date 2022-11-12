import { createBrowserRouter, RouterProvider, Route, RouteObject } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";

 export const router = createBrowserRouter([
        {
          path: "/",
          element: <DashboardPage/>,
        },
      ]);

