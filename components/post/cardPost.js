import React from "react";
import Link from "next/link";
import NextImage from "./image";
import Image from "next/image";

const Card = ({ articles, imageurl }) => {
  //   console.log(articles);
  return (
    <Link href={`/posts/${articles.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            {/* <Image src={} /> */}
            {/* <div>
              {imageurl.data?.map((thumbnails) => (
                <>
                  <NextImage image={thumbnails.attributes} />
                </>
              ))}
            </div> */}
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {articles.attributes.kategori}
            </p>
          </div>
          <p id="title" className="uk-text-large">
            {articles.attributes.title}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
