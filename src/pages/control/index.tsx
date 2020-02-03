import * as React from "react";
import withLayout from "~/components/Layout";
import Controller from "~/components/Control";
import ProfileLayout from "~/components/My/Profile/Layout";

const Control = (props: any) => (
  <ProfileLayout {...props}>
    <Controller />
  </ProfileLayout>
);

export default withLayout({ requireSignIn: true, ssr: false })(Control);
