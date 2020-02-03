import * as React from "react";
import { storiesOf } from "@storybook/react";
import "antd/es/avatar/style/css";

import Avatar from "./index";

storiesOf("Avatar", module)
  .add("without url", () => <Avatar />)
  .add("with url", () => (
    <Avatar url="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  ));
