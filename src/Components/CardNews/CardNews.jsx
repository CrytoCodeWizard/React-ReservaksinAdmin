import React from "react";
import "./Card.css";
function CardNews({ image, title, content, url }) {
  const useElipsis = (word) => {
    return word.slice(0, 250) + "(...)";
  };
  return (
    <div className="col-md-4 mb-3">
      <div className="card card-news text-center shadow">
        <div className="w-100">
          <img
            src={image}
            alt=""
            className="card-img-top"
            style={{ backgroundSize: "cover" }}
          />
        </div>
        <div className="card-body d-flex flex-column text-dark">
          <h5 className="card-title mt-auto">{title}</h5>
          <p className="card-news-text mt-auto">{useElipsis(content)}</p>

          <a
            href={url}
            className="btn mt-auto btn-primary mb-2 mt-2"
            target="_blank"
            rel="noreferrer"
          >
            Read More &#x3e;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardNews;
