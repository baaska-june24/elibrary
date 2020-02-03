import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import Signin from "~/components/Signin";
import AuthMenu from "~/components/Auth/Menu";
import UserContext from "~/context";

const Login = () => {
  const router = useRouter();
  const [user] = React.useContext(UserContext);

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
        <title>Нэвтрэх</title>
      </Head>
      <div className="auth-container">
        <AuthMenu active="login" />
        <Signin />
      </div>
    </Container>
  );
};

export { Login };

export default withLayout({ ssr: false })(Login);
