import * as React from "react";
import { Form, TreeSelect } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { useQuery } from "@apollo/react-hooks";
import arrayToTree from "array-to-tree";
import { GET_LIST_TAG_TYPES } from "~/queries/tags.graphql";
import {
  Get_List_Tag_TypesQuery,
  Get_List_Tag_TypesQueryVariables
} from "~/generated/graphql";

const FormItem = Form.Item;
const { SHOW_PARENT } = TreeSelect;

interface ITagFormProps extends FormComponentProps {
  content: any;
}

const TagForm = (props: ITagFormProps) => {
  const { getFieldDecorator } = props.form;
  const { data, loading } = useQuery<
    Get_List_Tag_TypesQuery,
    Get_List_Tag_TypesQueryVariables
  >(GET_LIST_TAG_TYPES, {
    variables: {
      includeTags: true
    }
  });

  const buildTreeData = (tags: any) => {
    const tmpTreeData = arrayToTree(tags, {
      customID: "key"
    });
    return tmpTreeData;
  };

  if (loading) {
    return null;
  }

  return (
    <>
      {data &&
        data.types &&
        data.types.map(({ id, name, tags, required }: any, index: number) => (
          <FormItem key={`tags_${index}`} label={name}>
            {getFieldDecorator(`tags[${index}]`, {
              initialValue: (
                (props.content && props.content.tags_connection) ||
                []
              )
                .filter(({ tag }: any) => tag.type_id === id)
                .map(({ tag }: any) => tag.id),
              rules: [{ required, message: `${name} сонгоно уу` }]
            })(
              <TreeSelect
                treeData={buildTreeData(tags)}
                treeCheckable
                showCheckedStrategy={SHOW_PARENT}
                searchPlaceholder="Please select"
              />
            )}
          </FormItem>
        ))}
    </>
  );
};

export default TagForm;
