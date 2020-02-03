import * as React from "react";
import "./style.less";

interface IProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default ({ className = "", ...otherProps }: IProps) => (
  <div className={`container ${className}`} {...otherProps} />
);
