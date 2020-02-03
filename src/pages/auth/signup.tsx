import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import Signup from "~/components/Signup";
import AuthMenu from "~/components/Auth/Menu";
import UserContext from "~/context";

const Register = () => {
  const router = useRouter();
  const [user]= React.useContext(UserContext);

  React.useEffect(() => {
    if (user) {
      router.replace(
        (router.query && (router.query.redirectUrl as string)) || "/"
      );
    }
  }, [user]);
  return (
    <Container>
      <Head>
        <title>Бүртгүүлэх</title>
      </Head>
      <div className="auth-container">
        <AuthMenu active="register" />
        <Signup />
      </div>
    </Container>
  );
};

export default withLayout({ ssr: false })(Register);
