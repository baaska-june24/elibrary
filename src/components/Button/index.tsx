import * as React from "react";
import BaseButton, { ButtonProps } from "antd/lib/button";
import "antd/lib/button/style";
import "./style.less";

interface IProps extends ButtonProps {
  secondary?: boolean;
  bordered?: boolean;
}

export default ({secondary, bordered, className, ...otherProps}: IProps) => {
  const classnames = (className || '').split(' ');
  if (secondary) {
    classnames.push('ant-btn-secondary');
  }
  if (bordered) {
    classnames.push('ant-btn-bordered');
  }
  return <BaseButton {...otherProps} shape="round" className={classnames.join(' ')}/>;
};
