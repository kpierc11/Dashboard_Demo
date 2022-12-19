import { createBrowserRouter } from "react-router-dom";
import ReportsPage from "../pages/ReportsPage";
import StationsDirectoryPage from "../pages/StationsDirectoryPage";
import StationsPage from "../pages/StationsPage";



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
    element: <div>trends page</div>,
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
    path: "/user-profile",
    element: <div>user-profile</div>,
  },
  {
    path: "/stations-directory",
    element: <StationsDirectoryPage />
  }
]);
