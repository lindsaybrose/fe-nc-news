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

export default getArticles;
export { getSingleArticle, getComments, updateArticleVotes };
