import React, { useState } from "react";
import { deleteComment } from "../../api";

function DeleteComment({ comment }) {
  const [deleteMessage, setDeleteMessage] = useState(false);

  function handleClick() {
    const user = "grumpy19";
    if (comment.author === user) {
      deleteComment(comment.comment_id);
    } else setDeleteMessage("Sorry, only a user can delete their comments");
  }
  return (
    <>
      <button onClick={handleClick} value={comment.comment_id}>
        Delete Comment
      </button>
      <p className="delete-message">{deleteMessage}</p>
    </>
  );
}

export default DeleteComment;
