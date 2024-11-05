import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getComments, getSingleArticle } from "../../api";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const articleDate = new Date(article.created_at);
  const formatArticleDate = articleDate.toLocaleString();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    getComments(article_id).then(({ data }) => {
      setComments(data.comments);
    });
  }, [article_id]);

  function returnComments() {
    return comments.map((comment) => {
      return (
        <section className="comment">
          <p className="comment-body">{comment.body}</p>
          <p className="comment-author">User: {comment.author}</p>
          <p className="comment-votes">Likes: {comment.votes}</p>
        </section>
      );
    });
  }

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
          <p className="article-date">Posted: {formatArticleDate}</p>
          <p className="article-votes">Likes: {article.votes}</p>
        </section>
        <h3 className="comments-header">Comments</h3>
        {returnComments()}
      </div>
    );
  }
}

export default SingleArticle;
