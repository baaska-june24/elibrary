import * as React from "react";
import { Row, Col } from "antd";
import { chunk } from "lodash";
import Card from "~/components/Content/Card";

interface IProps {
  contents: any[];
  cols?: number;
}

export default ({ contents, cols = 8 }: IProps) => {
  const rows = chunk(contents, cols);

  return (
    <>
      {rows &&
        rows.map((rowContents: any[], index) => (
          <Row
            type="flex"
            gutter={10}
            key={`row-${cols}-${index}`}
            className="item-list"
          >
            {rowContents &&
              rowContents.map(content => (
                <Col
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={24 / cols}
                  key={content.id}
                >
                  <Card content={content} />
                </Col>
              ))}
          </Row>
        ))}
    </>
  );
};
