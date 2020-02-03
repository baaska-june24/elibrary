import * as React from "react";
import { Rate, Row, Col, Empty, Avatar } from "antd";
import moment from "moment";
import ReviewForm from "./form";
import "./style.less";
import { getImageUrl } from "~/utils/helpers";

interface IProps {
  reviews: any;
}

const ReviewList = ({ reviews = [] }: IProps) => {
  if (reviews.length > 0) {
    return (
      <>
        {reviews.map((review: any) => {
          const avatar: any = review.user?.avatar || null;

          let avatarUrl = null;

          if (avatar) {
            const imageRequest = JSON.stringify({
              bucket: review.user?.bucket || "cdn.esan.mn",
              edits: {
                resize: {
                  fit: "contain",
                  height: 40,
                  width: 40
                },
                jpeg: {
                  quality: 80
                }
              },
              key: avatar
            });
            avatarUrl = getImageUrl(imageRequest);
          }
          return (
            <>
              <div className="review-list" key={review.id}>
                <Row>
                  <Col md={12}>
                    <Avatar
                      shape="square"
                      src={avatarUrl}
                      icon={avatarUrl ? null : "user"}
                      size={30}
                    />
                    {(review.user && (
                      <strong
                        style={{
                          marginRight: "10px",
                          marginLeft: "10px"
                        }}
                      >
                        {review.user.firstname ||
                          (review.user.email || "").split("@")[0]}
                      </strong>
                    )) ||
                      "unknown"}
                    <Rate value={review.rate} disabled className="rate" />
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={12}></Col>
                      <Col md={12} style={{ textAlign: "right" }}>
                        <div className="date">
                          {moment(review.created_at).format("YYYY-MM-DD")}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <Col md={24} className="text">
                    {review.comment}
                  </Col>
                </Col>
              </Row>
            </>
          );
        })}
      </>
    );
  } else {
    return (
      <div className="emptyData">
        <Empty description="Одоогоор үнэлгээ өгөөгүй байна." />
      </div>
    );
  }
};

export { ReviewList, ReviewForm };
