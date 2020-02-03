import * as React from "react";
import { useLazyQuery, useSubscription } from "@apollo/react-hooks";
import { Row, Col, Card, Progress, Icon, Spin } from "antd";
import { Skeleton } from "antd";
import { SEARCH_RESULT, CHECK_STATUS } from "./query.graphql";
import Navigator from "./ResultNavigator";
import _ from "lodash";
import {
  Check_StatusQuery,
  Check_StatusQueryVariables
} from "~/generated/graphql";

let timer: NodeJS.Timeout;
let counter = 0; // for new network request
let start = 0;

const ResultPanel = (props: any) => {
  const { data, error } = useSubscription(SEARCH_RESULT, {
    variables: { id: props.data.id }
  });

  const [current, setCurrent] = React.useState(0);
  const [runTime, setRunTime] = React.useState(0);

  const [checkStatus] = useLazyQuery(CHECK_STATUS, { fetchPolicy: "no-cache" });

  if (error) {
    console.log("useSubscription error");
    console.log(error);
  }

  React.useEffect(() => {
    if (!timer) {
      timer = setInterval(() => triggerCheck(), 2000);
      start = performance.now();
    }

    if (data && data.plagiarism_request) {
      const { status } = data.plagiarism_request;
      console.log(status);

      if (status === "done") {
        if (timer) {
          console.log("clear timer");
          clearInterval(timer);
          timer = null;
        }
        console.log("DONE");
        console.log(data);
        props.setSearching(false);
        let end = performance.now();
        setRunTime(Math.round((end - start) / 1000));
      }
    }
  }, [data]);

  const triggerCheck = async () => {
    await checkStatus({
      variables: {
        counter,
        id: props.data.id,
        token: props.data.token
      }
    });
    counter = counter + 1;
  };

  if (data && data.plagiarism_request) {
    const { status, results, percent } = data.plagiarism_request;

    let loading_result = status === "in-progress" || status === "in_progress";

    let highlightTXT = "";
    let foundResults = sortResults(results);

    if (foundResults.length > 0) {
      highlightTXT = foundResults[current].sentence;
      loading_result = false;
    }

    let title = getTitle(foundResults);
    if (runTime > 0 && props.noTime != true) {
      title = title + " (" + runTime + " сек)";
    }

    return (
      <Row type="flex">
        <Col md={16}>
          <InputPanel
            percent={percent}
            text={props.text}
            search_status={status}
            title={title}
            results={results}
            waiting_result={loading_result}
            highlightTXT={highlightTXT}
          />
        </Col>
        <Col md={7} offset={1}>
          <Navigator
            foundResults={foundResults}
            current={current}
            setCurrent={setCurrent}
            waiting_result={loading_result}
          />
        </Col>
      </Row>
    );
  }

  return <Spin />;
};

const InputPanel = (props: any) => {
  if (props.waiting_result) {
    return <Skeleton active paragraph={{ rows: 6 }} />;
  }

  return (
    <Card
      title={props.title}
      extra={
        <Progress
          type="circle"
          strokeColor="#f04e46"
          percent={props.percent}
          width={40}
          format={props.percent == 100 ? () => "100%" : null}
        />
      }
      style={{ width: "100%" }}
    >
      <div style={{ minHeight: 200, overflowY: "auto" }}>
        <HighLighted text={props.text} highlightTXT={props.highlightTXT} />
      </div>
    </Card>
  );
};

const getTitle = (results: any) => {
  if (results.length === 0) {
    return "Хуулбар олдсонгүй!";
  }

  const sourceCount = _.uniqBy(results, "content_id").length;
  return sourceCount + " эх сурвалжаас " + results.length + " хуулбар илэрлээ.";
};

const sortResults = (arr: any[]) => {
  const found = _.filter(arr, (e: any) => e.status == "found");
  return _.sortBy(found, ["content_id", "page"]);
};

const HighLighted = (props: any) => {
  if (props.highlightTXT === "") {
    return props.text;
  }

  const indx = props.text.indexOf(props.highlightTXT);
  const length = props.highlightTXT.length;

  return (
    <div>
      {props.text.slice(0, indx)}
      <span className="dotted">{props.text.slice(indx, indx + length)}</span>
      {props.text.slice(indx + length, props.text.length)}
    </div>
  );
};

export default ResultPanel;
