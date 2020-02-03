import * as React from "react";
import DashboardLayout from "~/components/Dashboard/Layout";
import Packages from "~/components/Dashboard/Package/PackageListTable";

const DashboardPackages = () => {
  return (
    <DashboardLayout>
      <Packages />
    </DashboardLayout>
  );
};

export default DashboardPackages;
