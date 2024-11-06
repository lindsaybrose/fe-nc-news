import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getComments, getSingleArticle, updateArticleVotes} from "../../api";
import AddComment from "./AddComment";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [articleVotes, setArticleVotes] = useState(0);
  const [voteError, setVoteError] = useState('');
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

  function incrementVotes() {
    setArticleVotes((currVotes) => {
      return currVotes + 1;
    });
    updateArticleVotes(article.article_id).catch(() => {
      setArticleVotes((currVotes) => {
        return currVotes - 1;
      })
      setVoteError('oh no - please try again!')
    });
  }

  function returnComments() {
    return comments.map((comment) => {
      return (
        <section key={comment.comment_id} className="comment">
          <p className="comment-body">{comment.body}</p>
          <p className="comment-info">User: {comment.author}</p>
            <img width='30px' src="https://png.pngtree.com/png-vector/20220428/ourmid/pngtree-smooth-glossy-heart-vector-file-ai-and-png-png-image_4557871.png"/> 
            <p className="comment-info"> {comment.votes}</p>
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
        <img
          className="vote-button"
          onClick={incrementVotes}
          src="https://png.pngtree.com/png-vector/20220428/ourmid/pngtree-smooth-glossy-heart-vector-file-ai-and-png-png-image_4557871.png"
        />
        <p className="article-votes">{article.votes + articleVotes}</p>
        <p className="article-votes">{voteError}</p>
        <section className="article-information">
          <p className="article-author">User: {article.author}</p>
          <p className="article-date">Posted: {formatArticleDate}</p>
        </section>
          <AddComment comments={comments}/>
        <h3 className="comments-header">Comments</h3>
        {returnComments()}
      </div>
    );
  }
}

export default SingleArticle;
