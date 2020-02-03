import * as React from "react";
import { Card, Icon, Skeleton, Button, Modal, Tabs } from "antd";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";

const { TabPane } = Tabs;

const Navigator = (props: any) => {
  if (props.waiting_result) {
    return <Skeleton active paragraph={{ rows: 4 }} />;
  }

  const [loading, setLoading] = React.useState(true);
  const [current, setCurrent] = [props.current, props.setCurrent];

  const foundResults = props.foundResults;

  const prevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const nextClick = () => {
    if (current + 1 < foundResults.length) {
      setCurrent(current + 1);
    }
  };

  let title = "Илэрц";

  if (foundResults.length == 0) {
    title = "Илэрцгүй";
  }

  return (
    <Card
      size="small"
      title={title}
      actions={[
        <Icon type="left" key="left" onClick={prevClick} />,
        <ResultPageNumber
          key="number"
          current={current}
          results={foundResults}
        />,
        <Icon type="right" key="right" onClick={nextClick} />
      ]}
    >
      <ResultDetail current={current} results={foundResults} />
      <Citation results={foundResults} current={current} />
    </Card>
  );
};

const Citation = (props: any) => {
  const [isShow, setIsShow] = React.useState(false);
  if (props.results.length === 0) {
    return <div style={{ minHeight: "150px" }} />;
  }

  const current = props.results[props.current];

  if (props.results[0].content) {
    const firstname =
      props.results[0].content.authors_connection[0].author.firstname;
    const lastname =
      props.results[0].content.authors_connection[0].author.lastname;
    const publish = props.results[0].content.meta;
    return (
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Button
          type="primary"
          shape="round"
          block
          onClick={() => setIsShow(true)}
        >
          <Icon type="carry-out" />
          Эшлэл хийх
        </Button>
        <Modal
          visible={isShow}
          title="Эшлэл"
          onCancel={() => setIsShow(false)}
          footer={false}
        >
          <Tabs type="card">
            <TabPane tab="MLA" key="1">
              <h3>Эшлэл</h3>
              <Card style={{ borderRadius: "5px", marginTop: "10px" }}>
                <p style={{ fontWeight: "bolder" }}>"{current.sentence}"</p>
                <p style={{ fontWeight: "bolder" }}>
                  ("{props.results[0].content.name}"),{" "}
                  {moment(publish).format("YYYY")}.
                </p>
              </Card>
              <h3>Ном зүй</h3>
              <Card style={{ borderRadius: "5px", marginTop: "10px" }}>
                {firstname}
                {lastname}.({props.results[0].content.name})
                {moment(publish).format("YYYY")}. "https://www.esan.mn"
              </Card>
            </TabPane>
            <TabPane tab="APA" key="2">
              <h3>Эшлэл</h3>
              <Card style={{ borderRadius: "5px", marginTop: "10px" }}>
                <p style={{ fontWeight: "bolder" }}>
                  {firstname}({moment(publish).format("YYYY")})
                  {current.sentence}(х.{current.page})
                </p>
              </Card>
              <h3>Ном зүй</h3>
              <Card style={{ borderRadius: "5px", marginTop: "10px" }}>
                <p>
                  {props.results[0].content.name}(
                  {moment(publish).format("YYYY")}) https://www.esan.mn -с эш
                  татав.
                </p>
              </Card>
            </TabPane>
            <TabPane tab="Chicago" key="3">
              <h3>Эшлэл</h3>
              <Card style={{ borderRadius: "5px", marginTop: "10px" }}>
                <p style={{ fontWeight: "bolder" }}>
                  {current.sentence}({props.results[0].content.name},
                  {moment(publish).format("YYYY")}
                  ).
                </p>
              </Card>
              <h3>Ном зүй</h3>
              <Card style={{ borderRadius: "5px", marginTop: "10px" }}>
                <p>
                  {firstname},{lastname}.{props.results[0].content.name},{" "}
                  {moment(publish).format("YYYY")}
                </p>
              </Card>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
  return null;
};

const ResultDetail = (props: any) => {
  if (props.results.length === 0) {
    return <div style={{ minHeight: "150px" }} />;
  }

  const current = props.results[props.current];

  return (
    <div style={{ minHeight: 150, overflowY: "hidden" }}>
      <h5 style={{ color: "#F28A0B" }}>
        Бүтээлийн нэр
        <span style={{ float: "right" }}>
          Хуудас {current.page} ({current.percent}%)
        </span>
      </h5>
      <ContentName content_id={current.content_id} />
      <h5 style={{ color: "#F28A0B" }}>Хуулбар</h5>
      <p style={{ fontSize: "0.6em" }}>{current.prev_sentence}</p>
      <p>{current.sentence}</p>
      <p style={{ fontSize: "0.6em" }}>{current.next_sentence}</p>
    </div>
  );
};

const ResultPageNumber = (props: any) => {
  let current = 0;

  if (props.results.length > 0) {
    current = props.current + 1;
  }

  return (
    <span>
      {current}/{props.results.length}
    </span>
  );
};

const GET_CONTENT_NAME = gql`
  query GET_CONTENT_NAME($id: bigint!) {
    contents_by_pk(id: $id) {
      name
    }
  }
`;

const ContentName = (props: any) => {
  const { loading, error, data } = useQuery(GET_CONTENT_NAME, {
    variables: { id: props.content_id }
  });

  if (loading) {
    return <Icon type="loading" />;
  }

  if (data && data.contents_by_pk) {
    return (
      <a
        href={`contents/${props.content_id}`}
        target="_blank"
        style={{ color: "#000000" }}
      >
        <p
          style={{
            fontSize: 14
          }}
        >
          {data.contents_by_pk.name}
        </p>
      </a>
    );
  }

  return <p>{props.content_id}</p>;
};

export default Navigator;
