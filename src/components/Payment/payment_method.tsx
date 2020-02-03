import * as React from "react";
import { Row, Col } from "antd";
import "./style.less";
import { isMobile } from "react-device-detect";
interface IProps {
  invoiceInfo: any;
}
const PaymentMethod = (props: IProps) => {
  const { invoiceInfo } = props;

  const getDeepLink = (deepLinks: any[], bankName: any) => {
    const currentBank = deepLinks.find(item => item.name === bankName);
    return currentBank ? currentBank.link : "";
  };
  console.log("INFO", invoiceInfo);

  return (
    <Row>
      <Col lg={32} md={24} sm={48} xs={48}>
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Төлбөрийн хэлбэрээ сонгоно уу
        </h3>
        <Row type="flex" gutter={10}>
          <Col lg={12} md={24} sm={24} xs={24}>
            <div className="qpay">
              <img src="/images/qpay.webp" alt="qpay" />
              <p>Qpay үйлчилгээг ашиглан төлбөр хийх</p>
              {invoiceInfo && invoiceInfo.qpay && invoiceInfo.qpay.jsonData && (
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={
                    "data:image/jpeg;base64," +
                    invoiceInfo.qpay.jsonData.qrImage
                  }
                  className="qrimg"
                />
              )}
              {isMobile && (
                <div className="payment-bank-apps">
                  <div>
                    <a
                      href={
                        invoiceInfo &&
                        invoiceInfo.qpay &&
                        invoiceInfo.qpay.jsonData &&
                        getDeepLink(
                          invoiceInfo.qpay.jsonData.deeplinks,
                          "Khan bank"
                        )
                      }
                    >
                      <img
                        src="https://cdn6.aptoide.com/imgs/0/1/6/016a34385074c6ad4d9a5d2dd8512525_icon.png?w=256"
                        alt="khanbank"
                      />
                      <p>Хаан банк</p>
                    </a>
                    <a
                      href={
                        invoiceInfo &&
                        invoiceInfo.qpay &&
                        invoiceInfo.qpay.jsonData &&
                        getDeepLink(
                          invoiceInfo.qpay.jsonData.deeplinks,
                          "State bank"
                        )
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwlcpOzpJvooQzrfErBHF7gRL5GJzEs496ZX78Dd4MSm_BA-Q"
                        alt="khanbank"
                      />
                      <p>Төрийн банк</p>
                    </a>
                  </div>
                  <div>
                    <a
                      href={
                        invoiceInfo &&
                        invoiceInfo.qpay &&
                        invoiceInfo.qpay.jsonData &&
                        getDeepLink(
                          invoiceInfo.qpay.jsonData.deeplinks,
                          "Xac bank"
                        )
                      }
                    >
                      <img
                        src="https://lh3.googleusercontent.com/XdgGl-1W5nsU5vl-qyq1QaaHifnq-SgEh6Dh_DdJ4hEtMfGSgjpQIkOq7Ly3zfG3zA8"
                        alt="khanbank"
                      />
                      <p>Хас банк</p>
                    </a>
                    <a
                      href={
                        invoiceInfo &&
                        invoiceInfo.qpay &&
                        invoiceInfo.qpay.jsonData &&
                        getDeepLink(
                          invoiceInfo.qpay.jsonData.deeplinks,
                          "Most money"
                        )
                      }
                    >
                      <img
                        src="https://img11.androidappsapk.co/300/3/9/f/Cust.Menu.png"
                        alt="khanbank"
                      />
                      <p>Мост</p>
                    </a>
                  </div>
                </div>
              )}
              <p>
                Та уг кодыг гар утсаараа уншуулснаар таны төлбөр хийгдэх болно
              </p>
            </div>
          </Col>
          {/* <Col lg={8} md={24} sm={24} xs={24}>
            <div className="lend">
              <img
                style={{ width: 150 }}
                src={require("../../images/lend_logo.svg")}
              />
              <p>Lend үйлчилгээг ашиглан төлбөр хийх</p>
              {invoiceInfo && invoiceInfo.lend && invoiceInfo.lend.qrString && (
                <QRCode
                  style={{ width: "200px", height: "200px" }}
                  value={invoiceInfo.lend.qrString}
                />
              )}
              {isMobile && (
                <Button
                  style={{ width: 150 }}
                  shape="round"
                  type="primary"
                  href={invoiceInfo && invoiceInfo.lend.qrLink}
                >
                  Төлөх
                </Button>
              )}
              <p>
                Та уг кодыг гар утсаараа уншуулснаар таны төлбөр хийгдэх болно
              </p>
            </div>
          </Col> */}
          <Col lg={12} md={12} sm={12} xs={24}>
            <div className="bank-container">
              <img
                className="bankLogo"
                src="https://s3-ap-southeast-1.amazonaws.com/cdn.esan.mn/public/webimages/golomtLogo.png"
              />
              <Row>
                <div className="BankPaymentType">
                  <form
                    method="post"
                    action={
                      invoiceInfo &&
                      invoiceInfo.golomt &&
                      invoiceInfo.golomt.url
                    }
                  >
                    <input
                      type="hidden"
                      name="key_number"
                      value={
                        invoiceInfo &&
                        invoiceInfo.golomt &&
                        invoiceInfo.golomt.key
                      }
                    />
                    <input
                      type="hidden"
                      name="trans_number"
                      value={
                        invoiceInfo &&
                        invoiceInfo.golomt &&
                        invoiceInfo.golomt.invoiceNumber
                      }
                    />
                    <input
                      type="hidden"
                      name="trans_amount"
                      value={
                        invoiceInfo &&
                        invoiceInfo.golomt &&
                        invoiceInfo.golomt.amount
                      }
                    />
                    {/* <input type="hidden" name="subID" value="2" /> */}
                    {/* хэл сонгох 0 Монгол 1 Англи */}
                    <input type="hidden" name="lang" value="1" />
                    {/* Socialpay эсэх*/}
                    {/* <input name="socila" value="1" /> */}
                    <button type="submit" className="bankCard">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/cdn.esan.mn/public/webimages/golomtVisa.png"
                        alt="Golomt bank"
                      />
                    </button>
                  </form>

                  <form
                    method="post"
                    action={
                      invoiceInfo &&
                      invoiceInfo.golomt &&
                      invoiceInfo.golomt.url
                    }
                  >
                    <input
                      type="hidden"
                      name="key_number"
                      value={
                        invoiceInfo &&
                        invoiceInfo.golomt &&
                        invoiceInfo.golomt.key
                      }
                    />
                    <input
                      type="hidden"
                      name="trans_number"
                      value={
                        invoiceInfo &&
                        invoiceInfo.golomt &&
                        invoiceInfo.golomt.invoiceNumber
                      }
                    />
                    <input
                      type="hidden"
                      name="trans_amount"
                      value={
                        invoiceInfo &&
                        invoiceInfo.golomt &&
                        invoiceInfo.golomt.amount
                      }
                    />
                    {/* хэл сонгох 0 Монгол 1 Англи */}
                    <input type="hidden" name="lang" value="1" />
                    {/* <input type="hidden" name="subID" value="2" /> */}
                    {/* Socialpay эсэх*/}
                    <input type="hidden" name="social" value="1" />
                    <button type="submit" className="bankCard">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/cdn.esan.mn/public/webimages/socialPay.png"
                        alt="Social Pay"
                      />
                    </button>
                  </form>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PaymentMethod;
