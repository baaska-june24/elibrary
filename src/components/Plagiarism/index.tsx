import * as React from "react";
import { Row, Col } from "antd";
import "./style.less";
import Container from "~/components/Container";
import FileUpload from "./FileUpload";
import PlagiarismMenu from "./Menu";
import TextCheckerForm from "./TextCheckerForm";
import HistoryForm from "./HistoryForm";
// import ResultPanel from "./ResultPanel";

const PANELS = {
  file: <FileUpload />,
  history: <HistoryForm />,
  text: <TextCheckerForm />
};

const PlagiarismForm = (props: any) => {
  const [panel, setPanel] = React.useState("text");

  return (
    <Container>
      <Row type="flex" className="pg-header">
        <Col span={6}>
          <h2>Хуулбар шалгуур</h2>
        </Col>
        <Col span={13} offset={5}>
          <PlagiarismMenu onClick={(e: any) => setPanel(e.key)} />
        </Col>
      </Row>
      <div style={{ minHeight: "450px" }}>{(PANELS as any)[panel]}</div>
    </Container>
  );
};

export default PlagiarismForm;
