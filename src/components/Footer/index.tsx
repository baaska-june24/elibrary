import * as React from "react";
import Link from "next/link";
import { Row, Col, Icon } from "antd";
import Container from "~/components/Container";
import Logo from "~/components/Logo";
import "./style.less";

export default () => (
  <footer>
    <div className="footer-wrapper">
      <Container>
        <Row type="flex" gutter={20}>
          <Col xs={24} sm={6} md={6} lg={6}>
            <Logo color="black" />
            <p
              style={{
                color: "#454545",
                lineHeight: 1.8,
                padding: "1rem 0"
              }}
            >
              Салбар, салбарын бүх төрлийн бүтээлүүдийг нэг дор төвлөрүүлсэн
              мэдлэгийн нэгдсэн сан
            </p>
          </Col>
          <Col xs={24} sm={6} md={6} lg={6}>
            <h3>Туслах цэс</h3>
            <ul>
              <li>
                <a href="https://info.esan.mn/" target="_blank">
                  Сайтын тухай
                </a>
              </li>

              <li>
                <Link href="/terms">
                  <a>Үйлчилгээний нөхцөл</a>
                </Link>
              </li>
              <li>
                <a href="https://info.esan.mn/p/" target="_blank">
                  Хамтран ажиллах
                </a>
              </li>
              <li>
                <a
                  href="https://info.esan.mn/%d0%bd%d1%83%d1%83%d1%86%d0%bb%d0%b0%d0%bb%d1%8b%d0%bd-%d0%b1%d0%be%d0%b4%d0%bb%d0%be%d0%b3%d0%be/"
                  target="_blank"
                >
                  Нууцлалын бодлого
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={6} md={6} lg={6}>
            <h3>Тусламж</h3>
            <ul>
              <li>
                <a href="https://info.esan.mn/h/" target="_blank">
                  Контент нийлүүлэгч болох
                </a>
              </li>
              <li>
                <a href="https://info.esan.mn/doc/" target="_blank">
                  Системийг ашиглах заавар
                </a>
              </li>
              <li>
                <a href="https://info.esan.mn/keyword/" target="_blank">
                  Нэр томъёоны тайлбар
                </a>
              </li>
              <li>
                <a href="https://info.esan.mn/faq/" target="_blank">
                  Түгээмэл асуулт
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={6} md={6} lg={6}>
            <h3>Холбоо барих</h3>
            <address>
              <p>
                <strong>Хаяг:</strong>
              </p>
              <p>Хан-Уул дүүрэг, 15-р хороо,</p>
              <p>LS плаза, 10 давхар</p>
              <p>
                <strong>Утас: </strong>(+976) 7505-9911
              </p>
              <p>
                <strong>И-Мэйл: </strong>contact@esan.mn
              </p>
            </address>
            <a href="https://www.facebook.com/esanlibrary/" target="_blank">
              <Icon type="facebook" style={{ fontSize: "20px" }} />
            </a>
            <a href="https://www.instagram.com/esan.official/" target="_blank">
              <Icon
                type="instagram"
                style={{
                  fontSize: "20px",
                  marginLeft: "20px"
                }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="copyright">
      © 2016 - {new Date().getFullYear()} <a href="#">esan.mn</a> Степпелинк
      ХХК. Зохиогчийн эрх хуулиар хамгаалагдсан.
    </div>
  </footer>
);
