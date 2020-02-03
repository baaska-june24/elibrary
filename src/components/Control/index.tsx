import * as React from "react";
import { Row, Col, Checkbox } from "antd";
import "./style.less";
import Container from "~/components/Container";

const Controller = () => {
  return (
    <Container>
      <Row type="flex">
        <Col md={24}>
          <h1 style={{ textAlign: "center", color: "#ffa100" }}>
            Хяналтын хуудас
          </h1>
          <h4 style={{ textAlign: "right", marginRight: "30px" }}>Огноо</h4>
        </Col>
      </Row>
      <Row type="flex" gutter={32}>
        <Col md={3}>
          <div className="first">
            <h1>1</h1>
            <h3>үе шат</h3>
          </div>
        </Col>
        <Col md={17}>
          <div className="content">
            <h3>Гэрээ байгуулсан эсэх</h3>
            <h3>Хамтын ажиллагааны төлөвлөгөөг хамтран боловсруулах</h3>
          </div>
        </Col>
        <Col md={4}>
          <Row type="flex" gutter={10}>
            <Col md={6}>
              <div className="content">
                  <Checkbox defaultChecked />
              </div>
              <div className="content">
                  <Checkbox />
              </div>
            </Col>
            <Col md={18}>
              <div className="content">
                <p>2019-06-22</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row type="flex" gutter={32}>
        <Col md={3}>
          <div className="second">
            <h1>2</h1>
            <h3>үе шат</h3>
          </div>
        </Col>
        <Col md={17}>
          <div className="content">
            <h3>Контентийг дарааллын дагуу хүлээлцсэн эсэх</h3>
            <h3>
              <ul>
                <li>Ном, сурах бичгүүд</li>
                <li>Эрдэм шинжилгээний ажил</li>
                <li>Дипломын ажлууд</li>
              </ul>
            </h3>
            <h3>
              Сургалтын хөтөлбөрийн мэдээллийг ESAN-д өгсөн эсэх Админ эрх
              нээгдсэн эсэх
            </h3>
            <h2 />
          </div>
        </Col>
        <Col md={4}>
          <div className="content">
            <Checkbox />
          </div>
          <div className="content">
            <Checkbox />
          </div>
          <div className="content">
            <Checkbox />
          </div>
          <div className="content">
            <Checkbox />
          </div>
          <div className="content">
            <Checkbox />
          </div>
        </Col>
      </Row>
      <Row type="flex" gutter={32}>
        <Col md={3}>
          <div className="third">
            <h1>3</h1>
            <h3>үе шат</h3>
          </div>
        </Col>
        <Col md={17}>
          <div className="content">
            <h3>Контентуудыг удирдах эрх админд шилжсэн эсэх</h3>
            <h3>
              Удирдлагын самбарын үйлдлүүд хэвийн ажиллаж байгааг шалгасан эсэх
            </h3>
            <h3>
              <ul>
                <li>Оюутан болон ажилтан урих, хасах үйлдэл хэвийн</li>
                <li>
                  Контент оруулах, контентод өөрчлөлт оруулах үйлдэл хэвийн
                </li>
                <li>Санхүүгийн тайлан мэдээлл хэвийн</li>
              </ul>
            </h3>
          </div>
        </Col>
        <Col md={4}>
          <div className="content">
            <Checkbox />
          </div>
          <div className="content">
            <Checkbox />
          </div>
          <div className="content">
            <Checkbox />
          </div>
          <div className="content">
            <Checkbox />
          </div>
          <div className="content">
            <Checkbox />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Controller;
