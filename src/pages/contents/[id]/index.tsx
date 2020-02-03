import * as React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, Rate, Icon, Skeleton, Avatar } from "antd";
import { useQuery } from "@apollo/react-hooks";
import numeral from "numeral";
import moment from "moment";
import Header from "~/components/Header";
import Cover from "~/components/Content/Cover";
import Owner from "~/components/Content/Owner";
import Container from "~/components/Container";
import withLayout from "~/components/Layout";
import ContentList from "~/components/Content/List";
import { BookmarkButton, ContentButton } from "~/components/Content/Buttons";
import Section from "~/components/Section";
import UserContext from "~/context";
import Button from "~/components/Button";
import {
  GET_SINGLE_CONTENT_DETAIL,
  GET_SUGGEST_CONTENTS
} from "~/queries/contents.graphql";
import {
  Get_Single_Content_DetailQuery,
  Get_Single_Content_DetailQueryVariables,
  Get_Suggest_ContentsQuery,
  Get_Suggest_ContentsQueryVariables
} from "~/generated/graphql";
import useContentView from "~/hooks/useContentView";
// import "~/styles/content.less";

const ContentReview = dynamic(() => import("~/components/Content/Review"));
const SamplePages = dynamic(() => import("~/components/Content/SamplePages"));
const Error404 = dynamic(() => import("~/components/Errors/404"));

interface IProps {
  data: any;
}

const ContentDetail = (props: IProps) => {
  const router = useRouter();
  const contentId = router.query.id;
  const [user, loadingUser] = React.useContext(UserContext);

  // increment content views by 1
  useContentView(contentId);

  const { data, loading } = useQuery<
    Get_Single_Content_DetailQuery,
    Get_Single_Content_DetailQueryVariables
  >(GET_SINGLE_CONTENT_DETAIL, {
    variables: {
      id: contentId
    }
  });

  const suggestContents = useQuery<
    Get_Suggest_ContentsQuery,
    Get_Suggest_ContentsQueryVariables
  >(GET_SUGGEST_CONTENTS);

  const renderPrice = (paymentType: string, price: any) => {
    switch (paymentType) {
      case "free":
        return "Үнэгүй";
      case "membership":
        return "Гишүүнчлэл";
      default:
        return numeral(price)
          .format("0,0 $")
          .replace("$", "₮");
    }
  };

  const renderButton = () => {
    const content = data.content[0];
    const isOwner = data.content_detail && data.content_detail.organizations[0];

    if (loadingUser) {
      return <Button loading={loadingUser} type="primary" />;
    }

    if (!user) {
      return (
        <Button
          type="primary"
          style={{ marginRight: "1rem", marginBottom: "1rem" }}
          onClick={handleLogin}
        >
          <Icon type="lock" /> Нэвтрэх
        </Button>
      );
    }

    return (
      <div className="button-wrapper">
        <ContentButton user={user} content={content} isOwner={isOwner} />
        <BookmarkButton content={content} user={user} />
      </div>
    );
  };

  const handleLogin = () => {
    router.replace(`/auth/signin?redirectUrl=${router.asPath}`);
  };

  const renderBody = () => {
    const [content] = data.content;
    const coverKey = `cover/${content.cover.replace("cover/", "")}`;

    return (
      <>
        <Header>
          <Container>
            <Row gutter={32} type="flex" align="middle">
              <Col md={5} sm={8} xs={10}>
                <Cover bucket={content.bucket} fileKey={coverKey} isBig />
              </Col>
              <Col md={19} sm={16} xs={14}>
                <Owner data={data} />
                <h1 className="title-white">{content.name}</h1>
                <Rate allowHalf disabled value={content.average_rate || 0} />
                <h2 className="content-price">
                  {renderPrice(content.payment_type, content.price)}
                </h2>
                {renderButton()}
              </Col>
            </Row>
          </Container>
        </Header>
        <Container>
          <Row gutter={24} style={{ marginBottom: "50px", marginTop: "50px" }}>
            <Col md={18}>
              <h2 className="Left-title">Бүтээлийн тайлбар</h2>
              <div
                className="content-description"
                dangerouslySetInnerHTML={{ __html: content.description }}
              />
            </Col>
            <Col md={6}>
              {content.meta && (
                <ul className="content-meta">
                  {(content.meta.minDuration || content.meta.maxDuration) >
                    0 && (
                    <li>
                      Унших хугацаа:
                      <strong>
                        {((content.meta.minDuration || 0) +
                          (content.meta.maxDuration || 0)) /
                          2}{" "}
                        минут
                      </strong>
                    </li>
                  )}
                  {content.meta.pageLength > 0 && (
                    <li>
                      Хуудас:<strong>{content.meta.pageLength}</strong>
                    </li>
                  )}
                  {content.meta.publishedAt && (
                    <li>
                      Хэвлэгдсэн:
                      <strong>
                        {`${moment(content.meta.publishedAt, "YYYY").format(
                          "YYYY"
                        )} он`}
                      </strong>
                    </li>
                  )}
                  {data.content_detail &&
                    data.content_detail.languages &&
                    data.content_detail.languages.length > 0 && (
                      <li>
                        Бичигдсэн хэл:
                        <strong>
                          {data.content_detail.languages
                            .map(({ tag }: any) => tag.value)
                            .join(", ")}
                        </strong>
                      </li>
                    )}
                  {data.content_detail &&
                    data.content_detail.category &&
                    data.content_detail.category.length > 0 && (
                      <li>
                        Ангилал:
                        <strong>
                          {data.content_detail.category[0].tag.parent
                            ? data.content_detail.category[0].tag.parent.value
                            : data.content_detail.category[0].tag.value}
                        </strong>
                      </li>
                    )}
                  {data.content_detail && (
                    <li>
                      Үзсэн:
                      <strong>{data.content_detail.views}</strong>
                    </li>
                  )}
                  <li>
                    Уншсан:
                    <strong>{content.read}</strong>
                  </li>
                </ul>
              )}
            </Col>
          </Row>
          {data && data.content_detail && data.content_detail.files.length > 0 && (
            <Row
              gutter={24}
              style={{ marginBottom: "50px", marginTop: "50px" }}
            >
              <Col md={24}>
                <h2 className="Left-title">Контентын хэсгээс</h2>
                <SamplePages files={data.content_detail.files} />
              </Col>
            </Row>
          )}
        </Container>
      </>
    );
  };
  const renderSuggetContents = () => {
    return (
      <Container>
        <Skeleton active loading={suggestContents.loading}>
          {suggestContents.data && suggestContents.data.contents && (
            <Section title="Санал болгох контентууд" titleAlign="left">
              <ContentList contents={suggestContents.data.contents} />
            </Section>
          )}
        </Skeleton>
      </Container>
    );
  };

  return (
    <>
      {data && data.content && data.content.length === 1 && (
        <Head>
          <title>{data.content[0].name}</title>
        </Head>
      )}
      <section className="single-item">
        <Container>
          <Skeleton loading={loading} active avatar paragraph />
        </Container>
        {(data &&
          data.content &&
          data.content.length === 1 &&
          renderBody()) || <Error404 />}
        {renderSuggetContents()}
        {data && data.content && data.content.length === 1 && <ContentReview />}
      </section>
    </>
  );
};

export default withLayout({})(ContentDetail);
