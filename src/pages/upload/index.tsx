import * as React from "react";
import { useContext } from "react";
import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import UploadComponent from "~/components/Upload";
import UserContext from "~/context";
import OrganizationForm from "~/components/OrganizationForm";

const Upload = (props: any) => {
  const [user]= useContext(UserContext);

  if (props.error && props.error === "403") {
    return (
      <Container>
        <OrganizationForm />
      </Container>
    );
  }

  if (user) {
    return (
      <Container>
        <UploadComponent />
      </Container>
    );
  }

  return null;
};

export default withLayout({
  allowedRoles: [
    "admin",
    "content_manager",
    "organization_manager",
    "organization_worker"
  ],
  requireSignIn: true,
  ssr: false
})(Upload);
