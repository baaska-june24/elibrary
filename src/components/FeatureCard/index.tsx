import * as React from "react";
import { Card } from "antd";
import "./style.less";

interface IProps {
  icon: React.ReactNode;
  title?: string;
  description: string;
}

export default (props: IProps) => (
  <Card hoverable className="feature-card">
    {props.icon}
    <h2>{props.title}</h2>
    {props.description}
  </Card>
);
