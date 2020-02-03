import * as React from "react";
import { storiesOf } from "@storybook/react";
import Carousel from "./index";
import "antd/es/carousel/style/css";

storiesOf("Carousel", module).add("Default", () => (
  <Carousel autoplay adaptiveHeight>
    <div className="esan-slide-item">
      <div
        style={{
          alignItems: "center",
          background: "rgba(0, 0, 0,.3)",
          display: "flex",
          height: 230,
          justifyContent: "center"
        }}
      >
        Item 1
      </div>
      <div
        style={{
          alignItems: "center",
          background: "rgba(255, 0, 0,.3)",
          display: "flex",
          height: 230,
          justifyContent: "center"
        }}
      >
        Item 2
      </div>
      <div
        style={{
          alignItems: "center",
          background: "rgba(0, 255, 0,.3)",
          display: "flex",
          height: 230,
          justifyContent: "center"
        }}
      >
        Item 3
      </div>
    </div>
  </Carousel>
));
