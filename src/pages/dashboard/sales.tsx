import * as React from "react";
import DashboardLayout from "~/components/Dashboard/Layout";
import Sales from "~/components/Dashboard/sales/salesList";

const DashboardSales = () => {
  return (
    <DashboardLayout>
      <Sales />
    </DashboardLayout>
  );
};

export default DashboardSales;
