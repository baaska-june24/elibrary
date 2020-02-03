import * as React from "react";
import { useRouter } from "next/router";
import { Row, Col, Divider, Skeleton } from "antd";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { DataProxy } from "apollo-cache";

import Container from "~/components/Container";
import { ReviewList, ReviewForm } from "~/components/Review";
import {
  GET_CONTENT_REVIEWS,
  CREATE_CONTENT_REVIEW
} from "~/queries/contents.graphql";
import {
  Create_Content_ReviewMutationVariables,
  Create_Content_ReviewMutation,
  Get_Content_ReviewsQuery,
  Get_Content_ReviewsQueryVariables
} from "~/generated/graphql";
import "~/styles/content.less";

const ContentReview = () => {
  const router = useRouter();
  const { data, loading } = useQuery<
    Get_Content_ReviewsQuery,
    Get_Content_ReviewsQueryVariables
  >(GET_CONTENT_REVIEWS, {
    variables: {
      id: router.query.id
    }
  });

  const [createReviewAction] = useMutation<
    Create_Content_ReviewMutation,
    Create_Content_ReviewMutationVariables
  >(CREATE_CONTENT_REVIEW);

  const handleSubmit = async (rate: number, comment: string) => {
    await createReviewAction({
      variables: {
        data: [
          {
            comment,
            content_id: router.query.id,
            rate
          }
        ]
      },
      update: (proxy: DataProxy, result: any) => {
        const data = proxy.readQuery<
          Get_Content_ReviewsQuery,
          Get_Content_ReviewsQueryVariables
        >({
          query: GET_CONTENT_REVIEWS,
          variables: {
            id: router.query.id
          }
        });

        if (data) {
          data.reviews.unshift(...result.data.insert_reviews.returning);

          proxy.writeQuery({
            query: GET_CONTENT_REVIEWS,
            variables: {
              id: router.query.id
            },
            data
          });
        }
      }
    });
  };

  return (
    <Container>
      <Divider />
      <Skeleton loading={loading} active>
        <Row gutter={24} style={{ marginTop: "50px" }}>
          <Col md={12}>
            <h2 className="Left-title">Контентын үнэлгээ</h2>
            <ReviewList reviews={data && data.reviews} />
          </Col>
          <Col md={12}>
            <h2 className="Left-title">Үнэлгээ өгөх</h2>
            <ReviewForm onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Skeleton>
    </Container>
  );
};

export default ContentReview;
