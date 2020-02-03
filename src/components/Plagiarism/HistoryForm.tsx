import UserContext from "~/context";
import * as React from "react";
import { Table, Icon } from "antd";
import { GET_PLAGIARISM_HISTORY } from "./query.graphql";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";
import { ResultModal } from "./TextCheckerForm";

const shortText = (text: string) => {
  if (text.length > 150) {
    return text.substring(0, 150) + " ...";
  }
  return text;
};

const HistoryForm = (props: any) => {
  const [user]= React.useContext(UserContext);
  const { loading, error, data, refetch } = useQuery(GET_PLAGIARISM_HISTORY, {
    variables: { userID: user && user.id }
  });
  const [showModal, setShowModal] = React.useState(false);
  const [current, setCurrent] = React.useState(null);

  const showRecord = (record: any) => {
    setCurrent(record);
    setShowModal(true);
  };

  const detailButton = (record: any) => {
    return (
      <a onClick={() => showRecord(record)} title="Үзэх">
        <Icon type="select" />
      </a>
    );
  };

  React.useEffect(() => {
    if (data) {
      refetch();
    }
  });

  const columns = [
    {
      dataIndex: "created_at",
      key: "date",
      render: (dd: any) => moment(dd).fromNow(),
      title: "Огноо"
    },
    {
      dataIndex: "search_text",
      key: "text",
      render: shortText,
      title: "Текст"
    },
    {
      dataIndex: "type",
      key: "type",
      title: "Төрөл"
    },
    {
      dataIndex: "status",
      key: "percentage",
      title: <Icon type="check-circle" />
    },
    {
      key: "action",
      render: (text: string, record: any) => detailButton(record),
      title: "Үйлдэл"
    }
  ];

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        size="middle"
        dataSource={data && data.plagiarism_search_requests}
      />
      <ResultModal
        visible={showModal}
        handleCancel={() => setShowModal(false)}
        text={current && current.search_text}
        data={current}
        searching={false}
        setSearching={() => {}}
        noTime={true}
      />
    </div>
  );
};

export default HistoryForm;
