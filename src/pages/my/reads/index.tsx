import * as React from "react";
import withLayout from "~/components/Layout";
import LastRead from "~/components/My/LastRead";
import ProfileLayout from "~/components/My/Profile/Layout";

const MyReads = (props: any) => (
  <ProfileLayout {...props}>
    <LastRead />
  </ProfileLayout>
);

export default withLayout({
  requireSignIn: true,
  ssr: false
})(MyReads);
