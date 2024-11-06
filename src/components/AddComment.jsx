import React from "react";
import { useState } from "react";
import { postComment } from "../../api";

function AddComment({ comments }) {
  const [newComment, setNewComment] = useState({
    body: "",
    article_id: comments[0].article_id,
    author: "",
  });

  function handleChanges(event) {
    event.preventDefault();
    setNewComment({ ...newComment, [event.target.name]: [event.target.value] });
  }

  function handleSubmit(event) {
    event.preventDefault();
    postComment(article_id)
  }

  return (
    <div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name='author'
          onChange={(event) => handleChanges(event)}
          required
        >
        </input>
        <textarea
          name="body"
          rows={4}
          cols={40}
          placeholder="Comment"
          onChange={(event) => handleChanges(event)}
          required
        />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default AddComment;
