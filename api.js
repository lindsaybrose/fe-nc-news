import axios from "axios";

const api = axios.create({ baseURL: "https://nc-news-j09w.onrender.com/api" });

function getArticles() {
  return api
    .get(`/articles`)
    .then(({ data }) => {
      // handle success
      console.log({ data });
    })
    .catch((error) => {
      // handle error
      console.error(error);
    });
}

export default getArticles;
export { goHome };
