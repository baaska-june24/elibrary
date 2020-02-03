import * as React from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromHTML,
  ContentState,
  convertToRaw
} from "draft-js";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  Update_OrganizationMutation,
  Update_OrganizationMutationVariables
} from "~/generated/graphql";
import { UPDATE_ORGANIZATION } from "~/queries/organizations.graphql";
import UserContext from "~/context";
import { useRouter } from "next/router";
import { message, Button } from "antd";
import draftToHtml from "draftjs-to-html";

interface IProps {
  data: any;
}

const DescEditor = (props: IProps) => {
  const [user] = React.useContext(UserContext);
  const router = useRouter();
  const organizationId = router.query.id;

  const blocksFromHTML = convertFromHTML(props.data);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(state)
  );
  const [UpdateOrganizationAction] = useMutation<
    Update_OrganizationMutation,
    Update_OrganizationMutationVariables
  >(UPDATE_ORGANIZATION);

  const onChange = async () => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    const allowed_roles = ["admin", "account_manager", "organization_manager"];
    let role = "user";

    const roles = user?.roles_connection.map(({ role }) => role.name) || [];
    for (const index in allowed_roles) {
      const key = allowed_roles[index];
      if (roles.indexOf(key) > -1) {
        role = key;
        break;
      }
    }

    try {
      await UpdateOrganizationAction({
        context: {
          headers: {
            "X-Hasura-Role": role
          }
        },
        variables: {
          set: { long_description: content },
          where: { id: { _eq: organizationId } }
        }
      });
      message.success("Амжилттай хадгаллаа");
    } catch (error) {
      message.error(error.message);
    }
  };

  const onChangeState = (editorState: any) => {
    setEditorState(editorState);
  };

  const onStyle = (type: any) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, type));
  };

  const styleMap = {
    STRIKETHROUGH: {
      textDecoration: "line-through"
    }
  };
  const myBlockStyleFn = (contentBlock: any) => {
    const type = contentBlock.getType();
    if (type === "blockquote") {
      return "superFancyBlockquote";
    }
  };
  // const toggleBlock = (type: any) => {
  //   setEditorState(RichUtils.toggleBlockType(editorState, type));
  // };

  const toggleCode = () => {
    setEditorState(RichUtils.toggleCode(editorState));
  };

  return (
    <div>
      <Button.Group style={{ marginBottom: "40px" }}>
        <Button
          icon="bold"
          shape="circle"
          onClick={() => onStyle("BOLD")}
        ></Button>
        <Button
          icon="italic"
          shape="circle"
          onMouseDown={() => onStyle("ITALIC")}
        ></Button>
        <Button
          icon="underline"
          shape="circle"
          onMouseDown={() => onStyle("UNDERLINE")}
        ></Button>
        <Button icon="code" shape="circle" onClick={toggleCode}></Button>
        <Button
          icon="strikethrough"
          shape="circle"
          onMouseDown={() => onStyle("STRIKETHROUGH")}
        ></Button>
        {/* <Button shape="circle" onMouseDown={() => onStyle("H1")}>
          H1
        </Button>
        <Button shape="circle" onMouseDown={() => onStyle("H2")}>
          H2
        </Button>
        <Button shape="circle" onMouseDown={() => onStyle("H3")}>
          H3
        </Button> */}
        {/* <Button onClick={() => toggleBlock("blockquote")}>blockquote</Button> */}
      </Button.Group>
      <Editor
        blockStyleFn={myBlockStyleFn}
        editorState={editorState}
        onChange={onChangeState}
        customStyleMap={styleMap}
      />
      <Button
        type="primary"
        style={{ marginTop: "20px", textAlign: "center" }}
        onClick={onChange}
      >
        Хадгалах
      </Button>
    </div>
  );
};
export default DescEditor;
