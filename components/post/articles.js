import React from "react";
import Card from "./cardPost";
import styled from "@emotion/styled";

const Articles = ({ articles }) => {
  return (
    <GridContainer>
      <ContentWrapper className="uk-child-width-1-2@s" data-uk-grid="true">
        <Title> Artikel Terbaru</Title>
        <CardWrapper>
          {articles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            );
          })}
        </CardWrapper>
      </ContentWrapper>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin: 10rem 0 1rem 0;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 78rem;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 0 3rem 0;
  font-size: 1.5rem;
  font-weight: 600;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Articles;
