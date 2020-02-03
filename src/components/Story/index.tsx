import * as React from "react";
import Container from "~/components/Container";
import "./style.less";
import TableList from "~/components/Story/tableList";

const ShowStory = () => {
  return (
    <Container>
      <div style={{ marginTop: "50px" }}>
        <h3>Худалдан авсан контентууд</h3>
        <TableList />
      </div>
    </Container>
  );
};

export default ShowStory;
