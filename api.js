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

export default getArticles;
export { getSingleArticle };
