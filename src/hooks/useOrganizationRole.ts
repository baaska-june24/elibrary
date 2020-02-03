import { useState, useContext, useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { ORGANIZATION_ROLE } from "~/queries/organizations.graphql";
import {
  Organization_RoleQuery,
  Organization_RoleQueryVariables
} from "~/generated/graphql";
import UserContext from "~/context";

const useOrganizationRole = (): [
  string,
  (organization_id: number) => void,
  boolean
] => {
  const [user]= useContext(UserContext);

  const [role, setRole] = useState();

  const [loadRole, { data, loading, called }] = useLazyQuery<
    Organization_RoleQuery,
    Organization_RoleQueryVariables
  >(ORGANIZATION_ROLE, {});

  const loadData = (organization_id: number) => {
    if (user && organization_id) {
      loadRole({
        variables: {
          user_id: user.id,
          organization_id: organization_id
        }
      });
    }
  };

  useEffect(() => {
    if (user && user.roles_connection.length > 0) {
      if (user.roles_connection[0].role.name === "admin") {
        setRole("admin");
      } else if (user.roles_connection[0].role.name === "content_manager") {
        setRole("content_manager");
      } else {
        if (data && data.organization_role) {
          setRole(data.organization_role.role);
        }
      }
    }
  }, [called, loading]);

  return [role, loadData, loading];
};

export default useOrganizationRole;
