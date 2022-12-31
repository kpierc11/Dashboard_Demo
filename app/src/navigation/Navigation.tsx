import { createBrowserRouter } from "react-router-dom";
import StationsPage from "../pages/stationsPage/StationsPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <StationsPage />,
    children: [{}],
  },
]);
