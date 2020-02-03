import * as React from "react";
import withLayout from "~/components/Layout";
import ContentList from "~/components/Organization/ContentList";
import OrganizationLayout from "~/components/Organization/Layout";

const Organization = () => (
  <OrganizationLayout>
    <ContentList />
  </OrganizationLayout>
);

export default withLayout({})(Organization);
