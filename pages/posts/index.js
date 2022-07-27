import React from "react";
import styled from "@emotion/styled";
import FeaturedPost from "/components/post/featuredPost";
import CardPost from "/components/post/cardPost";
import Articles from "/components/post/articles";
import { fetchAPI } from "/lib/api";

const BASEURL = "http://localhost:1337";

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, kategoris, authors] = await Promise.all([
    fetchAPI("/api/posts"),
    fetchAPI("/api/kategoris"),
    fetchAPI("/api/authors"),
  ]);
  return {
    props: { articles, kategoris, authors },
    revalidate: 1,
  };
}

export default function Index({ articles, error }) {
  console.log(articles.data);
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <Container>
      <div className="uk-container uk-container-large">
        {/* <ul>
          {articles.data.map((articles) => (
            <li key={articles.id}>{articles.title}</li>
          ))}
        </ul> */}
        <Articles articles={articles.data} />
      </div>
      <Grid></Grid>
    </Container>
  );
}

//fetch API
// Index.getInitialProps = async (ctx) => {
//   try {
//     // Parses the JSON returned by a network request
//     const parseJSON = (resp) => (resp.json ? resp.json() : resp);
//     // Checks if a network request came back fine, and throws an error if not
//     const checkStatus = (resp) => {
//       if (resp.status >= 200 && resp.status < 300) {
//         return resp;
//       }

//       return parseJSON(resp).then((resp) => {
//         throw resp;
//       });
//     };

//     const headers = {
//       "Content-Type": "application/json",
//     };

//     const articles = await fetch("http://localhost:1337/api/posts", {
//       method: "GET",
//       headers,
//     })
//       .then(checkStatus)
//       .then(parseJSON);

//     return { articles };
//   } catch (error) {
//     return { error };
//   }
// };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  height: auto;
  margin: 5rem 0 5rem 0;
  color: #121212;
  @media screen and (max-width: 768px) {
    margin: 3rem 0 3rem 0;
  }
`;
const Grid = styled.div``;
