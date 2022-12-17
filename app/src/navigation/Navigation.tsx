import { createBrowserRouter } from "react-router-dom";
import StationsPage from "../pages/StationsPage";
import UserProfileForm from "../components/UserSettings/ProfileForm/UserProfileForm";
import AuthenticationForm from "../components/UserSettings/ProfileForm/AuthenticationForm";
import NotificationForm from "../components/UserSettings/ProfileForm/NotificationForm";

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
    element: <div>reports page</div>,
  },
  {
    path: "/addons",
    element: <div>addons page</div>,
  },
  {
    path: "/user",
    element: [<UserProfileForm/>],
  },
  {
    path: "/user/profile",
    element: [<UserProfileForm/>],
  },
  {
    path: "/user/authentication",
    element: [<AuthenticationForm/>],
  },
  {
    path: "/user/notifications",
    element: [<NotificationForm/>],
  },
]);
