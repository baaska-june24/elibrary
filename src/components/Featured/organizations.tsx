import * as React from "react";
import { Carousel } from "antd";
import Section from "~/components/Section";
import Container from "~/components/Container";
import "./style.less";
import { getImageUrl, canLoadWebp } from "~/utils/helpers";

interface IProps {
  title: string;
  organizations: any;
}

const FeaturedOrganizations = (props: IProps) => {
  const getUrl = (fileKey: string) => {
    const imageRequest = JSON.stringify({
      bucket: "cdn.esan.mn",
      edits: {
        resize: {
          fit: "contain",
          height: 70,
          width: 70
        },
        [canLoadWebp ? "webp" : "jpeg"]: {
          quality: 80
        }
      },
      key: fileKey
    });

    return getImageUrl(imageRequest);
  };
  return (
    <Section {...props}>
      <Container>
        <Carousel
          autoplay
          slidesToShow={8}
          slidesToScroll={4}
          className="organizations_carousel"
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToScroll: 3,
                slidesToShow: 6
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 3
              }
            }
          ]}
        >
          {props.organizations.map((organization: any) => (
            <a
              href={`/organizations/${organization.id}`}
              key={organization.id}
              className="organization_card"
            >
              <div
                className="organization-avatar"
                style={{
                  backgroundImage: `url(${getUrl(organization.avatar)})`
                }}
              />
              <h4>{organization.name}</h4>
            </a>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default FeaturedOrganizations;
