import * as React from "react";
import withLayout from "~/components/Layout";
import MyProfile from "~/components/My/MyProfile";

const Profile = () => <MyProfile />;

export default withLayout({ requireSignIn: true, ssr: false })(Profile);
