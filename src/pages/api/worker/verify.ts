import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
const BACKEND_SECRET = process.env.BACKEND_SECRET;
const HGE_ENDPOINT = process.env.BACKEND_ENDPOINT;

const client = new GraphQLClient(HGE_ENDPOINT + "/v1/graphql", {
  headers: {
    "X-Hasura-Admin-Secret": BACKEND_SECRET
  }
});

const query = `
  query GET_ORGANIZATION_USERS($id: bigint!, $userId: String!) {
    organizations(where: {
      id: {
        _eq: $id
      },
      users_connection: {
        user_id: {
          _eq: $userId
        }
      }
    }) {
      id
      name
    }
  }
`;

const EMAILS = `
query EMAILS($where: emails_bool_exp!) {
  emails(where: $where) {
    id
  }
}
`;

const mutation = `
  mutation INSERT_MAP_USER_ORGANIZATION($user_id: String $organization_id: bigint!, $role: String){
    insert_map_users_organizations(objects: {user_id: $user_id, organization_id: $organization_id, role: $role}) {
      returning {
        organization {
          name
          id
        }
        user {
          email
          firstname
        }
      }
    }
  }
  
  `;
const mapUserRoleMutation = `
mutation INSERT_MAP_USER_ROLE($user_id: String){
insert_map_users_roles(objects: {role_id: "9", user_id: $user_id}) {
  returning {
    user_id
    }
  }
}
  `;
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { organization_id, user_id, email, user_email } = req.body;

  if (user_email === email) {
    const data = await client.request(query, {
      id: organization_id,
      userId: user_id
    });
    const emails = await client.request(EMAILS, {
      where: { to_email: { _eq: email } }
    });

    if (
      emails &&
      emails.emails.length > 0 &&
      data &&
      data.organizations &&
      data.organizations.length > 0
    ) {
      return res.json({
        message: "Уучлаарай энэ холбоосийг аль хэдийн ашигласан байна"
      });
    } else {
      const insert = await client.request(mutation, {
        organization_id: organization_id,
        user_id: user_id,
        role: "organization_worker"
      });

      const role = await client.request(mapUserRoleMutation, {
        user_id: user_id
      });

      return res.json({
        status: "success",
        data: insert,
        role: role
      });
    }
  } else {
    return res.json({
      message:
        "Уучлаарай таны EMAIL хаяг урьсан хэрэглэгчидтэй тохирохгүй байна. Та урилга очсон email хаягаар нэвтрэнэ үү"
    });
  }
};
