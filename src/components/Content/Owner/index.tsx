import * as React from "react";
import Link from "next/link";
import AvatarUser from "~/components/Avatar";
import { Avatar } from "antd";

interface IProps {
  data: {
    content: any;
    content_detail: any;
  };
}

const Owner = (props: IProps) => {
  const data = props.data;
  const [{ organization }] = data?.content_detail?.organizations;

  const renderOrganization = () => (
    <Link href={`/organizations/${organization.id}`} key={organization.id}>
      <a
        style={{
          display: "block",
          color: "#fff",
          marginTop: "5px"
        }}
      >
        <Avatar shape="circle" size="small" icon="bank" />
        <strong
          style={{ fontWeight: 500, margin: "0 5px" }}
        >{`${organization.name}`}</strong>
      </a>
    </Link>
  );

  const renderAuthors = () => {
    return data.content_detail.authors_connection.map(({ author }: any) => {
      const lname = author.lastname.trim()[0];
      const names = [lname, author.firstname.trim()];
      const displayname = names
        .filter(item => item !== "")
        .join(".")
        .trim();

      return (
        <Link href={`/authors/${author.id}`} key={author.id}>
          <a className="esan-author-title">
            <AvatarUser />
            <strong>{displayname}</strong>
          </a>
        </Link>
      );
    });
  };

  return (
    <>
      {organization.type === "individual" && renderAuthors()}
      {organization.type !== "individual" && renderOrganization()}
    </>
  );
};

export default Owner;
