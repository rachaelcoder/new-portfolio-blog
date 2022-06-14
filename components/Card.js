import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted card-wrapper">
          <div className="uk-card-media-top">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="uk-card-body card-wrapper">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="uk-text-large card-wrapper">
              {article.attributes.title}
            </p>
            <p id="description" className="uk-text-large card-wrapper">
              {article.attributes.description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;