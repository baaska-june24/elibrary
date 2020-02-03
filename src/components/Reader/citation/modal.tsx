import * as React from "react";
import { Modal } from "antd";
import CitationPanel, { CitationData } from "./CitationPanel";

interface IProps {
  mode?: "MLA" | "APA" | "CHI";
  sentence: string;
  visible?: boolean;
  onClose?: () => void;
}

const CitationModal = ({
  mode = "MLA",
  sentence,
  visible,
  onClose
}: IProps) => {
  const getCitationData = (): CitationData => {
    const data: CitationData = {
      author: {
        firstname: "Баярмаа",
        lastname: "Бат"
      },
      content: "Нийтийн номын сан",
      sentence,
      publishedDate: "2020",
      pageNumber: 12
    };

    return data;
  };

  return (
    <Modal
      title="Эшлэл хийх"
      visible={visible}
      onCancel={onClose}
      onOk={onClose}
    >
      <CitationPanel mode={mode} data={getCitationData()} />
    </Modal>
  );
};

export default CitationModal;
