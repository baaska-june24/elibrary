import * as React from "react";
import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Form, Select } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { filterOption } from "~/utils/helpers";
import UserContext from "~/context";
import { GET_LIST_ORGANIZATIONS } from "~/queries/organizations.graphql";
import {
  Get_List_OrganizationsQueryVariables,
  Get_List_OrganizationsQuery
} from "~/generated/graphql";

const FormItem = Form.Item;
const { Option } = Select;

interface IProps extends FormComponentProps {
  content: any;
}

const Organization = (props: IProps) => {
  const [user]= useContext(UserContext);
  const { getFieldDecorator } = props.form;
  let initialVariables: Get_List_OrganizationsQueryVariables = {
    where: {
      users_connection: { user_id: { _eq: user && user.id } }
    }
  };

  if (
    user &&
    user.roles_connection.filter(
      ({ role }: any) => ["admin", "content_manager"].indexOf(role.name) > -1
    ).length > 0
  ) {
    initialVariables = {
      where: { is_active: { _eq: true } }
    };
  }

  const { data, loading, refetch } = useQuery<
    Get_List_OrganizationsQuery,
    Get_List_OrganizationsQueryVariables
  >(GET_LIST_ORGANIZATIONS, {
    context: {
      headers: {
        "X-Hasura-Role":
          user &&
          user.roles_connection.length > 0 &&
          user.roles_connection[0].role.name
      }
    },
    variables: initialVariables
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  // if (user) {
  //   if (
  //     user.roles_connection.filter(
  //       ({ role }: any) => ["admin", "content_manager"].indexOf(role.name) > -1
  //     ).length > 0
  //   ) {
  //     refetch({ where: {} });
  //   }
  // }

  return (
    <FormItem label="Байгууллага">
      {getFieldDecorator("organization", {
        initialValue:
          props.content && props.content.organizations[0].organization_id,
        rules: [{ required: true, message: "Байгууллага сонгоно уу" }]
      })(
        <Select className="select-form" showSearch filterOption={filterOption}>
          {data &&
            data.organizations &&
            data.organizations.map(({ id, name }) => (
              <Option key={id} value={id}>
                {name}
              </Option>
            ))}
        </Select>
      )}
    </FormItem>
  );
};

export default Organization;
