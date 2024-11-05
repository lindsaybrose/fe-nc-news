import React from "react";
import getArticles from "../../api";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

function Articles() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
          alt="cartoon on phone gif"
        />
      </>
    );
  }

  function handleClick(event) {
    navigate(`/articles/${event.target.value}`);
  }

  if (!isLoading) {
    return article.map((articleItem) => {
      return (
        <ul key={articleItem.article_id}>
          <div className="article">
            <h5 className="article-title">{articleItem.title}</h5>
            <img
              className="article-img"
              src={articleItem.article_img_url}
              alt="article image"
            />
            <button
              className="article-button"
              onClick={handleClick}
              value={articleItem.article_id}
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
