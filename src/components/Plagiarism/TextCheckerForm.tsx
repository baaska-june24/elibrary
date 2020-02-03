import * as React from "react";
import { Row, Col, Form, Input, Icon, Modal } from "antd";
import Button from "~/components/Button";
import ResultPanel from "./ResultPanel";
import { useMutation } from "@apollo/react-hooks";
import { SEARCH_TEXT } from "./query.graphql";
import InputTemplate from "./InputTemplate";
import CategoryInput from "./CategoryInput";
import UserContext from "~/context";

const FormItem = Form.Item;

const TextCheckerForm = () => {
  const [pgText, setText] = React.useState("");
  const [data, setData] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchRequest] = useMutation(SEARCH_TEXT);
  const [user]= React.useContext(UserContext);
  const [searching, setSearching] = React.useState(true);
  const [category, setCategory] = React.useState("social");

  const handleClick = async () => {
    setLoading(true);
    const result = await searchRequest({
      variables: {
        text: pgText,
        user_id: user.id,
        type: "TEXT",
        category
      }
    });
    const xdata = result.data.createPlagiarismRequest;
    console.log('xdata:')
    console.log(xdata)
    setData(xdata);
    setLoading(false);
    setShowModal(true);
    setSearching(true);
  };

  const hideModal = async () => {
    setShowModal(false);
  };

  const addText = (txt: string) => {
    setText([pgText, txt].join(" "));
  };

  return (
    <div>
      <Row type="flex">
        <Col md={24}>
          <FormItem>
            <div className="textarea">
              <Input.TextArea
                placeholder="Шалгах текст ээ энд оруулна уу."
                rows={15}
                style={{ background: "#FFFBE3" }}
                value={pgText}
                onChange={e => setText(e.target.value)}
              />

              <div className="absolute">
                <Button
                  secondary
                  onClick={handleClick}
                  loading={loading}
                  icon="upload"
                >
                  Шалгаж эхэл
                </Button>
              </div>
              <ResultModal
                visible={showModal}
                data={data}
                handleCancel={hideModal}
                text={pgText}
                searching={searching}
                setSearching={setSearching}
              />
            </div>
          </FormItem>
        </Col>
      </Row>
      <Row type="flex">
        <Col md={4}>
          <h4>Жишээ текст сонгох :</h4>
          <InputTemplate addText={addText} />
        </Col>
        <Col md={4}>
          <h4>Ангилал сонгох :</h4>
          <CategoryInput changeCategory={setCategory} />
        </Col>
        <Col md={16}>
          <div className="attent">
            Та хамгийн ихдээ 1000 тэмдэгт оруулж болохыг анхаарна уу! Тэмдэгтийн
            тоо: <span>{pgText.length}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export const ResultModal = (props: any) => {
  let title: any = "Хайлтын үр дүн";
  if (props.searching) {
    title = (
      <span>
        <Icon type="loading" style={{ marginRight: "10px" }} />
        Шалгаж байна ...
      </span>
    );
  }

  return (
    <Modal
      title={title}
      visible={props.visible}
      onCancel={props.handleCancel}
      footer={null}
      width={1020}
      destroyOnClose={true}
    >
      <ResultPanel
        text={props.text}
        data={props.data}
        setSearching={props.setSearching}
        noTime={props.noTime}
      />
    </Modal>
  );
};

export default TextCheckerForm;
