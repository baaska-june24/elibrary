import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { Form, Select, Col, Row, Icon, TreeSelect } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import arrayToTree from "array-to-tree";
import { Tree } from "array-to-tree";
import Button from "~/components/Button";
import {
  GET_LIST_TAG_TYPES,
  GET_LIST_TAG_OPTIONS
} from "~/queries/tags.graphql";
import {
  Get_List_Tag_TypesQuery,
  Get_List_Tag_TypesQueryVariables,
  Get_List_Tag_OptionsQuery,
  Get_List_Tag_OptionsQueryVariables,
  Tag_Options
} from "~/generated/graphql";
import UserContext from "~/context";
import "./style.less";

const FormItem = Form.Item;
const { Option } = Select;
const { SHOW_PARENT } = TreeSelect;

interface ITagFormProps extends FormComponentProps {}
interface ITagFormInputProps extends FormComponentProps {
  index: number;
}

type TagTypes = Get_List_Tag_TypesQuery["types"];
type TagOptions = { __typename?: "tag_options" } & Pick<
  Tag_Options,
  "parent_id"
> & {
    key: Tag_Options["id"];
    value: Tag_Options["id"];
    title: Tag_Options["value"];
  };

type TreeOption = TagOptions & {
  children?: TagOptions[];
};

const TagFormInput = (props: ITagFormInputProps) => {
  const [user]= useContext(UserContext);
  const client = useApolloClient();
  const { getFieldDecorator, getFieldValue, setFieldsValue } = props.form;
  const { data, loading } = useQuery<
    Get_List_Tag_TypesQuery,
    Get_List_Tag_TypesQueryVariables
  >(GET_LIST_TAG_TYPES, {
    context: {
      headers: {
        "X-Hasura-Role":
          user &&
          user.roles_connection.length > 0 &&
          user.roles_connection[0].role.name
      }
    },
    variables: {
      where: { required: { _eq: false } }
    }
  });
  const [tags, setTags] = useState<TagTypes | null>();
  const [options, setOptions] = useState<Array<Tree<TreeOption>> | null>(null);

  useEffect(() => {
    if (data && data.types) {
      setTags(data.types);
    }
  }, [data]);

  const fetchOptions = async (typeId: number | string) => {
    const { data: result } = await client.query<
      Get_List_Tag_OptionsQuery,
      Get_List_Tag_OptionsQueryVariables
    >({
      query: GET_LIST_TAG_OPTIONS,
      variables: {
        where: { type_id: { _eq: typeId } }
      }
    });

    if (result && result.options) {
      const tmpTreeData = arrayToTree<TreeOption>(result.options, {
        customID: "key"
      });

      setOptions(tmpTreeData);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (tags) {
    const fieldId = `tag_types[${props.index}]`;
    return (
      <Row gutter={24}>
        <Col md={options ? 8 : 24}>
          <FormItem>
            {getFieldDecorator(fieldId, {
              rules: [{ required: true, message: "Сонгоно уу" }]
            })(
              <Select
                className="select-form"
                showSearch
                placeholder="Сонгоно уу"
                onSelect={(value: any) => {
                  setFieldsValue({
                    [`tags[${props.index}]`]: null
                  });
                  fetchOptions(value);
                }}
              >
                {tags.map(({ id: value, key, name }) => (
                  <Option value={value} key={key}>
                    {name}
                  </Option>
                ))}
              </Select>
            )}
          </FormItem>
        </Col>
        {getFieldValue(fieldId) && options && (
          <Col md={16}>
            <FormItem>
              {getFieldDecorator(`tags[${props.index}]`)(
                <TreeSelect
                  treeData={options}
                  treeCheckable
                  showCheckedStrategy={SHOW_PARENT}
                  searchPlaceholder="Сонгох"
                />
              )}
            </FormItem>
          </Col>
        )}
      </Row>
    );
  }

  return <div>Something is wrong</div>; // TODO: show some error or alert
};

let id = 0;

const TagForm = (props: ITagFormProps) => {
  const { getFieldDecorator, getFieldValue, setFieldsValue } = props.form;
  const [user]= useContext(UserContext);
  const { data, loading } = useQuery<
    Get_List_Tag_TypesQuery,
    Get_List_Tag_TypesQueryVariables
  >(GET_LIST_TAG_TYPES, {
    context: {
      headers: {
        "X-Hasura-Role":
          user &&
          user.roles_connection.length > 0 &&
          user.roles_connection[0].role.name
      }
    },
    variables: {
      includeTags: true,
      where: { required: { _eq: true } }
    }
  });

  const buildTreeData = (tags: any) => {
    const tmpTreeData = arrayToTree(tags, {
      customID: "key"
    });
    return tmpTreeData;
  };

  const addField = () => {
    const value = getFieldValue("keys");
    const nextKeys = value.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    setFieldsValue({
      keys: nextKeys
    });
  };

  const removeField = (k: any) => {
    const value = getFieldValue("keys");
    // We need at least one passenger

    // can use data-binding to set
    setFieldsValue({
      keys: value.filter((key: any) => key !== k)
    });
  };

  getFieldDecorator("keys", { initialValue: [] });

  const keys = getFieldValue("keys");

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data.types.map(({ name, tags }, index) => (
        <>
          <FormItem label={name}>
            {getFieldDecorator(`tags[${"100" + index}]`, {
              rules: [{ required: true, message: "Сонгоно уу" }]
            })(
              <TreeSelect
                treeData={buildTreeData(tags)}
                treeCheckable
                showCheckedStrategy={SHOW_PARENT}
                searchPlaceholder="Please select"
              />
            )}
          </FormItem>

          {keys.map((k: number) => (
            <Row align="middle" key={k}>
              <Col md={22}>
                <TagFormInput {...props} index={k} />
              </Col>

              <Col md={2} style={{ textAlign: "center", marginTop: "8px" }}>
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => removeField(k)}
                />
              </Col>
            </Row>
          ))}
          <Row
            align="middle"
            style={{ marginBottom: "20px", textAlign: "center" }}
          >
            <Button size="small" type="dashed" onClick={addField}>
              Нэмэх
            </Button>
          </Row>
        </>
      ))}
    </>
  );
};

export default TagForm;
