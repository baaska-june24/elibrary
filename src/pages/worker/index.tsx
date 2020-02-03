import * as React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Alert, Spin } from "antd";

import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import UserContext from "~/context";
import { verifyToken } from "~/utils/token";

const Worker = () => {
  const [user]= React.useContext(UserContext);
  const router = useRouter();
  const [result, setResult] = React.useState(null);
  const urlToken = router.query;

  React.useEffect(() => {
    if (user && urlToken && urlToken.token) {
      const decodeToken = async (token: any) => {
        const decode: any = await verifyToken(token);

        await axios({
          method: "post",
          url: "/api/worker/verify",
          data: {
            organization_id: decode.organization,
            user_id: user.id,
            email: decode.email,
            user_email: user.email
          }
        })
          .then(res => {
            setResult(res.data);
          })
          .catch(err => {
            console.log("ERROR", err);
          });
      };
      decodeToken(urlToken.token);
    }
  }, [user, urlToken]);

  if (!user) {
    return (
      <Container>
        <div style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
          <Alert
            message={<h3>Анхаар</h3>}
            description={
              <div>
                Та нэвтэрч орсоны дараа баталгаажуулах холбоос дээр дарна уу.
                <br />
                Хэрэв та ESAN-д бүртгэлгүй бол эхлээд бүртгүүлэн нэвтэрч орсоны
                дараа баталгаажуулах холбоосоо дахин ашиглана уу.
              </div>
            }
            type="error"
            closable
          />
        </div>
      </Container>
    );
  }

  if (result && result.status && result.status === "success") {
    return (
      <Container>
        <div style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
          <Alert
            message=""
            description={
              <div>
                Та{" "}
                <span style={{ fontWeight: "bold" }}>
                  {
                    result.data.insert_map_users_organizations.returning[0]
                      .organization.name
                  }
                </span>{" "}
                байгууллагад амжилттай уригдлаа.
                <br /> Системээс гарч дахин нэвтэрч орсоны дараа{" "}
                <span style={{ fontWeight: "bold" }}>
                  {
                    result.data.insert_map_users_organizations.returning[0]
                      .organization.name
                  }
                </span>{" "}
                байгууллагад орох боломжтой болно.
              </div>
            }
            type="info"
            closable
          />
        </div>
      </Container>
    );
  } else if (result && result.message) {
    return (
      <Container>
        <div style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
          <Alert
            message=""
            description={result && result.message}
            type="info"
            closable
          />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
        <Spin />
      </div>
    </Container>
  );
};

export default withLayout({})(Worker);
