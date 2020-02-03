import * as React from "react";
import { Rate } from "antd";

interface IProps {
  rate: number;
}
const RatingStar = ({ rate }: IProps) => <Rate disabled defaultValue={rate} />;
export default RatingStar;
