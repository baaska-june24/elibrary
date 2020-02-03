import * as React from "react";
import Link from "next/link";
import { Row, Col, Progress } from "antd";
import Cover from "~/components/Content/Cover";
import "./style.less";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

const ReadCard = ({ maxPage, content }: any) => {
  const percent = Math.round((maxPage * 100) / content.pageLength);
  const coverFile =
    content.files && content.files.length > 0 && content.files[0];
  const coverKey = coverFile && coverFile.file_id;

  return (
    <>
    <Row>
      <Col>
        <div className="read-card">
          <Link href={`/read/${content.id}`}>
            <a title={content.name}>
              <Cover fileKey={coverKey} alt={content.name}/>
            </a>
          </Link>
        </div>
      </Col>
    </Row>
    <Row >
      <Col>
        <div className="read-card-desc">
          <p>{`Хуудас : ${maxPage}/${content.pageLength}`}</p>
          <Progress
            strokeColor={{
              from: "#ffa100",
              to: "#b11248"
            }}
            percent={percent}
            showInfo={false}
            status="active"
            size="small"
          />
        </div>
      </Col>
    </Row>
    </>
  );
};

export default ReadCard;
