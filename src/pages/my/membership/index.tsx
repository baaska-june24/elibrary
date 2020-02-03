import * as React from "react";
import withLayout from "~/components/Layout";
import Membership from "~/components/My/Membership";
import ProfileLayout from "~/components/My/Profile/Layout";

const MyMemberships = (props: any) => (
  <ProfileLayout {...props}>
    <Membership />
  </ProfileLayout>
);

export default withLayout({
  requireSignIn: true,
  ssr: false
})(MyMemberships);
