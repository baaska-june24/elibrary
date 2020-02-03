import * as React from "react";
import withLayout from "~/components/Layout";
import PasswordForm from "~/components/My/MyProfile/passwordform";

const Password = (props: any) => <PasswordForm {...props} />;

export default withLayout({ requireSignIn: true, ssr: false })(Password);
