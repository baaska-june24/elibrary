import * as React from "react";
import { Carousel as BaseCarousel } from "antd";
import { CarouselProps } from 'antd/lib/carousel';
import "./style.less";

interface IProps extends CarouselProps {
  children: React.ReactNode;
}

export default (props: IProps) => {
  return (
    <BaseCarousel {...props}>
      {props.children}
    </BaseCarousel>
  );
};
