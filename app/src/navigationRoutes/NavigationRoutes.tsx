import { Route, Routes } from "react-router-dom";
import NavTabs from "../components/UserSettings/NavTabs";
import AddAlarmPage from "../pages/alarmsPage/addAlarmPage/AddAlarmPage";
import WidgetsPage from "../pages/addonsPage/AddonsPage";
import AddUserPage from "../pages/usersPage/addUsersPage/AddUserPage";
import AlarmsPage from "../pages/alarmsPage/AlarmsPage";
import EditReportPage from "../pages/reportsPage/editReportsPage/EditReportPage";
import StationDataPage from "../pages/stationDataPage/StationDataPage";
import StationsPage from "../pages/stationsPage/StationsPage";
import TrendsPage from "../pages/trendsPage/TrendsPage";
import UsersPage from "../pages/usersPage/UsersPage";
import AddReportPage from "../pages/reportsPage/addReportsPage/addReportsPage";
import EditUserPage from "../pages/usersPage/editUserPage/EditUserPage";
import ReportsPage from "../pages/reportsPage/ReportsPage";
import StationsDirectoryPage from "../pages/stationDirectoryPage/StationsDirectoryPage";

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StationsPage />}></Route>
      <Route path="/station-data/" element={<StationDataPage />}></Route>
      <Route path="/station-data/alarms/" element={<AlarmsPage />}></Route>
      <Route path="/station-data/alarms/add" element={<AddAlarmPage />}></Route>
      <Route
        path="/stations-directory/"
        element={<StationsDirectoryPage />}
      ></Route>
      <Route path="/trends/" element={<TrendsPage />}></Route>
      <Route path="/reports/" element={<ReportsPage />}></Route>
      <Route path="/report/edit" element={<EditReportPage />}></Route>
      <Route path="/report/add" element={<AddReportPage />}></Route>
      <Route path="/addons/" element={<WidgetsPage />}></Route>
      <Route path="/users" element={<UsersPage></UsersPage>}></Route>
      <Route path="/user/add" element={<AddUserPage></AddUserPage>}></Route>
      <Route path="/user/edit" element={<EditUserPage></EditUserPage>}></Route>
      <Route path="/user/profile/" element={<NavTabs />}></Route>
    </Routes>
  );
}
