import axios from "axios";

function getArticles() {
  return axios
    .get(`https://nc-news-j09w.onrender.com/api/articles`)
    .then(({ data }) => {
      // handle success
      return ({ data });
    })
    .catch((error) => {
      // handle error
      return(error);
    });
}

export default getArticles



