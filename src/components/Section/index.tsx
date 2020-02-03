import * as React from "react";
import Container from "~/components/Container";
import "./style.less";

export interface ISectionProps {
  children: React.ReactNode;
  title?: string;
  titleAlign?: "left" | "center" | "right";
}
export default (props: ISectionProps) => (
  <section className={`section title-${props.titleAlign || "center"}`}>
    {props.title && (
      <Container>
        <h2>{props.title}</h2>
      </Container>
    )}
    {props.children}
  </section>
);
