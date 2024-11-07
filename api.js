import axios from "axios";

function getArticles() {
  return axios
    .get(`https://nc-news-j09w.onrender.com/api/articles`)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return error;
    });
}

function getSingleArticle(article_id) {
  return axios
    .get(`https://nc-news-j09w.onrender.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return error;
    });
}

function getComments(article_id) {
  return axios
    .get(
      `https://nc-news-j09w.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return error;
    });
}

function updateArticleVotes(article_id) {
  return axios.patch(
    `https://nc-news-j09w.onrender.com/api/articles/${article_id}`,
    { votes: 1 }
  );
}

function postComment(article_id, userName, newComment) {
  return axios
    .post(
      `https://nc-news-j09w.onrender.com/api/articles/${article_id}/comments`,
      { username: userName, body: newComment }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

function deleteComment(comment_id) {
  return axios
    .delete(`https://nc-news-j09w.onrender.com/api/comments/${comment_id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

function getUsers() {
  return axios
    .get(`https://nc-news-j09w.onrender.com/api/users`)
    .then(({ data }) => {
      return data.users;
    })
    .catch((error) => {
      return error;
    });
}

export default getArticles;
export {
  getSingleArticle,
  getComments,
  updateArticleVotes,
  postComment,
  deleteComment,
  getUsers,
};
