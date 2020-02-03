// tslint:disable variable-name import-name
import * as React from "react";
import { useRouter } from "next/router";
import Context from "~/context";
import useSession from "~/hooks/useSession";

interface IOptions {
  requireSignIn?: boolean;
  allowedRoles?: string[];
}

export default (ComposedComponent: any, options: IOptions) => {
  const WithUser = (props: any) => {
    const [user, loading] = useSession();
    const router = useRouter();
    const _props: any = {
      loading,
      user
    };

    if (options) {
      if (options.requireSignIn && !user && !loading) {
        router.replace(`/auth/signin?redirectUrl=${router.asPath}`);
        return null;
      }

      if (
        options.allowedRoles &&
        options.allowedRoles.length > 0 &&
        user &&
        user.roles_connection.findIndex(
          ({ role }) => (options.allowedRoles || []).indexOf(role.name) > -1
        ) === -1
      ) {
        _props.error = "403";
      }
    }

    return (
      <Context.Provider value={[user, loading]}>
        <ComposedComponent {...props} {..._props} />
      </Context.Provider>
    );
  };

  return WithUser;
};
