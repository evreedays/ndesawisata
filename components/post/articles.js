import React from "react";
import Card from "./cardPost";

const Articles = ({ articles }) => {
  //   const leftArticlesCount = Math.ceil(articles.length / 5);
  //   const leftArticles = articles.slice(0, leftArticlesCount);
  //   const rightArticles = articles.slice(leftArticlesCount, articles.length);
  // console.log(JSON.stringify(articles.thumbnail));
  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {articles.map((articles, i) => {
            return (
              <Card
                articles={articles}
                thumbnail={`${articles.thumbnail}`}
                key={articles.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
