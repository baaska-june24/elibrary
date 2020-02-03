import * as React from "react";
import { Row, Col } from "antd";
import Statistic from "~/components/Statistic";

interface IProps {
  data: any;
}
const StatisticGroup = ({ data }: IProps) => {
  return (
    <Row gutter={20} type="flex" align="middle" justify="center">
      <Col xs={24} sm={24} md={8} lg={24}>
        <Statistic
          value={data.contents_aggregate.aggregate.count || 0}
          title="НИЙТ КОНТЕНТ"
        />
      </Col>
      <Col xs={24} sm={24} md={8} lg={24}>
        <Statistic
          value={data.organizations_aggregate.aggregate.count || 0}
          title="КОНТЕНТ НИЙЛҮҮЛЭГЧ"
          color="pink"
        />
      </Col>
      <Col xs={24} sm={24} md={8} lg={24}>
        <Statistic
          value={data.schools_aggregate.aggregate.count || 0}
          title="ИХ, ДЭЭД СУРГУУЛь"
          color="blue"
        />
      </Col>
    </Row>
  );
};

export default StatisticGroup;
