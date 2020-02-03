import * as React from "react";
import { useState, KeyboardEvent } from "react";
import { useMedia } from "use-media";
import { Input, Dropdown, Menu, Icon, Form, Select, Row, Col } from "antd";
import Button from "../Button";
import "./style.less";

interface IProps {
  drawer?: boolean;
  placeholder?: string;
  onSearch: (query: string, options?: any) => void;
}

interface ISearchDropdownProps {
  placeholder?: string;
  onSearch: (query: string, options?: any) => void;
}

export const SearchDropdown = (props: ISearchDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const formItemLayout = {
    labelCol: {
      sm: { span: 8 },
      xs: { span: 24 }
    },
    wrapperCol: {
      sm: { span: 16 },
      xs: { span: 24 }
    }
  };

  const dropdownMenu = (
    <Menu className="esan-search-dropdown">
      <Form>
        <Form.Item {...formItemLayout} label="Ангилал" labelAlign="left">
          <Select placeholder={props.placeholder} />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Контентын төрөл"
          labelAlign="left"
        >
          <Select placeholder={props.placeholder} />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Төлбөрийн нөхцөл"
          labelAlign="left"
        >
          <Select placeholder={props.placeholder} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Огноо" labelAlign="left">
          <Row gutter={8} type="flex">
            <Col>
              <Select placeholder={props.placeholder} />
            </Col>
            <Col>-</Col>
            <Col>
              <Select placeholder={props.placeholder} />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...formItemLayout} label="Хэл" labelAlign="left">
          <Select placeholder={props.placeholder} />
        </Form.Item>
      </Form>
    </Menu>
  );
  return (
    <Dropdown
      overlay={dropdownMenu}
      placement="bottomLeft"
      visible={isVisible}
      trigger={["click"]}
    >
      <Button type="link" onClick={() => setIsVisible(!isVisible)}>
        Бүгд <Icon type={isVisible ? "up" : "down"} style={{ fontSize: 12 }} />
      </Button>
    </Dropdown>
  );
};

export default (props: IProps) => {
  const [query, setQuery] = useState("");
  const isMobile = useMedia({ maxWidth: 767 });

  const addonAfter = (
    <Button type="link" onClick={() => props.onSearch(query)}>
      <Icon type="search" />
    </Button>
  );

  const handleKeyPress = (e: KeyboardEvent) => {
    const keyCode = e.keyCode || e.which;

    if (keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      props.onSearch(query);
    }
  };
  return (
    <div
      className={`esan-search-input-wrapper ${
        props.drawer ? "esan-search-drawer" : ""
      }`}
    >
      <Input
        addonBefore={isMobile ? null : null}
        addonAfter={addonAfter}
        placeholder={props.placeholder}
        className="esan-search-input"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        allowClear
      />
    </div>
  );
};
