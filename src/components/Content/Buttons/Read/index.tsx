import * as React from "react";
import Button from "~/components/Button";
import { Icon } from "antd";

interface IProps {
  contentId: string | string[];
}

export default ({ contentId }: IProps) => {
  return (
    <Button
      type="primary"
      style={{ marginRight: "1rem", marginBottom: "1rem" }}
      href={`/read/${contentId}`}
      target="_blank"
    >
      <Icon type="read" /> Унших
    </Button>
  );
};
