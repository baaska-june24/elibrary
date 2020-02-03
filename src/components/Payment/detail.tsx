import * as React from "react";
import { useRouter } from "next/router";
import { Row, Col, Spin } from "antd";
import { useSubscription } from "@apollo/react-hooks";
import {
  Get_Transaction_By_PkidSubscription,
  Get_Transaction_By_PkidSubscriptionVariables
} from "~/generated/graphql";
import { GET_TRANSACTION_BY_PKID } from "~/queries/payment.graphql";
import Container from "~/components/Container";
import DetailList from "./detail_item";

import "./style.less";

interface IProps {
  location: Location;
}
const DetailInvoice = (props: IProps) => {
  const router = useRouter();
  const { id: transactionId } = router.query;
  const { data, loading } = useSubscription<
    Get_Transaction_By_PkidSubscription,
    Get_Transaction_By_PkidSubscriptionVariables
  >(GET_TRANSACTION_BY_PKID, {
    variables: {
      id: transactionId
    }
  });
  return (
    <Spin spinning={loading}>
      <Container>
        <Row>
          <Col lg={32} md={24} sm={48} xs={48}>
            {data &&
              data.payment_transactions_by_pk &&
              data.payment_transactions_by_pk.meta && (
                <div className="payment">
                  <h4>Гүйлгээний дэлгэрэнгүй</h4>
                  <DetailList
                    items={
                      data &&
                      data.payment_transactions_by_pk &&
                      data.payment_transactions_by_pk.header
                        ? data.payment_transactions_by_pk.header.details
                        : []
                    }
                  />
                  <Row>
                    <Col lg={32} md={24} sm={48} xs={48}>
                      <Row gutter={10}>
                        <Col>
                          <div className="ebarimt">
                            <Row>
                              <Col>
                                <img src="/images/ebarimt.svg" />
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div
                                  style={{
                                    height: "200px",
                                    margin: "0 auto",
                                    width: "200px"
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      data.payment_transactions_by_pk.meta
                                        .qrImage
                                  }}
                                />
                              </Col>
                              {data.payment_transactions_by_pk.meta.lottery &&
                                data.payment_transactions_by_pk.meta.lottery !==
                                  "" && (
                                  <p>
                                    <b>{`Сугалааны дугаар: ${data.payment_transactions_by_pk.meta.lottery}`}</b>
                                  </p>
                                )}
                              <p>
                                <b>{`Дүн: ${data.payment_transactions_by_pk.meta.amount}`}</b>
                              </p>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              )}
          </Col>
        </Row>
      </Container>
    </Spin>
  );
};

export default DetailInvoice;
