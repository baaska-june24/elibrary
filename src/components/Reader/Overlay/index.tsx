import * as React from "react";
import { Menu, Dropdown } from "antd";
import { SelectParam, ClickParam } from "antd/lib/menu";
import CitationModal from "../citation/modal";

interface IProps {
  children: React.ReactNode;
}

const ReaderOverlay = ({ children }: IProps) => {
  const [visible, setVisible] = React.useState(false);
  const [sentence, setSentence] = React.useState("");
  const [mode, setMode] = React.useState<"MLA" | "APA" | "CHI">("MLA");

  const handleMenuSelect = (e: ClickParam) => {
    setMode(e.key as "MLA" | "APA" | "CHI");
    setVisible(true);
  };

  const menu = (
    <Menu onClick={handleMenuSelect}>
      <Menu.Item key="MLA">MLA ишлэл</Menu.Item>
      <Menu.Item key="APA">APA ишлэл</Menu.Item>
      <Menu.Item key="CHI">Chicago ишлэл</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={["contextMenu"]}
        onVisibleChange={isVisible => {
          if (isVisible) {
            setSentence(`${window.getSelection()}`);
          }
        }}
      >
        {children}
      </Dropdown>
      <CitationModal
        mode={mode}
        sentence={sentence}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default ReaderOverlay;
