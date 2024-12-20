import React from "react";
import getArticles from "../../api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Topics from "./Topics";

function Articles() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then(({ data }) => {
      setArticle(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div class="loading">
        <p> Articles on their way! </p>
        <img
          src="https://media.tenor.com/HoocNDDrUKgAAAAj/rexx.gif"
          alt="cartoon on phone gif"
        />
      </div>
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
