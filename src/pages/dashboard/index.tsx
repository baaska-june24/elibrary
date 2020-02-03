import * as React from "react";
import DashboardLayout from "~/components/Dashboard/Layout";
import Contents from "~/components/Dashboard/contents/ContentListTable";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Contents />
    </DashboardLayout>
  );
};

export default Dashboard;
