import * as React from "react";
import { Row, Col, Button, Spin } from "antd";
import "./style.less";
import Container from "~/components/Container";
import {
  Get_MembershipQuery,
  Get_MembershipQueryVariables
} from "~/generated/graphql";
import { GET_MEMBERSHIP } from "~/queries/membership.graphql";
import { useQuery } from "@apollo/react-hooks";
import UserContext from "~/context";
import moment from "moment";
import { useState } from "react";
import { initialState, reducer } from "~/reducer/basket";
import { useRouter } from "next/router";

const Membership = () => {
  const router = useRouter();
  const [, dispatch] = React.useReducer(reducer, initialState);
  const [user]= React.useContext(UserContext);
  const [currentMemberShipId, setCurrentMemberShipId] = useState();
  const [beginDate, setBeginDate] = useState();
  const [endDate, setEndDate] = useState();
  const type = "membership";

  const { data, loading } = useQuery<
    Get_MembershipQuery,
    Get_MembershipQueryVariables
  >(GET_MEMBERSHIP, {
    variables: {
      user_id: user && user.id
    }
  });
  const memberships =
    data && data.memberships && data.memberships.length > 0
      ? data.memberships
      : null;
  if (!currentMemberShipId && memberships) {
    setCurrentMemberShipId(memberships[0].id);
  }

  if (!beginDate && !loading) {
    if (
      data &&
      data.lastMembership &&
      data.lastMembership.aggregate &&
      data.lastMembership.aggregate.max &&
      data.lastMembership.aggregate.max.end_date
    ) {
      //const firstDate = moment(data.lastMembership.aggregate.max.end_date); changed
      const firstDate = moment();
      setBeginDate(firstDate);
      if (memberships && memberships.length > 0) {
        setEndDate(moment(firstDate.clone()).add(memberships[0].day, "days"));
      }
    } else {
      setBeginDate(moment());
      if (memberships && memberships.length > 0) {
        setEndDate(moment().add(memberships[0].day, "days"));
      }
    }
  }

  const handleClick = (membership: any) => {
    setCurrentMemberShipId(membership.id);
    setEndDate(beginDate.clone().add(membership.day, "days"));
  };

  const lastDate =
    data &&
    data.lastMembership &&
    data.lastMembership.aggregate &&
    data.lastMembership.aggregate.max &&
    data.lastMembership.aggregate.max.end_date;
  const check = moment().diff(lastDate, "days") > 0;

  const handleSave = () => {
    const currentMembership =
      memberships && memberships.find(i => i.id === currentMemberShipId);
    if (!currentMembership) {
      return;
    }
    const itemData = {
      discount: 0,
      id: `${type}_${currentMembership.id}`,
      item_id: currentMembership.id,
      name: currentMembership.name,
      price: currentMembership.price,
      qty: 1,
      total: currentMembership.price,
      type
    };
    dispatch({ type: "ADD", itemType: type, data: itemData });
    router.push("/payment");
  };
  return (
    <Spin spinning={loading}>
      <Container>
        <Row
          type="flex"
          gutter={40}
          style={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          <Col md={5} sm={24} xs={24}>
            <div className="pack">
              <p>Одоогийн багц :</p>
              <h4>
                {data &&
                data.currentMembership &&
                data.currentMembership.length > 0
                  ? data.currentMembership[0].membership.name
                  : "Байхгүй"}
              </h4>
              <p>Хугацаа:</p>
              <h4>
                {lastDate ? moment(lastDate).format("YYYY-MM-DD") : "Байхгүй"}
              </h4>
              <p>хүртэл</p>
              <p>Төлөв:</p>
              <span
                style={
                  lastDate
                    ? check
                      ? {
                          color: "red",
                          border: "1px solid",
                          borderRadius: "5px",
                          padding: "5px"
                        }
                      : {
                          color: "green",
                          border: "1px solid",
                          borderRadius: "5px",
                          padding: "5px"
                        }
                    : {
                        color: "gray",
                        border: "1px solid",
                        borderRadius: "5px",
                        padding: "5px"
                      }
                }
              >
                {lastDate ? (check ? "Дууссан" : "Идэвхитэй") : "Идэвхигүй"}
              </span>
              {/* <Button
                type="primary"
                shape="round"
                icon="shopping-cart"
                style={{
                  margin: "10px"
                }}
              >
                Сунгалт хийх
              </Button> */}
            </div>
          </Col>
          <Col md={18}>
            <Row type="flex" gutter={40}>
              <Col md={12} sm={12} xs={24}>
                <div className="pack1">
                  <Row type="flex" gutter={40}>
                    <Col md={24} sm={24} xs={24}>
                      <h2>Энгийн хэрэглэгч</h2>
                      <h5>Контент</h5>
                      <p>
                        Зөвхөн үнэгүй контент болон төлбөртэй контент үзэх
                        боломжтой
                      </p>
                      <h4>Хуулбар шалгуур</h4>
                      <p>
                        Текстээс 1000 тэмдэгтэд багтаан хуулбар шалгуурыг
                        ашиглах
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <div className="pack2">
                  <Row type="flex" gutter={40}>
                    <Col md={24} sm={24} xs={24}>
                      <h2>Үндсэн хэрэглэгч</h2>
                      <h5>Контент</h5>
                      <p>
                        Үндсэн хэрэглэгч болсноор үнэгүй болон гишүүнчлэл
                        ангилалд хамаарагдах бүх контентуудыг үзэх боломжтой.
                      </p>
                      <h4>Хуулбар шалгуур</h4>
                      <p>Текстээр болон Файлаас хуулбар шалгах боломжтой</p>
                      <h2>Сарын суурь хураамж: </h2>
                      <h3>5000₮</h3>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row type="flex">
              <Col md={24} sm={24} xs={24}>
                <h3 style={{ textAlign: "center", marginTop: "60px" }}>
                  Багцаа сонгоно уу
                </h3>
              </Col>
            </Row>

            <Row type="flex" gutter={40}>
              {memberships &&
                memberships.map(membership => {
                  return (
                    <Col key={membership.id} md={6} sm={12} xs={12}>
                      <div
                        key={membership.id}
                        className={
                          membership.id === currentMemberShipId
                            ? "pack4"
                            : "pack3"
                        }
                        onClick={e => handleClick(membership)}
                      >
                        <h3>{membership.name}</h3>
                        <p>{membership.price}₮</p>
                      </div>
                    </Col>
                  );
                })}
            </Row>
            <Row type="flex">
              <Col md={24} sm={24} xs={24}>
                <p style={{ textAlign: "center", marginTop: "10px" }}>
                  Эхлэх хугацаа : {moment().format("YYYY-MM-DD")}
                </p>
                <p style={{ textAlign: "center", marginTop: "-10px" }}>
                  Дуусах хугацаа : {endDate && endDate.format("YYYY-MM-DD")}
                </p>
                <div className="button">
                  <Button
                    type="primary"
                    shape="round"
                    icon="shopping-cart"
                    style={{
                      margin: "20px"
                    }}
                    onClick={handleSave}
                  >
                    Сунгалт хийх
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Spin>
  );
};

export default Membership;
