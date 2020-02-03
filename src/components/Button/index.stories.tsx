import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";
import "antd/es/button/style/css";

storiesOf("Button", module)
  .add("Default", () => <Button>Default</Button>)
  .add("Primary", () => <Button type="primary">Primary</Button>)
  .add("Danger", () => <Button type="danger">Danger</Button>)
  .add("Ghost", () => <Button type="ghost">Ghost</Button>)
  .add("Dashed", () => <Button type="dashed">Dashed</Button>)
  .add("Secondary", () => <Button secondary>Secondary</Button>)
  .add("Bordered", () => <Button bordered>Bordered</Button>);
