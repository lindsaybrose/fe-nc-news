import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../../api";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const date = new Date(article.created_at);
  const newDate = date.toLocaleString();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (
      <>
        <p> Article on it's way! </p>
        <img
          src="https://media.tenor.com/HoocNDDrUKgAAAAj/rexx.gif"
          alt="cartoon on phone gif"
        />
      </>
    );
  }

  if (!isLoading) {
    return (
      <div className="article">
        <h5 className="article-title">{article.title}</h5>
        <img className="article-img" src={article.article_img_url} />
        <p className="article-body">{article.body}</p>
        <section className="article-information">
          <p className="article-author">User: {article.author}</p>
          <p className="article-date">Posted: {newDate}</p>
          <p className="article-votes">Likes: {article.votes}</p>
        </section>
      </div>
    );
  }
}

export default SingleArticle;
