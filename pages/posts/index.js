import React from "react";
import Articles from "/components/post/articles";
import Layout from "/components/layout";
import { fetchAPI } from "/lib/api";

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <Articles articles={posts} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [posts, kategoris, authors] = await Promise.all([
    fetchAPI("/posts", { populate: "*" }),
    fetchAPI("/kategoris", { populate: "*" }),
    fetchAPI("/authors", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      posts: posts.data,
      kategoris: kategoris.data,
      authors: authors.data,
    },
    revalidate: 1,
  };
}

export default Home;
