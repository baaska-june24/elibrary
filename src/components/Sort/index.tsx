import * as React from "react";
import { useRouter } from "next/router";
import { Icon, Row, Col, Menu, Dropdown } from "antd";
import useMedia from "use-media";
import DataFilter from "~/components/Filter";
interface IProps {
  handleSelectChange: (key: any) => void;
}

const sortOptions = [
  {
    key: "newFirst",
    title: "Шинэ нь эхэндээ"
  },
  {
    key: "oldFirst",
    title: "Хуучин нь эхэндээ"
  },
  {
    key: "highRate",
    title: "Өндөр үнэлгээ эхэндээ"
  },
  {
    key: "lowerPrice",
    title: "Үнэ хямд нь эхэндээ"
  },
  {
    key: "newItemFirst",
    title: "Шинэ бүтээл нь эхэндээ"
  }
];

const Sort = (props: IProps) => {
  const isMobileScreen = useMedia({ maxWidth: 767 });
  const menu = (
    <Menu onClick={({ key }) => props.handleSelectChange(key)}>
      {sortOptions.map(opt => (
        <Menu.Item key={opt.key}>{opt.title}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Row>
      {isMobileScreen && (
        <Col md={18} xs={8}>
          <DataFilter />
        </Col>
      )}
      <Col
        md={isMobileScreen ? 6 : 24}
        xs={16}
        style={{
          textAlign: "right",
          marginTop: isMobileScreen ? "5px" : null
        }}
      >
        <Icon type="sort-ascending" />
        <span style={{ marginRight: "10px" }}> Эрэмблэх:</span>
        <Dropdown overlay={menu} placement="bottomRight">
          <a className="ant-dropdown-link">
            Сонгох <Icon type="down" />
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Sort;
