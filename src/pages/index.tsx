import * as React from "react";
import { Row, Col, Tabs, Icon, Spin, message } from "antd";
import useMedia from "use-media";
import { useQuery } from "@apollo/react-hooks";

import withLayout from "~/components/Layout";
import StatisticGroup from "~/components/Home/StatisticsGroup";
import Carousel from "~/components/Home/Carousel";
import BestsellerTab from "~/components/Home/Tabs/Bestsellers";
import RecentlyTab from "~/components/Home/Tabs/Recently";
import BestrankedTab from "~/components/Home/Tabs/Bestranked";
import BestAuthorsTab from "~/components/Home/Tabs/BestAuthors";
import Section from "~/components/Section";
import Container from "~/components/Container";
import ContentList from "~/components/Content/List";
// import GetInTouch from "~/components/GetInTouch";
import FeatureCard from "~/components/FeatureCard";
import FeaturedOrganizations from "~/components/Featured/organizations";
import FeaturedContents from "~/components/Featured/contents";
import Button from "~/components/Button";
import MiddleBanner from "~/components/Banner";
import gql from "graphql-tag";
import UserContext from "~/context";
import { useRouter } from "next/router";

const Home = () => {
  const { data, loading } = useQuery(query);
  const isMobileScreen = useMedia({ maxWidth: 767 });
  const router = useRouter();
  const [user] = React.useContext(UserContext);

  message.config({
    maxCount: 1,
    duration: 5
  });

  if (user && user.firstname === null) {
    message.info("Таны мэдээлэл дутуу байгаа тул бүрэн бөглөнө үү", 5);
    router.push("/my/profile");
  }

  return (
    <Spin spinning={loading}>
      {data && (
        <>
          <Section>
            <Container>
              <Row gutter={20} type="flex">
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={data.homeOptions.options.statistic ? 18 : 24}
                >
                  <Carousel
                    banners={data.banners.filter(
                      (banner: any) => banner.placement === "slider"
                    )}
                  />
                </Col>
                {data.homeOptions.options.statistic && (
                  <Col xs={24} sm={24} md={24} lg={6}>
                    <StatisticGroup data={data} />
                  </Col>
                )}
              </Row>
            </Container>
          </Section>
          {data.homeOptions.options?.featured && (
            <FeaturedContents data={data.homeOptions.options?.featured} />
          )}
          <Section>
            <Container>
              {data.homeOptions.options && data.homeOptions.options.tabs && (
                <Tabs
                  style={{ textAlign: "right" }}
                  tabBarExtraContent={
                    !isMobileScreen && (
                      <div className="Left-title">Шилдэг бүтээлүүд</div>
                    )
                  }
                  animated={false}
                >
                  {data.homeOptions.options.tabs.packages && (
                    <Tabs.TabPane tab="Багцын хямдрал" key="1">
                      Show packages
                      <div style={{ textAlign: "center" }}>
                        <Button bordered>Бүгдийг үзэх</Button>
                      </div>
                    </Tabs.TabPane>
                  )}
                  {data.homeOptions.options.tabs.bestseller && (
                    <Tabs.TabPane tab="Их борлуулалттай" key="2">
                      <BestsellerTab />
                    </Tabs.TabPane>
                  )}
                  {data.homeOptions.options.tabs.recent && (
                    <Tabs.TabPane tab="Шинэ бүтээлүүд" key="3">
                      <RecentlyTab />
                    </Tabs.TabPane>
                  )}
                  {data.homeOptions.options.tabs.ranked && (
                    <Tabs.TabPane tab="Өндөр үнэлгээтэй" key="4">
                      <BestrankedTab />
                    </Tabs.TabPane>
                  )}
                  {data.homeOptions.options.tabs.authors && (
                    <Tabs.TabPane tab="Шилдэг зохиолч" key="5">
                      <BestAuthorsTab />
                    </Tabs.TabPane>
                  )}
                </Tabs>
              )}
            </Container>
          </Section>
          {data && data.diplomas && (
            <Section title="Эрдмийн ажил">
              <Container>
                <ContentList contents={data.diplomas} />
              </Container>
            </Section>
          )}
          <Container>
            <hr />
          </Container>
          <MiddleBanner
            banners={data.banners.filter(
              (banner: any) => banner.placement === "home-bottom"
            )}
          />
          <Section title="Яагаад esan гэж?">
            <Container style={{ margin: "2rem auto" }}>
              <Row gutter={20}>
                <Col xs={24} sm={8} md={8} lg={8}>
                  <FeatureCard
                    icon={<Icon type="shopping" />}
                    description="Харьяалал, цаг хугацаа, орон зайнаас үл хамааран хамгийн бага зардлаар мэдлэгээ тэлэх боломж."
                  />
                </Col>
                <Col xs={24} sm={8} md={8} lg={8}>
                  <FeatureCard
                    icon={<Icon type="user" />}
                    description="Интернетэд холбогдсон бүх төрлийн төхөөрөмжөөс хандах боломж."
                  />
                </Col>
                <Col xs={24} sm={8} md={8} lg={8}>
                  <FeatureCard
                    icon={<Icon type="check" />}
                    description="Мэдлэгээ капитал болгон хувиргаж, нэмэлт орлого олох боломж."
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <div style={{ marginTop: "50px" }}>
            <FeaturedOrganizations
              title="Хамтрагч байгууллагууд"
              organizations={data.organizations}
            />
            <div style={{ textAlign: "center" }}>
              <Button href="/organizations" bordered>
                Бүгдийг үзэх
              </Button>
            </div>
          </div>
        </>
      )}
    </Spin>
  );
};

export default withLayout({})(Home);

export const query = gql`
  query {
    homeOptions: marketing_home_options_by_pk(id: 1) {
      options
    }
    banners: marketing_active_banners {
      file_id
      mobile_file_id
      title
      link
      placement
      bucket
    }
    contents_aggregate: vw_contents_aggregate {
      aggregate {
        count
      }
    }
    organizations_aggregate {
      aggregate {
        count
      }
    }
    schools_aggregate: organizations_aggregate(
      where: { type: { _eq: "school" } }
    ) {
      aggregate {
        count
      }
    }
    organizations(where: { type: { _neq: "individual" } }, limit: 16) {
      id
      name
      avatar: avatar_id
      avatar_bucket: avatar {
        bucket
      }
    }
  }
`;
