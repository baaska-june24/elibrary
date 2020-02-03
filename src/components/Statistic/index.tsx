import * as React from "react";
import numeral from "numeral";
import "./style.less";

interface IProps {
  // children: React.ReactNode;
  title: string;
  value: number;
  color?: "purple" | "blue" | "pink";
}

export default ({ value, title, color = "purple" }: IProps) => {
  return (
    <div className={`esan-statistic-card esan-statistic-${color}`}>
      <h1>{numeral(value).format("0,000")}</h1>
      <h4>{title}</h4>
    </div>
  );
};
