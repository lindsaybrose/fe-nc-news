import React from "react";
import getArticles from "../../api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";

function Articles() {
  const [article, setArticle] = useState([]);
  const [articleId, setArticleId] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ data }) => {
      setArticle(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <p> Articles on their way! </p>
        <img
          src="https://media.tenor.com/HoocNDDrUKgAAAAj/rexx.gif"
          alt="cartoon on phone animation"
        />
      </>
    );
  }


  function handleClick() {
   // <SingleArticle articleItem={articleItem} />;
  }

  if (!isLoading) {
    return article.map((articleItem) => {
      return (
        <ul key={articleItem.article_id}>
          <div className="article">
            <h5 className="article-title">{articleItem.title}</h5>
            <img className="article-img" src={articleItem.article_img_url} />
            <p>{articleItem.body}</p>
            <button
              className="article-button"
              onClick={handleClick}
            >
              Read more
            </button>
          </div>
        </ul>
      );
    });
  }
}

export default Articles;
