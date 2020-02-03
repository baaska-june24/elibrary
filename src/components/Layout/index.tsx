import * as React from "react";
import Navbar, { SubNav } from "~/components/Navbar";
import Footer from "~/components/Footer";
import withUser from "~/hoc/withUser";
import { withApollo } from "~/hoc/withApollo";

import "~/styles/main.less";
import "./style.less";

interface ILayoutOptions {
  showNavbar?: boolean;
  showSubNavbar?: boolean;
  showFooter?: boolean;
  requireSignIn?: boolean;
  allowedRoles?: string[];
  apollo?: boolean;
  ssr?: boolean;
}

export default ({
  showFooter = true,
  showNavbar = true,
  showSubNavbar = true,
  requireSignIn = false,
  allowedRoles = [],
  ssr = true
}: ILayoutOptions) => (ComposedComponent: any) => {
  const Layout = (props: any) => (
    <>
      {showNavbar && <Navbar />}
      {showSubNavbar && <SubNav />}
      <ComposedComponent {...props} />
      {showFooter && <Footer />}
    </>
  );

  return withApollo(
    withUser(Layout, {
      allowedRoles,
      requireSignIn
    }),
    {
      ssr
    }
  );
};
