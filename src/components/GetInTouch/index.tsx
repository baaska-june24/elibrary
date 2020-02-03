import * as React from "react";
import { Row, Col, Input, Icon } from "antd";
import Container from "~/components/Container";
import "./style.less";

export default () => (
  <Container>
    <div className="get-in-touch">
      <Row gutter={20} type="flex" align="middle" justify="center">
        <Col xs={24} md={2} style={{ textAlign: "center" }}>
          <Icon type="bulb" />
        </Col>
        <Col xs={24} md={10}>
          Хэрэв та цаг тухай бүрт урамшуулал болон хямдралын талаар мэдээлэл авч
          байхийг хүсвэл бидэнтэй нэгдээрэй.
        </Col>
        <Col xs={20} md={12}>
          <Input
            placeholder="Имэйл хаягаа оруулна уу"
            prefix={<Icon type="mail" />}
          />
        </Col>
      </Row>
    </div>
  </Container>
);
