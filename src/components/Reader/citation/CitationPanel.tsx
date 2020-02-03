import * as React from "react";
import { Card, Tabs } from "antd";

const { TabPane } = Tabs;

export type CitationData = {
  sentence: string;
  pageNumber: number;
  author: {
    firstname: string;
    lastname: string;
  };
  content: string;
  publishedDate: string;
};

interface IProps {
  mode?: "MLA" | "APA" | "CHI";
  data: CitationData;
}

const CitationPanel = ({ mode = "MLA", data }: IProps) => {
  const cardStyle = { borderRadius: "5px", marginTop: "10px" };
  const render_MLA_tab = () => {
    return (
      <TabPane tab="MLA" key="MLA">
        <h3>Эшлэл</h3>
        <Card style={cardStyle}>
          <p>
            <strong>"{data.sentence}"</strong>
          </p>
          <p>
            <strong>
              ("{data.content}"), {data.publishedDate}.
            </strong>
          </p>
        </Card>
        <h3>Ном зүй</h3>
        <Card style={cardStyle}>
          {data.author.firstname} {data.author.lastname}.({data.content})
          {data.publishedDate}. "https://www.esan.mn"
        </Card>
      </TabPane>
    );
  };

  const render_APA_tab = () => {
    return (
      <TabPane tab="APA" key="APA">
        <h3>Эшлэл</h3>
        <Card style={cardStyle}>
          <strong>
            {data.author.firstname}({data.publishedDate}){data.sentence}(х.
            {data.pageNumber})
          </strong>
        </Card>
        <h3>Ном зүй</h3>
        <Card style={cardStyle}>
          <p>
            {data.content}({data.publishedDate}) https://www.esan.mn -с эш
            татав.
          </p>
        </Card>
      </TabPane>
    );
  };

  const render_Chicago_tab = () => {
    return (
      <TabPane tab="Chicago" key="CHI">
        <h3>Эшлэл</h3>
        <Card style={cardStyle}>
          <p>
            <strong>
              {data.sentence}({data.content},{data.publishedDate}
              ).
            </strong>
          </p>
        </Card>
        <h3>Ном зүй</h3>
        <Card style={cardStyle}>
          <p>
            {data.author.firstname},{data.author.lastname}.{data.content},{" "}
            {data.publishedDate}
          </p>
        </Card>
      </TabPane>
    );
  };

  return (
    <Tabs defaultActiveKey={mode}>
      {render_MLA_tab()}
      {render_APA_tab()}
      {render_Chicago_tab()}
    </Tabs>
  );
};

export default CitationPanel;
