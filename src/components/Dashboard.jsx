import BuyerProfilePieChart from "./BuyerProfilePieChart";
import DashboardStatsLayout from "./DashboardStatsLayout";
import TransactionChart from "./TransactionCharts";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <DashboardStatsLayout />
        <div className="flex flex-row gap-4 w-full">
          <TransactionChart />
          <BuyerProfilePieChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
