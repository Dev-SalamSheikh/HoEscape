import BannerCards from "../components/BannerCards";
import DashboardTopBar from "../components/DashboardTopBar";
import EmployeeList from "../components/EmployeeList";
import "../styles/Dashboard/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardTopBar />
      <BannerCards />
      <EmployeeList />
    </div>
  );
};

export default Dashboard;
