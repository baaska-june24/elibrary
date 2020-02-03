import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Section from "~/components/Section";
import Container from "~/components/Container";
import ContentList from "~/components/Content/List";
import { GET_FEATURED_CONTENTS } from "~/queries/home.graphql";
import "./style.less";
import {
  Get_Featured_ContentsQuery,
  Get_Featured_ContentsQueryVariables
} from "~/generated/graphql";

interface IProps {
  data: number[];
}

const FeaturedContents = (props: IProps) => {
  const { data } = useQuery<
    Get_Featured_ContentsQuery,
    Get_Featured_ContentsQueryVariables
  >(GET_FEATURED_CONTENTS, {
    variables: {
      where: {
        id: {
          _in: props.data
        }
      }
    }
  });
  return (
    <Section title="Онцлох бүтээлүүд">
      <Container>
        <ContentList contents={(data && data.contents) || []} />
      </Container>
    </Section>
  );
};

export default FeaturedContents;
