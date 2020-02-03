import * as React from "react";
import DashboardLayout from "~/components/Dashboard/Layout";
import Worker from "~/components/Dashboard/Worker/workersListTable";

const DashboardWorker = () => {
  return (
    <DashboardLayout>
      <Worker />
    </DashboardLayout>
  );
};

export default DashboardWorker;
