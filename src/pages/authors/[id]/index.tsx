import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import numeral from "numeral";
import { Row, Col, Rate, Button, Skeleton } from "antd";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { DataProxy } from "apollo-cache";

import withLayout from "~/components/Layout";
import Container from "~/components/Container";
import { ReviewForm, ReviewList } from "~/components/Review";
import Cover from "~/components/Content/Cover";
import ButtonMore from "~/components/Button";
import {
  Create_Author_ReviewMutation,
  Create_Author_ReviewMutationVariables,
  Get_Single_AuthorQuery,
  Get_Single_AuthorQueryVariables,
  Get_Authors_ContentsQuery,
  Get_Authors_ContentsQueryVariables,
  Get_Author_ReviewsQuery,
  Get_Author_ReviewsQueryVariables,
  Get_Single_Author_DetailQuery,
  Get_Single_Author_DetailQueryVariables
} from "~/generated/graphql";
import {
  GET_AUTHOR_REVIEWS,
  CREATE_AUTHOR_REVIEW,
  GET_SINGLE_AUTHOR_DETAIL,
  GET_AUTHORS_CONTENTS
} from "~/queries/authors.graphql";
import UserContext from "~/context";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

const EditForm = dynamic(() => import("~/components/Author/Form"));
const AvatarUpload = dynamic(() => import("~/components/Author/Avatar"));
const ContentList = dynamic(() => import("~/components/Content/List"));
const SuggestAuthors = dynamic(() => import("~/components/SuggestAuthors"));
const Error404 = dynamic(() => import("~/components/Errors/404"));

const AuthorSingle = () => {
  const router = useRouter();
  const authorId = router.query.id;
  const [user] = React.useContext(UserContext);
  const [isShow, setIsShow] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(false);

  const authorResult = useQuery<
    Get_Single_Author_DetailQuery,
    Get_Single_Author_DetailQueryVariables
  >(GET_SINGLE_AUTHOR_DETAIL, {
    variables: {
      id: authorId
    }
  });

  const authorContent = useQuery<
    Get_Authors_ContentsQuery,
    Get_Authors_ContentsQueryVariables
  >(GET_AUTHORS_CONTENTS, {
    variables: {
      where: {
        author_id: { _eq: authorId },
        content: { deleted_at: { _is_null: true } }
      },
      limit: 3
    }
  });

  const len =
    (authorContent &&
      authorContent.data &&
      authorContent.data.map_contents_authors.length) ||
    0;

  React.useEffect(() => {
    if (len > 0) {
      setHasMore(true);
    }
  }, [len]);

  const { data, loading } = useQuery<
    Get_Author_ReviewsQuery,
    Get_Author_ReviewsQueryVariables
  >(GET_AUTHOR_REVIEWS, {
    variables: {
      where: {
        author_id: {
          _eq: authorId
        }
      }
    }
  });

  const [createAuthorReview] = useMutation<
    Create_Author_ReviewMutation,
    Create_Author_ReviewMutationVariables
  >(CREATE_AUTHOR_REVIEW);

  if (authorResult && authorResult.loading) {
    return (
      <Container>
        <Skeleton avatar paragraph={{ rows: 4 }} />
      </Container>
    );
  }

  const author = authorResult.data && authorResult.data.author;

  if (!author) {
    return <Error404 />;
  }

  const avatarKey = author && author.avatar_id;
  const imageRequest = JSON.stringify({
    bucket: "cdn.esan.mn",
    edits: {
      resize: {
        fit: "cover",
        height: 200,
        width: 200
      },
      [canLoadWebp ? "webp" : "jpeg"]: {
        quality: 100
      }
    },
    key: avatarKey
  });
  const avatarUrl = getImageUrl(imageRequest);
  // const avatarUrl: any = null;

  const hasPermissionToUpdate =
    user &&
    data &&
    (user.roles_connection.filter(
      ({ role }) => ["admin", "content_manager"].indexOf(role.name) > -1
    ).length > 0 ||
      user.id === author.created_by);

  const handleUpdateAvatar = (proxy: DataProxy, result: any) => {
    const cachedData = proxy.readQuery<
      Get_Single_AuthorQuery,
      Get_Single_AuthorQueryVariables
    >({ query: GET_SINGLE_AUTHOR_DETAIL, variables: { id: authorId } });
    if (cachedData && cachedData.author) {
      cachedData.author.avatar_id =
        result.data.insert_files.returning[0].avatar_id;
    }
    proxy.writeQuery({
      data: cachedData,
      query: GET_SINGLE_AUTHOR_DETAIL,
      variables: { id: authorId }
    });
  };

  const handleSubmit = async (rate: number, comment: string) => {
    await createAuthorReview({
      variables: {
        author: [
          {
            author_id: authorId,
            comment,
            rate
          }
        ]
      },
      update: (proxy: DataProxy, result: any) => {
        const data = proxy.readQuery<
          Get_Author_ReviewsQuery,
          Get_Author_ReviewsQueryVariables
        >({
          query: GET_AUTHOR_REVIEWS,
          variables: {
            where: {
              author_id: {
                _eq: authorId
              }
            }
          }
        });

        if (data) {
          data.author_reviews.unshift(
            ...result.data.insert_author_reviews.returning
          );

          proxy.writeQuery({
            query: GET_AUTHOR_REVIEWS,
            variables: {
              where: {
                author_id: {
                  _eq: authorId
                }
              }
            },
            data
          });
        }
      }
    });
  };

  const count_content =
    authorResult.data.author.contents_connection_aggregate.aggregate.count;

  const handleFetchMore = () => {
    authorContent.fetchMore({
      updateQuery: (prev: Get_Authors_ContentsQuery, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        setHasMore((fetchMoreResult.map_contents_authors || []).length === 3);
        return {
          ...prev,
          map_contents_authors: [
            ...prev.map_contents_authors,
            ...fetchMoreResult.map_contents_authors
          ]
        };
      },
      variables: {
        offset: authorContent.data.map_contents_authors.length
      }
    });
  };

  const renderPrice = (data: any) => {
    let price = data.price;
    let payment_type = data.payment_type;

    if (data.prices && data.prices.length > 0) {
      const tempPrices = data.prices[0];
      price = tempPrices.price;
      payment_type = tempPrices.payment_type;
    }

    switch (payment_type) {
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

  const names = [author.lastname.trim(), author.firstname.trim()];
  const displayname = names
    .filter(item => item !== "")
    .join(".")
    .trim();

  return (
    <section className="single-item">
      <Head>
        <title>{displayname}</title>
      </Head>
      <Container>
        <Row gutter={10} type="flex">
          <Col md={6} sm={8} xs={24} style={{ textAlign: "center" }}>
            <div
              className="author-avatar"
              style={{
                backgroundImage: `url(${avatarUrl})`,
                textAlign: "center"
              }}
            ></div>
            {hasPermissionToUpdate && (
              <>
                <Button
                  type="link"
                  icon="camera"
                  onClick={() => setIsShow(true)}
                  block
                >
                  Change
                </Button>
                <AvatarUpload
                  id={authorId}
                  setIsShow={setIsShow}
                  isShow={isShow}
                  update={handleUpdateAvatar}
                />
              </>
            )}
            <>
              <h1 className="name">{displayname}</h1>
            </>

            {authorResult.data?.author?.reviews_aggregate && (
              <>
                <Rate
                  allowHalf
                  disabled
                  value={
                    authorResult.data?.author?.reviews_aggregate?.aggregate?.avg
                      ?.rate || 0
                  }
                />
                <p
                  style={{
                    display: "inline",
                    fontWeight: "bolder",
                    color: "#cccccc",
                    marginLeft: "10px"
                  }}
                >{`( ${authorResult.data?.author?.reviews_aggregate?.aggregate
                  ?.count || 0} )`}</p>
              </>
            )}
            <Row type="flex">
              <Col md={24}>
                <div
                  style={{
                    border: "1px dashed",
                    borderRadius: "5px",
                    padding: "20px",
                    textAlign: "left",
                    margin: "20px",
                    borderColor: "#cccccc"
                  }}
                >
                  <p>
                    Бүтээл: <strong>{count_content}</strong>
                  </p>
                  <p>Төрсөн огноо:</p>
                  <p>Төрөл:</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={18} sm={16} xs={24}>
            <div className="author-profile-info">
              <h2 className="title" style={{ marginTop: "50px" }}>
                Танилцуулга
              </h2>
              {hasPermissionToUpdate ? (
                <EditForm author={author} />
              ) : (
                <>
                  <p>{author.description}</p>
                </>
              )}
            </div>
            <div className="title" style={{ marginTop: "30px" }}>
              <h2>{`Бүтээлүүд(${count_content})`}</h2>
              <Row
                gutter={10}
                style={{
                  marginBottom: "1rem",
                  marginTop: "1rem"
                }}
                type="flex"
              >
                {authorContent &&
                  authorContent.data &&
                  authorContent.data.map_contents_authors.map(
                    ({ content }: any) => {
                      const coverFile =
                        content.files &&
                        content.files.length > 0 &&
                        content.files[0];
                      const coverKey = coverFile && coverFile.file_id;
                      return (
                        <Col
                          xs={12}
                          sm={8}
                          md={8}
                          lg={6}
                          xl={8}
                          key={content.id}
                        >
                          <Row
                            type="flex"
                            gutter={16}
                            style={{ marginTop: "10px" }}
                          >
                            <Col xl={12} md={12} sm={24} xs={24}>
                              <div
                                className="read-card"
                                // style={{ height: "100px", width: "77px" }}
                              >
                                <Link href={`/contents/${content.id}`}>
                                  <a>
                                    <Cover fileKey={coverKey} />
                                  </a>
                                </Link>
                              </div>
                            </Col>
                            <Col md={12} sm={24} xs={24}>
                              <div className="read-card-desc">
                                <p>{content.name}</p>
                                <Rate
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "15px"
                                  }}
                                  value={
                                    content?.reviews_aggregate?.aggregate?.avg
                                      ?.rate ||
                                    content?.average_rate ||
                                    0
                                  }
                                  disabled
                                  allowHalf
                                />
                                <div className="price">
                                  {renderPrice(content)}
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      );
                    }
                  )}
                {len > 2 && hasMore && (
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      width: "100%"
                    }}
                  >
                    <ButtonMore
                      bordered
                      loading={loading}
                      onClick={handleFetchMore}
                    >
                      Илүү
                    </ButtonMore>
                  </div>
                )}
              </Row>
            </div>
            <h2 className="title">Үнэлгээ</h2>
            <ReviewList reviews={(data && data.author_reviews) || []} />
            <h2 style={{ marginTop: "30px" }}>Үнэлгээ өгөх</h2>
            <ReviewForm onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row gutter={24} style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Col>
            <h2>Бусад зохиолчид</h2>
            <div style={{ marginLeft: "-15px" }}>
              <SuggestAuthors />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withLayout({})(AuthorSingle);
