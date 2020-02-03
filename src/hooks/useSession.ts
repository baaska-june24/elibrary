import { useState, useEffect } from "react";
import Auth from "@aws-amplify/auth";
import { useApolloClient } from "@apollo/react-hooks";
import { GET_USER } from "~/queries/users.graphql";
import { Get_UserQuery, Get_UserQueryVariables } from "~/generated/graphql";
import Cookies from "universal-cookie";

export type User = Get_UserQuery["user"] & {
  displayName?: string;
};

export default (): [User | null, boolean] => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const client = useApolloClient();

  const getCurrentSession = async () => {
    setLoading(true);
    const currentSession = await Auth.currentSession().catch(() => {
      setLoading(false);
    });

    if (currentSession) {
      const cookies = new Cookies();

      //let tokenId = currentSession.getIdToken().getJwtToken();

      const idToken = (await Auth.currentSession()).getIdToken().getJwtToken();

      cookies.set("esan_mn_token_store", idToken, { path: "/" });

      const { data } = await client.query<
        Get_UserQuery,
        Get_UserQueryVariables
      >({
        query: GET_USER,
        variables: {
          id: currentSession.getIdToken().payload.sub
        }
      });

      if (data && data.user && !user) {
        const currentUser = data.user as User;
        if (!currentUser.lastname || !currentUser.firstname) {
          currentUser.displayName = currentUser.email.split("@")[0];
        } else {
          let lname = currentUser.lastname.trim() || currentUser.email;
          lname = lname[0];
          const names = [lname, currentUser.firstname.trim()];
          const displayname = names
            .filter(item => item !== "")
            .join(".")
            .trim();
          currentUser.displayName = displayname;
        }
        setUser(data.user);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getCurrentSession();

    return () => {
      setUser(null);
    };
  }, []);

  return [user, loading];
};
