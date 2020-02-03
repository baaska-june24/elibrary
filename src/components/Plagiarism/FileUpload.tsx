import * as React from "react";
import { Upload, Icon } from "antd";
import "./style.less";
import * as mammoth from "mammoth";
import { ResultModal } from "./TextCheckerForm";
import { GET_CURRENT_MEMBERSHIP } from "~/queries/membership.graphql";
import { SEARCH_TEXT } from "./query.graphql";
import UserContext from "~/context";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Button from "~/components/Button";
import {
  Get_Current_MembershipQuery,
  Get_Current_MembershipQueryVariables
} from "~/generated/graphql";
import { User } from "~/hooks/useSession";

const Dragger = Upload.Dragger;

// interface IProps extends FormComponentProps {
//   setFileUp?: (fileUp: boolean) => void;
// }

const FileUpload = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [searchRequest] = useMutation(SEARCH_TEXT);
  const [user]= React.useContext(UserContext);
  const [searching, setSearching] = React.useState(true);
  const [data, setData] = React.useState({});
  const [, setLoading] = React.useState(false);
  const [fileName, setFileName] = React.useState("");
  const [parsingDoc, setParsingDoc] = React.useState(false);
  const [text, setText] = React.useState("");

  const makeSearchRequest = async (text: string) => {
    setLoading(true);
    const result = await searchRequest({
      variables: { text: text, user_id: user.id, type: "FILE" }
    });
    const xdata = result.data.createPlagiarismRequest;
    setData(xdata);
    setLoading(false);
    setShowModal(true);
    setSearching(true);
  };

  const fileUploadProp = {
    accept: ".doc,.docx,application/msword",
    multiple: false,
    name: "file",
    showUploadList: false,
    beforeUpload(_: any, fileList: any) {
      let files = fileList;
      if (!files.length) return;
      let _file = files[0];

      setFileName(_file.name);

      let reader = new FileReader();
      reader.onloadend = event => {
        let arrayBuffer = reader.result;
        mammoth
          .extractRawText({ arrayBuffer: arrayBuffer })
          .then(async (obj: any) => {
            await makeSearchRequest(obj.value);
            setParsingDoc(false);
            setText(obj.value);
          });
      };

      reader.readAsArrayBuffer(_file);
      setParsingDoc(true);

      return false;
    }
  };
  const useMembership = (user: User) => {
    const { data } = useQuery<
      Get_Current_MembershipQuery,
      Get_Current_MembershipQueryVariables
    >(GET_CURRENT_MEMBERSHIP, {
      variables: {
        user_id: user && user.id
      }
    });

    if (data && data.currentMembership && data.currentMembership.length > 0) {
      return data.currentMembership[0];
    }

    return null;
  };
  const currentMembership = useMembership(user);

  if (currentMembership) {
    return (
      <div>
        <Dragger {...fileUploadProp}>
          {/* <div className="upload-icon">
          <p style={{ fontSize: "12px" }}>
            Үндсэн хэрэглэгч болсноор хуулбар шалгуурыг файлаар нь шалгах
            боломжтой. <a href="#">Дэлгэрэнгүй</a>
          </p>
        </div> */}
          <div className="upload-button">
            <Button shape="round" icon="upload" secondary>
              Оруулах файлаа сонгоно уу
            </Button>
          </div>

          <div className="upload-hint">Энд дарж файлаа хуулна уу</div>
        </Dragger>

        <ParsingDoc parsing={parsingDoc} fileName={fileName} />

        <ResultModal
          visible={showModal}
          handleCancel={() => setShowModal(false)}
          text={text}
          data={data}
          searching={searching}
          setSearching={setSearching}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          color: "#EEEEEE",
          textAlign: "center"
        }}
      >
        <Icon type="file-search" style={{ fontSize: 100 }} />
        <h2 style={{ marginTop: "50px" }}>
          Үндсэн хэрэглэгч болсноор хуулбар шалгуурыг файлаар нь шалгах
          боломжтой.
        </h2>
        <h3>
          <a href="/my/membership" target="_blank">
            Дэлгэрэнгүй
          </a>
        </h3>
      </div>
    );
  }
};

const ParsingDoc = (props: any) => {
  if (props.parsing) {
    return (
      <p>
        <Icon type="setting" theme="filled" spin style={{ marginRight: 10 }} />"
        {props.fileName}" файлыг задалж байна ...
      </p>
    );
  }

  return null;
};

export default FileUpload;
