import * as React from "react";
import "./style.less";

interface IProps {
  type?: "grey" | "purple";
  isBig?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}
const Header = ({
  children,
  type = "purple",
  isBig = false,
  ...otherProps
}: IProps) => (
  <div
    className={`header ${type} ${isBig ? "header-big" : ""}`}
    {...otherProps}
  >
    {children}
  </div>
);

export default Header;
