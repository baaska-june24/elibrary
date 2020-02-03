import * as React from "react";
import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import RecoverForm from "~/components/Auth/RecoverForm";

const RecoverPass = (props: any) => {
  return (
    <Container>
      <div className="auth-container">
        <RecoverForm {...props} />
      </div>
    </Container>
  );
};

export default withLayout({ ssr: false })(RecoverPass);
