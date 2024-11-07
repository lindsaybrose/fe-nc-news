import React, { useEffect } from "react";
import { useState } from "react";
import { postComment } from "../../api";

function AddComment({ article_id }) {
  const [newComment, setNewComment] = useState("");
  const userName = "grumpy19";

  function handleSubmit(event) {
    event.preventDefault();
    postComment(article_id, userName, newComment);
    setNewComment("");
  }

  return (
    <>
      <p>{loadedError}</p>
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-form"
          name="body"
          rows={4}
          cols={40}
          placeholder="Comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          required
        />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </>
  );
}

export default AddComment;
