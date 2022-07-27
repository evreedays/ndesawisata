import React from "react";
import Card from "./cardPost";

const Articles = ({ articles }) => {
  //   const leftArticlesCount = Math.ceil(articles.length / 5);
  //   const leftArticles = articles.slice(0, leftArticlesCount);
  //   const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {articles.map((articles, i) => {
            return (
              <Card
                articles={articles}
                imageurl={articles.thumbnail}
                key={articles.slug}
                title={articles.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
