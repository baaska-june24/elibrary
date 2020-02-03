import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Spin } from "antd";
import { useRouter } from "next/router";
import withLayout from "~/components/Layout";
import UserContext from "~/context";

import {
  Get_Users_Contents_StatusQuery,
  Get_Users_Contents_StatusQueryVariables
} from "~/generated/graphql";
import { GET_USERS_CONTENTS_STATUS } from "~/queries/contents.graphql";

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("~/components/Reader/index"),
  {
    ssr: false
  }
);

const ReadPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [user]= React.useContext(UserContext);

  const { data } = useQuery<
    Get_Users_Contents_StatusQuery,
    Get_Users_Contents_StatusQueryVariables
  >(GET_USERS_CONTENTS_STATUS, {
    variables: {
      content_id: id,
      user_id: user && user.id
    }
  });

  const currentPage =
    (data &&
      data.content &&
      data.content.status_connection &&
      data.content.status_connection.length > 0 &&
      data.content.status_connection[0].current_page) ||
    1;

  if (user) {
    return (
      <div className="es-reader-pages">
        <DynamicComponentWithNoSSR
          contentId={id as string}
          currentPage={currentPage}
        />
      </div>
    );
  }

  return (
    <>
      <div className="centered-container">
        <Spin tip="Түр хүлээнэ үү" />
      </div>
      <style jsx>{`
        .centered-container {
          text-align: center;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default withLayout({
  showFooter: false,
  showSubNavbar: false,
  ssr: false
})(ReadPage);
