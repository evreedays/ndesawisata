import React from "react";
import Link from "next/link";
import NextImage from "./imageThumbnail";
import styled from "@emotion/styled";

const Card = ({ article }) => {
  return (
    <Link href={`/posts/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <CardContainer className="uk-card uk-card-muted">
          <ImageWrapper className="uk-card-media-top">
            <NextImage image={article.attributes.thumbnail} />
          </ImageWrapper>
          <DescriptionWrapper className="uk-card-body">
            <p id="title" className="title">
              {article.attributes.title}
            </p>
            <p id="headline" className="headline">
              {article.attributes.headline}
            </p>
          </DescriptionWrapper>
        </CardContainer>
      </a>
    </Link>
  );
};

const CardContainer = styled.div`
  width: 17.229rem;
  height: 24.438rem;
  margin: 1rem;
`;
const ImageWrapper = styled.div``;
const DescriptionWrapper = styled.div`
  .title {
    font-size: 0.9rem;
    font-weight: 700;
    margin-top: 1rem;
  }
  .headline {
    height: 4.25rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.5rem;
  }
`;

export default Card;
