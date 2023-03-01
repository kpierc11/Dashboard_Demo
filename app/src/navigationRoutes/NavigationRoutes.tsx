import { Route, Routes } from "react-router-dom";
import NavTabs from "../components/UserSettings/NavTabs";
import WidgetsPage from "../pages/addonsPage/AddonsPage";
import AddAlarmPage from "../pages/alarmsPage/addAlarmPage/AddAlarmPage";
import AlarmsPage from "../pages/alarmsPage/AlarmsPage";
import AddReportPage from "../pages/reportsPage/addReportsPage/addReportsPage";
import EditReportPage from "../pages/reportsPage/editReportsPage/EditReportPage";
import ReportsPage from "../pages/reportsPage/ReportsPage";
import StationDataPage from "../pages/stationDataPage/StationDataPage";
import StationsDirectoryPage from "../pages/stationDirectoryPage/StationsDirectoryPage";
import StationsPage from "../pages/stationsPage/StationsPage";
import TrendsPage from "../pages/trendsPage/TrendsPage";
import AddUserPage from "../pages/usersPage/addUsersPage/AddUserPage";
import EditUserPage from "../pages/usersPage/editUserPage/EditUserPage";
import UsersPage from "../pages/usersPage/UsersPage";


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
      <Route path="/reports/edit" element={<EditReportPage />}></Route>
      <Route path="/reports/add" element={<AddReportPage />}></Route>
      <Route path="/widgets/" element={<WidgetsPage />}></Route>
      <Route path="/users" element={<UsersPage></UsersPage>}></Route>
      <Route path="/users/add" element={<AddUserPage></AddUserPage>}></Route>
      <Route path="/users/edit" element={<EditUserPage></EditUserPage>}></Route>
      <Route path="/user/profile/" element={<NavTabs />}></Route>
    </Routes>
  );
}
