import * as React from "react";
import withLayout from "~/components/Layout";
import ShowStory from "~/components/Story";
import ProfileLayout from "~/components/My/Profile/Layout";

const MyHistory = (props: any) => (
  <ProfileLayout {...props}>
    <ShowStory {...props} />
  </ProfileLayout>
);

export default withLayout({ requireSignIn: true, ssr: false })(MyHistory);
