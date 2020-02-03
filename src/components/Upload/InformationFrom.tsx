import * as React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import { DataProxy } from "apollo-cache";
import { FetchResult } from "apollo-link";
import { useQuery } from "@apollo/react-hooks";
import { Form, Select, Input, Row, Col, Button, DatePicker } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { filterOption } from "~/utils/helpers";
import AuthorForm from "./AuthorForm";
import { GET_LIST_AUTHORS } from "~/queries/authors.graphql";
import {
  Get_List_AuthorsQueryVariables,
  Get_List_AuthorsQuery,
  Authors_Bool_Exp,
  Authors_Order_By,
  Order_By
} from "~/generated/graphql";

import "./style.less";

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const dateFormat = "YYYY/MM/DD";
interface IProps extends FormComponentProps {
  typeName: string;
}

const InfoForm = (props: IProps) => {
  const { getFieldDecorator, setFieldsValue, getFieldValue } = props.form;

  const [isShow, setIsShow] = useState(false);
  const [query, setQuery] = useState("");

  const { data, refetch } = useQuery<
    Get_List_AuthorsQuery,
    Get_List_AuthorsQueryVariables
  >(GET_LIST_AUTHORS, {
    variables: {
      limit: 15,
      orderBy: [{ created_at: Order_By.Desc }]
    }
  });

  useEffect(() => {
    const limit = 15;
    let where: Authors_Bool_Exp | null;
    let order_by: Authors_Order_By | null;
    if (query && query.length > 0) {
      where = {
        ...where,
        _or: ["firstname", "lastname"].map(field => ({
          [field]: {
            _like: `%${query}%`
          }
        }))
      };
      order_by = {
        ...order_by,
        created_at: Order_By.Desc
      };
    }
    refetch({ limit, where, orderBy: [{ created_at: Order_By.Desc }] });
  }, [query]);

  const NotFound = () => {
    return (
      <div>
        Таны хайсан зохиогч олдсонгүй шинээр нэмэх бол
        <Button type="link" onClick={() => setIsShow(true)}>
          ЭНД
        </Button>
        дарна уу
      </div>
    );
  };

  const onNewAuthor = (proxy: DataProxy, result: FetchResult<any>) => {
    const cachedData = proxy.readQuery<
      Get_List_AuthorsQuery,
      Get_List_AuthorsQueryVariables
    >({ query: GET_LIST_AUTHORS });
    const newRecord = result.data.insert_authors.returning[0];
    cachedData.authors.push(newRecord);

    proxy.writeQuery({
      data: cachedData,
      query: GET_LIST_AUTHORS
    });

    const author = getFieldValue("author") || [];
    author.push(newRecord.id);

    setFieldsValue({
      author
    });
  };

  return (
    <>
      <FormItem label="Гарчиг">
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "Гарчиг оруулна уу" }]
        })(<Input placeholder="Гарчиг" />)}
      </FormItem>
      <FormItem label="Товч тайлбар">
        {getFieldDecorator("description", {
          rules: [{ required: true, message: "Товч тайлбар  оруулна уу" }]
        })(<TextArea rows={4} placeholder="Товч тайлбар  оруулна уу" />)}
      </FormItem>
      {data && data.authors && (
        <FormItem label="Зохиогч" required>
          <Row type="flex" gutter={20}>
            <Col md={24}>
              {getFieldDecorator("author", {
                rules: [{ required: true, message: "Зохиолчийг сонгоно уу" }]
              })(
                <Select
                  className="select-form"
                  placeholder="Зохиолчийг сонгоно уу"
                  mode="multiple"
                  allowClear
                  filterOption={filterOption}
                  onSearch={(value: any) => {
                    setQuery(value);
                  }}
                  notFoundContent={NotFound()}
                >
                  {data.authors.map(({ id, firstname, lastname }) => (
                    <Option key={id} value={id}>
                      {`${firstname} ${lastname}`}
                    </Option>
                  ))}
                </Select>
              )}
            </Col>
          </Row>
        </FormItem>
      )}
      {props.typeName === "book" && (
        <FormItem label="ISBN" required>
          <Row type="flex" gutter={20}>
            <Col md={24}>{getFieldDecorator("isbn")(<Input />)}</Col>
          </Row>
        </FormItem>
      )}
      {(props.typeName === "magazine" || props.typeName === "newspaper") && (
        <>
          <FormItem label="Дугаар" required>
            <Row type="flex" gutter={20}>
              <Col md={24}>
                {getFieldDecorator("number", {
                  rules: [{ required: true, message: "Дугаар оруулна уу" }]
                })(<Input />)}
              </Col>
            </Row>
          </FormItem>
          <FormItem label="Давтамж">
            <Row type="flex" gutter={20}>
              <Col md={24}>
                {getFieldDecorator("frequency")(
                  <Select
                    className="select-form"
                    placeholder="Давтамж сонгоно уу"
                  >
                    <Option value="daily">Өдөр тутам</Option>
                    <Option value="weekly">7 хоног тутам</Option>
                    <Option value="monthly">Сар тутам</Option>
                    <Option value="quarterly">Улирал тутам</Option>
                    <Option value="half-yearly">Хагас жил тутам</Option>
                    <Option value="yearly">Жил тутам</Option>
                  </Select>
                )}
              </Col>
            </Row>
          </FormItem>
        </>
      )}
      <FormItem label="Хэвлэгдсэн огноо" required>
        <Row type="flex" gutter={20}>
          <Col md={24}>
            {getFieldDecorator("published_at", {
              rules: [
                { required: true, message: "Хэвлэгдсэн огноо оруулна уу" }
              ],
              initialValue: moment.utc("2019/01/01", dateFormat)
            })(
              <DatePicker
                allowClear={false}
                format={dateFormat}
                style={{ width: "100%" }}
                placeholder="Хэвлэгдсэн огноо оруулна уу"
              />
            )}
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Түлхүүр үг" required>
        <Row type="flex" gutter={20}>
          <Col md={24}>
            {getFieldDecorator("keyword", {
              rules: [{ required: true, message: "Түлхүүр үгээ оруулна уу" }]
            })(
              <Select
                placeholder="Түлхүүр үгээ оруулаад ENTER товч дарна уу"
                className="select-form"
                mode="tags"
                allowClear
                filterOption={filterOption}
              />
            )}
          </Col>
        </Row>
      </FormItem>
      <AuthorForm setIsShow={setIsShow} isShow={isShow} update={onNewAuthor} />
    </>
  );
};

export default InfoForm;
