import * as React from "react";
import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import ConfirmForm from "~/components/Auth/ConfirmForm";

const RecoverPass = (props: any) => {
  return (
    <Container>
      <div className="auth-container">
        <ConfirmForm {...props} />
      </div>
    </Container>
  );
};

export default withLayout({ ssr: false })(RecoverPass);
