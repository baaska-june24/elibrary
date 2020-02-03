import * as React from "react";
import withLayout from "~/components/Layout";
import Description from "~/components/Organization/Description";
import OrganizationLayout from "~/components/Organization/Layout";

const OrganizationInfo = () => (
  <OrganizationLayout>
    <Description />
  </OrganizationLayout>
);

export default withLayout({})(OrganizationInfo);
