import dynamic from "next/dynamic";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import NextImage from "/components/post/imageThumbnail";
// import NextImageAvatar from "/components/post/imageAvatar"
import gfm from "remark-gfm";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import styled from "@emotion/styled";
const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });
import markdownToHtml from "../../lib/markdownToHtml";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.thumbnail);

  return (
    <>
      <ArticleContainer>
        <ArticleContent>
          <ImageWrapper>
            <NextImage image={article.attributes.thumbnail} />
          </ImageWrapper>
          <Title className="uk-width-expand">
            <h1>{article.attributes.title}</h1>
            <p className="uk-margin-remove-bottom">
              By {article.attributes.author.data.attributes.nama}
            </p>
            <p className="uk-text-meta uk-margin-remove-top">
              <Moment format="MMM Do YYYY">
                {article.attributes.published_at}
              </Moment>
            </p>
          </Title>
          <ContentWrapper className="uk-section">
            <div className="uk-container uk-container-small">
              <content>
                <ReactMarkdown
                  // eslint-disable-next-line react/no-children-prop
                  children={article.attributes.content}
                  remarkPlugins={[gfm]}
                />
                {/* <p>{article.attributes.content}</p> */}
              </content>
            </div>
          </ContentWrapper>
        </ArticleContent>
      </ArticleContainer>
    </>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/posts", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/posts", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });
  const categoriesRes = await fetchAPI("/kategoris");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin: 4rem 0 1rem 0;
`;
const ArticleContent = styled.div`
  width: 70%;
  height: auto;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
`;
const Title = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
`;

export default Article;
