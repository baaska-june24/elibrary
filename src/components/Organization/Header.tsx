import * as React from "react";
import Head from "next/head";
import { Row, Col, Button, Input, Form, message } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { useContext } from "react";
import { DataProxy } from "apollo-cache";
import { FormComponentProps } from "antd/lib/form";
import UserContext from "~/context";
import {
  Get_Single_Organization_InfoQuery,
  Get_Single_Organization_InfoQueryVariables
} from "~/generated/graphql";
import {
  UPDATE_ORGANIZATION,
  GET_SINGLE_ORGANIZATION_INFO
} from "~/queries/organizations.graphql";
import {
  Update_OrganizationMutation,
  Update_OrganizationMutationVariables
} from "~/generated/graphql";
// components
import Header from "~/components/Header";
import Container from "~/components/Container";
import AvatarUpload from "./Avatar";
import Menu from "./Menu";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

const { TextArea } = Input;

interface IProps extends FormComponentProps {
  contentCount: number;
  organization: any;
  isManagerOrWorker: boolean;
}

const ProfileHeader = (props: IProps) => {
  const [user] = useContext(UserContext);
  const { organization, isManagerOrWorker, contentCount } = props;
  const { getFieldDecorator } = props.form;

  const [UpdateOrganizationAction, { error: mutationError }] = useMutation<
    Update_OrganizationMutation,
    Update_OrganizationMutationVariables
  >(UPDATE_ORGANIZATION, { errorPolicy: "all" });

  const avatarKey = organization && organization.avatar;
  const imageRequest = JSON.stringify({
    bucket: organization?.avatar_bucket?.bucket,
    edits: {
      resize: {
        fit: "cover",
        height: 200,
        width: 200
      },
      [canLoadWebp ? "webp" : "jpeg"]: {
        quality: 80
      }
    },
    key: avatarKey
  });

  const avatarUrl = getImageUrl(imageRequest);

  const [isShow, setIsShow] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      props.form.validateFields((error, values) => {
        if (error) {
          throw error;
        }

        const allowed_roles = [
          "admin",
          "account_manager",
          "organization_manager"
        ];
        let role = "user";

        const roles = user?.roles_connection.map(({ role }) => role.name) || [];
        for (const index in allowed_roles) {
          const key = allowed_roles[index];
          if (roles.indexOf(key) > -1) {
            role = key;
            break;
          }
        }

        UpdateOrganizationAction({
          context: {
            headers: {
              "X-Hasura-Role": role
            }
          },
          variables: {
            set: { name: values.name, description: values.description },
            where: { id: { _eq: organization.id } }
          }
        })
          .then(value => {
            message.success("Амжилттай");
          })
          .catch(error => {
            message.error(error.message);
          });
      });
    } catch (error) {
      message.error(error);
    }
  };

  const handleUpdateAvatar = (proxy: DataProxy, result: any) => {
    const cachedData = proxy.readQuery<
      Get_Single_Organization_InfoQuery,
      Get_Single_Organization_InfoQueryVariables
    >({
      query: GET_SINGLE_ORGANIZATION_INFO,
      variables: { id: organization.id }
    });

    if (cachedData && cachedData.organization) {
      cachedData.organization.avatar =
        result.data.insert_files.returning[0].key;
    }
    proxy.writeQuery({
      data: cachedData,
      query: GET_SINGLE_ORGANIZATION_INFO,
      variables: { id: organization.id }
    });
  };

  const renderForm = () => {
    return (
      <Form onSubmit={e => handleSubmit(e)}>
        <Row type="flex" gutter={15}>
          <Col md={20} xs={22}>
            <Form.Item style={{ paddingLeft: "50px" }}>
              {getFieldDecorator("name", {
                initialValue: organization.name,
                rules: [
                  {
                    message: "Please input the name !",
                    required: true
                  }
                ]
              })(
                <Input
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "18px"
                  }}
                />
              )}
            </Form.Item>
            <Form.Item style={{ marginTop: "-30px", paddingLeft: "50px" }}>
              {getFieldDecorator("description", {
                initialValue: organization.description,
                rules: [
                  {
                    message: "Please input the description !",
                    required: true
                  }
                ]
              })(
                <TextArea
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "14px",
                    height: "150px"
                  }}
                  autosize={{ minRows: 2, maxRows: 3 }}
                  maxLength={100}
                />
              )}
            </Form.Item>
          </Col>
          <Col md={2} sm={2} xs={2}>
            <div style={{ textAlign: "center" }}>
              <Button
                style={{ color: "#F28A0B" }}
                type="link"
                shape="round"
                icon="check"
                htmlType="submit"
                ghost
              >
                Save
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    );
  };

  return (
    <Header style={{ position: "relative" }}>
      <Head>
        <title>{organization.name}</title>
      </Head>
      <Container style={{ paddingTop: "4rem" }}>
        <Row gutter={32} type="flex" align="middle">
          <Col lg={2} md={2} sm={4} xs={6}>
            <div className="organization-profile-img">
              <img src={avatarUrl} alt={organization.name} />
              {isManagerOrWorker && (
                <>
                  <Button
                    style={{ marginTop: "-60px" }}
                    type="link"
                    icon="camera"
                    onClick={() => setIsShow(true)}
                  >
                    Change
                  </Button>
                  <AvatarUpload
                    id={organization.id}
                    setIsShow={setIsShow}
                    isShow={isShow}
                    update={handleUpdateAvatar}
                  />
                </>
              )}
            </div>
          </Col>
          <Col lg={12} md={12} sm={18} xs={18}>
            <div className="organization-profile-info">
              {isManagerOrWorker ? (
                renderForm()
              ) : (
                <div
                  style={{
                    paddingLeft: "50px"
                  }}
                >
                  <h3>{organization.name}</h3>
                  <h5>{organization.description}</h5>
                </div>
              )}
            </div>
          </Col>
          <Col lg={4} md={4} sm={24} xs={24}>
            <div className="info1">
              <h3>{contentCount}</h3>
              <h4>Нийт контент</h4>
            </div>
          </Col>
        </Row>
        <br />
      </Container>
      <Container
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          maxHeight: 70
        }}
      >
        <Menu organization={props.organization} />
      </Container>
    </Header>
  );
};

export default Form.create<IProps>()(ProfileHeader);
