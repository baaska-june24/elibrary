import * as React from "react";
import { Row, Col } from "antd";
// components
import Container from "~/components/Container";
import UserContext from "~/context";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";
import "./style.less";
import useMedia from "use-media";

const User = () => {
  const [user]= React.useContext(UserContext);
  const isMobileScreen = useMedia({ maxWidth: 767 });
  if (!user) {
    return null;
  }
  const avatarFile: any =
    (user.files_connection &&
      user.files_connection.length > 0 &&
      user.files_connection[0]) ||
    null;
  let avatarUrl = null;
  if (avatarFile && avatarFile.file_avatar) {
    const imageRequest = JSON.stringify({
      bucket: user.files_connection[0].file.bucket,
      edits: {
        resize: {
          fit: "cover",
          height: 100,
          width: 100
        },
        [canLoadWebp ? "webp" : "jpeg"]: {
          quality: 80
        }
      },
      key: avatarFile.file_avatar
    });
    avatarUrl = getImageUrl(imageRequest);
  } else {
    avatarUrl =
      "https://image.esan.mn/eyJidWNrZXQiOiJjZG4uZXNhbi5tbiIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MTAwfSwid2VicCI6eyJxdWFsaXR5Ijo4MH19LCJrZXkiOiJhdmF0YXIvNGZscjdqeHBzZG9qZl9mYXZpY29uLnBuZyJ9";
  }

  return (
    <>
      <Container>
        <Row gutter={10}>
          <Col md={2} sm={4} xs={8}>
            <div
              className="profile-img"
              style={
                isMobileScreen
                  ? { backgroundImage: `url(${avatarUrl})`, marginTop: "120px" }
                  : { backgroundImage: `url(${avatarUrl})` }
              }
            />
          </Col>
          <Col md={10} sm={20} xs={16}>
            <div
              className="profile-info"
              style={isMobileScreen ? { marginTop: "120px" } : null}
            >
              <h3>{user.displayName}</h3>
              <p>{user.email}</p>
              <h4>Энгийн хэрэглэгч</h4>
            </div>
          </Col>
          <Col md={12} sm={24} xs={24}>
            {/* <div className="information">
                <Row gutter={10}>
                  <Col md={4} sm={6} xs={6}>
                    <Icon
                      type="file-text"
                      style={{ fontSize: "60px", margin: "20px" }}
                    />
                  </Col>
                  <Col md={20} sm={18} xs={18}>
                    <p>
                      Үндсэн хэрэглэгч болсноор үнэгүй болон гишүүнчлэл ангилалд
                      хамаарагдах бүх контентуудыг үзэх боломжтой.
                    </p>
                    <a href="#">Дэлгэрэнгүй</a>
                  </Col>
                </Row>
              </div>*/}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
