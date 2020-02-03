import * as React from "react";
import { Avatar } from "antd";

interface IProps {
  url?: string;
}

export default ({ url }: IProps) => {
  const props: any = {};

  if (url) {
    props.src = url;
  } else {
    props.icon = "user";
    // props.style = {
    //   backgroundColor: "#F28A0B"
    // };
  }
  return <Avatar {...props} size="small" />;
};
